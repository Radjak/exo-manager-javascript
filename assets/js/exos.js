const exo_level_01_num_01 = {
    name: 'Level 01 - 01',
    input: [1, 2, 3],
    output_expected: true,
    algo: (input) => {
        // Doit vérifier si le paramètre est bien un tableau et renvoyé un booléen

        return;
    },
};

const exo_level_01_num_02 = {
    name: 'Level 01 - 02',
    input: {
        a: [1, 2, 3],
        b: [4, 5, 6]
    },
    output_expected: [1, 2, 3, 4, 5, 6],
    algo: (input) => {
        // Doit fusionner les deux tableaux

        return;
    },
};

const exo_level_01_num_03 = {
    name: 'Level 01 - 03',
    input: [2, 78, 7679876],
    output_expected: true,
    algo: (input) => {
        // Doit vérifier que tous les éléments du tableau sont des multiples de 2 et renvoyer un booléen

        return;
    },
};

const exo_level_01_num_04 = {
    name: 'Level 01 - 04',
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    output_expected: [3, 6, 9, 12],
    algo: (input) => {
        // Doit retourner seulement les éléments multiples de 3

        return;
    },
};

const exo_level_01_num_05 = {
    name: 'Level 01 - 05',
    input: [158, 197, 837, 2484],
    output_expected: 837,
    algo: (input) => {
        // Doit retourner le premier élément dont la valeur est supérieure à 500

        return;
    },
};

const exo_level_01_num_06 = {
    name: 'Level 01 - 06',
    input: [158, 197, 837, 2484],
    output_expected: 2,
    algo: (input) => {
        // Doit retourner l'index du premier élément dont la valeur est supérieure à 500

        return;
    },
};

const exo_level_01_num_07 = {
    name: 'Level 01 - 07',
    input: ['yolo', 'j\'ai', 'faim'],
    output_expected: 'yolo - j\'ai - faim',
    algo: (input) => {
        // Doit retourner la fusion de tous les éléments du tableau avec un séprateur entre chacun

        return;
    },
};

const exo_level_01_num_08 = {
    name: 'Level 01 - 08',
    input: [1, 2, 3],
    output_expected: [7, 9, 11],
    algo: (input) => {
        // Doit retourner un tableau basé sur celui d'origine après avoir multiplié par 2 et ajouté 5

        return;
    },
};

const exo_level_01_num_09 = {
    name: 'Level 01 - 09',
    input: ['citron', 'kiwi', 'fraise'],
    output_expected: 'fraise',
    algo: (input) => {
        // Doit retourner la dernière valeur du tableau et supprimer cette dernière du tableau original

        return;
    },
};

const exo_level_01_num_10 = {
    name: 'Level 01 - 10',
    input: [10, 25, 30, 45, 50],
    output_expected: 200,
    algo: (input) => {
        // Doit additionner tous les éléments du tableau et y ajouter 40

        return;
    },
};

const exo_level_01_num_11 = {
    name: 'Level 01 - 11',
    input: ['citron', 'kiwi', 'fraise', 'banane'],
    output_expected: ['banane', 'fraise', 'kiwi', 'citron'],
    algo: (input) => {
        // Doit inverses les éléments du tableau

        return;
    },
};

const exo_level_01_num_12 = {
    name: 'Level 01 - 12',
    input: ['citron', 'kiwi', 'fraise', 'banane'],
    output_expected: ['kiwi', 'fraise', 'banane'],
    algo: (input) => {
        // Doit retourner le premier élément du tableau tout en le retirant de l'original

        return;
    },
};

const exo_level_01_num_13 = {
    name: 'Level 01 - 13',
    input: ['citron', 'kiwi', 'fraise', 'banane'],
    output_expected: ['kiwi', 'fraise'],
    algo: (input) => {
        // Doit retourner un tableau contenant les éléments 2 et 3 du tableau original

        return;
    },
};

const exo_level_01_num_14 = {
    name: 'Level 01 - 14',
    input: ['citron', 'kiwi', 'fraise', 'banane'],
    output_expected: ['fraise'],
    algo: (input) => {
        // Doit retourner un tableau contenant l'avant dernier élément du tableaux
        // Faire en sorte que cela fonctionne quel que soit la taille du tableau d'origine

        return;
    },
};

const exo_level_01_num_15 = {
    name: 'Level 01 - 15',
    input: [1, 2, 5, 9],
    output_expected: true,
    algo: (input) => {
        // Doit vérifier si au moins un élément du tableau est un multiple de 2 et retourner un booléen

        return;
    },
};

const exo_level_01_num_16 = {
    name: 'Level 01 - 16',
    input: [45, 4512, 389, 19, 1863],
    output_expected: true,
    algo: (input) => {
        // Doit retourner le tableau trier par ordre croissant

        return;
    },
};

const exo_level_01_num_17 = {
    name: 'Level 01 - 17',
    input: [1, 2, 3, 6, 5],
    output_expected: [1, 2, 3, 4, 5],
    algo: (input) => {
        // Doit retourner le tableau après avoir enlever 6 et mis 4 à la place

        return;
    },
};

const exo_level_01_num_18 = {
    name: 'Level 01 - 18',
    input: [1, 2, 3, 4, 5],
    output_expected: '1,2,3,4,5',
    algo: (input) => {
        // Doit retourner le tableau trasnformer en chaîne de caractères

        return;
    },
};

const exo_level_01_num_19 = {
    name: 'Level 01 - 19',
    input: [1, 2, 3, 4, 5],
    output_expected: 5,
    algo: (input) => {
        // Doit retourner la taille du tableau

        return;
    },
};

const exos = [
    exo_example_ok,
    exo_example_no_ok,
    exo_level_01_num_01,
    exo_level_01_num_03,
    exo_level_01_num_04,
    exo_level_01_num_05,
    exo_level_01_num_06,
    exo_level_01_num_07,
    exo_level_01_num_08,
    exo_level_01_num_09,
    exo_level_01_num_10,
    exo_level_01_num_11,
    exo_level_01_num_12,
    exo_level_01_num_13,
    exo_level_01_num_14,
    exo_level_01_num_15,
    exo_level_01_num_16,
    exo_level_01_num_17,
    exo_level_01_num_18,
    exo_level_01_num_19,
];

runExos(exos);
