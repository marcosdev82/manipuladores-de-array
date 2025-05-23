const data = [
    {
        "nome": "ADERSON ARAGÃO MOURA",
        "email": "adersonmoura@hotmail.com",
        "cpf": "02229637355",
        "data_nascimento": "08/01/1986",
        "pessoa_id": 1,
        "hash_link_senha": "1c18274c0a374dcd5806b7438229a9deae5793b0",
        "matricula": "BR00000001",
        "num_conselho": "147098",
        "uf_conselho": "SP",
        "status_associado": "2-0",
        "categoria_profissional_id": 2,
        "situacao_financeira": "DEBITO",
        "categoria": "MEMBRO TITULAR",
        "capitulo": "PIAUÍ",
        "data_validade": "31/12/2025"
    },
    {
        "nome": "ADILON CARDOSO FILHO",
        "email": "adilon@yahoo.com",
        "cpf": "49165950178",
        "data_nascimento": "15/11/1969",
        "pessoa_id": 2,
        "hash_link_senha": "d152f913947e02018dd2f96f3e60fc9e9a0998d3",
        "matricula": "BR00000002",
        "num_conselho": "9616",
        "uf_conselho": "GO",
        "status_associado": "2-0",
        "categoria_profissional_id": 1,
        "situacao_financeira": "DEBITO",
        "categoria": "MEMBRO CIRURGIÃO ASSOCIADO",
        "capitulo": "GOIÁS",
        "data_validade": "31/12/2025"
    },
    {
        "nome": "ANA ELISA MAIA TEIXEIRA",
        "email": "elisamaiateixeira@yahoo.com.br",
        "cpf": "80615139787",
        "data_nascimento": "24/02/1963",
        "pessoa_id": 145,
        "hash_link_senha": "1f301c3f62425408b102912ac630b61f82971bf4",
        "matricula": "BR00000145",
        "num_conselho": null,
        "uf_conselho": "RJ",
        "status_associado": "3-0",
        "categoria_profissional_id": 3,
        "situacao_financeira": "NAO SOCIO",
        "categoria": "MEMBRO COESAS MULTIDISCIPLINAR",
        "capitulo": "RIO DE JANEIRO",
        "data_validade": "31/12/2025"
    },
    {
        "nome": "ANA FLAVIA AMORIM SCHOLZE",
        "email": "anaflaviaamorim88@hotmail.com",
        "cpf": "06641104958",
        "data_nascimento": "09/07/1988",
        "pessoa_id": 146,
        "hash_link_senha": "14693de82c3bfdf7eb51a79f9853d17079e896f419c",
        "matricula": "BR00000146",
        "num_conselho": "6733",
        "uf_conselho": "MT",
        "status_associado": "2-0",
        "categoria_profissional_id": 3,
        "situacao_financeira": "QUITE",
        "categoria": "MEMBRO COESAS MULTIDISCIPLINAR",
        "capitulo": "MATO GROSSO",
        "data_validade": "31/12/2025"
    },
    {
        "nome": "ADILSON OLIVEIRA NOVAK",
        "email": "anovak@onda.com.br",
        "cpf": "15809714900",
        "data_nascimento": "31/12/1950",
        "pessoa_id": 3,
        "hash_link_senha": "6f8a78c9be7ef11f885e9228dd2f1222543705d0",
        "matricula": "BR00000003",
        "num_conselho": "4594",
        "uf_conselho": "PR",
        "status_associado": "2-8",
        "categoria_profissional_id": 2,
        "situacao_financeira": "DEBITO",
        "categoria": "MEMBRO TITULAR",
        "capitulo": "PARANÁ",
        "data_validade": "31/12/2025"
    },
];

// // FORMA FEITA POR MIM
// const ocorrencia = ((categoria) => categoria.split(' ').some((palavra) => palavra === 'COESAS'))

// const result = data.filter((categoria) =>  ocorrencia(categoria.categoria) )
// console.log(result)

// // FORMA SIMPLIFICADA
// const resultado = data.filter(pessoa => 
//   pessoa.categoria.toUpperCase().includes('COESAS')
// )

// console.log(resultado)

 const resultado = data.filter(pessoa => 
    pessoa.categoria.includes('COESAS')
 )
 console.log(resultado)