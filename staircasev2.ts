function steps(n){
    for(let row = 1; row <=n; row++){
        console.log(" ".repeat(n-row) + "#".repeat(row));
    }
}

steps(4)