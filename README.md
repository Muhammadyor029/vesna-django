# VESNA Django Skeleton

`promax-2`ni buzmasdan Django+DRF strukturasiga ko'chirish uchun skeleton.

## Run
```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements/dev.txt
copy .env.example .env
python manage.py migrate
python manage.py runserver
```

## API
- /api/v1/content/letters/
- /api/v1/games/
- /api/v1/math/topics/
- /api/v1/math/multiplication/?n=2
- /api/v1/progress/me/?session_key=...
- /api/v1/progress/results/

## Next
- templates/base.html ni includes/pages bo'laklarga ajratish
- static JS/CSS ni 1:1 dizayn bilan to'liq ulash
- real content/games/math ma'lumotlarini DBga import qilish
