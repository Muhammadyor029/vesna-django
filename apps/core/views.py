from django.shortcuts import render

def page(request, name='sphere'):
    return render(request, 'base.html', {'page': name})
