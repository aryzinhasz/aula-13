// Classe abstrata
class Eletrodomestico {
  constructor(nome, voltagem) {
    if (this.constructor === Eletrodomestico) {
      throw new Error("Classe abstrata não pode ser instanciada diretamente.");
    }
    this.nome = nome;
    this.voltagem = voltagem;
  }

  // Método abstrato que deve ser sobrescrito
  ligar() {
    throw new Error("Método abstrato precisa ser implementado!");
  }

  // Método normal
  info() {
    console.log(`Eletrodoméstico: ${this.nome} - ${this.voltagem}V`);
  }
}

// Subclasse Geladeira
class Geladeira extends Eletrodomestico {
  ligar() {
    console.log(`${this.nome} está resfriando os alimentos.`);
  }
}

// Subclasse Microondas
class Microondas extends Eletrodomestico {
  ligar() {
    console.log(`${this.nome} está aquecendo a comida.`);
  }
}

// Subclasse Máquina de Lavar
class MaquinaDeLavar extends Eletrodomestico {
  ligar() {
    console.log(`${this.nome} está lavando roupas.`);
  }
}

// Criando objetos
const geladeira = new Geladeira("Geladeira Brastemp", 220);
const microondas = new Microondas("Microondas Electrolux", 127);
const maquina = new MaquinaDeLavar("Máquina Consul", 220);

// Usando métodos
geladeira.info();
geladeira.ligar();

microondas.info();
microondas.ligar();

maquina.info();
maquina.ligar();
