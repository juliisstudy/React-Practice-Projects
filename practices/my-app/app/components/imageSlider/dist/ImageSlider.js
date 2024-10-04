"use client";
"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
var image_1 = require("next/image");
require("./style.css");
function ImageSlider(_a) {
    var url = _a.url, limit = _a.limit, page = _a.page;
    var _b = react_1.useState(0), currIndex = _b[0], setCurrIndex = _b[1];
    var _c = react_1.useState([]), images = _c[0], setImages = _c[1];
    var _d = react_1.useState(null), errorMsg = _d[0], setError = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    function fetchImages(getUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        setLoading(true);
                        return [4 /*yield*/, fetch(getUrl + "?page=" + page + "&limit=" + limit)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data) {
                            setImages(data);
                            setLoading(false);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        setError(e_1.message);
                        setLoading(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function handlePrevious() {
        setCurrIndex(currIndex === 0 ? images.length - 1 : currIndex - 1);
    }
    function handleNext() {
        setCurrIndex(currIndex === images.length - 1 ? 0 : currIndex + 1);
    }
    react_1.useEffect(function () {
        if (url !== "")
            fetchImages(url);
    }, [url]);
    console.log(images);
    if (loading) {
        return react_1["default"].createElement("div", null, "Loading data ! Please wait");
    }
    if (errorMsg !== null) {
        return react_1["default"].createElement("div", null,
            "Error occured ! ",
            errorMsg);
    }
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("div", { onClick: handlePrevious, className: "arrow arrow-left" },
            react_1["default"].createElement(bs_1.BsArrowLeftCircleFill, null)),
        images && images.length
            ? images.map(function (imageItem, index) { return (react_1["default"].createElement(image_1["default"], { key: imageItem.id, alt: imageItem.download_url, src: imageItem.download_url, className: currIndex === index
                    ? "current-image"
                    : "current-image hide-current-image", width: 200, height: 200 })); })
            : null,
        react_1["default"].createElement("div", { onClick: handleNext, className: "arrow arrow-right" },
            react_1["default"].createElement(bs_1.BsArrowRightCircleFill, null)),
        react_1["default"].createElement("span", { className: "circle-indicators" }, images && images.length
            ? images.map(function (_, index) { return (react_1["default"].createElement("button", { key: index, className: currIndex === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator", onClick: function () { return setCurrIndex(index); } })); })
            : null)));
}
exports["default"] = ImageSlider;
