/// <reference types="cypress" />

describe("filtering", () => {
  beforeEach("Logs in TODO's", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Buy a new phone{enter}");
    cy.get(".new-todo").type("Make money{enter}");
    cy.get(".new-todo").type("Pray for my future{enter}");

    cy.get(":nth-child(3) > .view > .toggle").click();
  });
  it("should filter active TODO's", () => {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("should filter completed TODO's", () => {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("should filter all TODO's", () => {
    cy.contains("All").click();
    cy.get(".todo-list li").should("have.length", 3);
  });
});
