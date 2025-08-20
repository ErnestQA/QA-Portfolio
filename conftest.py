import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options


@pytest.fixture
def driver():
    options=Options()
    options.add_argument("--window-size=1920,1080")
    options.add_argument("--disable-blink-feature=AutomationControlled")
    options.add_argument("--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36")
    service=Service()
    driver=webdriver.Chrome(service=service, options=options)
    yield driver
    driver.quit()


