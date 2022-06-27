export class LoginPage {
  loginPage_username_id = "#user_login";
  loginPage_password_id = "#user_password";
  loginPage_button = ".btn";

  navigate(url) {
    cy.visit(url);
  }

  enterUsername(username) {
    cy.get(this.loginPage_username_id).type(username);
  }

  enterPassword(password) {
    cy.get(this.loginPage_password_id).type(password);
  }

  clickOnLogin() {
    cy.get(this.loginPage_button).click();
  }
}