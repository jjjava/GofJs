// Uma classe mais ampla com o nome Pessoa
function Pessoa() {
    // Propeidade e métodos amplos para a classe
    var nome;
    this.getNome = function() {
        return nome;
    };
    this.setNome = function(valor) {
        nome = valor;
    };
}

// Uma classe específica
function PessoaJuridica() {
    // Propeidade e métodos específicos para a classe
    var cnpj;
    this.getCNPJ = function() {
        return cnpj;
    };
    this.setCNPJ = function(value) {
        cnpj = value;
    };
}

// Outra classe específica
function PessoaFisica() {
    // Propeidade e métodos específicos para a classe
    var cpf;
    this.getCPF = function() {
        return cpf;
    };

    this.setCPF = function(valor) {
        cpf = valor;
    };
}
// Utilizando a classe ampla Pessoa como protótipo para as classes
// específicas PessoaFisica e PessoaJuridica
PessoaFisica.prototype = new Pessoa();
PessoaJuridica.prototype = new Pessoa();

// Criando os objetos a parti das classes
oPessoaFisica = new PessoaFisica();
oPessoaJuridica = new PessoaJuridica();

// Atribuindo valor para a propriedade específica
oPessoaFisica.setCPF('111111');

// Atribuindo valor para a propriedade compartilhada do protótipo
oPessoaFisica.setNome('João');

// Atribuindo valor para a propriedade específica
oPessoaJuridica.setCNPJ('222222');

// Atribuindo valor para a propriedade compartilhada do protótipo
oPessoaJuridica.setNome('Empresa');

// Será que os valores estão iguais?
console.log("Nome da Pessoa Física: " + oPessoaFisica.getNome());
console.log("CPF da Pessoa Física: " + oPessoaFisica.getCPF());
console.log("Nome da Pessoa Jurídica: " + oPessoaJuridica.getNome());
console.log("CNPJ da Pessoa Jurídica: " + oPessoaJuridica.getCNPJ());