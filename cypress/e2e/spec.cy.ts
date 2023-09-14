describe('Navigation', () => {
  it('should show initial state', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.ant-card-head-title').invoke('text').should('eq', 'Three Body');
  });
});

describe('Create', () => {
  it('should show add book dialog', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button.ant-btn-primary').click();

    cy.get('.ant-modal-title').contains('Add Book');
  });

  it('should show added book in list', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button.ant-btn-primary').click();
    cy.get('.ant-form-item:first-child input').type('Hunger Games');
    cy.get('.ant-modal-footer button.ant-btn-primary').click();

    cy.get('.ant-card').should('have.length', 2);
    cy.get('.ant-row > div:nth-child(2) .ant-card-head-title')
      .invoke('text')
      .should('eq', 'Hunger Games');
  });
});

describe('Edit Book', () => {
  it('should update list after editing book', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.ant-card-head-title').click();

    cy.get('.ant-form-item:first-child input').type('2');
    cy.get('.ant-modal-footer button.ant-btn-primary').click();
    cy.get('.ant-card-head-title').invoke('text').should('eq', 'Three Body2');
  });
});

describe('Remove Book', () => {
  it('should update list after editing book', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button.ant-btn-dangerous').click();
    cy.get('.ant-modal-confirm-btns button.ant-btn-primary').click();

    cy.get('.ant-card-head-title').should('not.exist');
  });
});
