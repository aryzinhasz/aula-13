class Administrador {
  public nome: string; // atributo público
  private senha: string; // atributo privado

  constructor(nome: string, senha: string) {
    this.nome = nome;
    this.senha = senha;
  }

  // Método privado para alterar senha
  private alterarSenha(novaSenha: string): void {
    this.senha = novaSenha;
    console.log("Senha alterada com sucesso!");
  }

  // Método público para solicitar alteração da senha (simulação)
  public solicitarAlteracaoSenha(novaSenha: string): void {
    this.alterarSenha(novaSenha);
  }

  // Método público para exibir dados (só nome, não a senha!)
  public mostrarInfo(): void {
    console.log(`Administrador: ${this.nome}`);
  }
}

// Criando objeto
const admin = new Administrador("Aryelle", "1234");

// Acessando métodos
admin.mostrarInfo();

// Tentando acessar diretamente (vai dar erro!)
// admin.alterarSenha("novaSenha"); (não permitido, pois é private)

// Acessando indiretamente pelo método público
admin.solicitarAlteracaoSenha("novaSenha123");
