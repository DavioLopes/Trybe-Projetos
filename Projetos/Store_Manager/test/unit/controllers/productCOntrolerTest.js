const { expect } = require("chai");
const sinon = require("sinon");

const productControler = require("../../../controllers/productControlers");
const productService = require("../../../services/productService");

const objectDB = [
  {
    id: 1,
    name: "Martelo de Thor",
    quantity: 10,
  },
  {
    id: 2,
    name: "Traje de encolhimento",
    quantity: 20,
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
    quantity: 30,
  },
];

const objctID = [{ code: 200, json: { id: 1, name: 'Martelo de Thor', quantity: 10 } }];

const err = Error(`error`);

describe("testando a camada controllers", () => {
  const request = {};
  const response = {};
  let next = () => {};
  describe("retornando todos os produtos SEM error", () => {
    describe("retornando todos os produtos", () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productService, "allProducts").resolves(objectDB);
      });
      after(() => {
        productService.allProducts.restore();
      });
      it("responde a requisição com status 200", async () => {
        await productControler.getAllProducts(request, response, next);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
      it("json é chamado com um array", async () => {
        await productControler.getAllProducts(request, response, next);
        expect(response.json.calledWith(objectDB)).to.be.equal(true);
      });
    });
  });

  describe("retornando todos os produtos COM error", () => {
    before(() => {
      next = sinon.stub();
      sinon.stub(productService, "allProducts").throws(err);
    });
    after(() => {
      productService.allProducts.restore();
    });
    it("responde a requisição COM error", async () => {
      await productControler.getAllProducts(request, response, next);
      expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    });
  });
    
    describe("retornando produtos por ID SEM ERROR", () => {
      before(() => {
        request.params = { id: 1 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productService, "getProductById").resolves(objctID);

      })
      after(() => {
        productService.getProductById.restore();
      })
      it("responde a requisição com status 200", async () => {
        await productControler.productsById(request, response, next);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
      
    });


    describe("retornando produtos por ID COM error", () => {
      before(() => {
        request.params = { id: 1 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        next = sinon.stub();
        sinon.stub(productService, "getProductById").throws(err);
      });
      after(() => {
        productService.getProductById.restore();
      });
      it("responde a requisição COM error", async () => {
        await productControler.productsById(request, response, next);
        expect(next.calledWith(sinon.match(err))).to.be.equal(true);
      });
    });
  });
