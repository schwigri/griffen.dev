const { wrapPageElement, wrapRootElement } = require("./src/utils/layout.util");

// Require fonts
require("@fontsource/work-sans/latin-400.css");
require("@fontsource/work-sans/latin-600.css");
require("@fontsource/prompt/latin-600.css");
require("@fontsource/prompt/latin-400-italic.css");
require("@fontsource/m-plus-1p/japanese-400.css");
require("@fontsource/m-plus-1p/japanese-500.css");

module.exports = {
	wrapPageElement,
	wrapRootElement,
};
