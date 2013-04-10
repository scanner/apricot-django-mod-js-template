# -*- coding: utf-8 -*-
from django.http import HttpResponse
from django.core.urlresolvers import reverse
from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.utils import simplejson

from treasuremap.models import Island, Treasure


def json_response(func):
    def _json_response(*args, **kwargs):
        data = func(*args, **kwargs)
        return HttpResponse(simplejson.dumps(data),
                            mimetype='application/json')
    return _json_response


browse_islands = TemplateView.as_view(template_name="treasuremap/islands.html")


@json_response
def get_islands(request):
    return {'islands': list(Island.objects.values('pk', 'name'))}


def load_island(request, island_id):
    try:
        island = Island.objects.get(pk=island_id)
    except Island.DoesNotExist:
        return redirect(reverse('treasuremap_browse_islands'))

    template_vars = {'island_id': island.pk}
    return render(request, 'treasuremap/map.html', template_vars)


@json_response
def get_treasures(request, island_id):
    treasures = Treasure.objects.filter(island_id=island_id).values('name',
                                                                    'price')
    return {'treasures': list(treasures)}
