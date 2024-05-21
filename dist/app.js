"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const movie_route_1 = require("./modules/movies/movie.route");
exports.app = (0, express_1.default)();
//parsers
exports.app.use(express_1.default.json());
exports.app.use("/api/movies", movie_route_1.moviesRoute);
exports.app.get("/", (req, res) => {
    res.send("Hello World!");
});
