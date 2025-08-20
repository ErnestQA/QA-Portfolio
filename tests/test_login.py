import pytest
from pages.login_page import LoginPage
from data.test_data import TestData
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


def test_login_valid_user(driver):
    login_page = LoginPage(driver)
    login_page.open()
    login_page.accept_cookies()
    login_page.signup_Login()
    login_page.enter_email(TestData.VALID_EMAIL)
    login_page.enter_password(TestData.VALID_PASSWORD)
    login_page.click_login_button()

    account_label = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//a[contains(text(), 'Logout')]")))
    assert account_label.is_displayed()

