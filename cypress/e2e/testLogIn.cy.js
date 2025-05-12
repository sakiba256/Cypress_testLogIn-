describe('Daraz Shopping', () => {
  it('Search in Daraz', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()

  })
})
