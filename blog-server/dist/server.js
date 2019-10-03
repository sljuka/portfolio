"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var type_defs_1 = require("./type-defs");
var resolvers_1 = require("./resolvers");
var server = new apollo_server_1.ApolloServer({ typeDefs: type_defs_1.typeDefs, resolvers: resolvers_1.resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
