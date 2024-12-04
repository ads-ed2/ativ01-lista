export default class No<T extends Object> {
	private _elemento: T;
	private _esquerda: No<T> | null = null;
	private _direita: No<T> | null;

	constructor(valor: T) {
		this._elemento = valor;
		// this._esquerda = null;
		this._direita = null;
	}

	get elemento(): T {
		return this._elemento;
	}

	get esquerda(): No<T> | null {
		return this._esquerda;
	}

	get direita(): No<T> | null {
		return this._direita;
	}

	set esquerda(no: No<T>) {
		this._esquerda = no;
	}

	set direita(no: No<T>) {
		this._direita = no;
	}

	toString(): string {
		return this._elemento.toString();
	}
}
