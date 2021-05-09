'use strict';

const server = require('../src/server').app;
const supergoose = require('@code-fellows/supergoose');

const mockServer= supergoose(server);

let id;

describe('Server Test', () => {
    it('handle working routes', async () => {
      const response = await mockServer.get('/');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('all good');
    });

    it('handle bad route', async () => {
        const response = await mockServer.get('/zzzz');
        expect(response.status).toEqual(404);
      });
      it('handle bad method', async () => {
        const response = await mockServer.post('/');
        expect(response.status).toEqual(404);
      });
      it('handle create food ', async () => {
        const response =await mockServer.post('/food').send({
          "name":"apple",
          "calories": 10,
          "type":"FRUIT"
        })
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("apple");
        expect(response.body.calories).toEqual(10);
        expect(response.body.type).toEqual("FRUIT");
        id=response.body._id;
      });

      it('handle get all food', async () => {
        const response = await mockServer.get('/food');
        expect(response.status).toEqual(200);
        console.log('===========>',id)
      });

      it('handle get one food by id', async () => {
        const response = await mockServer.get(`/food/${id}`);
        console.log('===========>',id)
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("apple");
        expect(response.body.calories).toEqual(10);
        expect(response.body.type).toEqual("FRUIT");
      });
      it('handle update food', async () => {
        const response = await mockServer.put(`/food/${id}`).send({
          "name":"banana",
          "calories": 20,
          "type":"FRUIT"
        })
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("banana");
        expect(response.body.calories).toEqual(20);
        expect(response.body.type).toEqual("FRUIT");
      });

      it('handle delete food', async () => {
        const response = await mockServer.delete(`/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("banana");
        expect(response.body.calories).toEqual(20);
        expect(response.body.type).toEqual("FRUIT");
      });


      it('handle create clothes ', async () => {
        const response =await mockServer.post('/clothes').send({
          "quantity":1,
          "colors": "red",
          "type":"dress"
        })
        expect(response.status).toEqual(200);
        expect(response.body.quantity).toEqual(1);
        expect(response.body.colors).toEqual("red");
        expect(response.body.type).toEqual("dress");
        id=response.body._id;
      });

      it('handle get all clothes', async () => {
        const response = await mockServer.get('/clothes');
        expect(response.status).toEqual(200);
      });

      it('handle get one clothes by id', async () => {
        const response = await mockServer.get(`/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.quantity).toEqual(1);
        expect(response.body.colors).toEqual("red");
        expect(response.body.type).toEqual("dress");
      });
      it('handle update clothes', async () => {
        const response = await mockServer.put(`/clothes/${id}`).send({
          "quantity":5,
          "colors": "white",
          "type":"dress"
        })
        expect(response.status).toEqual(200);
        expect(response.body.quantity).toEqual(5);
        expect(response.body.colors).toEqual("white");
        expect(response.body.type).toEqual("dress");
      });

      it('handle delete clothes', async () => {
        const response = await mockServer.delete(`/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.quantity).toEqual(5);
        expect(response.body.colors).toEqual("white");
        expect(response.body.type).toEqual("dress");
      });




})