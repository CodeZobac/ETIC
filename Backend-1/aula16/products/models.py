from django.db import models

# Create your models here.

class Product(models.Model):
    id = models.BigAutoField(primary_key=True),
    description = models.TextField()
    name = models.CharField(max_length=100, null=False, blank=False,help_text="The name of the product")
    price = models.DecimalField(null=False,blank=False, decimal_places=3, max_digits=20)
    enabled=models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"{self.name} {self.price}"

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"