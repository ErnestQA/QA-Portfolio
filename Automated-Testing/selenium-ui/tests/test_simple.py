import pytest

def test_open_page(driver):
    driver.get("https://automationexercise.com/")
    TITLE=driver.title
    assert TITLE==driver.title, "title not equals"

