var searcher = require('../FileSearcher');

var result = searcher.search('./resources', /Q\.\w+/g);

console.log(result);
searcher.tools.writeTextToFile('searchOutput', JSON.stringify(result));

var replaces = searcher.replace('./resources/replace.text', /Q\.\w+/g, 'hello world');
searcher.tools.writeTextToFile('replaceOutput', JSON.stringify(replaces));

console.log(replaces);