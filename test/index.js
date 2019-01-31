"use strict";

const Guid2Packed = require('../').Guid2Packed;
const ParseVersion = require('../').ParseVersion;

const expect = require('expect.js');

describe("Minimal test suite", function() {

  it("check Guid2Packed", function() {
    var src = "{12345678-ABCD-WXYZ-1234-ABCDEFGHIJKL}";
    expect(Guid2Packed(src)).to.eql("87654321DCBAZYXW2143BADCFEHGJILK");
  });


  it("check ParseVersion", function() {
    expect(ParseVersion("80f0000")).to.eql("8.15.0");
    expect(ParseVersion("1a0000")).to.eql("0.26.0");
    expect(ParseVersion("2073b2e")).to.eql("2.7.15150");
    expect(ParseVersion("a0142ee")).to.eql("10.1.17134");
    expect(ParseVersion("e0063bb")).to.eql("14.0.25531");
    expect(ParseVersion("8646580")).to.eql("8.100.25984");
    expect(ParseVersion("9050000")).to.eql("9.5.0");
    expect(ParseVersion("4")).to.eql("0.0.4");

  });





});

