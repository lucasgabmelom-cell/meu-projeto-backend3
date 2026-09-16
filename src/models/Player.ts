/* 
A palavra-chave "export" é usada para exportar a classe Player,
permitindo que ela seja importada e utilizada em outros arquivos do projeto.
A palavra-chave "class" é usada para definir uma classe em TypeScript.
*/

export class Player {
    /* A palavra-chave "public" é usada para definir propriedades
    públicas da classe, que podem ser acessadas de fora da classe.*/
    public name: string; // O nome do player(texto)
    public health: number; // A saúde do player(número)
    public level: number; // O nivel do player(número)

    // CONSTRUTOR DA CLASSE
    /* O construtor é um método especial que é chamado quando
    uma nova instância da classe é criada.*/   
    constructor(name: string, health: number = 100, level: number = 1) {
        /* A palavra-chave "this" é usada para se referir à instância atual
        da classe. Ou seja: "Pegue o atributo 'health' da classe Player e 
        atribua o valor de 'health' = 100 a ele".*/
        this.name = name; // Inicializa o nome do player
        this.health = health; // Inicializa a saúde do player
        this.level = level; // Inicializa o nível do player
    }

    // MÉTODOS DA CLASSE PLAYER
    /* Métodos são funções que pertencem a uma classe e podem ser
    chamadas em instâncias dessa classe. */
    // O métod "attack" é usado para atacar outro player, reduzindo sua saúde.
    public attack(): string {
        // Calcula o dano com base no nível do player
        const damage = this.level * 10;
        /* A palavra-chave "return" é usada para retornar um valor
        de uma função ou método. */
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /* O método "takeDamage" é usado para receber dano de outro player,
    reduzindo a saúde do player. */
    public takeDamage(damage: number): string {
        // Reduz a sáude do player com base no dano recebido
        this.health -= damage;
        // Verifica se a saúde do player caiu para 0 ou menos
        if (this.health <= 0) {
            this.health = 0; // Garante que a saúde não fique negativa
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} recebeu ${damage} 
        de dano e agora tem ${this.health} de saúde!`;
    }

// O método "heal" é usado para curar o player, aumentando sua saúde.
    public takeHeal(heal: number): string {
        this.health += heal;
        if (this.health > 100) {
            this.health = 100; // Garante que a saúde não ultrapasse 100
            return `O player ${this.name} foi curado ao máximo (100)!`;
        }
        return `O player ${this.name} foi curado em ${heal} e agora tem ${this.health} de saúde!`;
    }

// O método "LevelUp" é usado para aumentar o nível do player.
    public levelUp(level: number): string {
        this.level += level;
        if (this.level > 10) {
            this.level = 10; // Garante que o nível não ultrapasse 10
            return `O player ${this.name} atingiu o nível máximo (10)!`;
        }
        return `O player ${this.name} subiu para o nível ${this.level}.`;
    }
}