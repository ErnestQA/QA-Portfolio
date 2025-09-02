# Security Bug - Weak Password Accepted

**Website:** [Promenada](https://promenada.gcity.pl/)  
**Environment:** Windows 10, Chrome  
**Date:** 2025-08-21  
**Severity:** Medium  
**Priority:** Medium  
**Frequency:** Always  

## Steps to Reproduce
1. Go to [https://promenada.gcity.pl/](https://promenada.gcity.pl/)  
2. Navigate to the registration page.  
3. Fill in all required fields with valid data.  
4. Enter `11111111` as the password.  
5. Submit the registration form.

## Expected Result
The system should enforce password complexity rules (e.g., minimum 8 characters including uppercase, lowercase, digits, and/or special symbols) and reject weak passwords.

## Actual Result
The system accepts a weak password such as `11111111` and allows successful registration.

## Type of Bug
Security
