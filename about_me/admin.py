from django.contrib import admin

from .models import About, ContactMessages

class AboutAdmin(admin.ModelAdmin):
    list_display = ['title', 'body', 'name', 'age', 'phone', 'address', 'email', 'resume_link']
admin.site.register(About, AboutAdmin)

class ContactMessagesAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone_number', 'text']

admin.site.register(ContactMessages, ContactMessagesAdmin)
