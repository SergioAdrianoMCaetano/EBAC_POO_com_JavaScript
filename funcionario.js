// - PRÁTICA
// 	* Crie uma classe de uma abstração;
// 	* Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
// 	* Crie pelo menos três instâncias de objetos;
// 	* Crie um repositório do curso cria uma branch oo_js e armazen o código do exercício;
// 	* Envie o link do repositório através da plataforma.


//FUNÇÃO CONSTRUTORA em JAVASCRIPT é uma CLASSE no JAVA
function Pessoa (nome){
    this.nome = nome;
    this.dizOi = function (){
        console.log(this.nome + " diz eae!");
    }
    
}

function Funcionario( nome, cargo, salario){
    //HERANÇA
    Pessoa.call(this, nome);

    this.cargo = cargo;
    let _salario = salario;

    //ENCAPSULAMENTO
    
    //getters
    this.getSalario = function(){
        return _salario
    }
    //setters
    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }

    this.dizCargo = function(){
        console.log(this.cargo);
    }

    //POLIMORFISMO
    this.aumento = function(){
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
}    

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome){
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

//INSTÂNCIAS DE OBJETO
const funcionario1 = new Funcionario ("João", "Dev FullStack", 5000);
const funcionario2 = new Estagiario ("Gerson");
const funcionario3 = new Gerente("Paula")

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());
