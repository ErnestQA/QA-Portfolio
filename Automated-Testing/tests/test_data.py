USERS = {
<<<<<<< HEAD
    "valid": {"email": "test@example.com", "password": "mypassword123"},
=======
    "valid": {"email": "visonem881@mirarmax.com", "password": "Mypassword123!"},
>>>>>>> e22afb8 (Fix logout test and add click_logout_button method)
    "user2": {"email": "wrong1@example.com", "password": "pass1"},
    "user3": {"email": "wrong2@example.com", "password": "pass2"}
}

VALID_USER = USERS["valid"]

INVALID_USERS = {k: v for k, v in USERS.items() if k != "valid"}
