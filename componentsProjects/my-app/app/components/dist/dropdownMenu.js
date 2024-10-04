"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function DropdownMenu(_a) {
    var options = _a.options;
    var _b = react_1.useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    return (react_1["default"].createElement("button", { className: "bg-gray-400 hover:bg-slate-200 ", onClick: function () { return setIsExpanded(!isExpanded); } },
        "adfdsf",
        isExpanded && (react_1["default"].createElement("div", { className: "bg-white boder" }, options.map(function (option) { return (react_1["default"].createElement("li", { className: "hover:bg-blue-50 hover:text-white py-1 px-1 cursor-pointer ", key: option }, option)); })))));
}
exports["default"] = DropdownMenu;
