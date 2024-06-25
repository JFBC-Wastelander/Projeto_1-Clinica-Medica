let input
console.log("Bem vindo a clínica médica")
console.log('Tecle "1" para criar uma consulta médica.\nTecle "2" para ver suas consultas.\nTecle "3" se quiser atualizar uma consulta já existente.\nTecle "4" se quiser cancelar uma consulta')
process.stdin.on("data", function(data){
    input = +data.toString().trim()
    switch (input) {
        case 1:
            console.log('Criar consulta')
        break
        case 2:
            console.log('Ver consulta')
        break
        case 3:
            console.log('Atualizar consulta')
        break
        case 4:
            console.log('Cancelar consulta')
        break
    }
})