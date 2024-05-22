"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var initState = {
    name: "",
    email: "",
    message: ""
};
function Feedback() {
    var _this = this;
    var _a = react_1.useState(initState), data = _a[0], setData = _a[1];
    var router = navigation_1.useRouter();
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var name, email, message, res, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    console.log(JSON.stringify(data));
                    name = data.name, email = data.email, message = data.message;
                    return [4 /*yield*/, fetch("http://localhost:3000/api/feedback", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name: name,
                                email: email,
                                message: message
                            })
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    // Navigate to thank you
                    router.push("/thank-you/");
                    return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (e) {
        var name = e.target.name;
        setData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = e.target.value, _a)));
        });
    };
    var canSave = __spreadArrays(Object.values(data)).every(Boolean);
    var content = (React.createElement("form", { onSubmit: handleSubmit, className: "flex flex-col mx-auto max-w-3xl p-6" },
        React.createElement("h1", { className: "text-4xl mb-4" }, "Contact Us"),
        React.createElement("label", { className: "text-2xl mb-1", htmlFor: "name" }, "Name:"),
        React.createElement("input", { className: "p-3 mb-6 text-2xl rounded-2xl text-black", type: "text", id: "name", name: "name", placeholder: "Jane", pattern: "([A-Z])[\\w+.]{1,}", value: data.name, onChange: handleChange, autoFocus: true }),
        React.createElement("label", { className: "text-2xl mb-1", htmlFor: "email" }, "Email:"),
        React.createElement("input", { className: "p-3 mb-6 text-2xl rounded-2xl text-black", type: "email", id: "email", name: "email", placeholder: "Ju@mail.com", pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", value: data.email, onChange: handleChange }),
        React.createElement("label", { className: "text-2xl mb-1", htmlFor: "message" }, "Message:"),
        React.createElement("textarea", { className: "p-3 mb-6 text-2xl rounded-2xl text-black", id: "message", name: "message", placeholder: "Your message here...", rows: 5, cols: 33, value: data.message, onChange: handleChange }),
        React.createElement("button", { className: "p-3 mb-6 text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-slate-300 disabled:hidden", disabled: !canSave }, "Submit")));
    return content;
}
exports["default"] = Feedback;
