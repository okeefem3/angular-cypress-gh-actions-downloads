import * as path from 'path';

it('loads examples', () => {
  cy.visit('https://angular-cypress-gh-actions.web.app/');
  cy.get('#downloadButton').click();
  validateCSVFileExists('My Data.csv');
});


export const validateCSVFileExists = (fileName: string) => {
  const downloadsFolder = Cypress.config('downloadsFolder');
  cy.readFile(path.join(downloadsFolder, fileName));
};
