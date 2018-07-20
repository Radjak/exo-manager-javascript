const exo_level_01_num_01 = {
    name: 'Level 01 - 01',
    input: [1, 2, 3],
    output_expected: true,
    algo: (input) => {
        // CODER ICI
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
        // CODER ICI
        // Doit fusionner les deux tableaux

        return;
    },
};

const exo_level_01_num_03 = {
    name: 'Level 01 - 03',
    input: [2, 78, 7679876],
    output_expected: true,
    algo: (input) => {
        // CODER ICI
        // Doit vérifier que tous les éléments du tableau sont des multiples de 2 et renvoyer un booléen

        return;
    },
};

const exo_level_01_num_04 = {
    name: 'Level 01 - 04',
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    output_expected: [3, 6, 9, 12],
    algo: (input) => {
        // CODER ICI
        // Doit retourner seulement les éléments multiples de 3

        return;
    },
};

const exo_level_01_num_05 = {
    name: 'Level 01 - 05',
    input: [158, 197, 837, 2484],
    output_expected: 837,
    algo: (input) => {
        // CODER ICI
        // Doit retourner le premier élément dont la valeur est supérieure à 500

        return;
    },
};

const exo_level_01_num_06 = {
    name: 'Level 01 - 06',
    input: [158, 197, 837, 2484],
    output_expected: 2,
    algo: (input) => {
        // CODER ICI
        // Doit retourner l'index du premier élément dont la valeur est supérieure à 500

        return;
    },
};

const exo_level_01_num_07 = {
    name: 'Level 01 - 07',
    input: ['yolo', 'j\'ai', 'faim'],
    output_expected: 'yolo - j\'ai - faim',
    algo: (input) => {
        // CODER ICI
        // Doit retourner la fusion de tous les éléments du tableau avec un séprateur entre chacun

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
];

runExos(exos);
