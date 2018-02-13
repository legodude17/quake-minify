const minify = require(".");
const quake = require("quake-task");

quake.register(minify);

quake.add("minify", minify("target.js", "target.min.js"));

quake.start("minify");
