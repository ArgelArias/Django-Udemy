import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','my_first_project.settings')

import django
django.setup()

# FAKE POPULATION SCRIPT
import random
from my_first_app.models import *
from faker import Faker

fake = Faker()
topics = ['Search', 'Socials', 'Marketplace', 'News', 'Games']

def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t

def populate(N=5):
    for entry in range(N):

        # get the topic for the entry
        top = add_topic()

        # Create the fake info for the new entry
        fake_url = fake.url()
        fake_date = fake.date()
        fake_name = fake.company()

        # Create the new Webpage entry
        webpg = Webpage.objects.get_or_create(topic=top,name=fake_name,url=fake_url)[0]

        # Create the fake AccessRecord entry
        acc_rec = AccessRecord.objects.get_or_create(name=webpg,date=fake_date)[0]

if __name__ == '__main__':
    print("Populating DB with fake info")
    populate(20)
    print("Pupolated with more fakes than your EXGF told you!")
