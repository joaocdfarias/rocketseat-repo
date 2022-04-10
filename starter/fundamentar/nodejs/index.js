const timeOut = 3000
const finished = () => console.log('Done!')

// O setTimeout vai guardar a função finished
// na memória pra ser executada depois de X ms

// Então pode-se dizer que o setTimeout é assincrono
// pois, se não fosse, o console.log('Mostrar')
// teria esperado o timeout acabar pra assim ser executado
setTimeout(finished, timeOut)
console.log('Mostrar')
