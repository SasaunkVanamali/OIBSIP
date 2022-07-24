let main=()=>{
    let num = document.getElementById('num').value
    let val = document.getElementById('val').value
    let result = document.getElementById('result')

    let r

    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        if(c <= 10){
            result.innerHTML=(`<Result = ${c}°celsius`)            
        }else if(c >= 40){
            result.innerHTML =(`Result = ${c}°celsius`)            
        }else{
            result.innerHTML=(`Result = ${c}°celsius`)          
        }
    }

    let CtoF=(fhr)=>{
        let f = Math.round((fhr*9/5)+32)
        if(f <= 50){
            result.innerHTML=(`Result = ${f}°fahrenheit`)           
        }else if(f >= 104){
            result.innerHTML =(`Result = ${f}°fahrenheit`)
        }else{
        result.innerHTML=(`<Result = ${f}°fahrenheit`)
    }
    }

    if(val=="celsius"){
        r = CtoF(num)
        return r
    }else{
        r= FtoC(num)
        return r
    }
}