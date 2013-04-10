# -*- coding: utf-8 -*-
from django.db import models


class Island(models.Model):
    name = models.CharField(max_length=50)


class Treasure(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    island = models.ForeignKey(Island, related_name="treasures")
