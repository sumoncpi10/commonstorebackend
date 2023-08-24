"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const item_type_controller_1 = require("./item.type.controller");
const item_type_validation_1 = require("./item.type.validation");
const router = express_1.default.Router();
router.post('/create-item-type', (0, validateRequest_1.default)(item_type_validation_1.ItemTypeValidation.create), item_type_controller_1.ItemTypeController.insertIntoDB);
router.get('/', item_type_controller_1.ItemTypeController.getAllFromDB);
router.get('/:id', item_type_controller_1.ItemTypeController.getDataById);
exports.ItemTypeRoutes = router;
