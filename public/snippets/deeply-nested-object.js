const nestedObj = {
  foo: {
    bar: {
      baz: {
        quux: {
          quuux: {
            quuuux: {
              'quuuuux!': 'you got me'
            }
          }
        }
      }
    }
  }
};

const nestedObjValue = nestedObj.foo.bar.baz.quux.quuux.quuuux['quuuuux!'];
document.write(`<h4>${nestedObjValue}</h4>`);
