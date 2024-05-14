// funcao para exibir informacoes sobre cada classe de personagem
function exibirInfoClasse(classe) {
    switch (classe) {
        case "Guerreiro":
                console.log("classe: Guerreiro");
                console.log("descrito: Os guerreiro sao combatentes corpo a corpo resistentes,especializados no uso de armas e armaduras pesadas.");
                console.log("Habilidade: Ataque poderoso, resistencia a danos.");
                break;
            case "Mago";
                console.log("Classe: Mago");
                console.log("descriacao: Os magos sao metres do poder arcano, capazes de lancar feiticios poderosos e controlar os elemental.");
                console.log("habilidades : magias de ataque, controle mental.");
                break;
            case "ladino":
                console.log("Classe: ladino");
                console.log("Descricao: Os ladroes sao especializados em furtividade e astucia, capazes de realizar ataques furtivos e desarmar armadilhas.")
                console.log("habilidade : furtividade, ataques precioso.");
                break;
            default:
                    console.log("classe nao reconhecida. Escolha entre Guerreiro, Mago ou ladino");
    }
}

// chamando a funcao e passando como parametro "mago"
exibirInfoClasse("Mago");