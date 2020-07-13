import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','my_first_project.settings')

import django
django.setup()

# FAKE POPULATION SCRIPT
from my_users_app.models import *
from faker import Faker

fake = Faker()

def populate(N=5):
    for entry in range(N):

        # Create the fake info for the new entry
        fake_first_name = fake.first_name()
        fake_last_name = fake.last_name()
        fake_email = fake.ascii_free_email()

        # Create the new User entry
        user = User.objects.get_or_create(first_name=fake_first_name,last_name=fake_last_name,user_email=fake_email)[0]


if __name__ == '__main__':
    print("Populating DB with fake info")
    populate(20)
    print("Pupolated with more fakes than your EXGF told you!")
