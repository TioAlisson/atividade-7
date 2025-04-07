5. Como podemos alterar o estilo de um elemento HTML via JavaScript?

Para alterar o estilo de um elemento HTML via JavaScript, você pode acessar a propriedade style do elemento e modificar as propriedades de CSS diretamente.

const elemento = document.getElementById('meuElemento');

elemento.style.color = 'purple'; Muda a cor do texto para roxo
elemento.style.fontSize = '22px'; Muda o tamanho da fonte para 22px
elemento.style.backgroundColor = 'black'; Muda a cor de fundo para preto

Usando a propriedade 'style', você pode acessar e alterar as propriedades de estilo (como cor, tamanho, margem, etc.) de um elemento HTML diretamente com JavaScript.