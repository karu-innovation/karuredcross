from django.contrib import admin
from accounts.models import User
from django.contrib.auth.admin import UserAdmin
# Register your models here.


class UserAdmin(UserAdmin):
    fieldsets = (
        ('basic info', {
            "fields": (
                'username',
                'email',
                'first_name',
                'last_name',
                'phone_no',
                'about',
                'profile_image',

            ),
        }),
        ('category', {
            "fields": (
                'is_superuser',
                'is_leader',
                'is_member'
            ),
        }),
        ('credentials', {
            "fields": (
                'ver_code',
                'is_active',
            ),
        }),
    )
    
    
admin.site.register(User, UserAdmin)


admin.site.site_header='KARUREDCROSS ADMIN'
admin.site.site_title='KARUREDCROSS ADMIN'