let menu;
const imoveiscadastrados = [];

while (menu != 3) {
    menu = Number(prompt(`Imóveis cadastrados: ${imoveiscadastrados.length}
    \n1. Salvar um imóvel\n2. Mostrar imóveis salvos\n3. Sair
    `));

    if (menu === 1) {
        const nome = prompt(`Qual o seu nome?`);
        const quartos = Number(prompt(`Qual a quantidade de quartos? `));
        const banheiros = Number(prompt(`Qual a quantidade de banheiros? `));
        const garagem = prompt(`Possui garagem?\n1.Sim\n2. Não? `);
        imoveiscadastrados.push({
            Nome: nome,
            Quartos: quartos,
            Banheiros: banheiros,
            Garagem: garagem
        })
        alert(`Imovel cadastrado com sucesso\n
        Nome: ${nome}\n
        Quartos: ${quartos}\n
        Banheiros: ${banheiros}\n   
        Garagem: ${garagem}\n
        Quantidade de imóveis cadastrados: ${imoveiscadastrados.length}\n`);

    } else if (menu === 2) {
        if (imoveiscadastrados == 0 || imoveiscadastrados == false) {
            alert(`Não possui imóvies cadastrados`);
        } else {
            for (let i = 0; i < imoveiscadastrados.length; i++) {
                alert(`
                Imóvel na posição ${i}\n
                Nome: ${imoveiscadastrados[i].Nome}\n
                Quartos: ${imoveiscadastrados[i].Quartos}\n
                Banheiros: ${imoveiscadastrados[i].Banheiros}\n
                Garagem: ${imoveiscadastrados[i].Garagem}\n
                `)
            }
        }
    } else {
        alert(`Encerrado!`)
    }
}