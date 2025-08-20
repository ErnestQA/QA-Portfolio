from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from pages.base_page import BasePage
from locators.login_page_locators import LoginPageLocators


class LoginPage(BasePage):
    def enter_email(self, email):
        email_input = self.wait.until(EC.visibility_of_element_located(LoginPageLocators.EMAIL_INPUT))
        email_input.send_keys(email)

    def enter_password(self, password):
        password_input = self.wait.until(EC.visibility_of_element_located(LoginPageLocators.PASSWORD_INPUT))
        password_input.send_keys(password)

    def click_login_button(self):
        login_button = self.wait.until(EC.element_to_be_clickable(LoginPageLocators.LOGIN_BUTTON))
        login_button.click()

