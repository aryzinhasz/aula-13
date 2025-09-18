var Administrador = /** @class */ (function () {
    function Administrador(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
    // Método privado para alterar senha
    Administrador.prototype.alterarSenha = function (novaSenha) {
        this.senha = novaSenha;
        console.log("Senha alterada com sucesso!");
    };
    // Método público para solicitar alteração da senha (simulação)
    Administrador.prototype.solicitarAlteracaoSenha = function (novaSenha) {
        this.alterarSenha(novaSenha);
    };
    // Método público para exibir dados (só nome, não a senha!)
    Administrador.prototype.mostrarInfo = function () {
        console.log("Administrador: ".concat(this.nome));
    };
    return Administrador;
}());
// Criando objeto
var admin = new Administrador("Aryelle", "1234");
// Acessando métodos
admin.mostrarInfo();
// Tentando acessar diretamente (vai dar erro!)
// admin.alterarSenha("novaSenha"); (não permitido, pois é private)
// Acessando indiretamente pelo método público
admin.solicitarAlteracaoSenha("novaSenha123");
