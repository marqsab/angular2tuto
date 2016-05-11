System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.shouldMatch = function (group) {
                    var newPassword = group.find(newPassword);
                    var confirmPassword = group.find(confirmPassword);
                    if (newPassword != confirmPassword) {
                        return { shouldMatch: true };
                    }
                    return null;
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map