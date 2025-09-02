from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def open(self, url="https://automationexercise.com/"):
        self.driver.get(url)

    def accept_cookies(self):
        try:
            accept_btn = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(@class, 'fc-cta-consent')]"))
            )
            accept_btn.click()
        except TimeoutException:
            pass

    def click_signup_login(self):
        login_link = self.wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'Login')]"))
        )
        login_link.click()



