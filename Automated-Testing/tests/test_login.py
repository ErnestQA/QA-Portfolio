import pytest
from pages.base_page import BasePage
from pages.login_page import LoginPage
from tests.test_data import VALID_USER

def test_login(driver):
    page = BasePage(driver)
    page.open()
    page.accept_cookies()           # close popup
    page.click_signup_login()       # go to login page
<<<<<<< HEAD
=======

>>>>>>> e22afb8 (Fix logout test and add click_logout_button method)
    login = LoginPage(driver)
    login.enter_email(VALID_USER["email"])
    login.enter_password(VALID_USER["password"])
    login.click_login_button()