"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const supplier_controller_1 = require("./supplier.controller");
const supplier_validation_1 = require("./supplier.validation");
const router = express_1.default.Router();
router.post('/create-supplier', (0, validateRequest_1.default)(supplier_validation_1.SupplierValidation.create), supplier_controller_1.SupplierController.insertIntoDB);
router.get('/', supplier_controller_1.SupplierController.getAllFromDB);
router.get('/:id', supplier_controller_1.SupplierController.getDataById);
exports.SupplierRoutes = router;
