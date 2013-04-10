# -*- coding: utf-8 -*-
from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('treasuremap.views',
    url(r'^$',
        'browse_islands',
        name='treasuremap_browse_islands'),
    url(r'^islands/$',
        'get_islands',
        name='treasuremap_get_islands'),
    url(r'^islands/(?P<island_id>[\w%]+)/$',
        'load_island',
        name='treasuremap_load_island'),
    url(r'^islands/(?P<island_id>[\w%]+)/treasures$',
        'get_treasures',
        name='treasuremap_get_treasures')
)
