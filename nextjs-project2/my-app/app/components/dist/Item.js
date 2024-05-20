"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
function Item(_a) {
    var _b;
    var result = _a.result;
    var itemTextCol = (react_1["default"].createElement("div", { className: "flex flex-col justify-center" },
        react_1["default"].createElement("h2", null,
            react_1["default"].createElement(link_1["default"], { href: "https://en.wikipedia.org/?curid=" + result.pageid, target: "_blank", className: "text-xl font-bold underline" }, result.title)),
        react_1["default"].createElement("p", null, result.extract)));
    var content = ((_b = result === null || result === void 0 ? void 0 : result.thumbnail) === null || _b === void 0 ? void 0 : _b.source) ? (react_1["default"].createElement("article", { className: "m-4 max-w-lg" },
        react_1["default"].createElement("div", { className: "flex flex-row gap-4" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-center" },
                react_1["default"].createElement("img", { src: result.thumbnail.source, alt: result.title, width: result.thumbnail.width, height: result.thumbnail.height, loading: "lazy" })),
            itemTextCol))) : (react_1["default"].createElement("article", { className: "m-4 max-w-lg" }, itemTextCol));
    return content;
}
exports["default"] = Item;
