System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorService;
    return {
        setters:[],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getAuthors = function () {
                    return [
                        { name: "auteur 1", ilike: false, totalLikes: 10 },
                        { name: "auteur 2", ilike: false, totalLikes: 5 },
                        { name: "auteur 3", ilike: true, totalLikes: 0 }
                    ];
                };
                return AuthorService;
            }());
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=author.service.js.map