"use strict";
exports.__esModule = true;
var react_1 = require("react");
function ProductLists(_a) {
    var products = _a.products;
    return (react_1["default"].createElement("div", { className: "bg-white max-h-96 overflow-y-scroll resultProductContainer" }, products.map(function (product) { return (react_1["default"].createElement("div", { key: product.id, className: "py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-600 cursor-pointer" },
        react_1["default"].createElement("p", null, product.title),
        react_1["default"].createElement("img", { src: product.image, alt: product.title, className: "w-8" }))); })));
}
exports["default"] = ProductLists;
