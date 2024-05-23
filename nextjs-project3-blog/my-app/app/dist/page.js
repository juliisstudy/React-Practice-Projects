"use strict";
exports.__esModule = true;
exports.revalidate = void 0;
var Posts_1 = require("@/components/Posts");
exports.revalidate = 10;
function Home() {
    return (React.createElement("main", { className: "px-6 mx-auto" },
        React.createElement("p", { className: "mt-12 mb-12 text-3xl text-center dark:text-white" },
            "Hello",
            React.createElement("span", { className: "whitespace-nowrap" },
                React.createElement("span", { className: "font-bold" }, "Juli"))),
        React.createElement(Posts_1["default"], null)));
}
exports["default"] = Home;
