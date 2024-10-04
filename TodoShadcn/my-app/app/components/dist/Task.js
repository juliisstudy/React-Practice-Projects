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
exports.__esModule = true;
exports.TaskList = void 0;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
function Task(_a) {
    var task = _a.task, onChangeTask = _a.onChangeTask, onDelete = _a.onDelete;
    var _b = react_1.useState(false), isEditing = _b[0], setIsEditing = _b[1];
    var taskContent;
    if (!isEditing) {
        taskContent = (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(input_1.Input, { className: "text-slate-400 ", value: task.text, onChange: function (e) {
                    return onChangeTask(__assign(__assign({}, task), { text: e.target.value }));
                } }),
            react_1["default"].createElement(button_1.Button, { onClick: function () { return setIsEditing(true); }, className: "text-slate-700 font-bold w-16 bg-slate-200 rounded-sm ml-5 hover:bg-slate-500" }, "Save")));
    }
    else {
        taskContent = (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", { className: "text-slate-400 w-60 pl-4 pt-2" },
                " ",
                task.text),
            react_1["default"].createElement(button_1.Button, { onClick: function () { return setIsEditing(false); }, className: "text-slate-700 w-16 font-bold bg-slate-200 rounded-sm ml-5 hover:bg-slate-500" }, "Edit")));
    }
    return (react_1["default"].createElement("div", { className: "mt-5" },
        react_1["default"].createElement("label", { className: "flex flex-row " },
            react_1["default"].createElement("input", { type: "checkbox", checked: task.done, onChange: function (e) {
                    onChangeTask(__assign(__assign({}, task), { done: e.target.checked }));
                }, className: "mr-2 p-4 pl-2" }),
            taskContent,
            react_1["default"].createElement(button_1.Button, { onClick: function () { return onDelete(task.id); }, className: "text-slate-700 w-16 font-bold bg-slate-200 rounded-sm ml-5 hover:bg-slate-500" }, "Delete"))));
}
exports["default"] = Task;
function TaskList(_a) {
    var tasks = _a.tasks, onChangeTask = _a.onChangeTask, onDeleteTask = _a.onDeleteTask;
    return (react_1["default"].createElement("ul", { className: "" }, tasks.map(function (task) { return (react_1["default"].createElement("li", { key: task.id, className: "border-b-slate-600 bg-slate-900" },
        react_1["default"].createElement(Task, { task: task, onChangeTask: onChangeTask, onDelete: onDeleteTask }))); })));
}
exports.TaskList = TaskList;
