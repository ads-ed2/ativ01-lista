# ed2-xp

## Exercício 1

1 - Implemente a classe `No` que deve ser genérica e composta dos seguintes atributos privados e métodos:

-   `elemento: T`: Armazena o elemento do nó.
-   `proximo: No<T>`: Armazena a referência para o próximo nó.
-   `construtor(elemento: T)`: Inicializa o nó com o elemento passado por parâmetro.
-   `getProximo(): No<T>`: Retorna o próximo nó.
-   `setProximo(proximo: No<T>): void`: Define o próximo nó.
-   `elemento(): T`: Retorna o elemento do nó.
-   `toString(): string`: Retorna uma string com o elemento do nó.
-   `equals(no: No<T>): boolean`: Retorna `true` se o elemento do nó for igual ao elemento do nó passado por parâmetro e `false` caso contrário.
-   `compareTo(no: No<T>): number`: Retorna `0` se o elemento do nó for igual ao elemento do nó passado por parâmetro, `-1` se o elemento do nó for menor que o elemento do nó passado por parâmetro e `1` se o elemento do nó for maior que o elemento do nó passado por parâmetro.
-   `clonar(): No<T>`: Retorna um novo nó com o mesmo elemento do nó.

2 - Implemente a classe `Lista` que deve ser genérica e composta da classe `No`, além dos seguintes atributos privados e métodos:

-   `inicio: No<T>`: Armazena a referência para o início da lista.
-   `fim: No<T>`: Armazena a referência para o fim da lista.
-   `tamanho`: number: Armazena o tamanho da lista.
-   `construtor()`: Inicializa a lista.
-   `limpar(): void`: Remove todos os elementos da lista.
-   `adicionarInicio(elemento: T): void`: Adiciona um elemento no início da lista.
-   `adicionarFim(elemento: T): void`: Adiciona um elemento no fim da lista.
-   `adicionarTodos(lista: Lista<T>): void`: Adiciona todos os elementos da lista passada por parâmetro na lista.
-   `adicionar(indice: number, elemento: T): void`: Adiciona um elemento na lista no índice passado por parâmetro.
-   `removerInicio(): T`: Remove o primeiro elemento da lista e o retorna.
-   `removerFim(): T`: Remove o último elemento da lista e o retorna.
-   `removerTodos(lista: Lista<T>): void`: Remove todos os elementos da lista passada por parâmetro da lista.
-   `remover(indice: number): T`: Remove o elemento da lista no índice passado por parâmetro e o retorna.
-   `remover(elemento: T): void`: Remove o elemento da lista passado por parâmetro.
-   `listar(): T[]`: Retorna um array com os elementos da lista.
-   `listarInverso(): T[]`: Retorna um array com os elementos da lista na ordem inversa.
-   `subLista(inicio: number, fim: number): Lista<T>`: Retorna uma nova lista com os elementos da lista no intervalo passado por parâmetro.
-   `obter(indice: number): T`: Retorna o elemento da lista no índice passado por parâmetro.
-   `tamanho(): number`: Retorna o tamanho da lista.
-   `contem(elemento: T): boolean`: Retorna `true` se a lista contém o elemento passado por parâmetro e `false` caso contrário.
-   `contemTodos(lista: Lista<T>): boolean`: Retorna `true` se a lista contém todos os elementos da lista passada por parâmetro e `false` caso contrário.
-   `contemRepetidos(): boolean`: Retorna `true` se a lista contém elementos repetidos e `false` caso contrário.
-   `toString(): string`: Retorna uma string com os elementos da lista.
-   `equals(lista: Lista<T>): boolean`: Retorna `true` se a lista for igual à lista passada por parâmetro e `false` caso contrário.
-   `clonar(): Lista<T>`: Retorna uma nova lista com os mesmos elementos da lista.
-   `ordenar(): void`: Ordena os elementos da lista.
-   `inverter(): void`: Inverte os elementos da lista.
-   `substituir(elemento: T, novoElemento: T): void`: Substitui o elemento da lista pelo novo elemento passado por parâmetro.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
