class Cours {

    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.date = new Date().toLocaleString("fr-FR");
    }

    afficher() {
        console.log(`Titre: ${this.title}\nDescription: ${this.description}\nCatégorie: ${this.category}\nDate de création: ${this.date}`);
    }
    
    

}

const javascript1 = new Cours(
    'Projet "Classeur"',
    'Projet généré par ChatGPT pour apprendre à réaliser cette application.',
    'JavaScript'
);

javascript1.afficher();