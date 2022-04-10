"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (amount) => {
    const convertedToStr = String(amount);
    const num = convertedToStr.replace(/(.+)\.([0-9]{1,3})/g, '');
};
//# sourceMappingURL=numberStrip.js.map