const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../models/connection");
const salesModel = require("../../../models/salesModel");

const objectDB = [[
  {
    "saleId": 1,
    "date": "2022-02-24T19:09:06.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-02-24T19:09:06.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-02-24T19:09:06.000Z",
    "productId": 3,
    "quantity": 15
  }
]]

describe("testa a camada model das vendas", () => {
  describe("retorna todas as vendas", () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(objectDB);
    });
    after(() => {
      connection.execute.restore();
    });
    it('retorna todas as vendas', async () => {
      const result = await salesModel.allSales();
      expect(result).to.be.an("array");
    });
  });

  describe('retorna a venda pelo id', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(objectDB);
    });
    after(() => {
      connection.execute.restore();
    });
    it('retorna vendas pelo id', async () => {
      const result = await salesModel.salesByID(1);
      expect(result).to.be.an("array");
      expect(result).to.be.length(3);
    });
  });
});
