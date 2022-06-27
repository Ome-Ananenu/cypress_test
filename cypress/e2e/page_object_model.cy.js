import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage();

describe('empty spec', () => {
  it('passes', () => {

    loginPage.navigate("http://zero.webappsecurity.com/login.html");
    loginPage.enterUsername("username");
    loginPage.enterPassword("password");
    loginPage.clickOnLogin();
  })
})