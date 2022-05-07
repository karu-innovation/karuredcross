from django.db import models
from django.utils.text import slugify
import uuid
# imagekit
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill



# Create your models here.

CLUB_BRANCHES = (
    ('MAIN_CHAPTER', 'MAIN_CHAPTER'),
    ('TOWN_CHAPTER', 'TOWN_CHAPTER'),
)

LEADER_ROLES = (
    ('CHAIRMAN', 'CHAIRMAN'),
    ('VICE_CHAIRMAN', 'VICE_CHAIRMAN'),
    ('ORGANISING_SECRETARY', 'ORGANISING_SECRETARY'),
    ('SECRETARY', 'SECRETARY'),
    ('VICE_SECRETARY', 'VICE_SECRETARY'),
    ('TREASURER', 'TREASURER'),
    ('AUDITOR', 'AUDITOR')
)

class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def get_category_posts(self):
        return Blog.objects.filter(category=self)

class Blog(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    image_thumbnail = models.ImageField(upload_to='blog/thumbnails/', blank=True)
    content = models.TextField(blank=True)
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

class BlogMedia(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='blog/images/', blank=True)
    video = models.FileField(upload_to='blog/videos/', blank=True)
    audio = models.FileField(upload_to='blog/audios/', blank=True)
    file = models.FileField(upload_to='blog/files/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.blog.title


class Leaders(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    image = models.ImageField(upload_to='leaders/images/', blank=True)
    # image thumbnail using imagekit
    image_thumbnail = ProcessedImageField(
        upload_to='leaders/thumbnails/',
        processors=[ResizeToFill(200, 200)],
        format='JPEG',
        options={'quality': 60},
        blank=True,
    )
    role = models.CharField(max_length=100, choices=LEADER_ROLES)
    branch = models.CharField(max_length=100, choices=CLUB_BRANCHES)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Events(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    image = models.ImageField(upload_to='events/images/', blank=True)
    # image thumbnail using imagekit
    image_thumbnail = ProcessedImageField(
        upload_to='events/thumbnails/',
        processors=[ResizeToFill(200, 200)],
        format='JPEG',
        options={'quality': 60},
        blank=True,
    )
    content = models.TextField(blank=True)
    date = models.DateField()
    venue = models.CharField(max_length=100)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


