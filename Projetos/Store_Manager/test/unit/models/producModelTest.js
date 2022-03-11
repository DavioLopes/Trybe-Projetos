const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../models/connection");
const productModel = require("../../../models/productModel");

const objectDB = [[
  {
    "id": 1,
    "name": "Martelo de Thor",
    "quantity": 10
  },
  {
    "id": 2,
    "name": "Traje de encolhimento",
    "quantity": 20
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América",
    "quantity": 30
  }
]]

describe("Testes da camada model de Produtos", () => {
  describe("Busca todos os produtos no Bando de Dados", () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(objectDB);
    });
    after(() => {
      connection.execute.restore();
    });
    it("retorna todos os produtos", async () => {
      const result = await productModel.getAllProducts();
      expect(result).to.be.an("array");
    });
  });

    describe("Busca produto pelo ID no Bando de Dados", () => {
      before(() => {
        sinon.stub(connection, 'execute').resolves(objectDB);
      });
      after(() => {
        connection.execute.restore();
      });
      it("retorna o produto buscado pelo id", async () => {
        const result = await productModel.getProductById();
        expect(result).to.be.an("array");
      })
    });
  });
