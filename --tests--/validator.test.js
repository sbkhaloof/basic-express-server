'use strict'
const {server}=require('../src/server');
const supertest=require('supertest');
const request=supertest(server);


describe("validator",()=>{
    // if no name in the query string
    it("if query not valid", async () => {
        const response = await request.get("/person?name");
        expect(response.status).toEqual(500);
      });
    
      it("valid string in the query", async () => {
        const response = await request.get("/person?name=siham");
        const data = JSON.parse(response.text);
        expect(response.status).toEqual(200);
        expect(data).toEqual({
          name: "siham"
        });
      });
    })