class CaixaDaLanchonete {

    /**
     *  Descontos e taxas:
     *  Pagamento em dinheiro tem 5% de desconto;
     *  Pagamento a crédito tem acréscimo de 3% no valor total.
     */

    /**
     *  Regras:
     *  Caso item extra seja informado num pedido que não tenha o respectivo item principal, printar "Item extra não pode ser pedido sem o principal";
     *  Combos não são considerados como item principal;
     *  É possível pedir mais de um item extra sem precisar de mais de um principal;
     *  Se não forem pedidos itens, printar "Não há itens no carrinho de compra!";
     *  Se a quantidade de itens for zero, printar "Quantidade inválida!";
     *  Se o código do item não existir, printar "Item inválido!",
     *  Se a forma de pagamento não existir, printar "Forma de pagamento inválida!".
     */

    calcularValorDaCompra(metodoDePagamento, itens) {
        // metodoDePagamento: string | possíveis valores: 'debito', 'credito', 'dinheiro';
        // itens: array | itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade separados por uma vírgula. Ex: ['cafe,1','chantily,1'];

        return "";
    }

}

export { CaixaDaLanchonete };
