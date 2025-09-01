
// ## 1. Função utilitária para reuso de APIs 

// **Enunciado:**
// Crie uma função `fetchData<T>` que receba uma URL e retorne uma `Promise<T>`. Use generics para que a tipagem do retorno seja inferida conforme o tipo esperado.

// **Exemplo de uso:**

// ```ts
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// async function main() {
//   const users = await fetchData<User[]>('https://api.exemplo.com/users');
//   console.log(users[0].email);
// }
// ```

// ---

// ## 2. Repositório genérico no estilo ORM

// **Enunciado:**
// Implemente uma classe `Repository<T>` que permita criar, buscar e listar registros de um tipo específico (ex: `User`, `Product`).

// **Exemplo de uso:**

// ```ts
// class Repository<T> {
//   private items: T[] = [];

//   add(item: T): void { /* ... */ }
//   getAll(): T[] { /* ... */ }
//   find(predicate: (item: T) => boolean): T | undefined { /* ... */ }
// }

// interface Product {
//   id: number;
//   name: string;
// }

// const productRepo = new Repository<Product>();
// productRepo.add({ id: 1, name: "Notebook" });
// ```

// ---

// ## 3. Formulários dinâmicos no frontend 📝

// **Enunciado:**
// Crie uma função `validateForm<T>` que receba um objeto de valores e outro de regras de validação (funções). O retorno deve ser um objeto com os mesmos campos, mas indicando se cada campo é válido ou não.

// **Exemplo de uso:**

// ```ts
// const formData = { name: "Ana", age: 15 };

// const rules = {
//   name: (val: string) => val.length > 2,
//   age: (val: number) => val >= 18,
// };

// const result = validateForm<typeof formData>(formData, rules);
// // result: { name: true, age: false }
// ```

// ---

// ## 4. Tipagem para componentes React ⚛️

// **Enunciado:**
// Crie um componente genérico `Select<T>` que receba uma lista de opções tipadas e um callback `onSelect`.

// **Exemplo de uso:**

// ```tsx
// interface Option {
//   id: number;
//   label: string;
// }

// <Select<Option>
//   options={[{ id: 1, label: "Opção A" }]}
//   onSelect={(item) => console.log(item.id)}
// />
// ```

// ---

// ## 5. Merge de objetos configuráveis ⚙️

// **Enunciado:**
// Crie uma função `mergeObjects<T, U>` que combine dois objetos e preserve os tipos de ambos.

// **Exemplo de uso:**

// ```ts
// const a = { host: "localhost", port: 3000 };
// const b = { secure: true };

// const config = mergeObjects(a, b);
// // config: { host: string; port: number; secure: boolean }
// ```


// ## 1. Função utilitária para reuso de APIs 

// **Enunciado:**
// Crie uma função `fetchData<T>` que receba uma URL e retorne uma `Promise<T>`. 
// Use generics para que a tipagem do retorno seja inferida conforme o tipo esperado.

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`)
    }
    const data: T = await response.json()
    return data;
}

// type Post = {
//     id: number;
//     title: string;
//     body: string;
// }

// fetchData<Post[]>('https://teste.com.br/posts')
//     .then(posts => console.log(posts))
//     .catch(err => console.error(err));

    // O uso do generic <T> permite que você defina o tipo de retorno esperado (Post[] no exemplo).


// ## 2. Repositório genérico no estilo ORM

// **Enunciado:**
// Implemente uma classe `Repository<T>` que permita criar, buscar e listar registros de um 
// tipo específico (ex: `User`, `Product`).


class Repository<T> {
    private items: T[] = [];

    add(item: T): void { 
        this.items.push(item)
    }
    getAll(): T[] {
        return this.items
    }
    find(predicate: (item: T) => boolean): T | undefined { 
        return this.items.find(predicate);
    }
}

interface Product {
    id: number;
    name: string;
}
new Repository<Product>();
const productRepo = new Repository<Product>();
productRepo.add({ id: 1, name: "Notebook" });
console.log(productRepo.getAll());
console.log(productRepo.find(p => p.id === 1));

// ## 3. Formulários dinâmicos no frontend 📝

// **Enunciado:**
// Crie uma função `validateForm<T>` que receba um objeto de valores e outro de regras de validação (funções). 
// O retorno deve ser um objeto com os mesmos campos, 
// mas indicando se cada campo é válido ou não

// **Exemplo de uso:**

const formData = { name: "Ana", age: 15 };

const rules = {
    name: (val: string) => val.length > 2,
    age: (val: number) => val >= 18,
};

const result = validateForm<typeof formData>(formData, rules);
console.log(result)

// result: { name: true, age: false }

function validateForm(formData: object, rules: object) {
    return Object.keys(rules).reduce((acc, key) => {
        acc[key] = rules[key](formData[key]);
        return acc;
    }, {} as Record<string, boolean>);
}


// result: { name: true, age: false }

// ## 4. Tipagem para componentes React ⚛️

// **Enunciado:**
// Crie um componente genérico `Select<T>` que receba uma lista de opções tipadas e um callback `onSelect`.

// **Exemplo de uso:**

// ```tsx
// interface Option {
//   id: number;
//   label: string;
// }

// <Select<Option>
//   options={[{ id: 1, label: "Opção A" }]}
//   onSelect={(item) => console.log(item.id)}
// />
// ```
