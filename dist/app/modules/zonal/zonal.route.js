"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const zonal_controller_1 = require("./zonal.controller");
const zonal_validation_1 = require("./zonal.validation");
const router = express_1.default.Router();
router.post('/create-zonal', (0, validateRequest_1.default)(zonal_validation_1.ZonalValidation.create), zonal_controller_1.ZonalController.insertIntoDB);
router.get('/:pbsCode', zonal_controller_1.ZonalController.getAllFromDB);
router.get('/zonal/:zonalCode', zonal_controller_1.ZonalController.getDataById);
exports.ZonalRoutes = router;
