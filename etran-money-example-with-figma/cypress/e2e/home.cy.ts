describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the home page successfully', () => {
    cy.contains('Etran').should('be.visible')
  })

  it('should display the header with navigation', () => {
    cy.get('header').should('be.visible')
    cy.contains('Services').should('be.visible')
    cy.contains('About').should('be.visible')
    cy.contains('Contact').should('be.visible')
  })

  it('should display the hero section', () => {
    cy.contains('Fast, Secure Money Transfers Worldwide').should('be.visible')
    cy.contains('Get Started').should('be.visible')
    cy.contains('Learn More').should('be.visible')
  })

  it('should display the services section', () => {
    cy.contains('Our Services').should('be.visible')
    cy.contains('International Transfers').should('be.visible')
    cy.contains('Fast Processing').should('be.visible')
    cy.contains('Secure Transactions').should('be.visible')
    cy.contains('24/7 Support').should('be.visible')
  })

  it('should display the about section', () => {
    cy.contains('About Etran Money Transfer').should('be.visible')
    cy.contains('200+').should('be.visible')
    cy.contains('5M+').should('be.visible')
    cy.contains('15+').should('be.visible')
  })

  it('should display the footer', () => {
    cy.get('footer').should('be.visible')
    cy.contains('support@etran.com').should('be.visible')
  })

  it('should have proper accessibility attributes', () => {
    cy.get('header').should('have.attr', 'role', 'banner')
    cy.get('nav').should('have.attr', 'role', 'navigation')
    cy.get('footer').should('have.attr', 'role', 'contentinfo')
  })
})
