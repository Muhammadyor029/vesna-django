from django.shortcuts import render
PAGES={'sphere':'pages/sphere.html','games':'pages/games.html','alphabet':'pages/alphabet.html','math':'pages/math.html','guide':'pages/guide.html'}
def page(request,name='sphere'):
    return render(request,PAGES.get(name,PAGES['sphere']),{'page':name})
