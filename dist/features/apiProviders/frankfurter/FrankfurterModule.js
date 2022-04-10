"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrankfurterModule = void 0;
const httpFrankfurterInstance_1 = require("../../../core/config/httpFrankfurterInstance");
const FrankfurterService_1 = require("./FrankfurterService");
const common_1 = require("@nestjs/common");
let FrankfurterModule = class FrankfurterModule {
};
FrankfurterModule = __decorate([
    (0, common_1.Module)({
        providers: [FrankfurterService_1.FrankfurterService, httpFrankfurterInstance_1.default],
        exports: [FrankfurterService_1.FrankfurterService]
    })
], FrankfurterModule);
exports.FrankfurterModule = FrankfurterModule;
//# sourceMappingURL=FrankfurterModule.js.map