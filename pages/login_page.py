from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.login_page_locators import LoginPageLocators

class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def enter_email(self, email):
        email_input = self.wait.until(EC.visibility_of_element_located(LoginPageLocators.EMAIL_INPUT))
        email_input.clear()
        email_input.send_keys(email)

    def enter_password(self, password):
        password_input = self.wait.until(EC.visibility_of_element_located(LoginPageLocators.PASSWORD_INPUT))
        password_input.clear()
        password_input.send_keys(password)

    def click_login_button(self):
        btn = self.wait.until(EC.element_to_be_clickable(LoginPageLocators.LOGIN_BUTTON))
        btn.click()