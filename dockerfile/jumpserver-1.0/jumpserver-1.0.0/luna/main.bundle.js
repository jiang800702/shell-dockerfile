webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/BasicPage/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/BasicPage/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container loginColumns animated fadeInDown\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col col-md-6\">\n      <h2 class=\"font-bold\">欢迎使用Jumpserver开源跳板机</h2>\n      <p>\n        Jumpserver是一款使用Python, Django开发的开源跳板机系统, 助力互联网企业高效 用户、资产、权限、审计 管理\n      </p>\n      <p>\n        我们自五湖四海，我们对开源精神无比敬仰和崇拜，我们对完美、整洁、优雅 无止境的追求\n      </p>\n      <p>\n        专注自动化运维，努力打造 易用、稳定、安全、自动化 的跳板机, 这是我们的不懈的追求和动力\n      </p>\n      <p>\n        <small>永远年轻，永远热泪盈眶 stay foolish stay hungry</small>\n      </p>\n\n    </div>\n    <div class=\"col col-md-6\">\n      <div class=\"ibox-content\">\n        <div><img src=\"/static/imgs/logo.png\" width=\"82\" height=\"82\"> <span class=\"font-bold text-center\"\n                                                                            style=\"font-size: 32px; font-family: inherit\">登录</span>\n        </div>\n        <form class=\"m-t\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n          <p class=\"red-fonts\">* Please enter a correct Username and password. Note that both fields may be\n            case-sensitive.</p>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" required\n                   autofocus pattern=\"^\\w+$\" [(ngModel)]=\"User.username\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\"\n                   [(ngModel)]=\"User.password\" required (ngEnter)=\"onSubmit(f)\">\n          </div>\n          <!--<div>-->\n\n          <!--<img src=\"/captcha/image/c6fc850ce5a0c4d12e56e0ed2f02b55d1659a83a/\" alt=\"captcha\" class=\"captcha\"><input-->\n          <!--id=\"id_captcha_0\" name=\"captcha_0\" type=\"hidden\" value=\"c6fc850ce5a0c4d12e56e0ed2f02b55d1659a83a\">-->\n\n          <!--<div class=\"row\">-->\n          <!--<div class=\"col-sm-6\">-->\n          <!--<input autocomplete=\"off\" id=\"id_captcha_1\" class=\"form-control\" name=\"captcha_1\" placeholder=\"Captcha\"-->\n          <!--type=\"text\">-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--<br>-->\n          <!--</div>-->\n          <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\n\n          <a href=\"/users/password/forgot\">\n            <small>Forgot password?</small>\n          </a>\n\n          <p class=\"text-muted text-center\">\n          </p>\n        </form>\n        <p class=\"m-t\">\n        </p>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      Copyright Jumpserver.org\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <small>© 2014-2017</small>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/BasicPage/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery_min_js__ = __webpack_require__("./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 登陆页
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */





var LoginComponent = (function () {
    function LoginComponent(_appService, _http, _router, _logger) {
        this._appService = _appService;
        this._http = _http;
        this._router = _router;
        this._logger = _logger;
        this.DataStore = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */];
        this.User = __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */];
        this.loginBotton = 'login to your account';
        this._logger.log('login.ts:LoginComponent');
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].NavShow = false;
    }
    LoginComponent.prototype.onSubmit = function (f) {
        if (f.valid) {
            this.login();
        }
        else {
            this._logger.error('the form not valid');
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._logger.log('service.ts:AppService,login');
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].error['login'] = '';
        this._logger.log(__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */]);
        if (__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].username.length > 0 && __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].password.length > 6 && __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].password.length < 100) {
            this._http.check_login(JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */]))
                .subscribe(function (data) {
                __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].logined = data['logined'];
                __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].name = data['name'];
                __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].username = data['username'];
                __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].logined = data['logined'];
            }, function (err) {
                _this._logger.error(err);
                __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].logined = false;
                _this._router.navigate(['login']);
                __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].error['login'] = '后端错误,请重试';
                return '后端错误,请重试';
            }, function () {
                if (__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].logined) {
                    if (__WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery_min_js__["isEmptyObject"](__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Path)) {
                        _this._router.navigate(['welcome']);
                    }
                    else {
                        _this._router.navigate([__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Path['name'], __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Path['res']]);
                    }
                }
                else {
                    _this._router.navigate(['login']);
                    __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].error['login'] = '请检查用户名和密码';
                    return '请检查用户名和密码';
                }
                // jQuery('angular2').show();
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].error['login'] = '请检查用户名和密码';
            return '请检查用户名和密码';
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery_min_js__('#form').fadeIn('slow');
        // this._router.navigate(['login']);
        // jQuery('nav').hide();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/BasicPage/login/login.component.html"),
            styles: [__webpack_require__("./src/app/BasicPage/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/BasicPage/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/BasicPage/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center animated fadeInDown\">\n  <h1>404</h1>\n  <h3 class=\"font-bold\">Page Not Found</h3>\n\n  <div class=\"error-desc\">\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh\n    button on your browser or try found something else in our app.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/BasicPage/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* DataStore */].NavShow = false;
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/BasicPage/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/BasicPage/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/ControlPage/cleftbar/cleftbar.component.css":
/***/ (function(module, exports) {

module.exports = ":root {\n  font-family: \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n}\n\nlabel {\n  margin-bottom: 0;\n}\n\n.filetree {\n  padding-left: 20px;\n}\n\n.filetree input[type=\"checkbox\"] {\n  display: none;\n}\n\n.filetree input[type=checkbox] + label:before {\n  font-family: FontAwesome;\n  display: inline-block;\n}\n\n.filetree input[type=checkbox] + label:before {\n  content: \"\\f114\";\n  letter-spacing: 10px;\n  width: 30px;\n}\n\n.filetree input[type=checkbox]:checked + label:before {\n  content: \"\\f115\";\n}\n\n.filetree ul {\n  height: 0;\n  overflow: hidden;\n}\n\n.filetree > li input:checked ~ ul, .filetree > li ul.insearch {\n  height: auto;\n}\n\n.filetree li {\n  list-style: none;\n  cursor: pointer;\n  color: #ffffff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.filetree label {\n  line-height: 33px;\n  display: inline-block;\n}\n\n.search {\n  border-left-width: 0;\n  border-bottom: #19aa8d 2px inset;\n}\n\n.left-search {\n  padding-left: 14px;\n  width: 100%;\n  border: none;\n  height: 28px;\n  background: #2f2a2a;\n  color: #ffffff;\n}\n\n.footer {\n  background: #2f2a2a;\n  font-size: 9pt;\n  border-top-width: 1px;\n  left: 0;\n  padding: 1px 20px 0 20px;\n  position: absolute;\n}\n\n.fa.fa-undefined:before {\n  content: \"\\f26c\";\n}\n\n.overflow {\n  height: 100%;\n  overflow-y: scroll;\n  position: absolute;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/ControlPage/cleftbar/cleftbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\n  <div class=\"search\">\n    <input class=\"left-search\" placeholder=\" {{'Search'| trans }} ...\" maxlength=\"2048\" name=\"q\" autocomplete=\"off\"\n           title=\"Search\"\n           type=\"text\" tabindex=\"1\" spellcheck=\"false\" autofocus [(ngModel)]=\"q\" (keyup.enter)=\"Search(q)\">\n  </div>\n  <div class=\"overflow\">\n    <ul class=\"filetree\">\n      <li *ngFor=\"let hostGroup of HostGroups | SearchFilter: q; let i = index \">\n        <input type=\"checkbox\" id=\"hostgroup-{{i}}\">\n        <label for=\"hostgroup-{{i}}\" matTooltip=\"{{hostGroup.name}}\" [matTooltipPosition]=\"TooltipPosition\">{{hostGroup.name}}</label>\n        <ul [ngClass]=\"{'insearch': q }\">\n          <li *ngFor=\"let host of hostGroup.assets_granted | SearchFilter: q\" (click)=\"Connect(host)\"\n              (contextmenu)=\"onRightClick($event)\" matTooltip=\"{{host.hostname}}\"\n              [matTooltipPosition]=\"TooltipPosition\">\n            <i class=\"fa\" [ngClass]=\"'fa-'+(host.platform||'undefined').toLowerCase()\" id=\"fa-{{i}}\"></i>\n            {{host.hostname}}\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n</div>\n<div class=\"footer\">\n  Version <strong>{{version}}</strong>\n</div>\n<!--<app-element-server-menu></app-element-server-menu>-->\n"

/***/ }),

/***/ "./src/app/ControlPage/cleftbar/cleftbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Host */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleftbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CleftbarDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("./src/app/ControlPage/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_server_menu_server_menu_component__ = __webpack_require__("./src/app/elements/server-menu/server-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elements_dialog_dialog_service__ = __webpack_require__("./src/app/elements/dialog/dialog.service.ts");
/**
 * 控制页面的左边栏主机树状页
 *
 * 以树状方式列出所有主机
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var Host = (function () {
    function Host() {
    }
    return Host;
}());

var CleftbarComponent = (function () {
    function CleftbarComponent(_appService, _http, _search, _logger, _menu, _dialog, _layer) {
        this._appService = _appService;
        this._http = _http;
        this._search = _search;
        this._logger = _logger;
        this._menu = _menu;
        this._dialog = _dialog;
        this._layer = _layer;
        this.DataStore = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */];
        this.version = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* version */];
        this.clientX = 0;
        this.clientY = 0;
        this.TooltipPosition = 'above';
        this._logger.log('nav.ts:NavComponent');
        // this._appService.getnav()
    }
    CleftbarComponent.Reload = function () {
    };
    CleftbarComponent.Hide = function () {
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].leftbarshow = false;
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Nav.map(function (value, i) {
            value['children'].forEach(function (v, key) {
                if (__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Nav[i]['children'][key]['id'] === 'HideLeftManager') {
                    __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Nav[i]['children'][key] = {
                        'id': 'ShowLeftManager',
                        'click': 'ShowLeft',
                        'name': 'Show left manager'
                    };
                }
            });
        });
    };
    CleftbarComponent.Show = function () {
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].leftbarshow = true;
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Nav.map(function (value, i) {
            value['children'].forEach(function (v, key) {
                if (__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Nav[i]['children'][key]['id'] === 'ShowLeftManager') {
                    __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].Nav[i]['children'][key] = {
                        'id': 'HideLeftManager',
                        'click': 'HideLeft',
                        'name': 'Hide left manager'
                    };
                }
            });
        });
    };
    CleftbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get_my_asset_groups_assets()
            .subscribe(function (response) {
            _this.HostGroups = response;
            if (!__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].autologin) {
                _this.autologin();
            }
        });
    };
    CleftbarComponent.prototype.autologin = function () {
        var _this = this;
        var asset_id = this._appService.getQueryString('asset_id');
        var user_id = this._appService.getQueryString('user_id');
        var tag = false;
        if (asset_id) {
            for (var _i = 0, _a = this.HostGroups; _i < _a.length; _i++) {
                var g = _a[_i];
                if (g['assets_granted']) {
                    var _loop_1 = function (host) {
                        if (host.id.toString() === asset_id) {
                            if (user_id) {
                                host['system_users_granted'].forEach(function (user, kk) {
                                    if (user.id.toString() === user_id.toString()) {
                                        _this.login(host, user);
                                        tag = true;
                                        return;
                                    }
                                });
                            }
                            else {
                                this_1.Connect(host);
                                tag = true;
                                return { value: void 0 };
                            }
                        }
                    };
                    var this_1 = this;
                    for (var _b = 0, _c = g['assets_granted']; _b < _c.length; _b++) {
                        var host = _c[_b];
                        var state_1 = _loop_1(host);
                        if (typeof state_1 === "object")
                            return state_1.value;
                    }
                }
            }
            if (!tag) {
                this._layer.alert('Maybe you do not have permission on that host');
            }
        }
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].autologin = true;
    };
    CleftbarComponent.prototype.Connect = function (host) {
        var _this = this;
        // console.log(host);
        var user;
        if (host.system_users_granted.length > 1) {
            user = this.checkPriority(host.system_users_granted);
            if (user) {
                this.login(host, user);
            }
            else {
                var dialogRef = this._dialog.open(CleftbarDialogComponent, {
                    height: '200px',
                    width: '300px',
                    data: { users: host.system_users_granted }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result) {
                        for (var _i = 0, _a = host.system_users_granted; _i < _a.length; _i++) {
                            var i = _a[_i];
                            if (i.id.toString() === result.toString()) {
                                user = i;
                                break;
                            }
                        }
                        _this.login(host, user);
                    }
                });
            }
        }
        else if (host.system_users_granted.length === 1) {
            user = host.system_users_granted[0];
            this.login(host, user);
        }
    };
    CleftbarComponent.prototype.login = function (host, user) {
        var id = __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List.length - 1;
        if (user) {
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].nick = host.hostname;
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].connected = true;
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].edit = false;
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].closed = false;
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].host = host;
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].user = user;
            if (user.protocol === 'ssh') {
                __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].type = 'ssh';
            }
            else if (user.protocol === 'rdp') {
                __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List[id].type = 'rdp';
            }
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].List.push(new __WEBPACK_IMPORTED_MODULE_6__control_control_component__["c" /* View */]());
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["b" /* NavList */].Active = id;
        }
    };
    CleftbarComponent.prototype.checkPriority = function (sysUsers) {
        var priority = -1;
        var user;
        for (var _i = 0, sysUsers_1 = sysUsers; _i < sysUsers_1.length; _i++) {
            var u = sysUsers_1[_i];
            if (u.priority > priority) {
                user = u;
                priority = u.priority;
            }
            else if (u.priority === priority) {
                return null;
            }
        }
        return user;
    };
    CleftbarComponent.prototype.Search = function (q) {
        this._search.Search(q);
    };
    CleftbarComponent.prototype.onRightClick = function (event) {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
        // console.log(this.clientX, this.clientY);
        // this._menu.contextmenu(this.clientY, this.clientX);
    };
    CleftbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cleftbar',
            template: __webpack_require__("./src/app/ControlPage/cleftbar/cleftbar.component.html"),
            styles: [__webpack_require__("./src/app/ControlPage/cleftbar/cleftbar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_5__elements_server_menu_server_menu_component__["a" /* ElementServerMenuComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_5__elements_server_menu_server_menu_component__["a" /* ElementServerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__elements_dialog_dialog_service__["a" /* DialogService */]])
    ], CleftbarComponent);
    return CleftbarComponent;
}());

var CleftbarDialogComponent = (function () {
    function CleftbarDialogComponent(dialogRef, data, _logger) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._logger = _logger;
        this.UserSelectControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required]);
        this.compareFn = this.compareByValue;
    }
    CleftbarDialogComponent.prototype.ngOnInit = function () {
        this.selected = this.data.users[0].id;
        this.UserSelectControl.setValue(this.selected);
        // this._logger.debug(this.UserSelectControl);
    };
    CleftbarDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CleftbarDialogComponent.prototype.compareByValue = function (f1, f2) {
        return f1 && f2 && f1.value === f2.value;
    };
    CleftbarDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cleftbar-dialog',
            template: __webpack_require__("./src/app/ControlPage/cleftbar/dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */]])
    ], CleftbarDialogComponent);
    return CleftbarDialogComponent;
}());



/***/ }),

/***/ "./src/app/ControlPage/cleftbar/dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{\"Found\"|trans}} {{data.users.length}} {{\"Users \"|trans}}</h1>\n\n<mat-form-field>\n  <mat-select [(value)]=\"selected\"\n              [compareWith]=\"compareFn\"\n              [formControl]=\"UserSelectControl\"\n              placeholder=\"{{'Choose a User'|trans}}\" required>\n    <mat-option *ngFor=\"let u of data.users\" value=\"{{u.id}}\">{{u.name}}</mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"UserSelectControl.hasError('required')\">{{\"Please choose a User\"|trans}}</mat-error>\n\n</mat-form-field>\n<div style=\"float: right\">\n  <button mat-raised-button (click)=\"onNoClick()\">{{\"Cancel\"|trans}}</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"selected\" cdkFocusInitial>{{\"Confirm\"|trans}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/ControlPage/control/control.component.css":
/***/ (function(module, exports) {

module.exports = "div, app-element-term, app-element-iframe {\n  height: 100%;\n  padding-bottom: 30px;\n}\n\ndiv {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n"

/***/ }),

/***/ "./src/app/ControlPage/control/control.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlnav></app-controlnav>\n<div *ngFor=\"let m of NavList.List;let i=index\"\n     [ngClass]=\"{'active':i==NavList.Active}\"\n>\n  <app-element-term [host]=\"m.host\"\n                    [userid]=\"m.user.id\"\n                    [index]=\"i\"\n                    *ngIf=\"m.type=='ssh'\">\n  </app-element-term>\n  <app-element-guacamole [host]=\"m.host\"\n                      [userid]=\"m.user.id\"\n                      [index]=\"i\"\n                      *ngIf=\"m.type=='rdp'\">\n  </app-element-guacamole>\n</div>\n"

/***/ }),

/***/ "./src/app/ControlPage/control/control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
/**
 * 控制页面
 *
 * 主管已连接的主机标签卡，各连接方式的web展现（WebTerminal、RDP、VNC等）
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// export class Term {
//   machine: string;
//   socket: any;
//   term: any;
// }
var View = (function () {
    function View() {
    }
    return View;
}());

var NavList = {
    List: [new View()],
    Active: 0,
};
var ControlComponent = (function () {
    function ControlComponent() {
        this.NavList = NavList;
    }
    ControlComponent_1 = ControlComponent;
    ControlComponent.active = function (id) {
        NavList.List.forEach(function (v, k) {
            v.hide = id.toString() !== k;
        });
        NavList.Active = id;
    };
    ControlComponent.TerminalDisconnect = function (id) {
        if (NavList.List[id].connected) {
            NavList.List[id].connected = false;
            NavList.List[id].Term.write('\r\n\x1b[31mBye Bye!\x1b[m\r\n');
            __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('logout', NavList.List[id].room);
        }
    };
    ControlComponent.RdpDisconnect = function (id) {
        NavList.List[id].connected = false;
    };
    ControlComponent.DisconnectAll = function () {
        alert('DisconnectAll');
        for (var i = 0; i < NavList.List.length; i++) {
            ControlComponent_1.TerminalDisconnect(i);
        }
    };
    ControlComponent.prototype.ngOnInit = function () {
    };
    ControlComponent = ControlComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-control',
            template: __webpack_require__("./src/app/ControlPage/control/control.component.html"),
            styles: [__webpack_require__("./src/app/ControlPage/control/control.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlComponent);
    return ControlComponent;
    var ControlComponent_1;
}());



/***/ }),

/***/ "./src/app/ControlPage/control/controlnav/controlnav.component.css":
/***/ (function(module, exports) {

module.exports = ".tabs {\n  height: 30px;\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n\n.tabs ul li.disconnected {\n  background-color: darkgray;\n}\n\n.tabs ul li.hidden {\n  display: none;\n}\n\n.tabs ul {\n  list-style-type: none;\n  height: 30px;\n  background-color: #3a3333;\n  display: block;\n  min-width: 100%;\n  padding-left: 0;\n}\n\n.tabs ul li {\n  display: inline-table;\n  width: 150px;\n  height: 30px;\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;;\n}\n\n.tabs ul li.active {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 5px solid #19aa8d !important;\n}\n\n.tabs ul li span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: gray;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  text-decoration: none;\n  padding: 8px 20px 6px 15px;\n  cursor: default;\n  width: 115px;\n  height: 21px;\n}\n\n.tabs ul li a.close {\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  position: absolute;\n  color: gray;\n  top: 0;\n  right: 5px;\n  cursor: pointer;\n  line-height: 26px;\n  display: inline-block;\n}\n\n.tabs ul li.active a {\n  color: white;\n}\n\n.tabs ul li.active span {\n  padding: 5px 20px 4px 15px;\n  color: white;\n  height: 18px;\n}\n\n.tabs ul li input {\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  width: 115px;\n  border: none;\n  background-color: inherit;\n  color: white;\n  padding: 5px 20px 4px 15px;\n  height: 18px;\n}\n\n/*\n *  scrollbar\n */\n\n.tabs::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #676a6c;\n}\n\n.tabs::-webkit-scrollbar {\n  height: 2px;\n}\n\n.tabs::-webkit-scrollbar-thumb {\n  background-color: #F5F5F5;\n}\n\n.scroll-botton {\n  font-size: 20px;\n  float: left;\n  height: 30px;\n  overflow: hidden;\n  background-color: #3a3333;\n  color: white\n}\n"

/***/ }),

/***/ "./src/app/ControlPage/control/controlnav/controlnav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-botton\">\n  &nbsp; <a class=\"left\" (click)=\"scrollleft()\"><i class=\"fa fa-caret-left\"></i></a>\n  &nbsp;\n  <a class=\"right\" (click)=\"scrollright()\"><i class=\"fa fa-caret-right\"></i></a>\n  &nbsp;\n</div>\n<div class=\"tabs\">\n  <ul [ngStyle]=\"{'width':150*NavList.List.length+'px'}\">\n    <li *ngFor=\"let m of NavList.List;let i = index\"\n        [ngClass]=\"{'active':i==NavList.Active,'disconnected':!m.connected, 'hidden': m.closed != false}\"\n        id=\"termnav-{{i}}\" (click)=\"setActive(i)\" (dblclick)=\"m.edit=true;setActive(i)\">\n      <span *ngIf=\"!m.edit\">{{m.nick}}</span>\n      <input *ngIf=\"m.edit\" [(ngModel)]=\"m.nick\" (blur)=\"m.edit=false\" (keyup.enter)=\"m.edit=false\" autofocus=\"true\"/>\n      <a class=\"close\" (click)=\"close(m,i)\">&times;</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/ControlPage/control/controlnav/controlnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js__ = __webpack_require__("./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js__);
/**
 * 控制页面的已连接主机选项卡
 *
 * 展示所有已连接的主机
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlnavComponent = (function () {
    function ControlnavComponent() {
        this.setActive = ControlnavComponent_1.setActive;
        this.NavList = __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */];
    }
    ControlnavComponent_1 = ControlnavComponent;
    ControlnavComponent.checkActive = function (index) {
        var len = __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List.length;
        if (len === 1) {
            // 唯一一个
            __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].Active = 0;
        }
        else if (len - 1 === index) {
            // 删了最后一个
            __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].Active = len - 2;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].Active = index;
        }
        ControlnavComponent_1.setActive(__WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].Active);
    };
    ControlnavComponent.setActive = function (index) {
        __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List.forEach(function (value, key) {
            __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[key].hide = true;
        });
        __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[index].hide = false;
        __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].Active = index;
        if (!__WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[index].edit) {
            if (__WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[index].type === 'ssh') {
                __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[index].Term.focus();
            }
            else if (__WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[index].type === 'rdp') {
                __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List[index].Rdp.focus();
            }
        }
        else {
        }
    };
    ControlnavComponent.prototype.ngOnInit = function () {
    };
    ControlnavComponent.prototype.close = function (host, index) {
        if (host.type === 'rdp') {
            __WEBPACK_IMPORTED_MODULE_1__control_component__["a" /* ControlComponent */].RdpDisconnect(index);
        }
        else if (host.type === 'ssh') {
            __WEBPACK_IMPORTED_MODULE_1__control_component__["a" /* ControlComponent */].TerminalDisconnect(index);
        }
        __WEBPACK_IMPORTED_MODULE_1__control_component__["b" /* NavList */].List.splice(index, 1);
        ControlnavComponent_1.checkActive(index);
    };
    ControlnavComponent.prototype.scrollleft = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js__('.tabs').scrollLeft(__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js__('.tabs').scrollLeft() - 100);
    };
    ControlnavComponent.prototype.scrollright = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js__('.tabs').scrollLeft(__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery_min_js__('.tabs').scrollLeft() + 100);
    };
    ControlnavComponent = ControlnavComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controlnav',
            template: __webpack_require__("./src/app/ControlPage/control/controlnav/controlnav.component.html"),
            styles: [__webpack_require__("./src/app/ControlPage/control/controlnav/controlnav.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ControlnavComponent);
    return ControlnavComponent;
    var ControlnavComponent_1;
}());



/***/ }),

/***/ "./src/app/ControlPage/controlpage.component.css":
/***/ (function(module, exports) {

module.exports = "div, term-leftbar, term-body {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n}\n\ndiv {\n  background-color: black;\n  margin: 0;\n  padding-top: 30px;\n  position: initial;\n}\n\napp-cleftbar {\n  padding: 0;\n  background: #2f2a2a;\n  color: #d6cbcb;\n}\n\napp-control {\n  padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/ControlPage/controlpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n  <app-cleftbar class=\"col-md-2\" *ngIf=\"DataStore.leftbarshow\"></app-cleftbar>\n  <app-control [ngClass]=\"{'col-md-10':DataStore.leftbarshow,'col-md-12':!DataStore.leftbarshow}\"></app-control>\n</div>\n"

/***/ }),

/***/ "./src/app/ControlPage/controlpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 控制页面
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */


var ControlPageComponent = (function () {
    function ControlPageComponent() {
        this.DataStore = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* DataStore */];
        this.User = __WEBPACK_IMPORTED_MODULE_1__globals__["f" /* User */];
    }
    ControlPageComponent.prototype.ngOnInit = function () {
    };
    ControlPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controllpage',
            template: __webpack_require__("./src/app/ControlPage/controlpage.component.html"),
            styles: [__webpack_require__("./src/app/ControlPage/controlpage.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ControlPageComponent);
    return ControlPageComponent;
}());



/***/ }),

/***/ "./src/app/ControlPage/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".left-search {\n  padding-left: 14px;\n  width: 100%;\n  border: none;\n}\n"

/***/ }),

/***/ "./src/app/ControlPage/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<input class=\"left-search\" placeholder=\" Search ...\" maxlength=\"2048\" name=\"q\" autocomplete=\"off\"\n       title=\"Search\"\n       type=\"text\" tabindex=\"1\" spellcheck=\"false\" autofocus [(ngModel)]=\"q\" (keyup.enter)=\"Search(q)\"\n       (ngModelChange)=\"modelChange($event)\">\n"

/***/ }),

/***/ "./src/app/ControlPage/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Q */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 控制页面的搜索框
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */


var Q = '';
var SearchComponent = (function () {
    function SearchComponent(_appService, _http, _logger) {
        this._appService = _appService;
        this._http = _http;
        this._logger = _logger;
        this._logger.log('LeftbarComponent.ts:SearchBar');
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        Q = changes.input.currentValue;
    };
    SearchComponent.prototype.modelChange = function ($event) {
        this.Search(Q);
    };
    SearchComponent.prototype.Search = function (q) {
        var _this = this;
        if (this.searchrequest) {
            this.searchrequest.unsubscribe();
        }
        this.searchrequest = this._http.search(q)
            .subscribe(function (data) {
            _this._logger.log(data);
        }, function (err) {
            _this._logger.error(err);
        }, function () {
        });
        this._logger.log(q);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "input", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/ControlPage/search/search.component.html"),
            styles: [__webpack_require__("./src/app/ControlPage/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */]])
    ], SearchComponent);
    return SearchComponent;
}());

var SearchFilter = (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                // ToDo: search with a simple SQL like language, and a bug search a group's hosts
                return JSON.stringify(el).toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    SearchFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'SearchFilter' })
    ], SearchFilter);
    return SearchFilter;
}());



/***/ }),

/***/ "./src/app/IndexPage/ileftbar/ileftbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/IndexPage/ileftbar/ileftbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ileftbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/IndexPage/ileftbar/ileftbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IleftbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 主页的左边栏
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */


var IleftbarComponent = (function () {
    function IleftbarComponent(_appService, _logger) {
        this._appService = _appService;
        this._logger = _logger;
        this._logger.log('nav.ts:NavComponent');
        // this._appService.getnav()
    }
    IleftbarComponent.prototype.ngOnInit = function () {
    };
    IleftbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ileftbar',
            template: __webpack_require__("./src/app/IndexPage/ileftbar/ileftbar.component.html"),
            styles: [__webpack_require__("./src/app/IndexPage/ileftbar/ileftbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */]])
    ], IleftbarComponent);
    return IleftbarComponent;
}());



/***/ }),

/***/ "./src/app/IndexPage/index-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/IndexPage/index-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"User.logined\">\n\n  <div class=\"row row-offcanvas row-offcanvas-right\">\n\n    <div class=\"col-12 col-md-9\">\n      <p class=\"float-right hidden-md-up\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"offcanvas\">Toggle nav</button>\n      </p>\n      <div class=\"jumbotron\">\n        <h1>Hello, world! {{User.username}}</h1>\n        <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some\n          responsive-range viewport sizes to see it in action.</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n        </div><!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n        </div><!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n        </div><!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n        </div><!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n        </div><!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n        </div><!--/span-->\n      </div><!--/row-->\n    </div><!--/span-->\n\n    <div class=\"col-6 col-md-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item active\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n      </div>\n    </div><!--/span-->\n  </div><!--/row-->\n\n  <hr>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/IndexPage/index-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 主页
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */


var IndexPageComponent = (function () {
    function IndexPageComponent() {
        this.User = __WEBPACK_IMPORTED_MODULE_1__globals__["f" /* User */];
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    IndexPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index-page',
            template: __webpack_require__("./src/app/IndexPage/index-page.component.html"),
            styles: [__webpack_require__("./src/app/IndexPage/index-page.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/MaterialModule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasicPage_not_found_not_found_component__ = __webpack_require__("./src/app/BasicPage/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ControlPage_controlpage_component__ = __webpack_require__("./src/app/ControlPage/controlpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__replay_page_replay_page_component__ = __webpack_require__("./src/app/replay-page/replay-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__monitor_page_monitor_page_component__ = __webpack_require__("./src/app/monitor-page/monitor-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blank_page_blank_page_component__ = __webpack_require__("./src/app/blank-page/blank-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connect_page_connect_page_component__ = __webpack_require__("./src/app/connect-page/connect-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * app路由
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */









var appRoutes = [
    // {path: 'users/login', component: LoginComponent},
    { path: 'replay/:token', component: __WEBPACK_IMPORTED_MODULE_5__replay_page_replay_page_component__["a" /* ReplayPageComponent */] },
    { path: 'monitor/:token', component: __WEBPACK_IMPORTED_MODULE_6__monitor_page_monitor_page_component__["a" /* MonitorPageComponent */] },
    // {path: 'test', component: TestPageComponent},
    { path: 'connect', component: __WEBPACK_IMPORTED_MODULE_8__connect_page_connect_page_component__["a" /* ConnectPageComponent */] },
    // {path: 'setting', component: SettingPageComponent},
    { path: 'undefined', component: __WEBPACK_IMPORTED_MODULE_7__blank_page_blank_page_component__["a" /* BlankPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__ControlPage_controlpage_component__["a" /* ControlPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__BasicPage_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: !__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\napp-element-nav {\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  left: 0;\n  height: 30px;\n  width: 100%;\n  color: #323a4e;\n  background-color: #463e3e;\n  background-repeat: no-repeat;\n  background-position: 100% 50%;\n  z-index: 5;\n  -webkit-transition: background 0.2s ease-out;\n  transition: background 0.2s ease-out;\n}\n\nnav {\n  height: 30px;\n  width: 100%;\n}\n\napp-element-interactive {\n  position: absolute;\n  display: inline-block;\n  bottom: 120px;\n  left: 100px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n<app-element-nav *ngIf=\"DataStore.NavShow\"></app-element-nav>\n<router-outlet></router-outlet>\n<!--<app-element-interactive></app-element-interactive>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 控制主页
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */


var AppComponent = (function () {
    function AppComponent() {
        this.DataStore = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* DataStore */];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_logger__ = __webpack_require__("./node_modules/ngx-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elements_dialog_dialog_service__ = __webpack_require__("./src/app/elements/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__elements_footer_footer_component__ = __webpack_require__("./src/app/elements/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elements_term_term_component__ = __webpack_require__("./src/app/elements/term/term.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__elements_interactive_interactive_component__ = __webpack_require__("./src/app/elements/interactive/interactive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__elements_nav_nav_component__ = __webpack_require__("./src/app/elements/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_popup_popup_component__ = __webpack_require__("./src/app/elements/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elements_rdp_rdp_component__ = __webpack_require__("./src/app/elements/rdp/rdp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__elements_server_menu_server_menu_component__ = __webpack_require__("./src/app/elements/server-menu/server-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__elements_iframe_iframe_component__ = __webpack_require__("./src/app/elements/iframe/iframe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__elements_elfinder_elfinder_component__ = __webpack_require__("./src/app/elements/elfinder/elfinder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__BasicPage_login_login_component__ = __webpack_require__("./src/app/BasicPage/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__IndexPage_ileftbar_ileftbar_component__ = __webpack_require__("./src/app/IndexPage/ileftbar/ileftbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ControlPage_search_search_component__ = __webpack_require__("./src/app/ControlPage/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ControlPage_cleftbar_cleftbar_component__ = __webpack_require__("./src/app/ControlPage/cleftbar/cleftbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ControlPage_control_control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ControlPage_control_controlnav_controlnav_component__ = __webpack_require__("./src/app/ControlPage/control/controlnav/controlnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ControlPage_controlpage_component__ = __webpack_require__("./src/app/ControlPage/controlpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__IndexPage_index_page_component__ = __webpack_require__("./src/app/IndexPage/index-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__BasicPage_not_found_not_found_component__ = __webpack_require__("./src/app/BasicPage/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__replay_page_replay_page_component__ = __webpack_require__("./src/app/replay-page/replay-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__replay_page_mp4_mp4_component__ = __webpack_require__("./src/app/replay-page/mp4/mp4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__replay_page_json_json_component__ = __webpack_require__("./src/app/replay-page/json/json.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_pipe__ = __webpack_require__("./src/app/app.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__monitor_page_monitor_page_component__ = __webpack_require__("./src/app/monitor-page/monitor-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__monitor_page_linux_linux_component__ = __webpack_require__("./src/app/monitor-page/linux/linux.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__monitor_page_windows_windows_component__ = __webpack_require__("./src/app/monitor-page/windows/windows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__test_page_test_page_component__ = __webpack_require__("./src/app/test-page/test-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__blank_page_blank_page_component__ = __webpack_require__("./src/app/blank-page/blank-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__MaterialModule_component__ = __webpack_require__("./src/app/MaterialModule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__elements_table_table_component__ = __webpack_require__("./src/app/elements/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__setting_page_setting_page_component__ = __webpack_require__("./src/app/setting-page/setting-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__elements_leftbar_leftbar_component__ = __webpack_require__("./src/app/elements/leftbar/leftbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__elements_ofooter_ofooter_component__ = __webpack_require__("./src/app/elements/ofooter/ofooter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__setting_page_basic_basic_component__ = __webpack_require__("./src/app/setting-page/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__setting_page_email_email_component__ = __webpack_require__("./src/app/setting-page/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__setting_page_ldap_ldap_component__ = __webpack_require__("./src/app/setting-page/ldap/ldap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__setting_page_terminal_terminal_component__ = __webpack_require__("./src/app/setting-page/terminal/terminal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__setting_page_s3_s3_component__ = __webpack_require__("./src/app/setting-page/s3/s3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__trans_pipe__ = __webpack_require__("./src/app/trans.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__elements_guacamole_guacamole_component__ = __webpack_require__("./src/app/elements/guacamole/guacamole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__connect_page_connect_page_component__ = __webpack_require__("./src/app/connect-page/connect-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * app 模块
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */


 // <-- NgModel lives here





// service


// Elements









// pages



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_35_ngx_progressbar__["a" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_38__MaterialModule_component__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_logger__["a" /* LoggerModule */].forRoot({ serverLoggingUrl: '/api/logs', level: __WEBPACK_IMPORTED_MODULE_3_ngx_logger__["c" /* NgxLoggerLevel */].DEBUG, serverLogLevel: __WEBPACK_IMPORTED_MODULE_3_ngx_logger__["c" /* NgxLoggerLevel */].ERROR }),
                __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__elements_nav_nav_component__["a" /* ElementNavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__elements_footer_footer_component__["a" /* ElementFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__elements_popup_popup_component__["a" /* ElementPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__elements_term_term_component__["a" /* ElementTermComponent */],
                __WEBPACK_IMPORTED_MODULE_12__elements_interactive_interactive_component__["a" /* ElementInteractiveComponent */],
                __WEBPACK_IMPORTED_MODULE_15__elements_rdp_rdp_component__["a" /* ElementRdpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__elements_server_menu_server_menu_component__["a" /* ElementServerMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_17__elements_iframe_iframe_component__["a" /* ElementIframeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__elements_dialog_dialog_service__["b" /* ElementDialogAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_41__elements_table_table_component__["a" /* ElementTableComponent */],
                __WEBPACK_IMPORTED_MODULE_43__elements_leftbar_leftbar_component__["a" /* ElementLeftbarComponent */],
                __WEBPACK_IMPORTED_MODULE_44__elements_ofooter_ofooter_component__["a" /* ElementOfooterComponent */],
                __WEBPACK_IMPORTED_MODULE_52__elements_guacamole_guacamole_component__["a" /* ElementGuacamoleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__elements_elfinder_elfinder_component__["a" /* ElementElfinderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__BasicPage_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__ControlPage_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__ControlPage_search_search_component__["b" /* SearchFilter */],
                __WEBPACK_IMPORTED_MODULE_20__IndexPage_ileftbar_ileftbar_component__["a" /* IleftbarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__ControlPage_cleftbar_cleftbar_component__["a" /* CleftbarComponent */], __WEBPACK_IMPORTED_MODULE_22__ControlPage_cleftbar_cleftbar_component__["b" /* CleftbarDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ControlPage_control_control_component__["a" /* ControlComponent */],
                __WEBPACK_IMPORTED_MODULE_24__ControlPage_control_controlnav_controlnav_component__["a" /* ControlnavComponent */],
                __WEBPACK_IMPORTED_MODULE_25__ControlPage_controlpage_component__["a" /* ControlPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__IndexPage_index_page_component__["a" /* IndexPageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__BasicPage_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_28__replay_page_replay_page_component__["a" /* ReplayPageComponent */],
                __WEBPACK_IMPORTED_MODULE_29__replay_page_mp4_mp4_component__["a" /* Mp4Component */],
                __WEBPACK_IMPORTED_MODULE_30__replay_page_json_json_component__["a" /* JsonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__app_pipe__["a" /* UtcDatePipe */],
                __WEBPACK_IMPORTED_MODULE_32__monitor_page_monitor_page_component__["a" /* MonitorPageComponent */],
                __WEBPACK_IMPORTED_MODULE_33__monitor_page_linux_linux_component__["a" /* LinuxComponent */],
                __WEBPACK_IMPORTED_MODULE_34__monitor_page_windows_windows_component__["a" /* WindowsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__test_page_test_page_component__["a" /* TestPageComponent */],
                __WEBPACK_IMPORTED_MODULE_37__blank_page_blank_page_component__["a" /* BlankPageComponent */],
                __WEBPACK_IMPORTED_MODULE_42__setting_page_setting_page_component__["a" /* SettingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_45__setting_page_basic_basic_component__["a" /* SettingPageBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_46__setting_page_email_email_component__["a" /* SettingPageEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_47__setting_page_ldap_ldap_component__["a" /* SettingPageLdapComponent */],
                __WEBPACK_IMPORTED_MODULE_48__setting_page_terminal_terminal_component__["a" /* SettingPageTerminalComponent */],
                __WEBPACK_IMPORTED_MODULE_49__setting_page_s3_s3_component__["a" /* SettingPageS3Component */],
                __WEBPACK_IMPORTED_MODULE_50__trans_pipe__["a" /* TransPipe */],
                __WEBPACK_IMPORTED_MODULE_53__connect_page_connect_page_component__["a" /* ConnectPageComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__ControlPage_cleftbar_cleftbar_component__["b" /* CleftbarDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__elements_dialog_dialog_service__["b" /* ElementDialogAlertComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            providers: [
                // {provide: LoggerConfig, useValue: {level: LoggerLevel.WARN}},
                // {provide: BrowserXhr, useClass: NgProgressBrowserXhr},
                __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_8__app_service__["b" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_8__app_service__["d" /* LogService */],
                __WEBPACK_IMPORTED_MODULE_8__app_service__["e" /* UUIDService */],
                __WEBPACK_IMPORTED_MODULE_8__app_service__["c" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_9__elements_dialog_dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_39_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_logger__["b" /* NGXLogger */],
                { provide: __WEBPACK_IMPORTED_MODULE_51__angular_material__["b" /* MAT_LABEL_GLOBAL_OPTIONS */], useValue: { float: 'always' } }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtcDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtcDatePipe = (function () {
    function UtcDatePipe() {
    }
    UtcDatePipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        var dateValue = new Date(value);
        var dateWithNoTimezone = new Date(dateValue.getUTCFullYear(), dateValue.getUTCMonth(), dateValue.getUTCDate(), dateValue.getUTCHours(), dateValue.getUTCMinutes(), dateValue.getUTCSeconds());
        return dateWithNoTimezone;
    };
    UtcDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'utcDate'
        })
    ], UtcDatePipe);
    return UtcDatePipe;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LocalStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UUIDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_logger__ = __webpack_require__("./node_modules/ngx-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_uuid_js_lib_uuid_js__ = __webpack_require__("./node_modules/uuid-js/lib/uuid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_uuid_js_lib_uuid_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_uuid_js_lib_uuid_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 后台控制
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */










var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]();
    }
    HttpService.prototype.get = function (url, options) {
        return this.http.get(url, options);
    };
    HttpService.prototype.post = function (url, options) {
        return this.http.post(url, options);
    };
    HttpService.prototype.put = function (url, options) {
        return this.http.put(url, options);
    };
    HttpService.prototype.delete = function (url, options) {
        return this.http.delete(url, options);
    };
    HttpService.prototype.patch = function (url, options) {
        return this.http.patch(url, options);
    };
    HttpService.prototype.head = function (url, options) {
        return this.http.head(url, options);
    };
    HttpService.prototype.options = function (url, options) {
        return this.http.options(url, options);
    };
    HttpService.prototype.report_browser = function () {
        return this.http.post('/api/browser', JSON.stringify(__WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Browser */]));
    };
    HttpService.prototype.check_login = function (user) {
        return this.http.post('/api/checklogin', user);
    };
    HttpService.prototype.get_user_profile = function () {
        return this.http.get('/api/users/v1/profile/');
    };
    HttpService.prototype.get_my_asset_groups_assets = function () {
        return this.http.get('/api/perms/v1/user/nodes-assets/');
    };
    HttpService.prototype.get_guacamole_token = function (user_id, authToken) {
        var body = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpParams */]()
            .set('username', user_id)
            .set('password', 'jumpserver')
            .set('asset_token', authToken);
        //  {
        // "authToken": "xxxxxxx",
        // "username": "xxxxxx",
        // "dataSource": "jumpserver",
        // "availableDataSources":[
        // "jumpserver"
        // ]
        // }
        return this.http.post('/guacamole/api/tokens', body.toString(), { headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded') });
    };
    HttpService.prototype.guacamole_add_asset = function (user_id, asset_id, system_user_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpParams */]()
            .set('user_id', user_id)
            .set('asset_id', asset_id)
            .set('system_user_id', system_user_id)
            .set('token', __WEBPACK_IMPORTED_MODULE_5__globals__["b" /* DataStore */].guacamole_token);
        return this.http.get('/guacamole/api/session/ext/jumpserver/asset/add', {
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            params: params
        });
    };
    HttpService.prototype.guacamole_token_add_asset = function (assetToken, token) {
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpParams */]()
            .set('asset_token', assetToken)
            .set('token', token);
        return this.http.get('/guacamole/api/ext/jumpserver/asset/token/add', {
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            params: params
        });
    };
    HttpService.prototype.search = function (q) {
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpParams */]()
            .set('q', q);
        return this.http.get('/api/search', { params: params });
    };
    HttpService.prototype.get_replay = function (token) {
        return this.http.get('/api/terminal/v1/sessions/' + token + '/replay');
    };
    HttpService.prototype.get_user_id_from_token = function (token) {
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpParams */]()
            .set('user-only', '1')
            .set('token', token);
        return this.http.get('/api/users/v1/connection-token/', { params: params });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

var LogService = (function () {
    function LogService(_logger) {
        this._logger = _logger;
        // 0.- Level.OFF
        // 1.- Level.ERROR
        // 2.- Level.WARN
        // 3.- Level.INFO
        // 4.- Level.DEBUG
        // 5.- Level.LOG
        this.level = 4;
    }
    LogService.prototype.log = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        if (this.level > 4) {
            (_a = this._logger).log.apply(_a, [message].concat(additional));
        }
        var _a;
    };
    LogService.prototype.debug = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        if (this.level > 3) {
            (_a = this._logger).debug.apply(_a, [message].concat(additional));
        }
        var _a;
    };
    LogService.prototype.info = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        if (this.level > 2) {
            (_a = this._logger).info.apply(_a, [message].concat(additional));
        }
        var _a;
    };
    LogService.prototype.warn = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        if (this.level > 1) {
            (_a = this._logger).warn.apply(_a, [message].concat(additional));
        }
        var _a;
    };
    LogService.prototype.error = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        if (this.level > 0) {
            (_a = this._logger).error.apply(_a, [message].concat(additional));
        }
        var _a;
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ngx_logger__["b" /* NGXLogger */]])
    ], LogService);
    return LogService;
}());

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.set = function (key, value) {
        return localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.delete = function (key) {
        return localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());

var AppService = (function () {
    function AppService(_http, _router, _logger, _cookie, _localStorage) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this._logger = _logger;
        this._cookie = _cookie;
        this._localStorage = _localStorage;
        if (this._cookie.get('loglevel')) {
            // 0.- Level.OFF
            // 1.- Level.ERROR
            // 2.- Level.WARN
            // 3.- Level.INFO
            // 4.- Level.DEBUG
            // 5.- Level.LOG
            this._logger.level = parseInt(this._cookie.get('loglevel'), 10);
            // this._logger.debug('Your debug stuff');
            // this._logger.info('An info');
            // this._logger.warn('Take care ');
            // this._logger.error('Too late !');
            // this._logger.log('log !');
        }
        else {
            this._cookie.set('loglevel', '0', 99, '/', document.domain);
            // this._logger.level = parseInt(Cookie.getCookie('loglevel'));
            this._logger.level = 0;
        }
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            this._logger.level = 2;
            this.checklogin();
        }
        if (this._cookie.get('lang')) {
            this.lang = this._cookie.get('lang');
        }
        else {
            this.lang = window.navigator.languages ? window.navigator.languages[0] : 'cn';
            this._cookie.set('lang', this.lang);
        }
        if (this.lang !== 'en') {
            this._http.get('/luna/i18n/' + this.lang + '.json').subscribe(function (data) {
                _this._localStorage.set('lang', JSON.stringify(data));
            });
        }
        var l = this._localStorage.get('lang');
        if (l) {
            var data_1 = JSON.parse(l);
            Object.keys(data_1).forEach(function (k, _) {
                __WEBPACK_IMPORTED_MODULE_5__globals__["h" /* i18n */].set(k, data_1[k]);
            });
        }
    }
    AppService.prototype.ngOnInit = function () {
    };
    AppService.prototype.checklogin = function () {
        var _this = this;
        this._logger.log('service.ts:AppService,checklogin');
        if (__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* DataStore */].Path) {
            if (__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* DataStore */].Path['name'] === 'FOF' || __WEBPACK_IMPORTED_MODULE_5__globals__["b" /* DataStore */].Path['name'] === 'Forgot') {
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].logined) {
                    if (document.location.pathname === '/login') {
                        this._router.navigate(['']);
                    }
                    else {
                        this._router.navigate([document.location.pathname]);
                    }
                    // jQuery('angular2').show();
                }
                else if (document.location.pathname === '/luna/connect') {
                    __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].logined = true;
                }
                else {
                    this._http.get_user_profile()
                        .subscribe(function (data) {
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].id = data['id'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].name = data['name'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].username = data['username'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].email = data['email'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].is_active = data['is_active'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].is_superuser = data['is_superuser'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].role = data['role'];
                        // User.groups = data['groups'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].wechat = data['wechat'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].comment = data['comment'];
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].date_expired = data['date_expired'];
                        if (data['phone']) {
                            __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].phone = data['phone'].toString();
                        }
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].logined = data['logined'];
                        _this._logger.debug(__WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */]);
                        _this._localStorage.set('user', data['id']);
                    }, function (err) {
                        // this._logger.error(err);
                        __WEBPACK_IMPORTED_MODULE_5__globals__["f" /* User */].logined = false;
                        window.location.href = document.location.origin + '/users/login?next=' +
                            document.location.pathname + document.location.search;
                        // this._router.navigate(['login']);
                    });
                }
            }
        }
        else {
            this._router.navigate(['FOF']);
            // jQuery('angular2').show();
        }
    };
    AppService.prototype.browser = function () {
        this._http.report_browser();
    };
    AppService.prototype.getQueryString = function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [HttpService,
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            LogService,
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */],
            LocalStorageService])
    ], AppService);
    return AppService;
}());

var UUIDService = (function () {
    function UUIDService() {
    }
    UUIDService.prototype.gen = function () {
        return __WEBPACK_IMPORTED_MODULE_9_uuid_js_lib_uuid_js__["create"]()['hex'];
    };
    UUIDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UUIDService);
    return UUIDService;
}());



/***/ }),

/***/ "./src/app/blank-page/blank-page.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blank-page/blank-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blank-page/blank-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlankPageComponent = (function () {
    function BlankPageComponent() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* DataStore */].NavShow = false;
    }
    BlankPageComponent.prototype.ngOnInit = function () {
    };
    BlankPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__("./src/app/blank-page/blank-page.component.html"),
            styles: [__webpack_require__("./src/app/blank-page/blank-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/connect-page/connect-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-element-term\n  [token]=\"token\"\n  [index]=\"0\"\n  *ngIf=\"system =='linux'\">\n</app-element-term>\n<app-element-guacamole\n  [target]=\"target\"\n  [index]=\"0\"\n  *ngIf=\"system=='windows' && target\">\n</app-element-guacamole>\n"

/***/ }),

/***/ "./src/app/connect-page/connect-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connect-page/connect-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__ = __webpack_require__("./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectPageComponent = (function () {
    function ConnectPageComponent(_appService, _http, _localStorage) {
        this._appService = _appService;
        this._http = _http;
        this._localStorage = _localStorage;
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* DataStore */].NavShow = false;
    }
    ConnectPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.system = this._appService.getQueryString('system');
        this.token = this._appService.getQueryString('token');
        __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__('body').css('background-color', 'black');
        this.userid = this._localStorage.get('user-' + this.token);
        this.authToken = this._localStorage.get('authToken-' + this.token);
        this.base = this._localStorage.get('base-' + this.token);
        if (this.system === 'windows') {
            if (!this.userid) {
                this._http.get_user_id_from_token(this.token)
                    .subscribe(function (data) {
                    _this._localStorage.set('user-' + _this.token, data['user']);
                    _this.userid = data['user'];
                    _this.getAuthToken();
                });
            }
            else {
                this.getAuthToken();
            }
        }
    };
    ConnectPageComponent.prototype.getAuthToken = function () {
        var _this = this;
        if (!this.authToken) {
            this._http.get_guacamole_token(this.userid, this.token).subscribe(function (data) {
                if (data['authToken']) {
                    _this._localStorage.set('authToken-' + _this.token, data['authToken']);
                    _this.authToken = data['authToken'];
                    _this.getBase();
                }
            });
        }
        else {
            this.getBase();
        }
    };
    ConnectPageComponent.prototype.getBase = function () {
        var _this = this;
        if (!this.base) {
            this._http.guacamole_token_add_asset(this.token, this.authToken).subscribe(function (data) {
                if (data['result']) {
                    _this._localStorage.set('base-' + _this.token, data['result']);
                    _this.base = data['result'];
                    _this.setWinTarget();
                }
            });
        }
        else {
            this.setWinTarget();
        }
    };
    ConnectPageComponent.prototype.setWinTarget = function () {
        if (this.base && this.authToken) {
            this.target = document.location.origin + '/guacamole/#/client/' + this.base +
                '?asset_token=jumpserver&token=' + this.authToken;
        }
        else {
            window.location.reload();
        }
    };
    ConnectPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-page',
            template: __webpack_require__("./src/app/connect-page/connect-page.component.html"),
            styles: [__webpack_require__("./src/app/connect-page/connect-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["c" /* LocalStorageService */]])
    ], ConnectPageComponent);
    return ConnectPageComponent;
}());



/***/ }),

/***/ "./src/app/elements/dialog/alert.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert\">\n  <h1 mat-dialog-title>Alert</h1>\n  <p>{{data.msg}}</p>\n  <button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/dialog/alert.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  border-bottom: 1px solid #eee;\n  width: 100%; }\n\nbutton {\n  float: right;\n  bottom: 0; }\n\n.alert {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/elements/dialog/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ElementDialogAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// import * as layer from 'layui-layer/src/layer.js';
var DialogService = (function () {
    function DialogService(_dialog) {
        this._dialog = _dialog;
    }
    DialogService.prototype.open = function (options) {
        // layer.open(options);
    };
    DialogService.prototype.dialog = function () {
    };
    DialogService.prototype.confirm = function () {
    };
    DialogService.prototype.tip = function () {
    };
    DialogService.prototype.loading = function () {
    };
    DialogService.prototype.alert = function (msg) {
        this._dialog.open(ElementDialogAlertComponent, {
            height: '200px',
            width: '300px',
            data: { msg: msg }
        });
    };
    DialogService.prototype.close = function (index) {
        // layer.close(index);
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */]])
    ], DialogService);
    return DialogService;
}());

var ElementDialogAlertComponent = (function () {
    function ElementDialogAlertComponent(dialogRef, data, _logger) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._logger = _logger;
    }
    ElementDialogAlertComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ElementDialogAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/elements/dialog/alert.html"),
            styles: [__webpack_require__("./src/app/elements/dialog/alert.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__app_service__["d" /* LogService */]])
    ], ElementDialogAlertComponent);
    return ElementDialogAlertComponent;
}());



/***/ }),

/***/ "./src/app/elements/elfinder/elfinder.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"elfinder\"></div>\n"

/***/ }),

/***/ "./src/app/elements/elfinder/elfinder.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/elements/elfinder/elfinder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementElfinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementElfinderComponent = (function () {
    function ElementElfinderComponent() {
    }
    ElementElfinderComponent.prototype.ngOnInit = function () {
    };
    ElementElfinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-elfinder',
            template: __webpack_require__("./src/app/elements/elfinder/elfinder.component.html"),
            styles: [__webpack_require__("./src/app/elements/elfinder/elfinder.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ElementElfinderComponent);
    return ElementElfinderComponent;
}());



/***/ }),

/***/ "./src/app/elements/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/elements/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer fixed\">\n  <div class=\"pull-right\">\n    Version <strong>{{version}}</strong> GPL.\n  </div>\n  <div>\n    <strong>Copyright</strong> Jumpserver.org Team &copy; 2014-2018\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * footer
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */




var ElementFooterComponent = (function () {
    function ElementFooterComponent(_appService, _logger) {
        this._appService = _appService;
        this._logger = _logger;
        this.DataStore = __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* DataStore */];
        this.User = __WEBPACK_IMPORTED_MODULE_2__globals__["f" /* User */];
        this.version = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["b" /* version */];
        this._logger.log('nav.ts:NavComponent');
        // this._appService.getnav()
    }
    ElementFooterComponent.prototype.ngOnInit = function () {
    };
    ElementFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-footer',
            template: __webpack_require__("./src/app/elements/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/elements/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */]])
    ], ElementFooterComponent);
    return ElementFooterComponent;
}());



/***/ }),

/***/ "./src/app/elements/guacamole/guacamole.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe #rdp [src]=\"trust(target)\" (mouseenter)=\"active()\"></iframe>\n"

/***/ }),

/***/ "./src/app/elements/guacamole/guacamole.component.scss":
/***/ (function(module, exports) {

module.exports = "iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/elements/guacamole/guacamole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementGuacamoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ControlPage_control_control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ElementGuacamoleComponent = (function () {
    function ElementGuacamoleComponent(sanitizer, _http, _cookie, _logger) {
        this.sanitizer = sanitizer;
        this._http = _http;
        this._cookie = _cookie;
        this._logger = _logger;
    }
    ElementGuacamoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // /guacamole/api/tokens will redirect to http://guacamole/api/tokens
        if (!this.target) {
            var base_1 = window.btoa(this.host.id + '\0' + 'c' + '\0' + 'jumpserver');
            if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
                if (__WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].guacamole_token) {
                    this._http.guacamole_add_asset(__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].id, this.host.id, this.userid).subscribe(function (data) {
                        _this.target = document.location.origin + '/guacamole/#/client/' + base_1 + '?token=' + __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].guacamole_token;
                    }, function (error2) {
                        _this._logger.error(error2);
                    });
                }
                else {
                    this._http.get_guacamole_token(__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].id, '').subscribe(function (data) {
                        // /guacamole/client will redirect to http://guacamole/#/client
                        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].guacamole_token = data['authToken'];
                        _this._http.guacamole_add_asset(__WEBPACK_IMPORTED_MODULE_3__globals__["f" /* User */].id, _this.host.id, _this.userid).subscribe(function (data2) {
                            _this.target = document.location.origin + '/guacamole/#/client/' + base_1 + '?token=' + __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].guacamole_token;
                        }, function (error2) {
                            _this._logger.error(error2);
                        });
                    }, function (error2) {
                        _this._logger.error(error2);
                    });
                }
            }
            else {
                this.target = this._cookie.get('guacamole');
            }
        }
        __WEBPACK_IMPORTED_MODULE_6__ControlPage_control_control_component__["b" /* NavList */].List[this.index].Rdp = this.el.nativeElement;
    };
    ElementGuacamoleComponent.prototype.trust = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ElementGuacamoleComponent.prototype.Disconnect = function () {
        __WEBPACK_IMPORTED_MODULE_6__ControlPage_control_control_component__["b" /* NavList */].List[this.index].connected = false;
    };
    ElementGuacamoleComponent.prototype.active = function () {
        this._logger.debug('focus');
        this.el.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementGuacamoleComponent.prototype, "host", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementGuacamoleComponent.prototype, "userid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ElementGuacamoleComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ElementGuacamoleComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rdp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ElementGuacamoleComponent.prototype, "el", void 0);
    ElementGuacamoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-guacamole',
            template: __webpack_require__("./src/app/elements/guacamole/guacamole.component.html"),
            styles: [__webpack_require__("./src/app/elements/guacamole/guacamole.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_2__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__app_service__["d" /* LogService */]])
    ], ElementGuacamoleComponent);
    return ElementGuacamoleComponent;
}());



/***/ }),

/***/ "./src/app/elements/iframe/iframe.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe [src]=\"trust(target)\"></iframe>\n"

/***/ }),

/***/ "./src/app/elements/iframe/iframe.component.scss":
/***/ (function(module, exports) {

module.exports = "iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/elements/iframe/iframe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementIframeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ElementIframeComponent = (function () {
    function ElementIframeComponent(sanitizer, _http, _cookie, _logger) {
        this.sanitizer = sanitizer;
        this._http = _http;
        this._cookie = _cookie;
        this._logger = _logger;
    }
    ElementIframeComponent.prototype.ngOnInit = function () {
    };
    ElementIframeComponent.prototype.trust = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ElementIframeComponent.prototype.Disconnect = function () {
        __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[this.index].connected = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementIframeComponent.prototype, "host", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementIframeComponent.prototype, "userid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ElementIframeComponent.prototype, "index", void 0);
    ElementIframeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-iframe',
            template: __webpack_require__("./src/app/elements/iframe/iframe.component.html"),
            styles: [__webpack_require__("./src/app/elements/iframe/iframe.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_3__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3__app_service__["d" /* LogService */]])
    ], ElementIframeComponent);
    return ElementIframeComponent;
}());



/***/ }),

/***/ "./src/app/elements/interactive/interactive.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"menu\">\n  <input type=\"checkbox\" href=\"#\" class=\"menu-open\" name=\"menu-open\" id=\"menu-open\"/>\n  <label class=\"menu-open-button\" for=\"menu-open\">\n    <span class=\"hamburger hamburger-1\"></span>\n    <span class=\"hamburger hamburger-2\"></span>\n    <span class=\"hamburger hamburger-3\"></span>\n  </label>\n\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-bar-chart\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-plus\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-heart\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-envelope\"></i> </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/elements/interactive/interactive.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu {\n  -webkit-filter: url(\"#shadowed-goo\");\n          filter: url(\"#shadowed-goo\"); }\n\n.menu-item, .menu-open-button {\n  background: #ff4081;\n  border-radius: 100%;\n  width: 80px;\n  height: 80px;\n  margin-left: -40px;\n  position: absolute;\n  top: 20px;\n  color: white;\n  text-align: center;\n  line-height: 80px;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: -webkit-transform ease-out 200ms;\n  transition: -webkit-transform ease-out 200ms;\n  transition: transform ease-out 200ms;\n  transition: transform ease-out 200ms, -webkit-transform ease-out 200ms; }\n\n.menu-open {\n  display: none; }\n\n.hamburger {\n  width: 25px;\n  height: 3px;\n  background: white;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -12.5px;\n  margin-top: -1.5px;\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms; }\n\n.hamburger-1 {\n  -webkit-transform: translate3d(0, -8px, 0);\n          transform: translate3d(0, -8px, 0); }\n\n.hamburger-2 {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.hamburger-3 {\n  -webkit-transform: translate3d(0, 8px, 0);\n          transform: translate3d(0, 8px, 0); }\n\n.menu-open:checked + .menu-open-button .hamburger-1 {\n  -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n          transform: translate3d(0, 0, 0) rotate(45deg); }\n\n.menu-open:checked + .menu-open-button .hamburger-2 {\n  -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);\n          transform: translate3d(0, 0, 0) scale(0.1, 1); }\n\n.menu-open:checked + .menu-open-button .hamburger-3 {\n  -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);\n          transform: translate3d(0, 0, 0) rotate(-45deg); }\n\n.menu {\n  position: absolute;\n  left: 50%;\n  margin-left: -190px;\n  padding-top: 20px;\n  padding-left: 190px;\n  width: 380px;\n  height: 250px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 20px;\n  text-align: left; }\n\n.menu-item:hover {\n  background: white;\n  color: #ff4081; }\n\n.menu-item:nth-child(3) {\n  -webkit-transition-duration: 70ms;\n          transition-duration: 70ms; }\n\n.menu-item:nth-child(4) {\n  -webkit-transition-duration: 130ms;\n          transition-duration: 130ms; }\n\n.menu-item:nth-child(5) {\n  -webkit-transition-duration: 190ms;\n          transition-duration: 190ms; }\n\n.menu-item:nth-child(6) {\n  -webkit-transition-duration: 250ms;\n          transition-duration: 250ms; }\n\n.menu-item:nth-child(7) {\n  -webkit-transition-duration: 310ms;\n          transition-duration: 310ms; }\n\n.menu-open-button {\n  z-index: 2;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms;\n  -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n          transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n  cursor: pointer; }\n\n.menu-open-button:hover {\n  -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n          transform: scale(1.2, 1.2) translate3d(0, 0, 0); }\n\n.menu-open:checked + .menu-open-button {\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n          transform: scale(0.8, 0.8) translate3d(0, 0, 0); }\n\n.menu-open:checked ~ .menu-item {\n  -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);\n          transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33); }\n\n.menu-open:checked ~ .menu-item:nth-child(3) {\n    -webkit-transition-duration: 160ms;\n            transition-duration: 160ms;\n    -webkit-transform: translate3d(114.17421124px, 13.75679785px, 0);\n            transform: translate3d(114.17421124px, 13.75679785px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(4) {\n    -webkit-transition-duration: 240ms;\n            transition-duration: 240ms;\n    -webkit-transform: translate3d(93.8966441px, -66.39593532px, 0);\n            transform: translate3d(93.8966441px, -66.39593532px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(5) {\n    -webkit-transition-duration: 320ms;\n            transition-duration: 320ms;\n    -webkit-transform: translate3d(25.08647276px, -112.23042762px, 0);\n            transform: translate3d(25.08647276px, -112.23042762px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(6) {\n    -webkit-transition-duration: 400ms;\n            transition-duration: 400ms;\n    -webkit-transform: translate3d(-56.69020937px, -100.05608481px, 0);\n            transform: translate3d(-56.69020937px, -100.05608481px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(7) {\n    -webkit-transition-duration: 480ms;\n            transition-duration: 480ms;\n    -webkit-transform: translate3d(-109.16527206px, -36.1654783px, 0);\n            transform: translate3d(-109.16527206px, -36.1654783px, 0); }\n"

/***/ }),

/***/ "./src/app/elements/interactive/interactive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementInteractiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementInteractiveComponent = (function () {
    function ElementInteractiveComponent() {
    }
    ElementInteractiveComponent.prototype.ngOnInit = function () {
    };
    ElementInteractiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-interactive',
            template: __webpack_require__("./src/app/elements/interactive/interactive.component.html"),
            styles: [__webpack_require__("./src/app/elements/interactive/interactive.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ElementInteractiveComponent);
    return ElementInteractiveComponent;
}());



/***/ }),

/***/ "./src/app/elements/leftbar/leftbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"example-sidenav\"\n               [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n               [fixedBottomGap]=\"options.value.bottom\">\n    <nav>\n      <div class=\"header\">\n        <a href=\"http://www.jumpserver.org\" target=\"_blank\">\n          <img alt=\"image\" height=\"55\" src=\"/static/imgs/logo-text.png\" style=\"margin-left: 10px\">\n        </a>\n      </div>\n      <div class=\"body\">\n        <ul class=\"nav metismenu nav-frist-level\">\n          <li *ngFor=\"let bar of leftbar;let i = index\" [ngClass]=\"{'active':i==active}\">\n            <a (click)=\"gotoLink(bar.link,i,-1)\">\n              <i class=\"{{bar.class}}\"></i>\n              <span class=\"nav-label\">{{bar.name|trans}}</span>\n              <span class=\"{{bar.label}}\"></span>\n            </a>\n            <ul class=\"nav nav-second-level collapse\">\n              <li *ngFor=\"let child of bar.child;let ii = index\" [ngClass]=\"{'active':ii==active2}\">\n                <a (click)=\"gotoLink(child.link,i,ii)\">{{child.name|trans}}</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </mat-sidenav>\n  <div class=\"navbar-header\">\n    <button class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" (click)=\"sidenav.toggle()\"><i\n      class=\"fa fa-bars\"></i></button>\n  </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/elements/leftbar/leftbar.component.scss":
/***/ (function(module, exports) {

module.exports = "li a {\n  background-color: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #a7b1c2;\n  cursor: pointer;\n  display: block;\n  font-family: \"open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  height: 46px;\n  line-height: 18.5714px;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  padding-bottom: 14px;\n  padding-left: 25px;\n  padding-right: 20px;\n  padding-top: 14px;\n  position: relative;\n  text-align: left;\n  -webkit-text-decoration-color: #a7b1c2;\n          text-decoration-color: #a7b1c2;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  width: 220px;\n  -webkit-tap-highlight-color: transparent; }\n\nli.active > a {\n  width: 216px;\n  color: white; }\n\nli.active ul.nav.nav-second-level li {\n  border-bottom-style: none;\n  border-bottom-width: 0px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #676a6c;\n  display: block;\n  font-family: \"open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 32px;\n  line-height: 18.5714px;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  position: relative;\n  text-align: left;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  visibility: visible;\n  width: 216px;\n  -webkit-tap-highlight-color: transparent; }\n\nli.active ul.nav.nav-second-level {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #676a6c;\n  display: block;\n  font-family: \"open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  line-height: 18.5714px;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  padding-left: 0px;\n  text-align: left;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  visibility: visible;\n  width: 216px;\n  -webkit-margin-after: 0px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-margin-start: 0px;\n  -webkit-padding-start: 0px;\n  -webkit-tap-highlight-color: transparent; }\n\nmat-sidenav {\n  background-color: #2f4050; }\n\nnav {\n  width: 220px;\n  font-family: \"open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px; }\n\ndiv.header {\n  background-color: #202c37; }\n\ndiv.body {\n  background-color: #2f4050;\n  height: 100%; }\n\nli:hover {\n  color: white !important; }\n\n.nav-second-level li a {\n  padding: 7px 10px 7px 52px; }\n"

/***/ }),

/***/ "./src/app/elements/leftbar/leftbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementLeftbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementLeftbarComponent = (function () {
    function ElementLeftbarComponent(fb, _router) {
        this._router = _router;
        this.leftbar = [
            {
                'name': 'Dashboard',
                'class': 'fa fa-dashboard',
                'label': '',
                'link': '/'
            },
            {
                'name': 'Users',
                'class': 'fa fa-group',
                'label': 'fa arrow',
                'child': [
                    {
                        'name': 'User',
                    }, {
                        'name': 'User group',
                    }, {
                        'name': 'Login logs',
                    }
                ]
            },
            {
                'name': 'Assets',
                'class': 'fa fa-inbox',
                'label': 'fa arrow',
                'child': [
                    {
                        'name': 'Asset',
                    }, {
                        'name': 'Asset group',
                    }, {
                        'name': 'Cluster',
                    }, {
                        'name': 'Admin user',
                    }, {
                        'name': 'System user',
                    }, {
                        'name': 'Labels',
                    }
                ]
            },
            {
                'name': 'Perms',
                'class': 'fa fa-edit',
                'label': 'fa arrow',
                'child': [{ 'name': 'Asset permission' }]
            },
            {
                'name': 'Sessions',
                'class': 'fa fa-rocket',
                'label': 'fa arrow',
                'child': [
                    {
                        'name': 'Session online'
                    },
                    {
                        'name': 'Session offline'
                    },
                    {
                        'name': 'Commands'
                    },
                    {
                        'name': 'Terminal'
                    },
                ]
            },
            {
                'name': 'Job Center',
                'class': 'fa fa-coffee',
                'label': 'fa arrow',
                'child': [
                    {
                        'name': 'Task',
                        'link': '/task'
                    },
                ]
            },
            {
                'name': 'Settings',
                'class': 'fa fa-gears',
                'label': '',
                'link': '/luna/setting'
            },
        ];
        this.options = fb.group({
            'fixed': true,
            'top': 0,
            'bottom': 0,
        });
    }
    ElementLeftbarComponent.prototype.ngOnInit = function () {
        this.active = 6;
        this.active2 = 0;
    };
    ElementLeftbarComponent.prototype.gotoLink = function (link, index, index2) {
        if (link) {
            if (link === '/luna/setting') {
                this._router.navigate(['setting']);
            }
            else {
                window.location.href = link;
            }
        }
        this.active = index;
        this.active2 = index2;
    };
    ElementLeftbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-leftbar',
            template: __webpack_require__("./src/app/elements/leftbar/leftbar.component.html"),
            styles: [__webpack_require__("./src/app/elements/leftbar/leftbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ElementLeftbarComponent);
    return ElementLeftbarComponent;
}());



/***/ }),

/***/ "./src/app/elements/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: block;\n  margin-top: 2px;\n  height: 30px\n}\n\n.nav ul {\n  list-style-type: none;\n  line-height: 24px;\n}\n\n.nav li {\n  display: inline-block;\n}\n\n.nav a {\n  color: #f0f0f1;\n  text-decoration: none;\n  padding: 6px 15px 6px 15px;\n}\n\n.nav a:hover {\n  color: #fff;\n  cursor: pointer\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown:hover {\n  background-color: #2d2828;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: black;\n  color: #c6bcbc;\n  padding: 4px 0;\n  z-index: 999;\n  float: none;\n  list-style: none;\n  line-height: normal;\n  direction: ltr;\n  width: auto;\n  top: auto;\n  left: 0px;\n  margin-left: 0px;\n  margin-top: 0px;\n  min-width: 150px;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.nav .dropdown-content li {\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.nav .dropdown-content li a {\n  padding: 6px 14px 6px 25px;\n  white-space: nowrap;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  position: relative;\n  text-decoration: none;\n  min-width: 150px;\n  line-height: normal;\n}\n\n.nav .dropdown-content li a span {\n  float: right;\n}\n\n.dropdown-content li:hover {\n  background-color: #3a3333;\n  color: black;\n  width: 100%;\n}\n\n.dropdown-content li.disabled:hover {\n  background-color: black;\n}\n\n.dropdown-content li.disabled a {\n  color: #c5babc;\n}\n\n.dropdown-content li.disabled a:hover {\n  cursor: default;\n  color: #c5babc;\n}\n"

/***/ }),

/***/ "./src/app/elements/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"../../trans.pipe.spec.ts\"></script>\n<div class=\"nav\">\n  <ul>\n    <li><a href=\"/\"><img src=\"static/imgs/logo.png\" height=\"26px\"/></a>\n    </li>\n    <li *ngFor=\"let v of DataStore.Nav\" [ngClass]=\"{'dropdown': v.children}\">\n      <a>{{v.name | trans}}</a>\n      <ul [ngClass]=\"{'dropdown-content': v.children}\">\n        <li *ngFor=\"let vv of v.children\" [ngClass]=\"{'disabled': vv.disable}\">\n          <a *ngIf=\"vv.href\" [routerLink]=\"[vv.href]\">{{vv.name|trans}}</a>\n          <a id=\"{{vv.id}}\" *ngIf=\"vv.click\" (click)=\"click(vv.click)\">{{vv.name|trans}}</a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ControlPage_cleftbar_cleftbar_component__ = __webpack_require__("./src/app/ControlPage/cleftbar/cleftbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_dist_jquery_min_js__ = __webpack_require__("./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery_dist_jquery_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 主页导航条
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */






var ElementNavComponent = (function () {
    function ElementNavComponent(_appService, _http, _logger, _localStorage) {
        this._appService = _appService;
        this._http = _http;
        this._logger = _logger;
        this._localStorage = _localStorage;
        this.DataStore = __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* DataStore */];
        this._logger.log('nav.ts:NavComponent');
        this.getnav();
    }
    ElementNavComponent.Hide = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery_dist_jquery_min_js__('app-element-nav').hide();
    };
    ElementNavComponent.prototype.ngOnInit = function () {
    };
    ElementNavComponent.prototype.click = function (event) {
        this._logger.debug('nav.ts:NavComponent,click', event);
        switch (event) {
            case 'ReloadLeftbar': {
                __WEBPACK_IMPORTED_MODULE_2__ControlPage_cleftbar_cleftbar_component__["a" /* CleftbarComponent */].Reload();
                break;
            }
            case 'HideLeft': {
                __WEBPACK_IMPORTED_MODULE_2__ControlPage_cleftbar_cleftbar_component__["a" /* CleftbarComponent */].Hide();
                break;
            }
            case 'ShowLeft': {
                __WEBPACK_IMPORTED_MODULE_2__ControlPage_cleftbar_cleftbar_component__["a" /* CleftbarComponent */].Show();
                break;
            }
            case 'Copy': {
                // this._appService.copy();
                break;
            }
            case 'Disconnect': {
                switch (__WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["b" /* NavList */].List[__WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["b" /* NavList */].Active].type) {
                    case 'ssh': {
                        __WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["a" /* ControlComponent */].TerminalDisconnect(__WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["b" /* NavList */].Active);
                        break;
                    }
                    case 'rdp': {
                        __WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["a" /* ControlComponent */].RdpDisconnect(__WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["b" /* NavList */].Active);
                        break;
                    }
                    default: {
                        // statements;
                        break;
                    }
                }
                break;
            }
            case 'DisconnectAll': {
                __WEBPACK_IMPORTED_MODULE_3__ControlPage_control_control_component__["a" /* ControlComponent */].DisconnectAll();
                break;
            }
            case 'Website': {
                window.open('http://www.jumpserver.org');
                break;
            }
            case 'Document': {
                window.open('http://docs.jumpserver.org/');
                break;
            }
            case 'Support': {
                window.open('https://market.aliyun.com/products/53690006/cmgj026011.html?spm=5176.730005.0.0.cY2io1');
                break;
            }
            case 'EnterLicense': {
                this.EnterLicense();
                break;
            }
            case 'English': {
                this.English();
                break;
            }
            case 'Chinese': {
                this.Language('cn');
                break;
            }
            default: {
                break;
            }
        }
    };
    ElementNavComponent.prototype.EnterLicense = function () {
        layer.prompt({
            formType: 2,
            maxlength: 500,
            title: 'Please Input Code',
            scrollbar: false,
            area: ['400px', '300px'],
            moveOut: true,
            moveType: 1
        }, function (value, index) {
            __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* DataStore */].socket.emit('key', value);
            // layer.msg(value); //得到value
            layer.close(index);
        });
    };
    ElementNavComponent.prototype.getnav = function () {
        this._logger.log('getnav');
        // this._http.get('/api/nav')
        //   .map(res => res.json())
        //   .subscribe(response => {
        //     DataStore.Nav = response;
        //   });
        __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* DataStore */].Nav = [{
                'id': 'File',
                'name': 'Server',
                'children': [
                    // {
                    //   'id': 'NewConnection',
                    //   'href': '',
                    //   'name': 'New connection',
                    //   'disable': true
                    // },
                    // {
                    //   'id': 'Connect',
                    //   'click': 'Connect',
                    //   'name': 'Connect',
                    //   'disable': true
                    // },
                    {
                        'id': 'Disconnect',
                        'click': 'Disconnect',
                        'name': 'Disconnect'
                    },
                    {
                        'id': 'DisconnectAll',
                        'click': 'DisconnectAll',
                        'name': 'Disconnect all'
                    },
                ]
            }, {
                'id': 'View',
                'name': 'View',
                'children': [
                    {
                        'id': 'HideLeftManager',
                        'click': 'HideLeft',
                        'name': 'Hide left manager'
                    },
                    {
                        'id': 'SplitVertical',
                        'href': '',
                        'name': 'Split vertical',
                        'disable': true
                    },
                    {
                        'id': 'CommandBar',
                        'href': '',
                        'name': 'Command bar',
                        'disable': true
                    },
                    {
                        'id': 'ShareSession',
                        'href': '',
                        'name': 'Share session (read/write)',
                        'disable': true
                    },
                    {
                        'id': 'Language',
                        'href': '',
                        'name': 'Language',
                        'disable': true
                    }
                ]
            }, {
                'id': 'Help',
                'name': 'Help',
                'children': [
                    // {
                    //   'id': 'EnterLicense',
                    //   'click': 'EnterLicense',
                    //   'name': 'Enter License'
                    // },
                    {
                        'id': 'Website',
                        'click': 'Website',
                        'name': 'Website'
                    },
                    {
                        'id': 'Document',
                        'click': 'Document',
                        'name': 'Document'
                    },
                    {
                        'id': 'Support',
                        'click': 'Support',
                        'name': 'Support'
                    }
                ]
            }, {
                'id': 'Language',
                'name': 'Language',
                'children': [
                    {
                        'id': 'English',
                        'click': 'English',
                        'name': 'English'
                    },
                    {
                        'id': 'Chinese',
                        'click': 'Chinese',
                        'name': '中文'
                    }
                ]
            }
        ];
    };
    ElementNavComponent.prototype.Connect = function () {
        layer.prompt({
            formType: 2,
            maxlength: 500,
            title: 'Please Input Code',
            scrollbar: false,
            area: ['400px', '300px'],
            moveOut: true,
            moveType: 1
        }, function (value, index) {
            __WEBPACK_IMPORTED_MODULE_4__globals__["b" /* DataStore */].socket.emit('key', value);
            // layer.msg(value); //得到value
            layer.close(index);
        });
    };
    ElementNavComponent.prototype.English = function () {
        this._localStorage.delete('lang');
        __WEBPACK_IMPORTED_MODULE_4__globals__["h" /* i18n */].clear();
        location.reload();
    };
    ElementNavComponent.prototype.Language = function (lan) {
        var _this = this;
        this._http.get('/luna/i18n/' + lan + '.json').subscribe(function (data) {
            _this._localStorage.set('lang', JSON.stringify(data));
        });
        var l = this._localStorage.get('lang');
        if (l) {
            var data_1 = JSON.parse(l);
            Object.keys(data_1).forEach(function (k, _) {
                __WEBPACK_IMPORTED_MODULE_4__globals__["h" /* i18n */].set(k, data_1[k]);
            });
        }
        location.reload();
    };
    ElementNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-nav',
            template: __webpack_require__("./src/app/elements/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/elements/nav/nav.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["d" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_1__app_service__["c" /* LocalStorageService */]])
    ], ElementNavComponent);
    return ElementNavComponent;
}());



/***/ }),

/***/ "./src/app/elements/ofooter/ofooter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer fixed\">\n    <div class=\"pull-right\">\n        Version <strong>{{version}}</strong> GPLv2.\n        <img style=\"display: none\" src=\"http://www.jumpserver.org/img/evaluate_avatar1.jpg\">\n    </div>\n    <div>\n        <strong>Copyright</strong> 北京堆栈科技有限公司 &copy; 2014-2018\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/ofooter/ofooter.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/elements/ofooter/ofooter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementOfooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementOfooterComponent = (function () {
    function ElementOfooterComponent() {
        this.version = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["b" /* version */];
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* DataStore */].NavShow = false;
    }
    ElementOfooterComponent.prototype.ngOnInit = function () {
    };
    ElementOfooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-ofooter',
            template: __webpack_require__("./src/app/elements/ofooter/ofooter.component.html"),
            styles: [__webpack_require__("./src/app/elements/ofooter/ofooter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ElementOfooterComponent);
    return ElementOfooterComponent;
}());



/***/ }),

/***/ "./src/app/elements/popup/popup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/elements/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  popup works!\n</p>\n"

/***/ }),

/***/ "./src/app/elements/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementPopupComponent = (function () {
    function ElementPopupComponent() {
    }
    ElementPopupComponent.prototype.ngOnInit = function () {
    };
    ElementPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-popup',
            template: __webpack_require__("./src/app/elements/popup/popup.component.html"),
            styles: [__webpack_require__("./src/app/elements/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElementPopupComponent);
    return ElementPopupComponent;
}());



/***/ }),

/***/ "./src/app/elements/rdp/rdp.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #rdp></canvas>\n"

/***/ }),

/***/ "./src/app/elements/rdp/rdp.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/elements/rdp/rdp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementRdpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * RDP页面
 *
 * @date     2017-11-24
 * @author   liuzheng <liuzheng712@gmail.com>
 */



var ElementRdpComponent = (function () {
    function ElementRdpComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* DataStore */].NavShow = false;
    }
    ElementRdpComponent.prototype.ngOnInit = function () {
    };
    ElementRdpComponent.prototype.ngAfterViewInit = function () {
        var token;
        this.activatedRoute.params.subscribe(function (params) {
            token = params['token'];
        });
        var canvas = Mstsc.$(this.el.nativeElement);
        canvas.style.display = 'inline';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var client = Mstsc.client.create(Mstsc.$(this.el.nativeElement));
        client.connect(token, 'socket.io');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rdp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ElementRdpComponent.prototype, "el", void 0);
    ElementRdpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-rdp',
            template: __webpack_require__("./src/app/elements/rdp/rdp.component.html"),
            styles: [__webpack_require__("./src/app/elements/rdp/rdp.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ElementRdpComponent);
    return ElementRdpComponent;
}());



/***/ }),

/***/ "./src/app/elements/server-menu/server-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ES-menu\" [ngStyle]=\"{'top':top,'left':left}\">\n  <ul class=\"dropdown-content\">\n    <li [ngClass]=\"m.type\" *ngFor=\"let m of MenuList\">\n      <a (click)=\"m.action\" *ngIf=\"m.type!='line'\">{{m.name}}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/server-menu/server-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".ES-menu {\n  display: block;\n  width: 120px;\n  background-color: #2f2a2a;\n  position: absolute; }\n\n.ES-menu ul {\n  list-style-type: none;\n  line-height: 24px; }\n\n.ES-menu li {\n  display: inline-block; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown:hover {\n  background-color: #2d2828; }\n\n.dropdown-content {\n  position: absolute;\n  background-color: black;\n  color: #c6bcbc;\n  padding: 4px 0;\n  z-index: 999;\n  float: none;\n  list-style: none;\n  line-height: normal;\n  direction: ltr;\n  width: auto;\n  top: auto;\n  left: 0px;\n  margin-left: 0px;\n  margin-top: 0px;\n  min-width: 150px; }\n\n.ES-menu:hover .dropdown-content {\n  display: block; }\n\n.ES-menu .dropdown-content li {\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ES-menu .dropdown-content li a {\n  padding: 6px 14px 6px 14px;\n  white-space: nowrap;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  position: relative;\n  text-decoration: none;\n  min-width: 150px;\n  line-height: normal; }\n\n.ES-menu .dropdown-content li a span {\n  float: right; }\n\n.dropdown-content li:hover {\n  background-color: #3a3333;\n  color: black;\n  width: 100%; }\n\n.dropdown-content li.disabled:hover {\n  background-color: black; }\n\n.dropdown-content li.disabled a {\n  color: #c5babc; }\n\n.dropdown-content li.disabled a:hover {\n  cursor: default;\n  color: #c5babc; }\n\n.ES-menu a {\n  color: #f0f0f1;\n  text-align: center;\n  text-decoration: none;\n  padding: 6px 15px 6px 15px; }\n\n.ES-menu a:hover {\n  color: #fff;\n  cursor: pointer; }\n\n.ES-menu .line {\n  height: 1px;\n  width: 100%;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/elements/server-menu/server-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Menu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementServerMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_service__ = __webpack_require__("./src/app/elements/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Menu = (function () {
    function Menu() {
    }
    return Menu;
}());

var ElementServerMenuComponent = (function () {
    function ElementServerMenuComponent(_dialog) {
        this._dialog = _dialog;
    }
    ElementServerMenuComponent.prototype.ngOnInit = function () {
        var m = new Menu();
        var line = new Menu();
        m.action = '';
        m.name = 'test';
        m.type = 'lll';
        line.type = 'line';
        this.MenuList = [m, m, line, m, m];
        this._dialog.alert('sss');
    };
    ElementServerMenuComponent.prototype.contextmenu = function (top, left) {
        this.top = top;
        this.left = left;
    };
    ElementServerMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-server-menu',
            template: __webpack_require__("./src/app/elements/server-menu/server-menu.component.html"),
            styles: [__webpack_require__("./src/app/elements/server-menu/server-menu.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dialog_dialog_service__["a" /* DialogService */]])
    ], ElementServerMenuComponent);
    return ElementServerMenuComponent;
}());



/***/ }),

/***/ "./src/app/elements/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <input\n    type='text'\n    placeholder='Type to filter the name column...'\n    (keyup)='updateFilter($event)'\n    *ngIf=\"config.search\"/>\n  <ngx-datatable\n    #table\n    class=\"material\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [limit]=\"config.limit\"\n    [columnMode]=\"config.columnMode\"\n    [headerHeight]=\"config.headerHeight\"\n    [footerHeight]=\"config.footerHeight\"\n    [rowHeight]=\"config.rowHeight\"\n    [scrollbarV]=\"config.scrollbarV\"\n    [scrollbarH]=\"config.scrollbarH\"\n  ></ngx-datatable>\n  <mat-paginator #paginator\n                 [pageSize]=\"config.pageSize\"\n                 [pageSizeOptions]=\"config.pageSizeOptions\"\n                 (click)=\"test()\">\n  </mat-paginator>\n</div>\n<button (click)=\"test()\">ssss</button>\n"

/***/ }),

/***/ "./src/app/elements/table/table.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  padding: 8px;\n  margin: 15px auto;\n  width: 30%; }\n\n.material {\n  -webkit-box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.2); }\n"

/***/ }),

/***/ "./src/app/elements/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Config = {
    search: false,
    scrollbarV: false,
    scrollbarH: false,
    rowHeight: 50,
    footerHeight: 50,
    headerHeight: 50,
    limit: 10,
    columnMode: 'force',
    pageSize: 10,
    pageSizeOptions: [5, 10, 20],
};
var ElementTableComponent = (function () {
    function ElementTableComponent(_logger) {
        this._logger = _logger;
        this.temp = [];
    }
    ElementTableComponent.prototype.ngOnInit = function () {
        Config = this.config;
        this.paginator.length = this.rows.length;
    };
    ElementTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    ElementTableComponent.prototype.test = function () {
        console.log(this.paginator._pageIndex);
        console.log(this.paginator._pageIndex * this.paginator.pageSize + 1);
        this.table.limit = this.paginator.pageSize;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ElementTableComponent.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ElementTableComponent.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementTableComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], ElementTableComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */])
    ], ElementTableComponent.prototype, "paginator", void 0);
    ElementTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-table',
            template: __webpack_require__("./src/app/elements/table/table.component.html"),
            styles: [__webpack_require__("./src/app/elements/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_service__["d" /* LogService */]])
    ], ElementTableComponent);
    return ElementTableComponent;
}());



/***/ }),

/***/ "./src/app/elements/term/term.component.css":
/***/ (function(module, exports) {

module.exports = "\ndiv {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n}\n\n\n.terminal {\n  border: #000 solid 5px;\n  color: #f0f0f0;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.8) 2px 2px 20px;\n          box-shadow: rgba(0, 0, 0, 0.8) 2px 2px 20px;\n  white-space: nowrap;\n  display: inline-block;\n  height: 100%;\n}\n\n\ndiv.terminal div span {\n  min-width: 12px;\n}\n"

/***/ }),

/***/ "./src/app/elements/term/term.component.html":
/***/ (function(module, exports) {

module.exports = "<div #term></div>\n"

/***/ }),

/***/ "./src/app/elements/term/term.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementTermComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__ = __webpack_require__("./src/app/ControlPage/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__ = __webpack_require__("./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ElementTermComponent = (function () {
    function ElementTermComponent(_uuid, _cookie) {
        this._uuid = _uuid;
        this._cookie = _cookie;
    }
    ElementTermComponent.prototype.ngOnInit = function () {
        this.secret = this._uuid.gen();
        this.term = Object(__WEBPACK_IMPORTED_MODULE_1__globals__["e" /* Terminal */])({
            cols: 80,
            rows: 24,
            useStyle: true,
            screenKeys: true,
        });
        // NavList.List[this.index].room = this.room;
    };
    ElementTermComponent.prototype.ngAfterViewInit = function () {
        if (this.host || this.token) {
            if (this._cookie.get('cols')) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col = parseInt(this._cookie.get('cols'), 10);
            }
            if (this._cookie.get('rows')) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row = parseInt(this._cookie.get('rows'), 10);
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col = Math.floor(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(this.el.nativeElement).width() / __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__('#liuzheng').width() * 8) - 3;
            __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row = Math.floor(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(this.el.nativeElement).height() / __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__('#liuzheng').height()) - 3;
            __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].term = this.term;
        }
        this.term.open(this.el.nativeElement, true);
        var that = this;
        window.onresize = function () {
            __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col = Math.floor(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(that.el.nativeElement).width() / __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__('#liuzheng').width() * 8) - 3;
            __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row = Math.floor(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(that.el.nativeElement).height() / __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__('#liuzheng').height()) - 3;
            if (__WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col < 80) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col = 80;
            }
            if (__WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row < 24) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row = 24;
            }
            that.term.resize(__WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col, __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row);
            if (that.host) {
                that._cookie.set('cols', __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col.toString(), 99, '/', document.domain);
                that._cookie.set('rows', __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row.toString(), 99, '/', document.domain);
                __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('resize', { 'cols': __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].col, 'rows': __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].row });
            }
        };
        __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery_min_js__(window).resize();
        __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[this.index].Term = this.term;
        if (this.host) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('host', { 'uuid': this.host.id, 'userid': this.userid, 'secret': this.secret });
        }
        if (this.token) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('token', { 'token': this.token, 'secret': this.secret });
        }
        if (this.monitor) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('monitor', { 'token': this.monitor, 'secret': this.secret });
        }
        else {
            this.term.on('data', function (data) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('data', { 'data': data, 'room': __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[that.index].room });
            });
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].on('data', function (data) {
            if (data['room'] === __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[that.index].room) {
                that.term.write(data['data']);
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].on('disconnect', function () {
            that.TerminalDisconnect();
        });
        __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].on('logout', function (data) {
            if (data['room'] === __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[that.index].room) {
                __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[this.index].connected = false;
                // this.term.write('\r\n\x1b[31mBye Bye!\x1b[m\r\n');
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].on('room', function (data) {
            if (data['secret'] === that.secret) {
                __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[that.index].room = data['room'];
            }
        });
    };
    ElementTermComponent.prototype.TerminalDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[this.index].connected = false;
        // this.term.write('\r\n\x1b[31mBye Bye!\x1b[m\r\n');
        __WEBPACK_IMPORTED_MODULE_1__globals__["d" /* TermWS */].emit('logout', __WEBPACK_IMPORTED_MODULE_2__ControlPage_control_control_component__["b" /* NavList */].List[this.index].room);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementTermComponent.prototype, "host", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElementTermComponent.prototype, "userid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ElementTermComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ElementTermComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ElementTermComponent.prototype, "monitor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('term'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ElementTermComponent.prototype, "el", void 0);
    ElementTermComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-element-term',
            template: __webpack_require__("./src/app/elements/term/term.component.html"),
            styles: [__webpack_require__("./src/app/elements/term/term.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_service__["e" /* UUIDService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]])
    ], ElementTermComponent);
    return ElementTermComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = Terminal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TermWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return term; });
/* unused harmony export sep */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Monitor; });
/* unused harmony export Group */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataStore; });
/* unused harmony export CSRF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browser; });
/* unused harmony export wsEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return i18n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xterm_dist_xterm__ = __webpack_require__("./node_modules/xterm/dist/xterm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xterm_dist_xterm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xterm_dist_xterm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);



function Terminal(xargs) {
    return __WEBPACK_IMPORTED_MODULE_0_xterm_dist_xterm__(xargs);
}
var TermWS = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]('/ssh');
var term = {
    term: Terminal({
        cols: 80,
        rows: 24,
        useStyle: true,
        screenKeys: true,
    }),
    col: 80,
    row: 24,
};
var sep = '/';
var Video = {
    id: 'sss',
    src: 'sss',
    type: 'json',
    json: {},
    timelist: [],
    totalTime: 0,
};
var Monitor = {
    token: '',
    room: '',
    type: 'term',
};
var Group = (function () {
    function Group() {
    }
    return Group;
}());

var User = {
    id: '',
    name: 'nobody',
    username: '',
    password: '',
    phone: '',
    avatar: '',
    role: '',
    email: '',
    wechat: '',
    comment: '',
    is_active: false,
    is_superuser: false,
    date_joined: '',
    last_login: '',
    date_expired: '',
    groups: [],
    logined: false,
};
var DataStore = {
    socket: __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](),
    Nav: [{}],
    NavShow: true,
    Path: {},
    error: {},
    msg: {},
    loglevel: 0,
    leftbarshow: true,
    windowsize: [],
    autologin: false,
    guacamole_token: ''
};
var CSRF = '';
var Browser = {
    userAgent: navigator.userAgent,
    appCodeName: navigator.appCodeName,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    language: navigator.language,
    platform: navigator.platform,
    product: navigator.product,
    productSub: navigator.productSub,
    vendor: navigator.vendor,
};
var wsEvent;
var i18n = new Map();


/***/ }),

/***/ "./src/app/monitor-page/linux/linux.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monitor-page/linux/linux.component.html":
/***/ (function(module, exports) {

module.exports = "<app-element-term\n  [index]=\"0\"\n  [monitor]=\"token\"\n></app-element-term>\n"

/***/ }),

/***/ "./src/app/monitor-page/linux/linux.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinuxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinuxComponent = (function () {
    function LinuxComponent() {
    }
    LinuxComponent.prototype.ngOnInit = function () {
        this.token = __WEBPACK_IMPORTED_MODULE_1__globals__["c" /* Monitor */].token;
    };
    LinuxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-monitor-linux',
            template: __webpack_require__("./src/app/monitor-page/linux/linux.component.html"),
            styles: [__webpack_require__("./src/app/monitor-page/linux/linux.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinuxComponent);
    return LinuxComponent;
}());



/***/ }),

/***/ "./src/app/monitor-page/monitor-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monitor-page/monitor-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-monitor-linux></app-monitor-linux>\n"

/***/ }),

/***/ "./src/app/monitor-page/monitor-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonitorPageComponent = (function () {
    function MonitorPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* DataStore */].NavShow = false;
    }
    MonitorPageComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function (params) {
            __WEBPACK_IMPORTED_MODULE_2__globals__["c" /* Monitor */].token = params['token'];
            __WEBPACK_IMPORTED_MODULE_2__globals__["c" /* Monitor */].type = 'term';
            console.log(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* Monitor */]);
        });
    };
    MonitorPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-monitor-page',
            template: __webpack_require__("./src/app/monitor-page/monitor-page.component.html"),
            styles: [__webpack_require__("./src/app/monitor-page/monitor-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MonitorPageComponent);
    return MonitorPageComponent;
}());



/***/ }),

/***/ "./src/app/monitor-page/windows/windows.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monitor-page/windows/windows.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  windows works!\n</p>\n"

/***/ }),

/***/ "./src/app/monitor-page/windows/windows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowsComponent = (function () {
    function WindowsComponent() {
    }
    WindowsComponent.prototype.ngOnInit = function () {
    };
    WindowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-windows',
            template: __webpack_require__("./src/app/monitor-page/windows/windows.component.html"),
            styles: [__webpack_require__("./src/app/monitor-page/windows/windows.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WindowsComponent);
    return WindowsComponent;
}());



/***/ }),

/***/ "./src/app/replay-page/json/json.component.css":
/***/ (function(module, exports) {

module.exports = "\n#term {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n}\n\n#term > div {\n  height: 100%;\n}\n\n.terminal {\n  border: #000 solid 5px;\n  color: #f0f0f0;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.8) 2px 2px 20px;\n          box-shadow: rgba(0, 0, 0, 0.8) 2px 2px 20px;\n  white-space: nowrap;\n  display: inline-block;\n  height: 100%;\n}\n\n#term .terminal div span {\n  min-width: 12px;\n}\n\napp-element-term {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/replay-page/json/json.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-stop\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-backward\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <button type=\"button\" class=\"btn\" (click)=\"pause()\">\n    <i class=\"fa\" aria-hidden=\"true\" [ngClass]=\"{'fa-play':!toggle,'fa-pause': toggle}\"></i>\n  </button>\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-forward\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-expand\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <!--<button type=\"button\" class=\"btn\">-->\n  <!--<i class=\"fa fa-compress\" aria-hidden=\"true\"></i>-->\n  <!--</button>-->\n  <button type=\"button\" class=\"btn\" (click)=\"restart()\">\n    <i class=\"fa fa-repeat\" aria-hidden=\"true\"></i>\n  </button>\n\n  <input id=\"scrubber\" type=\"range\" [(ngModel)]=\"setPercent\" min=0 max=100 (mousedown)=\"stop()\" (mouseup)=\"rununil()\"/>\n\n  {{time | utcDate | date:\"HH:mm:ss\"}}\n</div>\n\n<app-element-term></app-element-term>\n<!--<asciinema-player></asciinema-player>-->\n"

/***/ }),

/***/ "./src/app/replay-page/json/json.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsonComponent = (function () {
    function JsonComponent() {
        this.speed = 1;
        this.setPercent = 0;
        this.toggle = false;
        this.TICK = 33;
        this.TIMESTEP = 33;
        this.time = 1;
        this.pos = 0;
    }
    JsonComponent.prototype.ngOnInit = function () {
        var that = this;
        var r = true;
        window.onresize = function () {
            if (r) {
                that.pause();
                r = false;
            }
        };
    };
    JsonComponent.prototype.setSpeed = function () {
        if (this.speed === 0) {
            this.TIMESTEP = this.TICK;
        }
        else if (this.speed < 0) {
            this.TIMESTEP = this.TICK / -this.speed;
        }
        else {
            this.TIMESTEP = this.TICK * this.speed;
        }
    };
    JsonComponent.prototype.restart = function () {
        var _this = this;
        clearInterval(this.timer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].term.reset();
        this.time = 1;
        this.pos = 0;
        this.toggle = true;
        this.timer = setInterval(function () {
            _this.advance(_this);
        }, this.TICK);
    };
    JsonComponent.prototype.pause = function () {
        var _this = this;
        if (this.toggle) {
            clearInterval(this.timer);
            this.toggle = !this.toggle;
        }
        else {
            this.timer = setInterval(function () {
                _this.advance(_this);
            }, this.TICK);
            this.toggle = !this.toggle;
        }
    };
    JsonComponent.prototype.advance = function (that) {
        that.scrubber = Math.ceil((that.time / __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].totalTime) * 100);
        // document.getElementById('beforeScrubberText').innerHTML = this.buildTimeString(this.time);
        for (; that.pos < __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist.length; that.pos++) {
            if (__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist[that.pos] * 1000 <= that.time) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].term.write(__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].json[__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist[that.pos].toString()]);
            }
            else {
                break;
            }
        }
        if (that.pos >= __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist.length) {
            this.toggle = !this.toggle;
            clearInterval(that.timer);
        }
        if (__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist[that.pos] - __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist[that.pos - 1] > 5) {
            that.time += 5000;
        }
        that.time += that.TIMESTEP;
        that.setPercent = that.time / __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].totalTime * 100;
    };
    JsonComponent.prototype.stop = function () {
        clearInterval(this.timer);
        this.toggle = false;
    };
    JsonComponent.prototype.rununil = function () {
        this.pos = 0;
        __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].term.reset();
        this.toggle = false;
        for (; this.pos < __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist.length; this.pos++) {
            if (__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist[this.pos] * 1000 <= this.setPercent / 100 * __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].totalTime) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["i" /* term */].term.write(__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].json[__WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].timelist[this.pos].toString()]);
            }
            else {
                break;
            }
        }
        this.time = __WEBPACK_IMPORTED_MODULE_1__globals__["g" /* Video */].totalTime * this.setPercent / 100;
    };
    JsonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-json',
            template: __webpack_require__("./src/app/replay-page/json/json.component.html"),
            styles: [__webpack_require__("./src/app/replay-page/json/json.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JsonComponent);
    return JsonComponent;
}());



/***/ }),

/***/ "./src/app/replay-page/mp4/mp4.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/replay-page/mp4/mp4.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mp4 works!\n</p>\n"

/***/ }),

/***/ "./src/app/replay-page/mp4/mp4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mp4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mp4Component = (function () {
    function Mp4Component() {
    }
    Mp4Component.prototype.ngOnInit = function () {
    };
    Mp4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mp4',
            template: __webpack_require__("./src/app/replay-page/mp4/mp4.component.html"),
            styles: [__webpack_require__("./src/app/replay-page/mp4/mp4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Mp4Component);
    return Mp4Component;
}());



/***/ }),

/***/ "./src/app/replay-page/replay-page.component.css":
/***/ (function(module, exports) {

module.exports = "\nbutton {\n  width: 40px;\n}\n"

/***/ }),

/***/ "./src/app/replay-page/replay-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-json></app-json>\n"

/***/ }),

/***/ "./src/app/replay-page/replay-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplayPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReplayPageComponent = (function () {
    function ReplayPageComponent(activatedRoute, _http, _logger) {
        this.activatedRoute = activatedRoute;
        this._http = _http;
        this._logger = _logger;
        // this.video = {'type': 'none'};
        __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* DataStore */].NavShow = false;
    }
    ReplayPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token;
        this.activatedRoute.params.subscribe(function (params) {
            token = params['token'];
        });
        this._http.get_replay(token)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].type = 'json';
            __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].json = data;
            __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].timelist = Object.keys(__WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].json).map(Number);
            __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].timelist = __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].timelist.sort(function (a, b) {
                return a - b;
            });
            __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].totalTime = __WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].timelist[__WEBPACK_IMPORTED_MODULE_3__globals__["g" /* Video */].timelist.length - 1] * 1000;
        }, function (err) {
            alert('无法下载');
            _this._logger.error(err);
        });
    };
    ReplayPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-replay-page',
            template: __webpack_require__("./src/app/replay-page/replay-page.component.html"),
            styles: [__webpack_require__("./src/app/replay-page/replay-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__app_service__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__app_service__["d" /* LogService */]])
    ], ReplayPageComponent);
    return ReplayPageComponent;
}());



/***/ }),

/***/ "./src/app/setting-page/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-form\">\n  <br/>\n  <mat-form-field hintLabel=\"http://jumpserver.abc.com:8080\">\n    <input matInput #input maxlength=\"10\" placeholder=\"{{'Current SITE URL'|trans}}\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field hintLabel=\"{{'User first login update profile done redirect to it'|trans}}\">\n    <input matInput #input maxlength=\"10\" placeholder=\"{{'User Guide URL'|trans}}\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field hintLabel=\"\">\n    <input matInput #input maxlength=\"10\" placeholder=\"{{'Email Subject Prefix'|trans}}\">\n  </mat-form-field>\n  <br/>\n  <div class=\"button-row\">\n    <button mat-raised-button>{{ 'Reset' | trans }}</button>\n    <button mat-raised-button color=\"primary\">{{ 'Submit' | trans }}</button>\n  </div>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/setting-page/basic/basic.component.scss":
/***/ (function(module, exports) {

module.exports = ".basic-form {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-width: 400px;\n  margin: auto;\n  font-size: 14pt; }\n\n.basic-form > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/setting-page/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingPageBasicComponent = (function () {
    function SettingPageBasicComponent() {
    }
    SettingPageBasicComponent.prototype.ngOnInit = function () {
    };
    SettingPageBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sp-basic',
            template: __webpack_require__("./src/app/setting-page/basic/basic.component.html"),
            styles: [__webpack_require__("./src/app/setting-page/basic/basic.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingPageBasicComponent);
    return SettingPageBasicComponent;
}());



/***/ }),

/***/ "./src/app/setting-page/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"email-form\">\n  <mat-form-field hintLabel=\"\">\n    <input matInput #input maxlength=\"10\" placeholder=\"{{'SMTP host'|trans}}\">\n  </mat-form-field>\n  <mat-form-field hintLabel=\"\">\n    <input matInput #input maxlength=\"10\" placeholder=\"{{'SMTP port'|trans}}\">\n  </mat-form-field>\n  <mat-form-field hintLabel=\"\">\n    <input matInput #input maxlength=\"10\"\n           [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\"\n           placeholder=\"{{'SMTP user'|trans}}\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      {{'Please enter a valid email address'|trans}}\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      <strong>{{'Email is required'|trans}}</strong>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field hintLabel=\"{{'Some provider use token except password'|trans}}\">\n    <input matInput #input maxlength=\"10\"\n           [type]=\"hide ? 'password' : 'text'\"\n           placeholder=\"{{'SMTP password'|trans}}\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n  </mat-form-field>\n  <mat-form-field\n    [hideRequiredMarker]=\"options.value.hideRequired\"\n    [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option value=\"yes\">{{'Yes'|trans}}</mat-option>\n      <mat-option value=\"no\">{{'No'|trans}}</mat-option>\n    </mat-select>\n    <mat-placeholder>\n      <b>{{'Use SSL'|trans}}</b>\n    </mat-placeholder>\n    <mat-hint>{{'If SMTP port is 465, may be select'|trans}}</mat-hint>\n  </mat-form-field>\n  <mat-form-field\n    [hideRequiredMarker]=\"options.value.hideRequired\"\n    [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option value=\"yes\">{{'Yes'|trans}}</mat-option>\n      <mat-option value=\"no\">{{'No'|trans}}</mat-option>\n    </mat-select>\n    <mat-placeholder>\n      <b>{{'Use TLS'|trans}}</b>\n    </mat-placeholder>\n    <mat-hint>{{'If SMTP port is 587, may be select'|trans}}</mat-hint>\n  </mat-form-field>\n  <br>\n  <div class=\"button-row\">\n    <button mat-raised-button>{{ 'Test connection' | trans }}</button>\n    <button mat-raised-button>{{ 'Reset' | trans }}</button>\n    <button mat-raised-button color=\"primary\">{{ 'Submit' | trans }}</button>\n  </div>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/setting-page/email/email.component.scss":
/***/ (function(module, exports) {

module.exports = ".email-form {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-width: 400px;\n  margin: auto;\n  font-size: 14pt; }\n\n.email-form > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/setting-page/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SettingPageEmailComponent = (function () {
    function SettingPageEmailComponent(fb) {
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.hide = true;
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    SettingPageEmailComponent.prototype.ngOnInit = function () {
    };
    SettingPageEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sp-email',
            template: __webpack_require__("./src/app/setting-page/email/email.component.html"),
            styles: [__webpack_require__("./src/app/setting-page/email/email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], SettingPageEmailComponent);
    return SettingPageEmailComponent;
}());



/***/ }),

/***/ "./src/app/setting-page/ldap/ldap.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ldap works!\n</p>\n"

/***/ }),

/***/ "./src/app/setting-page/ldap/ldap.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setting-page/ldap/ldap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageLdapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingPageLdapComponent = (function () {
    function SettingPageLdapComponent() {
    }
    SettingPageLdapComponent.prototype.ngOnInit = function () {
    };
    SettingPageLdapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sp-ldap',
            template: __webpack_require__("./src/app/setting-page/ldap/ldap.component.html"),
            styles: [__webpack_require__("./src/app/setting-page/ldap/ldap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingPageLdapComponent);
    return SettingPageLdapComponent;
}());



/***/ }),

/***/ "./src/app/setting-page/s3/s3.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  s3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/setting-page/s3/s3.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setting-page/s3/s3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageS3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingPageS3Component = (function () {
    function SettingPageS3Component() {
    }
    SettingPageS3Component.prototype.ngOnInit = function () {
    };
    SettingPageS3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sp-s3',
            template: __webpack_require__("./src/app/setting-page/s3/s3.component.html"),
            styles: [__webpack_require__("./src/app/setting-page/s3/s3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingPageS3Component);
    return SettingPageS3Component;
}());



/***/ }),

/***/ "./src/app/setting-page/setting-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pace-done\">\n  <app-element-leftbar></app-element-leftbar>\n  <mat-card class=\"content\">\n    <mat-tab-group>\n      <mat-tab label=\"{{'Basic setting'|trans}}\">\n        <app-sp-basic></app-sp-basic>\n      </mat-tab>\n      <mat-tab label=\"{{'Email setting'|trans}}\">\n        <app-sp-email></app-sp-email>\n      </mat-tab>\n      <mat-tab label=\"{{'LDAP setting'|trans}}\">\n        <app-sp-ldap></app-sp-ldap>\n      </mat-tab>\n      <mat-tab label=\"{{'Terminal setting'|trans}}\">\n        <app-sp-terminal></app-sp-terminal>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n  <app-element-ofooter></app-element-ofooter>\n</div>\n"

/***/ }),

/***/ "./src/app/setting-page/setting-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".pace-done {\n  width: 100%;\n  height: 100%;\n  padding: 0; }\n\n.content {\n  margin-left: 220px;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/setting-page/setting-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingPageComponent = (function () {
    function SettingPageComponent() {
    }
    SettingPageComponent.prototype.ngOnInit = function () {
    };
    SettingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting-page',
            template: __webpack_require__("./src/app/setting-page/setting-page.component.html"),
            styles: [__webpack_require__("./src/app/setting-page/setting-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingPageComponent);
    return SettingPageComponent;
}());



/***/ }),

/***/ "./src/app/setting-page/terminal/terminal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  terminal works!\n</p>\n"

/***/ }),

/***/ "./src/app/setting-page/terminal/terminal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setting-page/terminal/terminal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageTerminalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingPageTerminalComponent = (function () {
    function SettingPageTerminalComponent() {
    }
    SettingPageTerminalComponent.prototype.ngOnInit = function () {
    };
    SettingPageTerminalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sp-terminal',
            template: __webpack_require__("./src/app/setting-page/terminal/terminal.component.html"),
            styles: [__webpack_require__("./src/app/setting-page/terminal/terminal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingPageTerminalComponent);
    return SettingPageTerminalComponent;
}());



/***/ }),

/***/ "./src/app/test-page/test-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-element-elfinder></app-element-elfinder>\n"

/***/ }),

/***/ "./src/app/test-page/test-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-page/test-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestPageComponent = (function () {
    function TestPageComponent() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* DataStore */].NavShow = false;
    }
    TestPageComponent.prototype.ngOnInit = function () {
    };
    TestPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-page',
            template: __webpack_require__("./src/app/test-page/test-page.component.html"),
            styles: [__webpack_require__("./src/app/test-page/test-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestPageComponent);
    return TestPageComponent;
}());



/***/ }),

/***/ "./src/app/trans.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransPipe = (function () {
    function TransPipe() {
    }
    TransPipe.prototype.transform = function (value, args) {
        if (__WEBPACK_IMPORTED_MODULE_1__globals__["h" /* i18n */].has(value.toLowerCase())) {
            return __WEBPACK_IMPORTED_MODULE_1__globals__["h" /* i18n */].get(value.toLowerCase());
        }
        else {
            return value;
        }
    };
    TransPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'trans'
        })
    ], TransPipe);
    return TransPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return version; });
var environment = {
    production: true
};
var version = '1.0.0 GPLv2.';


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map