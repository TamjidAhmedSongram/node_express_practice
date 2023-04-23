"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./config/express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Get the port from environment variables
const port = process.env.PORT || 3000;
// Start the server
express_1.default.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
