"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const capitalitem_controller_1 = require("./capitalitem.controller");
const capitalitem_validation_1 = require("./capitalitem.validation");
const router = express_1.default.Router();
router.post('/create-capital-item', (0, validateRequest_1.default)(capitalitem_validation_1.CapitalItemValidation.create), capitalitem_controller_1.CapitalItemController.insertIntoDB);
router.get('/', capitalitem_controller_1.CapitalItemController.getAllFromDB);
router.get('/:id', capitalitem_controller_1.CapitalItemController.getDataById);
exports.CapitalItemRoutes = router;
