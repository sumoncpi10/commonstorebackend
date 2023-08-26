"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const complain_controller_1 = require("./complain.controller");
const complain_validation_1 = require("./complain.validation");
const router = express_1.default.Router();
router.post('/create-complain', (0, validateRequest_1.default)(complain_validation_1.ComplainValidation.create), complain_controller_1.ComplainController.insertIntoDB);
router.get('/', complain_controller_1.ComplainController.getAllFromDB);
router.get('/:complainCode', complain_controller_1.ComplainController.getDataById);
exports.ComplainRoutes = router;
