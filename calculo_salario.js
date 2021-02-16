get_current_month = function () {
    var date = new Date;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()]
}


var horas = 160
var salario_hora = 32
var taxa_salario = 1.0 - 0.15 

var comissao = 0.03
var vendas = 21700
var taxa_venda = 1.0 - 0.3

calc_salario = function () {
    var pagamento_hora = (horas * salario_hora) * taxa_salario;
    var pagamento_comissao = (comissao * vendas) * taxa_venda;
    var pagamento_final = pagamento_hora + pagamento_comissao;
    return 'pagamento do mes ' + get_current_month() + ' ' + pagamento_final.toFixed(2);
};

console.log(calc_salario())
