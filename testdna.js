const assert = require("chai").assert;
const dnaComplement = require('./dna.js');

describe('dna_complement', function() {
  it('should work for a single A', function() {
    assert.equal(dnaComplement("A"), "T");
  });
  it('should work for a single T', function() {
    assert.equal(dnaComplement("T"), "A");
  });
  it('should work for a single C', function() {
    assert.equal(dnaComplement("C"), "G");
  });
  it('should work for a single G', function() {
    assert.equal(dnaComplement("G"), "C");
  });
  it('should work for a ATTGC', function() {
    assert.equal(dnaComplement("ATTGC"), "TAACG");
  });
  it('should work for a GTACAT', function() {
    assert.equal(dnaComplement("GTACAT"), "CATGTA");
  });
  it('should work for a CGCG', function() {
    assert.equal(dnaComplement("CGCG"), "GCGC");
  });
  it('should work for a very long input', function() {
    assert.equal(dnaComplement("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA"), "CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT");
  });
});