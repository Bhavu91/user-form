# UserFormHomeday

It's a single page application where user can enter ones details and get github profile.
This UserFormHomeday application has 4 main flows as follows,

### 1. Read only Info page (home-component) :
This is the read only page where user can see some required Info (if any).

### 2. Name details page (user-name-form-component) :
Here user shall provide details like firstname, lastname and username of one's Github account.

### 3. Mailing details page (mail-form-component) :
Here user shall provide one's email Id and accept the terms & service to proceed further.

### 4. Complete User Details (user-details-form-component) :
Once the user provides all the required details, user will land on this page where,
User's Github details will be fetched from Github API and displayed.

#### UserForm is maintained common across all pages using UserForm Service.
#### Resolver has been used to fetch API data even before user lands on user details page. 
#### Routing is involved in all pages to support broswer back/next navigations. 

## Development server

Run `npm run start` to start the dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
