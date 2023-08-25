"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const department_controller_1 = require("./department.controller");
const department_validation_1 = require("./department.validation");
const router = express_1.default.Router();
router.post('/create-department', (0, validateRequest_1.default)(department_validation_1.DepartmentValidation.create), department_controller_1.DepartmentController.insertIntoDB);
router.get('/', department_controller_1.DepartmentController.getAllFromDB);
router.get('/:id', department_controller_1.DepartmentController.getDataById);
exports.DepartmentRoutes = router;
