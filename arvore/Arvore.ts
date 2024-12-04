import No from "./No";

export default class Arvore<T extends Object> {
	private _raiz: No<T> | null = null;
	private _tamanho: number = 0;

	adicionar(valor: T): void {
		let novoNo = new No<T>(valor);

		if (this._raiz === null) {
			this._raiz = novoNo;
		} else {
			// if (this._raiz.esquerda === null) {
			// 	this.adicionarEsquerda(this._raiz, novoNo);
			// } else if (this._raiz.direita === null) {
			// 	this.adicionarDireita(this._raiz, novoNo);
			// } else if (this.estarOcupado(this._raiz)) {
			// 	this.adicionarEsquerda(this._raiz.esquerda, novoNo);
			// }

			this.adicionarNo(this._raiz, novoNo); // joao , ana
		}

		this._tamanho++;
	}

	private adicionarNo(noBase: No<T>, noASerAdicionado: No<T>) {
		if (noBase.esquerda === null) {
			this.adicionarEsquerda(noBase, noASerAdicionado);
		} else if (noBase.direita === null) {
			this.adicionarDireita(noBase, noASerAdicionado);
		} else if (this.estarOcupado(noBase)) {
			this.adicionarNo(noBase.esquerda, noASerAdicionado); // maria , ana
		}
	}

	private estarOcupado(no: No<T>): boolean {
		return no.esquerda !== null && no.direita !== null;
	}

	private adicionarEsquerda(noBase: No<T>, noASerAdicionado: No<T>) {
		noBase.esquerda = noASerAdicionado;
	}

	private adicionarDireita(noBase: No<T>, noASerAdicionado: No<T>) {
		noBase.direita = noASerAdicionado;
	}

	limpar(): void {
		this._raiz = null;
		this._tamanho = 0;
	}

	constructor() {
		this._raiz = null;
	}

	get raiz(): No<T> | null {
		return this._raiz;
	}

	get tamanho(): number {
		return this._tamanho;
	}

	toString(): string | undefined {
		return this._raiz?.toString();
	}
}
