3. O que são eventos em JavaScript? Cite três exemplos.

Eventos em JavaScript são ações que acontecem no navegador, como cliques de mouse, pressionamento de teclas ou carregamento de uma página. JavaScript permite que você "ouça" esses eventos e execute código em resposta a eles.

1 - click: Ocorre quando o usuário clica em um elemento.

Exemplo: element.addEventListener('click', function() { alert('Clique!'); });

2 - keydown: Ocorre quando o usuário pressiona uma tecla.

Exemplo: document.addEventListener('keydown', function(e) {
    alert('Tecla pressionada: ' + e.key);
});


3 - submit: Ocorre quando um formulário é enviado

Exemplo: formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado!');
});