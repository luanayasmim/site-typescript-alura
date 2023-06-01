/*
    - Regras da Negociação
        *Não pode ser modificada depois de criada
        *Obrigatoriamente tem uma data, quantidade e valor
        *Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
 */

import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): Number{
        return this.quantidade * this.valor;
    }

    public paraTexto(): string{
        return `Data:${this.data}\nQuantidade: ${this.quantidade}\nValor:${this.valor}`;
    }

    public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate() && 
               this.data.getMonth() === negociacao.data.getMonth() &&
               this.data.getFullYear() === negociacao.data.getFullYear();
    }   
}