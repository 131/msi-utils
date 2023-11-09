"use strict";

const expect = require('expect.js');

const {Guid2Packed, ParseVersion, CompareVersions}  = require('../');


describe("Minimal test suite", function() {

  it("should check Guid2Packed", function() {
    var src = "{12345678-ABCD-WXYZ-1234-ABCDEFGHIJKL}";
    expect(Guid2Packed(src)).to.eql("87654321DCBAZYXW2143BADCFEHGJILK");
  });


  it("should check ParseVersion", function() {
    expect(ParseVersion("80f0000")).to.eql("8.15.0");
    expect(ParseVersion("0x1a0000")).to.eql("0.26.0");
    expect(ParseVersion("2073b2e")).to.eql("2.7.15150");
    expect(ParseVersion("a0142ee")).to.eql("10.1.17134");
    expect(ParseVersion("e0063bb")).to.eql("14.0.25531");
    expect(ParseVersion("8646580")).to.eql("8.100.25984");
    expect(ParseVersion("9050000")).to.eql("9.5.0");
    expect(ParseVersion("4")).to.eql("0.0.4");

  });

  it("should check CompareVersions", function() {
    expect(CompareVersions("1.2.3", "4.5.6")).to.eql(-1);

    expect(CompareVersions("1", "1.2.3")).to.eql(-1);
    expect(CompareVersions("3-0", " 1.2.3")).to.eql(1);

    expect(CompareVersions("1.2.3", "1.2.3")).to.eql(0);
  });





});

