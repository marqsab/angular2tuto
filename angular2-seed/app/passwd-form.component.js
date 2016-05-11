System.register(['angular2/core', 'angular2/common', './passwordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordValidators_1;
    var PasswdFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            PasswdFormComponent = (function () {
                function PasswdFormComponent(fb) {
                    this.form = fb.group({
                        oldPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        newPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(5)
                            ])],
                        confirmPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                            ])]
                    }, { validator: passwordValidators_1.PasswordValidators.shouldMatch });
                }
                // form = new ControlGroup({
                //   username: new Control('',Validators.required),
                //   password: new Control('',Validators.required)
                // });
                PasswdFormComponent.prototype.signup = function () {
                    // var result = authService.login(this.form.value);
                    this.form.find('oldPassword').setErrors({
                        invalidLogin: true
                    });
                    console.log(this.form.value);
                };
                PasswdFormComponent = __decorate([
                    core_1.Component({
                        selector: 'passwd-form',
                        templateUrl: 'app/passwd-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], PasswdFormComponent);
                return PasswdFormComponent;
            }());
            exports_1("PasswdFormComponent", PasswdFormComponent);
        }
    }
});
//# sourceMappingURL=passwd-form.component.js.map