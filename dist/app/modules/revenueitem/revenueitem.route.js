"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const revenueitem_controller_1 = require("./revenueitem.controller");
const revenueitem_validation_1 = require("./revenueitem.validation");
const router = express_1.default.Router();
router.post('/create-revenue-item', (0, validateRequest_1.default)(revenueitem_validation_1.RevenueItemValidation.create), revenueitem_controller_1.RevenueItemController.insertIntoDB);
router.get('/', revenueitem_controller_1.RevenueItemController.getAllFromDB);
router.get('/:id', revenueitem_controller_1.RevenueItemController.getDataById);
exports.RevenueRoutes = router;
