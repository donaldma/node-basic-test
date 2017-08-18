DNAhash = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

dnaComplement = dna => {
  return dna
    .split('') 
    .filter(i => i.match(/A|T|C|G/)) 
    .map(i => DNAhash[i]) 
    .join(''); 
}

console.log(dnaComplement('ATTGC'))

module.exports = dnaComplement;

