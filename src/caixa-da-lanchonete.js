import { cardapio } from "./cardapio.js";

class CaixaDaLanchonete {
    metodosDePagamento = ['debito', 'credito', 'dinheiro'];
    cardapio = cardapio;

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

        const carrinhoDeCompras = this.estruturaItensDoCarrinho(itens);

        if (!this.verificaSeItensExistemNoCardapio(carrinhoDeCompras)) return 'Item inválido!';
        if (!this.validaQuantidadeDosItens(carrinhoDeCompras)) return 'Quantidade inválida!';

        let valorTotal = 0;

        // To-do: Refatorar trecho de código e organizá-lo em funções próprias.
        // To-do: Tentar usar o método "reduce" para calcular o valor total da compras.
        for (const item of carrinhoDeCompras){
            // Verifica a existência de itens extras no carrinho de compras.
            // Verifica se o item principal do item extra também está presente no carrinho.
            if (item.extra){
                const itemPrincipal = item.itemPrincipal;
                const itemPrincipalExisteNoCarrinho = carrinhoDeCompras.some((item) => item.codigo === itemPrincipal.codigo);

                if (!itemPrincipalExisteNoCarrinho) return "Item extra não pode ser pedido sem o principal";
            }

            valorTotal += item.valor * item.quantidade;
        };

        valorTotal = this.calcularDescontosOuTaxas(metodoDePagamento, valorTotal);
        valorTotal = (`R$ ${valorTotal.toFixed(2)}`).replace('.', ',');

        return valorTotal;
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

    estruturaItensDoCarrinho(itens){
        const itensDoCarrinho = itens.map((item) => {
            const codigoEQuantidade = item.split(',');
            const codigo = codigoEQuantidade[0];
            const quantidade = parseInt(codigoEQuantidade[1]);


            const itemDoCarrinho = this.cardapio.find((itemDoCardapio) => itemDoCardapio.codigo === codigo);

            if (!itemDoCarrinho) return null;

            if (itemDoCarrinho){
                return {
                    ...itemDoCarrinho,
                    quantidade: quantidade
                }
            } 
        });

        return itensDoCarrinho;
    }

    verificaSeItensExistemNoCardapio(itens){ 
        for (const item of itens){
            if (!item) return false;

            const itemExisteNoCardapio = this.cardapio.some(itemDoCardapio => itemDoCardapio.codigo === item.codigo);
            
            if (!itemExisteNoCardapio) return false;
        }

        return true;
    }

    validaQuantidadeDosItens(itens){
        return (itens.every(item => item.quantidade > 0));
    }
}

export { CaixaDaLanchonete };
