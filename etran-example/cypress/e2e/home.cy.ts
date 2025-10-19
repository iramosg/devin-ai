describe('Home Page E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page successfully', () => {
    cy.contains('Money Transfers Made Simple').should('be.visible');
  });

  it('should display the header with navigation', () => {
    cy.contains('Etran').should('be.visible');
    cy.contains('Contact').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Address').should('be.visible');
    cy.contains('Legal Terms').should('be.visible');
  });

  it('should display all hero section content', () => {
    cy.contains('Money Transfers Made Simple').should('be.visible');
    cy.contains('No personal credit checks or founder guarantee').should('be.visible');
    cy.contains('Our offerings').should('be.visible');
    cy.contains('Instant productivity').should('be.visible');
    cy.contains('Automatic expense management').should('be.visible');
    cy.contains('Automated accounting technology').should('be.visible');
  });

  it('should display the partners section', () => {
    cy.contains('We calculate transfer efficiency and productivity').should('be.visible');
    cy.contains('Moneying').should('be.visible');
    cy.contains('Buildingpro').should('be.visible');
    cy.contains('Flexbot').should('be.visible');
    cy.contains('EXPOR').should('be.visible');
    cy.contains('Redo').should('be.visible');
  });

  it('should display the statistics section', () => {
    cy.contains('Get More Done In A Week').should('be.visible');
    cy.contains('2x').should('be.visible');
    cy.contains('Double Your Productivity').should('be.visible');
    cy.contains('130%').should('be.visible');
    cy.contains('More Activity').should('be.visible');
  });

  it('should display the reliability section', () => {
    cy.contains('The Most Reliable App').should('be.visible');
    cy.contains('Scale Your Team, Not Your Card Expenses').should('be.visible');
    cy.contains('Effortless Repair Tracking, Mobile Convenience').should('be.visible');
  });

  it('should display the software features section', () => {
    cy.contains('First Class Software').should('be.visible');
    cy.contains('Safe Storage').should('be.visible');
    cy.contains('Secure').should('be.visible');
    cy.contains('Easy Interest').should('be.visible');
    cy.contains('Family Plans').should('be.visible');
  });

  it('should display the CTA section', () => {
    cy.contains('Download Etran and manage everything from your phone').should('be.visible');
    cy.contains('Get started').should('be.visible');
  });

  it('should display the footer', () => {
    cy.contains('Terms & Conditions').should('be.visible');
    cy.contains('Privacy Policy').should('be.visible');
    const currentYear = new Date().getFullYear();
    cy.contains(`${currentYear} Etran Money Transfer`).should('be.visible');
  });

  it('should have working navigation links', () => {
    cy.get('a[href="#contact"]').should('exist');
    cy.get('a[href="#about"]').should('exist');
    cy.get('a[href="#address"]').should('exist');
    cy.get('a[href="#legal"]').should('exist');
  });

  it('should be accessible - check for proper heading hierarchy', () => {
    cy.get('h1').should('exist');
    cy.get('h2').should('exist');
  });

  it('should be accessible - check for proper ARIA labels', () => {
    cy.get('[aria-label]').should('have.length.greaterThan', 0);
  });

  describe('Responsive Design', () => {
    it('should display correctly on mobile', () => {
      cy.viewport(375, 667);
      cy.contains('Money Transfers Made Simple').should('be.visible');
      cy.get('button[aria-label="Toggle mobile menu"]').should('be.visible');
    });

    it('should display correctly on tablet', () => {
      cy.viewport(768, 1024);
      cy.contains('Money Transfers Made Simple').should('be.visible');
    });

    it('should display correctly on desktop', () => {
      cy.viewport(1280, 720);
      cy.contains('Money Transfers Made Simple').should('be.visible');
    });
  });

  describe('Mobile Menu', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('should toggle mobile menu when button is clicked', () => {
      cy.get('button[aria-label="Toggle mobile menu"]').click();
      cy.get('button[aria-label="Toggle mobile menu"]').should('have.attr', 'aria-expanded', 'true');
    });
  });
});
