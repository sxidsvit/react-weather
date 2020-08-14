## React SPA: "Weather from www.metaweather.com"

**Description:** Test task from reaktivate.com

**Tasks:** The application should have the following functionality:

1. Create-react-application should be used to bootstrap the application
2. On the first load a user is asked to allow his location to proceed.
3. If user gives consent to use his location the browser location dialog is shown to let user allow his location.
4. The application uses the user’s location to fetch the current weather using one of the public apis (you can use https://www.metaweather.com/api/ or similar)
5. Show the current weather icon in the middle of the screen (centered vertically and horizontally)
6. Change the page background color dynamically based on the current temperature shown in celsius. 
   Use the following colors:
    * #00ffff for -10 degrees and below
    * #fff700 for +10 degrees
    * #ff8c00 for +30 degrees and above
    * Dynamically calculate the color for the temperature in between.
7. Allow User to search for the City and display weather for this City
   * (Must have!) Application architecture should imply these use-cases
   * (Nice to have!) UI like https://openweathermap.org/find?q=London
8. Add a slider to the bottom of the page to adjust the temperature shown on the screen (the slider should affect the background color as well).
9. Host the site on heroku, firebase, aws or any other hosting provider of your choice.
10. Provide a deployment script to deploy the site to the hosting provider of your choice and instructions on how to use it.
11. Use the React best practices
12  Use the latest version of the framework
13. Provide an appropriate .gitignore file
14. Keep the git commit history clean and tidy. Commits should be logical and apply to the single feature / functionality / integration.
15. Third-party libraries can be used
16. Make sure the libraries being used have 0 vulnerabilities
17. We would like to see demonstrable use of best SOLID practises
  

[Website](https://aspreactweather.web.app/)