// testing code goes here

'use strict'

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

// testing function getPrimes
var getPrimes = require('../app/getPrimes.js');

describe("getPrimes tests: ", function() {
  describe("Tests some falsy values - ", function() {

    it("should return 'no prime number' for null", function() {
      expect(getPrimes(null)).to.equal('no prime number');
    });

    it("should return 'no prime number' for undefined", function() {
      expect(getPrimes(undefined)).to.equal('no prime number');
    });

    it("should return 'no prime number' for 'test'", function() {
      expect(getPrimes("test")).to.equal('no prime number');
    });

    it("should return false for 0", function() {
      expect(getPrimes(0)).to.equal(false);
    });

    it("should return false for 1", function() {
      expect(getPrimes(1)).to.equal(false);
    });

    it("should return false for -2", function() {
      expect(getPrimes(-2)).to.equal(false);
    });

  });

  describe("Test the result - ", function() {
    it("should return [2] for 2", function() {
      expect(getPrimes(2)).to.eql([2]);
    });

    it("should return [2,3] for 3", function() {
      expect(getPrimes(3)).to.eql([2,3]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19,23] for 25", function() {
      expect(getPrimes(25)).to.eql([2, 3, 5, 7, 11, 13, 17, 19,23]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function() {
      expect(getPrimes(100)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

  });
});