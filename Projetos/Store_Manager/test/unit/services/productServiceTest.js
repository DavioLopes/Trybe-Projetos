const { expect } = require("chai");
const sinon = require("sinon");

const productService = require("../../../services/productService");
const productModel = require("../../../models/productModel");

const objectDB = [
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
]

const findObjectBYID = [
  {
    "id": 1,
    "name": "Martelo de Thor",
    "quantity": 10
  }
]

describe("Testes da camada model de Produtos", () => {
  describe("Busca todos os produtos no Bando de Dados", () => {
    before(() => {
      sinon.stub(productModel, 'getAllProducts').resolves(objectDB);
    });
    after(() => {
      productModel.getAllProducts.restore();
    });
    it("retorna todos os produtos", async () => {
      const result = await productService.allProducts();
      expect(result).to.be.an("array");
      expect(result).to.be.length(3);
    });
  });

  describe("Busca produto pelo ID no Bando de Dados", () => {
    before(() => {
      sinon.stub(productModel, 'getProductById').resolves(findObjectBYID);
    });
    after(() => {
      productModel.getProductById.restore();
    });
    it("retorna o produto buscado pelo id", async () => {
      const result = await productService.getProductById();
      expect(result).to.be.an('array');
      expect(result).to.be.length(1);
    })
  });
});