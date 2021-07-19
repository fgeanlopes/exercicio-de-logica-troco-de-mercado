//ERRO EM VALOR DE 1,3,8. 

const troco = (value) => {
    let ten = 0;
    let five = 0;
    let two = 0;
    let rest = 0;

    if(value){
        // BREAK IN 10
        if(Number.isInteger(value / 10)){
            ten = value / 10
            return {
                two:two,
                five:five,
                ten:ten
            }
        }

        // DIVISAO DE 10
        ten = parseInt(value/10)
        rest10 = value % 10

        // DIVISAO DE 5
        five = parseInt(rest10/5)
        rest5 = rest10 % 5
        rest5
        
        // SE VALEU FOR 6 ou 8 REST SERÁ 1 ou 3 
        //E DIRECIONAR PARA DIVIDIR PELO 2
        if(rest5 === 1 || rest5 === 3 ){
            five = 0
            two = parseInt(rest10/2)
        }
        
        // FIVE
        if(Number.isInteger(rest5 / 2)){
            two = parseInt(rest5 / 2)
        }
        
        return {
            two:two,
            five:five,
            ten:ten
        }

    }else{
        return {
            two:null,
            five:null,
            ten:null
        }
    }
}

let result = troco(1)
result;
