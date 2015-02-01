var statements = require('./fixtures/copyright.js');
var doub = require('to-double-quotes');
var re = require('./');

statements.forEach(function (line, i) {
  console.log(fix(unit(line, i)));
})

function unit (line, i) {
  return [
    '  it(\'should match #' + i + ':\', function () {',
    '    assert.equal(re.test(\'' + doub(line) + '\'), ' + re().test(line) + ');',
    '  });'
  ].join('\n');
}


function fix(str) {
  return str.replace(/''/g, '\'');
}
