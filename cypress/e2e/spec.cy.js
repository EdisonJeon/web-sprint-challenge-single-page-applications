describe("PIZZA APP HOME", () => {
  it("SANITY CHECK", () => {
    cy.visit("http://localhost:3000");
    expect(1 + 2).to.equal(3);
    expect("Edison").to.not.equal("Alex");
  });
  it("ELEMENT PROPERLY NAVIGATING", () => {
    cy.get("div").should('have.text', 'Order your pizza now!')
  });
});

describe("PIZZA APP FORM", () => {
  it("SANITY CHECK", () => {
    cy.visit("http://localhost:3000/pizza");
    expect(1 + 2).to.equal(3);
    expect("Edison").to.not.equal("Alex");
  });
});

/* 
DOCUMENTATION FOUND IN 'USER-ONBOARDING'

PROBLEM WITH CYPRESS TESTING THAT NEEDS TO BE ADDRESSED:
  WHY DOES CYPRESS NOT DETECT AN ID THAT EXISTS BUT IS NESTED IN ANOTHER COMPOENENT?
*/
