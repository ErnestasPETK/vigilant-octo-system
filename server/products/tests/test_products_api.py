from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient
from core.models import Product

COLLECT_PRODUCTS_URL = reverse("products:collect")
LIST_PRODUCTS_URL = reverse("products:list")


class PublicProductsApiTests(TestCase):
    """Products API tests for unauthenticated users"""

    def setUp(self):
        self.client = APIClient()

    def test_collect_products_unauthorized(self):
        """Test create products without authentication is successful"""
        res = self.client.get(COLLECT_PRODUCTS_URL)
        self.assertEqual(res.status_code, status.HTTP_202_ACCEPTED)
        self.assertGreater(Product.objects.all().count(), 0)

    def test_list_products_unauthorized(self):
        """Test list products without authentication is successful"""
        self.client.get(COLLECT_PRODUCTS_URL)
        self.assertGreater(Product.objects.all().count(), 0)

        res = self.client.get(LIST_PRODUCTS_URL)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        products = res.json()
        self.assertGreater(len(products), 0)

    def test_list_products_filtered_unauthorized(self):
        """Test list products with category filter without authentication is successful"""
        self.client.get(COLLECT_PRODUCTS_URL)
        self.assertGreater(Product.objects.all().count(), 0)

        category = Product.objects.first().category

        res = self.client.get(LIST_PRODUCTS_URL, {"category": category})
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        products = res.json()
        self.assertGreater(len(products), 0)

        for product in products:
            self.assertEqual(product.get("category"), category)

    def test_list_products_filtered_empty_unauthorized(self):
        """Test list products with category filter that does not exist without
        authentication is successful and provides empty result
        """
        self.client.get(COLLECT_PRODUCTS_URL)
        self.assertGreater(Product.objects.all().count(), 0)

        category = "fake_category_that_does_not_exist"

        res = self.client.get(LIST_PRODUCTS_URL, {"category": category})
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        products = res.json()
        self.assertEqual(len(products), 0)
