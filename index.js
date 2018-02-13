const uglify = require("uglify-js");
var quake = null;

function minify(input, output, options) {
  if(!quake) throw new Error("minify needs registration. Call quake.register(minify)");
  return [
    quake.create(output),
    quake.src(input),
    quake.sync(function Minify(files) {
      if (Array.isArray(files)) return files.map(v => uglify.minify(v, options).code);
      return uglify.minify(files, options).code;
    }),
    quake.dest(output)
  ];
};

minify.register = q => quake = q;

module.exports = minify;
