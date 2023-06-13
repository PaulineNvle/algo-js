// 5! = 5 factoriel, wich means = 5 * 4 * 3 * 2 * 1 
// i = index

/* function factor(f) {
    let x = 1
    for (let i=1 ; i < f+1 ; i++ ) {
        x *= i  // on va multiplier x par l'index
    }
    return x
}

console.log(factor(3)) // 3 * 2 * 1 = 6

*/ 

function factor(f){
    if (f == 1){
        return 1
    } else {
        return f * factor(f-1)
    }
}

console.log(factor(5))


// factor(5) => factor(4) => factor(3) => factor(2) => factor(1)
//      120 => 24 => 6 => 2 => 1
// on commence par la fin, donc factor (1) va donner 1, qui est la condition d'arret, puis on test avec factor (2), donc 2 * 1 = 2
// factor (3) va donner 2 * 3  = 6
// factor (4) va donner 6*4 = 24
// factor (5) va donner 24 * 5 = 120 