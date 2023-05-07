import requests
from core import models
from products.serializers import ProductSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView


class ListProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = models.Product.objects.all()

    def get_queryset(self):
        category = self.request.query_params.get("category")

        if category:
            if models.Product.objects.filter(category=category).exists():
                return models.Product.objects.filter(category=category)
            else:
                return models.Product.objects.none()
        else:
            return models.Product.objects.all()


class CollectProductsView(APIView):
    """
    View to initiate products collection.
    """

    def get(self, request, format=None):
        """
        Initiates collection
        """
        URL = "https://dummyjson.com/products"

        response = requests.get(URL)
        if response.status_code == 200:
            products = response.json().get("products")
            if products:
                for product in products:
                    models.Product.objects.update_or_create(
                        **{
                            "id": product.get("id"),
                            "image": product.get("images")[0],
                            "title": product.get("title"),
                            "brand": product.get("brand"),
                            "description": product.get("description"),
                            "price": int(product.get("price")),
                            "category": product.get("category"),
                            "thumbnail": product.get("thumbnail"),
                        }
                    )

            return Response("Products collected", status=status.HTTP_202_ACCEPTED)

        return Response("Unable to collect products", status=status.HTTP_404_NOT_FOUND)
