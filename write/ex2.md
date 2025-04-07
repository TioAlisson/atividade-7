2. Qual a diferença entre document.getElementById e document.querySelector?

A principal diferença entre document.getElementById e document.querySelector está na forma como selecionam os elementos:

document.getElementById(id):

Seleciona um elemento único com o ID especificado.
Exemplo: document.getElementById('meuID')``

document.querySelector(seletor):

Usa qualquer seletor CSS válido (como IDs, classes, tags).
A maior diferença na hora de puxar sendo IDs ou classes precisa colocar respectivo sendo o # para IDs ou . para classes.
Exemplo: document.querySelector('#meuID'), document.querySelector('.minhaClasse'), ou document.querySelector('div p').