import  pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time


driver=webdriver.Chrome()
driver.get("https://automationexercise.com/")
ACCEPT_COOKIES = driver.find_element(By.XPATH, "//button[contains(@class, 'fc-cta-consent')]")
ACCEPT_COOKIES.click()
time.sleep(50)
driver.quit()

