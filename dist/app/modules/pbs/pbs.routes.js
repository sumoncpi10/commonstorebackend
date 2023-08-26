"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const pbs_controller_1 = require("./pbs.controller");
const pbs_validation_1 = require("./pbs.validation");
const router = express_1.default.Router();
router.post('/create-pbs', (0, validateRequest_1.default)(pbs_validation_1.PbsValidation.create), pbs_controller_1.PbsController.insertIntoDB);
router.delete('/:pbsCode', pbs_controller_1.PbsController.singleDeleteFromDB);
router.get('/', pbs_controller_1.PbsController.getAllFromDB);
router.get('/:pbsCode', pbs_controller_1.PbsController.getDataById);
exports.PbsRoutes = router;
