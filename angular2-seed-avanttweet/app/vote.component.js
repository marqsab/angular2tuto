System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.count = 0;
                    this.countVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.upVote = function () {
                    if (this.countVote == 1) {
                        return;
                    }
                    this.countVote += 1;
                    this.vote.emit({ myVote: this.countVote });
                };
                VoteComponent.prototype.downVote = function () {
                    if (this.countVote == -1) {
                        return;
                    }
                    this.countVote -= 1;
                    this.vote.emit({ myVote: this.countVote });
                };
                __decorate([
                    core_1.Input('initVote'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "count", void 0);
                __decorate([
                    core_1.Input('monVote'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "countVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n  <div class=\"vote\">\n  <i class=\"glyphicon glyphicon-menu-up vote-button\"\n  [class.highlighted]=\"countVote == 1\"\n  (click)=\"upVote()\"\n  ></i>\n  <span>{{count + countVote}}</span>\n  <i class=\"glyphicon glyphicon-menu-down vote-button\"\n  [class.highlighted]=\"countVote == -1\"\n  (click)=\"downVote()\"></i>\n  </div>",
                        styles: ["\n    .vote {\n      width: 20px;\n      color: #999;\n      text-align: center\n    }\n    .highlighted {\n      color: orange;\n    }\n    .vote-button{\n      cursor: pointer\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map