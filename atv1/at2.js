var salario = 200.00   ;  


console.log ("Salário antes do aumento:" + salario)

if (salario <=200.00){
    var salario20 = salario * 0.20
    console.log("Aumento" + salario20)
    var novoSalario = salario20 + salario
    
    console.log ("salario com aumento" + novoSalario)

}else if (salario <=280.00 && salario <= 700.00){
  var salario15 = salario * 0.15
  console.log ("Aumento" + salario15)
  var novoSalario15 = salario15 + salario 
  console.log ("salario com aumento" + novoSalario15) 
  }  
     else if (salario >= 700.00 && salario <=1500.00){
      var salario10 = salario * 0.10
      console.log ("aumento" + salario10)
      var novoSalario10 = salario10 + salario
      console.log ("Salário com aumento" + novoSalario10)
  } 
    else if ( salario => 1500.00) {
        var salario5 = salario * 0.5
        console.log ("aumento" + salario5)
        var novoSalario5 = salario5 + salario
        console.log ("Salário com aumento" + novoSalario5)
     }
  

 
     














  































 
