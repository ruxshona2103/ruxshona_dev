from django.contrib import messages
from django.shortcuts import render, redirect

from settings_app.models import TelegramBotSettings
from about_me.models import About

from about_me.forms import ContactMessagesForm


from portfolio_app.models import Category, Portfolio


import requests


def HOME_PAGE(request):
    about = About.objects.last()
    portfolio_category = Category.objects.all()
    portfolios = Portfolio.objects.all()


    ctx = {
     'about':about,
      'portfolio_category':portfolio_category,
        'portfolios':portfolios,
    }

    if request.method == "POST":
        form = ContactMessagesForm(request.POST)

        bot = TelegramBotSettings.objects.last()

        if form.is_valid():
            if bot is not None:
                bot_token = bot.token
                user_id_list = str(bot.user_id_list).split(", ")
                url = f"https://api.telegram.org/bot{bot_token}/sendMessage"

                try:
                    for i in user_id_list:
                        response = requests.post(
                            url=url,
                            json={
                                'chat_id': i,
                                'text': f"<b>🔔 Yangi xabar</b>\n\n"
                                        f"<b>🧑‍💻 Ismi:</b> {request.POST['name']}\n"
                                        f"<b>📞 Telefon raqami:</b> {request.POST['phone_number']}\n"
                                        f"<b>🔖 Xabar:</b> {request.POST['text']}",
                                'parse_mode': 'HTML'
                            }
                        )
                except:
                    print("Error")

            form.save()

            messages.success(request, "Xabaringiz yuborildi. Tez orada siz bilan bog'lanamiz")
            return redirect('HOME_PAGE')

        else:
            messages.error(request, "Xatolik yuz berdi. Tekshirib qaytadan urinib ko'ring")
            return redirect('HOME_PAGE')

    else:
        form = ContactMessagesForm

    ctx['form']=form

    return render(request, "index.html", ctx)




