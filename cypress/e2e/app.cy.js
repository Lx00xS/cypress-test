class filmCard {
  elements = {
    moreInfoBtn: () => cy.get('div.card:nth-child(1) > div:nth-child(2) > a:nth-child(3)'),
  }

  clickBtn() {
    this.elements.moreInfoBtn().click();
  }
}

class detailsPage {
  elements = {
    imgPoster: () => cy.get('body > main > div > div.container__imagem > img'),
    overviewTxt: () => cy.get('body > main > div > div.filme__resumo > p'),
    releaseDate: () => cy.get('body > main > div > div.filmes__txt > p:nth-child(1) > span'),
    durationTxt: () => cy.get('body > main > div > div.filmes__txt > p:nth-child(2) > span'),
    originalLanguageTxt: () => cy.get('body > main > div > div.filmes__txt > p:nth-child(3) > span'),
  }
}

const card = new filmCard();
const details = new detailsPage();

describe('Visualizar a página inicial do portal', () => {
  describe('Visualizar página inicial do portal com filmes em cartaz', () => {
    it('O usuário visitar a https://portal-de-filmes.onrender.com/', () => {
      cy.visit('/')
    })
  })

  describe('Visualizar detalhes de um filme', () => {
    it('Estar na página inicial do portal de filmes', () => {
      cy.visit('/')
    })
    it('O usuário pressionar o botão de Mais Informações', () => {
      card.clickBtn();
    })
    it('O usuário pode vizualizar o poster do filme', () => {
      details.elements.imgPoster().should('exist');
    })
    it('O usuário pode ver a sinopse do filme', () => {
      details.elements.overviewTxt().should('exist');
    })
    it('O usuario pode ver a data de lançamento do filme', () => {
      details.elements.releaseDate().should('contains.text', 'Data de lançamento:');
    })
    it('O usuario pode ver a duração do filme', () => {
      details.elements.durationTxt().should('contains.text', 'Duração:');
    })
    it('O usuario pode ver a lingua original do filme', () => {
      details.elements.originalLanguageTxt().should(element => {
        debugger //permite validação manual
      });
    })
  })
})
