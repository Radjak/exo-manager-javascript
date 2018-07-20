const expect = chai.expect;

const exo_example_ok = {
    name: 'Exemple ok',
    input: {
        id: 1,
        name: 'MachinChose',
    },
    output_expected: [
        {
            id: 1,
            name: 'MachinChose',
        }
    ],
    algo: (input) => {
        return [input];
    },
};

const exo_example_no_ok = {
    name: 'Exemple no ok',
    input: {
        id: 1,
        name: 'MachinChose',
    },
    output_expected: [
        {
            id: 1,
            name: 'MachinChose',
        }
    ],
    algo: (input) => {
        return input;
    },
};

const addResultOK = (name) => {
    const div = document.createElement('div');
    div.className = 'exo bg-success';

    const subdiv_title = document.createElement('div');
    subdiv_title.className = 'exo-title';
    const text_title = document.createTextNode(name + ' : OK');
    subdiv_title.appendChild(text_title);

    div.appendChild(subdiv_title);

    document.body.appendChild(div);
};

const addResultNOOK = (name, error) => {
    const div = document.createElement('div');
    div.className = 'exo bg-danger';

    const subdiv_title = document.createElement('div');
    subdiv_title.className = 'exo-title';
    const text_title = document.createTextNode(name + ' : NOOK');
    subdiv_title.appendChild(text_title);

    const subdiv_error_actual = document.createElement('div');
    subdiv_error_actual.className = 'exo-error-actual';
    const text_error_actual = document.createTextNode('Actual : ' + JSON.stringify(error.actual));
    subdiv_error_actual.appendChild(text_error_actual);

    const subdiv_error_expected = document.createElement('div');
    subdiv_error_expected.className = 'exo-error-expected';
    const text_error_expected = document.createTextNode('Expected : ' + JSON.stringify(error.expected));
    subdiv_error_expected.appendChild(text_error_expected);

    const subdiv_error_message = document.createElement('div');
    subdiv_error_message.className = 'exo-error-message';
    const text_error_message = document.createTextNode(JSON.stringify(error.message));
    subdiv_error_message.appendChild(text_error_message);

    div.appendChild(subdiv_title);
    div.appendChild(subdiv_error_actual);
    div.appendChild(subdiv_error_expected);
    div.appendChild(subdiv_error_message);

    document.body.appendChild(div);
};

const runExos = (exos) => {
    exos.forEach((exo) => {
        console.log('name', exo.name);
        console.log('input', exo.input);
        console.log('output_expected', exo.output_expected);

        const output = exo.algo(exo.input);

        console.log('output', output);

        try {
            expect(output).to.deep.equal(exo.output_expected);

            console.log(exo.name + ' : OK');

            addResultOK(exo.name);
        } catch (error) {
            console.log(exo.name + ' : NOOK');
            console.log(error);

            addResultNOOK(exo.name, error);
        }

        console.log('_________');
    });
};
