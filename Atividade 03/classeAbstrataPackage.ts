// Classe abstrata
abstract class Package {
  public module: string;
  private token: string;

  constructor(module: string, token: string) {
    this.module = module;
    this.token = token;
  }

  // Método protegido (só acessível na própria classe ou subclasses)
  protected useModule(): void {
    console.log(`Usando o módulo ${this.module} com token válido.`);
  }
}

// Subclasse Server
class Server extends Package {
  constructor(module: string, token: string) {
    super(module, token);
  }

  // Método público que chama o protegido
  public iniciar(): void {
    console.log("Iniciando servidor...");
    this.useModule(); // chama método protegido
  }
}

// Criando objeto
const meuServer = new Server("Autenticação", "abc123");

// Chamando método público
meuServer.iniciar();

// Tentando acessar diretamente (vai dar erro!)
// meuServer.useModule();  // Não permitido, pois é protected
// meuServer.token;       // Não permitido, pois é private
