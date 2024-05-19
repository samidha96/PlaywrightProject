Feature: Lambda Test Registration

@testRegistration
Scenario: New Registration
Given Launch Application
When User clicks on 'Continue' link
Then User validates 'Register Account' text on page
Then User enters 'Samidha' text into 'First Name*' textbox
Then User enters 'Sawant' text into 'Last Name*' textbox
Then User enters email address in 'E-Mail*' textbox
Then User enters '1234567890' text into 'Telephone*' textbox
Then User enters 'Password-1' text into 'Password*' textbox
Then User enters 'Password-1' text into 'Password Confirm*' textbox
Then User checks 'I have read and agree to the Privacy Policy' checkbox
When User clicks on 'Continue' button
Then User validates 'Your Account Has Been Created!' text on page
When User clicks on 'Continue' link
Then User validates 'My Account' heading on page
When User clicks on 'Logout' link
Then User validates 'Account Logout' heading on page