describe('Responsive Design', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 800, height: 1024 },
    { name: 'desktop', width: 1280, height: 720 },
  ]

  viewports.forEach((viewport) => {
    describe(`${viewport.name} viewport`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height)
        cy.visit('/')
      })

      it('should display the header correctly', () => {
        cy.get('header').should('be.visible')
        cy.contains('Etran').should('be.visible')
      })

      it('should display the hero section correctly', () => {
        cy.contains('Fast, Secure Money Transfers Worldwide').should('be.visible')
      })

      it('should display all sections', () => {
        cy.contains('Our Services').should('be.visible')
        cy.contains('About Etran Money Transfer').should('be.visible')
        cy.get('footer').should('be.visible')
      })

      if (viewport.name === 'mobile') {
        it('should show mobile menu button', () => {
          cy.get('button[aria-label="Toggle menu"]').should('be.visible')
        })
      }

      if (viewport.name === 'desktop') {
        it('should show desktop navigation', () => {
          cy.get('header nav a').should('have.length.at.least', 3)
        })
      }
    })
  })
})
