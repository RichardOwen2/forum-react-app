describe('Login spec', () => {
  const email = 'kucing@ayam.com';
  const password = 'kucingayam';

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display not authed home page correctly', () => {
    cy.get('h1').invoke('text').should('eq','Forum React');
    cy.get('a p').contains(/^Login to Forum!$/).should('be.visible');
  })

  it('should display login page correctly', () => {
    cy.get('a p').contains(/^Login to Forum!$/).click();
    cy.get('input#email').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  })

  it('should display alert when email is empty', () => {
    cy.get('a p').contains(/^Login to Forum!$/).click();
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    })
  })

  it('should display alert when password is empty', () => {
    cy.get('a p').contains(/^Login to Forum!$/).click();
    cy.get('input#email').type(email);
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    })
  })

  it('should display alert when username and password are wrong', () => {
    cy.get('a p').contains(/^Login to Forum!$/).click();
    cy.get('input#email').type(email);
    cy.get('input#password').type('wrong_password');
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    cy.get('a p').contains(/^Login to Forum!$/).click();
    cy.get('input#email').type(email);
    cy.get('input#password').type(password);
    cy.get('button').contains(/^Login$/).click();

    cy.get('h1').invoke('text').should('eq','Forum React');
    cy.get('button#dropdownMenuButton1').click();
    cy.get('button').contains(/^Sign Out$/).should('be.visible');
  });
});
