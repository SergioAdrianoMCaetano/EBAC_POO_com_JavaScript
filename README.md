# Princípios da Programação Orientada a Objetos com JavaScript

A Programação Orientada a Objetos (POO) é um paradigma de programação baseado no conceito de "objetos", que podem conter dados na forma de campos (também conhecidos como atributos ou propriedades) e códigos na forma de procedimentos (também conhecidos como métodos). Três dos principais princípios da POO são:

1. **Herança:** Permite que uma classe herde características (atributos e métodos) de outra classe. Isso promove a reutilização de código e facilita a criação de hierarquias entre classes. Uma classe que herda é chamada de subclasse ou classe derivada, e a classe da qual ela herda é chamada de superclasse ou classe base.
2. **Encapsulamento:** É o conceito de reunir os dados (atributos) e os métodos que operam nesses dados em um único objeto. O encapsulamento ajuda a controlar o acesso aos dados, permitindo que os métodos definidos dentro da classe sejam os únicos a manipular seus próprios dados, garantindo assim a integridade dos objetos.
3. **Polimorfismo:** Significa "muitas formas" e refere-se à capacidade de um objeto de se comportar de diferentes maneiras, dependendo do contexto. Isso é feito através do uso de métodos com o mesmo nome em classes diferentes, mas com implementações diferentes. O polimorfismo permite que um único método seja usado de várias maneiras.

### Código de Exemplo

O código fornecido demonstra o uso desses princípios em JavaScript:

- **Pessoa:** Define uma classe base que possui um método `dizOi` para imprimir uma saudação.
- **Funcionario:** Herda de `Pessoa` e adiciona métodos para gerenciar informações de funcionários, como cargo e salário.
- **Estagiario e Gerente:** São subclasses de `Funcionario` que substituem o método `aumento` para calcular o aumento salarial de acordo com o cargo.