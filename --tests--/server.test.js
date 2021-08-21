'use strict'
const {server}=require('../src/server');
const supertest=require('supertest');
const request=supertest(server);


describe('middleware server',()=>{


    it('shoud check the hello world works successfully', async () => {
        // arrange
        let param = '/';
        let status = 200;
        let text ='Every Thing Is Working Good';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    /* 404 on a bad route*/

    it('should check error 404 not found',async()=>{
        // arrange
        let route = '/error';
        let status = 404;
        // act
        const response = await request.get(route);
        // assert
        expect(response.status).toBe(status);
  })
/* 404 on a bad method*/
it ('should check a bad method',async()=>{
    // arrange
    let route = '/bad';
    let status = 500;
    // act 
    const response=await request.post(route)
    // assert
    expect(response.status).toBe(status);
})

// it('should check 500 internal server error',async()=>{
//     // arrange
//     let route = '/bad';
//     let status = 500;
//     // act
//     const response = await request.get(route);
//     // assert
//     expect(response.status).toBe(status);
// })
// /* 200 if the name is in the query strin*/
// it('should check if the name is in the query string',async()=>{
// // arrange
// let route = '/person?name=siham';
// let status = 200;
// // act
// const response = await request.get(route);
// // assert
// expect(response.status).toBe(status);
// expect(typeof response.body).toEqual('object')
// })


})