# AY--password-generator

## Objective
For this homework we were instructed to create a password generator. My personal take included a prompt, confirms , and alerts in the case of an error.

## HTML & CSS

For the HTML I used the provided template and did not make any adjustments to it

## JavaScript (JS)

Given the template I proceeded to add my own variables and code to get the prompt to work. It started with creating multiple variables and assigning them to the prompt and confirms throughout the script sheet. And from here the user will click the 'Generate Password' button

Once the variables were created I continued onto creating the prompt. Now within the prompt it is instructing the user to input a number value between 8-128. If the user gives an input outside of the prompts range or for example a word, then they are alerted to try again with a valid input. If the user follows the prompt then they are then directed to a line of confirms that will allow the user to select what contents of the password they would like to include.

After entering a valid answer to the prompt the user is then given a series of question asking what they would like in their password. They have the option to include upper case letters, lower case letters, symbols, or numbers. If the user does not want any of the given choices they are then given a message saying they must select at least one type of characters. 

Once given the right parameters then the user is given a generated password based on the type of characters they chose. 


## Conclusion

There were many difficulties to this assignment where I had to see where I could condense my code to reduce the repetition and simplify certain functions. That is why there is a blank string that gets its content by what is being added through the possible confirms. 