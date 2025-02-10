from django.db import models

class About(models.Model):
    title = models.CharField(max_length=240)
    body = models.TextField()

    name = models.CharField(max_length=255)
    age = models.CharField(max_length=30)
    address = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)

    resume_link = models.FileField(upload_to='resumes')

    class Meta:
        verbose_name_plural= "About sahifasi"

    def __str__(self):
        return self.title

class ContactMessages(models.Model):
    name = models.CharField(max_length=255, null = True, blank=True)
    phone_number = models.CharField(max_length=255, null=True, blank=True)
    text = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "xabarlar"







