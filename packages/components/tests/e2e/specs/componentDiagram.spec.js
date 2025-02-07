context('Component Diagram', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=appland-diagrams-component--component&viewMode=story'
    );
  });

  it('renders', () => {
    cy.get('.appmap__component-diagram .output')
      .children('.nodes')
      .should('contain', 'app/controllers');
  });

  it('does not expand too many nodes', () => {
    cy.get('.nodes g.node').should('have.length', 9);
  });

  it('node "Spree::BackendConfiguration" should be expanded', () => {
    cy.get('.nodes .node.package[data-id="lib"]').should('not.exist');
    cy.get(
      '.nodes .node.class[data-id="lib/Spree::BackendConfiguration"]'
    ).should('exist');
  });

  it('package "app/controllers" should be expanded and have border', () => {
    cy.get('.node.package[data-id="app/controllers"]').rightclick();

    cy.get('a.dropdown-item').contains('Expand').click();
    cy.get('.clusters .cluster[data-id="app/controllers"]').should(
      'have.class',
      'cluster--bordered'
    );
  });

  it('package "app/controllers" can be expanded/collapsed with single click on icon', () => {
    cy.get(
      '.node.package[data-id="app/controllers"] .label__icon--expand'
    ).click();

    cy.get('.clusters .cluster[data-id="app/controllers"]').should(
      'have.class',
      'cluster'
    );

    cy.get(
      '.cluster[data-id="app/controllers"] .label__icon--collapse'
    ).click();

    cy.get('.node.package[data-id="app/controllers"]').should('exist');
  });

  it('node "SQL" can be highlighted', () => {
    cy.get('.nodes .node[data-type="database"]')
      .click()
      .should('have.class', 'highlight');
  });

  it('node "SQL" can be focused', () => {
    cy.get('.nodes .node[data-type="database"]')
      .dblclick()
      .should('have.class', 'highlight');

    cy.get('.nodes .node.package[data-id="app/helpers"]').should(
      'have.class',
      'dim'
    );
    cy.get('.edgePaths .edgePath.dim').should('have.length', 7);
  });

  it('nothing is highlighted by default', () => {
    cy.get('.nodes .node.highlight').should('not.exist');
  });

  it('allows reset view anywhere in the viewport', () => {
    cy.get('.appmap').rightclick({
      position: 'topLeft',
    });

    cy.get('.dropdown-menu').contains('Reset view');
  });
});
