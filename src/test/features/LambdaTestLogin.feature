Feature: Lambda Test Registration

@testLogin
Scenario: New Registration
Given Launch Application
Then User enters 'auto_k9plp@testdomain.com' text into 'E-Mail Address' textbox
Then User enters 'Password-1' text into 'Password' textbox
When User clicks on 'Login' button
Then User validates 'My Account' heading on page
When User clicks on 'Logout' link
Then User validates 'Account Logout' heading on page