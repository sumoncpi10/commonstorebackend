"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const substation_controller_1 = require("./substation.controller");
const substation_validation_1 = require("./substation.validation");
const router = express_1.default.Router();
router.post('/create-substation', (0, validateRequest_1.default)(substation_validation_1.SubstationValidation.create), substation_controller_1.SubstationController.insertIntoDB);
router.get('/:pbsCode', substation_controller_1.SubstationController.getAllFromDB);
router.get('substation/:substationCode', substation_controller_1.SubstationController.getDataById);
exports.SubstationRoutes = router;
