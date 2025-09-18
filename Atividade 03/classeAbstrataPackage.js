var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe abstrata
var Package = /** @class */ (function () {
    function Package(module, token) {
        this.module = module;
        this.token = token;
    }
    // Método protegido (só acessível na própria classe ou subclasses)
    Package.prototype.useModule = function () {
        console.log("Usando o m\u00F3dulo ".concat(this.module, " com token v\u00E1lido."));
    };
    return Package;
}());
// Subclasse Server
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(module, token) {
        return _super.call(this, module, token) || this;
    }
    // Método público que chama o protegido
    Server.prototype.iniciar = function () {
        console.log("Iniciando servidor...");
        this.useModule(); // chama método protegido
    };
    return Server;
}(Package));
// Criando objeto
var meuServer = new Server("Autenticação", "abc123");
// Chamando método público
meuServer.iniciar();
// Tentando acessar diretamente (vai dar erro!)
// meuServer.useModule();  // Não permitido, pois é protected
// meuServer.token;       // Não permitido, pois é private
