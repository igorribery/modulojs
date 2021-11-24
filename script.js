function Animal() {
    this.raca = "Cao";
    this.nome = "Lulu";
    this.idade = 5;
    this.peso = 10;

    this.fazerXixi = function() {
        console.log("xiiii.....");
    }
    this.comer = function(kg) {
        console.log("hum...");
        this.peso = this.peso + (kg/2);
    }
}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome ="Lulu;"

var xuxu = new Animal();
xuxu.raca ="Cao";
xuxu.nome ="Xuxu";