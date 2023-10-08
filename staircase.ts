function staircase(n){
   
let string = '';

    for(let i=0;i<n;i++){
        console.log("i ", i);

        for(let k=n-i-1; k>i; k--){
            console.log("k ", k);

            string +=' ';
        }
        for(let j=0; j<i;j++){
            console.log("j ", j);

            string +='#';   

        } 
        string +='\n';      
    }

    console.log(string)


}

staircase(4)