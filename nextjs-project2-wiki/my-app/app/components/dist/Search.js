"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
function Search() {
    var _a = react_1.useState(""), search = _a[0], setSearch = _a[1];
    var router = navigation_1.useRouter();
    var handleSubmit = function (e) {
        e.preventDefault();
        setSearch("");
        router.push("/" + search + "/");
    };
    return (React.createElement("form", { className: "w-50 flex justify-center md:justify-between", onSubmit: handleSubmit },
        React.createElement("input", { type: "text", value: search, onChange: function (e) { return setSearch(e.target.value); }, className: "bg-white p-2 w-80 text-xl rounded-xl", placeholder: "Search" }),
        React.createElement("button", { className: "p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold" }, "\uD83D\uDE80")));
}
exports["default"] = Search;
