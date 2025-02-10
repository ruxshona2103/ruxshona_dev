from django.contrib import admin
from .models import TelegramBotSettings


class TelegramBotSettingsAdmin(admin.ModelAdmin):
     list_display = ['username', 'token']
admin.site.register(TelegramBotSettings, TelegramBotSettingsAdmin)