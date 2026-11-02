from selenium.webdriver.common.by import By

class LoginPageLocators:

    EMAIL_INPUT = (By.NAME, "email")      # check field's name on the site
    PASSWORD_INPUT = (By.NAME, "password")
    LOGIN_BUTTON = (By.XPATH, "//button[contains(text(),'Login')]")

    EMAIL_INPUT = (By.NAME, "email")      # check fiels's name on site
    PASSWORD_INPUT = (By.NAME, "password")
    LOGIN_BUTTON = (By.XPATH, "//button[contains(text(),'Login')]")
    LOGOUT_BUTTON = (By.XPATH, "//By.LINK_TEXT, 'Logout'")

