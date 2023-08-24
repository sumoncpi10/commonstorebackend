"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const model_controller_1 = require("./model.controller");
const model_validation_1 = require("./model.validation");
const router = express_1.default.Router();
router.post('/create-model', (0, validateRequest_1.default)(model_validation_1.ModelValidation.create), model_controller_1.ModelController.insertIntoDB);
router.get('/', model_controller_1.ModelController.getAllFromDB);
router.get('/:id', model_controller_1.ModelController.getDataById);
exports.ModelRoutes = router;
