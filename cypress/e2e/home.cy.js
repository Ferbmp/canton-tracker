describe("Home Page Tests", () => {
   beforeEach(() => {
      cy.visit("/");
   });

   it("should display the home page correctly", () => {
      cy.contains("Search Holidays").should("be.visible");
   });

   it("should allow users to select canton", () => {
      cy.get("[data-cy=select-canton]").click();
      cy.get("[data-cy=select-canton]").type("Zu");
      cy.get(".ant-select-item-option-content").contains("Zug").click();
      cy.get("[data-cy=select-canton]").should("contain", "Zug");
   });

   it("should allow users to pick a date range", () => {
      cy.get(
         "[data-cy=date-range-picker] .ant-picker-input-active input"
      ).click();

      cy.get(".ant-picker-cell-inner").should("exist");

      cy.get(".ant-picker-cell-inner").contains("15").click();
      cy.get(".ant-picker-cell-inner").contains("20").click();
   });

   it("should fetch holidays when search is clicked", () => {
      cy.get("[data-cy=select-canton]").click();
      cy.get("[data-cy=select-canton]").type("Zu");
      cy.get(".ant-select-item-option-content").contains("Zug").click();

      cy.get("[data-cy=date-range-picker] .ant-picker-input-active input")
         .first()
         .click();

      cy.get(".ant-picker-header-super-prev-btn").first().click();
      cy.get(".ant-picker-year-btn").first().click();
      cy.get(".ant-picker-cell").contains("2023").click();
      cy.get(".ant-picker-month-btn").first().click();
      cy.get(".ant-picker-cell").contains("Jan").click();
      cy.get(".ant-picker-cell").contains("1").click();

      cy.get(".ant-picker-header-super-next-btn").last().click();
      cy.get(".ant-picker-year-btn").last().click();
      cy.get(".ant-picker-cell").contains("2023").click();

      cy.get(".ant-picker-cell").contains("Dec").click();
      cy.get(".ant-picker-cell").contains("31").click();

      cy.get("[data-cy=search-button]").click();

      cy.get("[data-cy=holiday-list]").should("be.visible");
   });
});
