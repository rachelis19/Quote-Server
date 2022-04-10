"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidCurrencyCode = void 0;
const class_validator_1 = require("class-validator");
let IsValidCurrencyCode = class IsValidCurrencyCode {
    validate(value, args) {
        return value.length != 3 ? false : true;
    }
    defaultMessage() {
        return 'Currency code ($value) is too short or too long!';
    }
};
IsValidCurrencyCode = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsValidCurrencyCode', async: false })
], IsValidCurrencyCode);
exports.IsValidCurrencyCode = IsValidCurrencyCode;
//# sourceMappingURL=QuoteRules.js.map