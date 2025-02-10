from django.db import models

class TelegramBotSettings(models.Model):
    username = models.CharField(max_length=200)
    token = models.TextField()
    user_id_list = models.CharField(max_length=200)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural ="Telegram Bot sozlamalari"