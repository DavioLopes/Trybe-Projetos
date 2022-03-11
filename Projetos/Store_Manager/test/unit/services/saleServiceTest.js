const { expect } = require("chai");
const sinon = require('sinon');

const saleService = require("../../../services/saleService");
const salesModel = require("../../../models/salesModel");
const connection = require("../../../models/connection");


describe("testa a camada service das vendas", () => {
  before(() => {
    const product = [
      { id: 1, name: 'Martelo de Thor', quantity: 10 },
      { id: 2, name: 'Traje de encolhimento', quantity: 20 },
      { id: 3, name: 'Escudo do Capitão América', quantity: 30 }
    ]

    const result = [product, []];

    sinon.stub(connection, 'execute').resolves(result);
  });

  after(() => {
    connection.execute.restore();
  });
    it('retorna todas as vendas', async () => {
      const result = await saleService.getAllSales();
      expect(result).to.be.an("array");
    });
  });

  describe('retorna a venda pelo id', () => {
    before(() => {
      const product = [
        { id: 1, name: 'Martelo de Thor', quantity: 10 },
      ]

      const result = [product, []];

      sinon.stub(connection, 'execute').resolves(result);
    });
    it('retorna vendas pelo id', async () => {
      const result = await saleService.getAllSalesByID (2);
      expect(result).to.be.an("array");
    });
  });