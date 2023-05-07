from django.urls import path

from products import views

app_name = "products"

urlpatterns = [
    path("collect/", views.CollectProductsView.as_view(), name="collect"),
    path("list/", views.ListProductsView.as_view(), name="list"),
]
