/// <reference types="cypress" />
import { Login_Page } from "../pages/login"

const login = new Login_Page();

describe("TODO actions", () => {
  beforeEach("Visit the app", () => {
    login.navigate("http://todomvc-app-for-testing.surge.sh/");
    
     cy.get(".new-todo").type("Buy a new phone{enter}");

  })
  it("should add a new TODO to the list", () => {
    cy.get("label").should("have.text", "Buy a new phone");

    cy.get(".toggle").should("not.be","checked");
  });

  it("should mark a TODO as completed", () => {

  cy.get(".toggle").click();
  });

  it("should clear completed TODO's", () => {
    // cy.contains("Clear").click();
    cy.get(".toggle").click();
    
    cy.get(".clear-completed").click();
  });
})

// it("should be able to add TODO's to the list", () => {
//   cy.visit("http://todomvc-app-for-testing.surge.sh/")

//   cy.get(".new-todo", { timeout: 2000 }).type("Clean my room{enter}")

//   cy.get("label").should("have.text", "Clean my room")
  
//   cy.get(".toggle").should("not.be.checked")

//   cy.get(".toggle").click()

//   cy.get(".toggle").should("be.checked")

//   cy.get(".new-todo").type("jjj");

//   cy.get(".new-todo").clear();

//   cy.get(".new-todo").type("final{enter}");
// })

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })