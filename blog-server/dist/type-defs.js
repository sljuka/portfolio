"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Blog {\n    title: String\n    author: String\n    content: String\n  }\n\n  type Query {\n    blogs: [Blog]\n  }\n"], ["\n  type Blog {\n    title: String\n    author: String\n    content: String\n  }\n\n  type Query {\n    blogs: [Blog]\n  }\n"])));
var templateObject_1;
