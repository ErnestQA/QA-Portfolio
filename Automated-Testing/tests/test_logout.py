import pytest
from pages.base_page import BasePage
from pages.login_page import LoginPage
from tests.test_data import VALID_USER
from selenium.webdriver.support import expected_conditions as EC
from pages.login_page_locators import LoginPageLocators

def test_logout(driver):
    page = BasePage(driver)
    page.open()
    page.accept_cookies()
    page.click_signup_login()

    login = LoginPage(driver)
    login.enter_email(VALID_USER["email"])
    login.enter_password(VALID_USER["password"])
    login.click_login_button()

    page.click_logout_button()

    assert login.wait.until(EC.visibility_of_element_located(LoginPageLocators.LOGIN_BUTTON)).is_displayed()