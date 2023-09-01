"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
// import { User } from '../user/user.model';
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { mobileNo: userMobileNo, password } = payload;
    // creating user instance of User
    const isUserExist = yield prisma_1.default.user.findUnique({
        where: {
            mobileNo: userMobileNo,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    // check password matched
    if (isUserExist.password && !isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    // create access token and refress token
    // const accessToken = jwt.sign(
    //   {
    //     id: isUserExist?.id,
    //     role: isUserExist?.role,
    //   },
    //   config.jwt.secret as Secret,
    //   {
    //     expiresIn: config.jwt.expires_in,
    //   }
    // );
    const { mobileNo, role, pbsCode, zonalCode, complainCode, substationCode } = isUserExist;
    const userInfo = {
        mobileNo,
        role,
        zonalCode,
        complainCode,
        substationCode,
        pbsCode,
    };
    const accessToken = jwtHelpers_1.jwtHelpers.createToken(userInfo, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken(userInfo, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    // const refreshToken = jwt.sign(
    //   {
    //     id: isUserExist?.id,
    //     role: isUserExist?.role,
    //   },
    //   config.jwt.refresh_secret as Secret,
    //   {
    //     expiresIn: config.jwt.refresh_expires_in,
    //   }
    // );
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifyToken = null;
    try {
        verifyToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid token');
    }
    const { mobileNo } = verifyToken;
    // checking deleteUser refresh token
    const isUserExist = yield prisma_1.default.user.findUnique({
        where: {
            mobileNo: mobileNo,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    // genereate token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        mobileNo: isUserExist.mobileNo,
        role: isUserExist.role,
        pbsCode: isUserExist.pbsCode,
        zonalCode: isUserExist.zonalCode,
        complainCode: isUserExist.complainCode,
        substationCode: isUserExist.substationCode,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken: newAccessToken,
    };
});
exports.AuthService = {
    loginUser,
    refreshToken,
};
