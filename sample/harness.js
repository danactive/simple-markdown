var parse,
    simpleMarkdown = require("../index.js");

parseMd = function (md) {
    return simpleMarkdown.defaultParse(md);
}

module.exports = {
    "harnesses": [
        {
            "route": "parseMarkdown",
            "data": function (cb) {
                var md = "Here is a paragraph and an *em element* and **strong element**.";
                cb({"md": md, "mdMeta": parseMd("Here is a paragraph and an *em element* and **strong element**.")});
            }
        }
    ]
};