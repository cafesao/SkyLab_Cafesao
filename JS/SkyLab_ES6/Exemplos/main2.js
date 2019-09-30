class Matematica{
    static soma(a, b){ //Estatica não enxerga o resto da classe
        return a + b
    }
}

console.log(Matematica.soma(1, 2))

