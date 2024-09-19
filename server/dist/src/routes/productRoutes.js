"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productConttroller_1 = require("../controllers/productConttroller");
const router = (0, express_1.Router)();
router.get("/", productConttroller_1.getProducts);
router.post("/", productConttroller_1.createProduct);
exports.default = router;
