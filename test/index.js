"use strict";

const Guid2Packed = require('../').Guid2Packed;

const expect = require('expect.js');

describe("Minimal test suite", function(){

  var port, server;

  it("check Guid2Packed", function(){
    
    var src = "{12345678-ABCD-WXYZ-1234-ABCDEFGHIJKL}";
    expect(Guid2Packed(src)).to.eql("87654321DCBAZYXW2143BADCFEHGJILK");


  });






});