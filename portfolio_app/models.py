from django.db import models

class Category(models.Model):
    filter = models.CharField(max_length=255)
    title =models.CharField(max_length=255)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Kategoriyalar"

class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    category = models.ManyToManyField(Category)
    image= models.ImageField(upload_to='portfolios')
    link = models.CharField(max_length=450)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-id']
        verbose_name_plural = "Portfoliolar"

