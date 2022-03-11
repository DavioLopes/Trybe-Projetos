const { expect } = require("chai");
const sinon = require("sinon");

const salesControler = require("../../../controllers/salesControllers");
const saleService = require("../../../services/saleService");

const objectDB = [
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
];

const objctID = [{ code: 200, json: { id: 2, date: "2021-09-09T04:54:29.000Z", productId: 3, quantity: 15 } }];

const err = Error(`error`);

describe("testando a camada controllers do sales", () => {
  const request = {};
  const response = {};
  let next = () => { };
  describe("retornando todas as vendas", () => {
    describe("retornando todas as vendas SEM ERRO", () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(saleService, "getAllSales").resolves(objectDB);
      });
      after(() => {
        saleService.getAllSales.restore();
      });
      it('retorna status com o código 200', async () => {
        await salesControler.allSales(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });
  });

  describe("retornando todos as vendas COM error", () => {
    before(() => {
      next = sinon.stub();
      sinon.stub(saleService, 'getAllSales').throws(err);
    });
    after(() => {
      saleService.getAllSales.restore();
    });
    it("responde a requisição COM error", async () => {
      await salesControler.allSales(request, response, next);
      expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    });
  });

  describe("retornando venda por ID SEM ERRO", () => {
    before(() => {
      request.params = { id: 2 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "getAllSalesByID").resolves(objctID);
    });
    after(() => {
      saleService.getAllSalesByID.restore();
    });
    it('retorna status com o código 200', async () => {
      await salesControler.salesByID(request, response, next);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });


  describe("retornando vendas por ID COM error", () => {
    before(() => {
      request.params = { id: 2 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub();
      sinon.stub(saleService, "getAllSalesByID").throws(err);
    });
    after(() => {
      saleService.getAllSalesByID.restore();
    });
    it("responde a requisição COM error", async () => {
      await salesControler.salesByID(request, response, next);
      expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    });
  });
});
