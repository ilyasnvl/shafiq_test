describe("Testing Investasi List", () => {
    it("As a user, i can see detail investasi", () => {
        cy.visit("https://www.shafiq.id/")
        cy.get("[data-text='Daftar Investasi']").click()
        cy.get("[href='https://www.shafiq.id/daftar-investasi/119/detail'][x-text='\'(\'+item.kode_saham+\') \'+item.name']").click()
        cy.url().should("eq", "https://www.shafiq.id/daftar-investasi/119/detail")
    })

    it("As a user, i should be able to search the investasi list on Seach widget", () => {
        cy.visit("https://www.shafiq.id/")
        cy.get("[name='search_keywords']").type("perluasan")
        cy.get(".input-group-text").click()
        cy.get("[x-text='\'(\'+item.kode_saham+\') \'+item.name']").should("contain", "(ENKR-SMY02) Perluasan Villa Delima Residence dengan Pembangunan 55 Unit Rumah Baru")
    })
})