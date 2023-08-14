class CaixaDaLanchonete {
    metodosDePagamento = ['debito', 'credito', 'dinheiro'];
    
    /**
     *  Código      Descrição                   Valor
     *  cafe        Café                        R$ 3,00
     *  chantily    Chantily (extra do Café)    R$ 1,50
     *  suco        Suco Natural                R$ 6,20
     *  sanduiche   Sanduíche                   R$ 6,50
     *  queijo      Queijo (extra do Sanduíche) R$ 2,00
     *  salgado     Salgado                     R$ 7,25
     *  combo1      1 Suco e 1 Sanduíche        R$ 9,50
     *  combo2      1 Café e 1 Sanduíche        R$ 7,50
     */

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

    /**
     * 
     * @param {string} metodoDePagamento - Valores possíveis: 'debito', 'credito' ou 'dinheiro'
     * @param {Array} itens - Items que serão comprados. Cada item é uma string contendo o código do item e a quantidade. Ex: ['cafe,1','chantily,1'] 
     * @returns {string} Valor da compra
     */
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.validaMetodoDePagamento(metodoDePagamento)) return 'Forma de pagamento inválida!';
        if (!this.verificaSeExistemItemsNoCarrinho(itens)) return 'Não há itens no carrinho de compra!';

        return "";
    }

    calcularDescontosOuTaxas(metodoDePagamento, valorDaCompra){
        switch (metodoDePagamento){
            case 'dinheiro':
                const desconto = valorDaCompra * (5/100);
                return valorDaCompra - desconto;

            case 'credito':
                const taxa = valorDaCompra * (3/100);
                return valorDaCompra + taxa;
        }

        return valorDaCompra;
    }

    verificaSeExistemItemsNoCarrinho(items){
        return (items.length > 0 ? true : false);
    }

    validaMetodoDePagamento(metodoDePagamento){
        return (this.metodosDePagamento.includes(metodoDePagamento) ? true : false);
    }
}

export { CaixaDaLanchonete };
