function Animal() {
    this.raca = "Cao";
    this.nome = "Lulu";
    this.idade = 5;
    this.peso = 10;

    this.fazerXixi = function() {
        console.log("xiiii.....");
    }
    this.comer = function(kg) {
        for(var i=0;i<kg;i++) {
            this.mastigar(i);
        }
        
        console.log("hum...");
        this.peso = this.peso + (kg/2);
    }
    this.mastigar = function(i){
        console.log(i+" - nhoc...");
    }
}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome ="Lulu;";
lulu.comer(10);

var xuxu = new Animal();
xuxu.raca ="Cao";
xuxu.nome ="Xuxu";