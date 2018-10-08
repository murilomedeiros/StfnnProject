# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: A tag async significa que o script pode ser executado de forma assincrona junto com a análise do HTML e a tag defer executa o script apenas quando finalizar a análise do HTML;

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Serve para chamar a função initMap após o retorno dos dados

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Ele não executa a função initMap depois que obtém os dados. Pois a função dela é executar a função passada no paramêtro "initMap", se tirar ela n vai executar nada.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Utilizando o ngOnInit, pois na inicialização do componente ele excecuta essa função.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: A tag meta é uma "etiqueta", que uma de suas funções é descrever o conteudo do site para os buscadores. A tag link especifica relações entre o documento atual e um recurso externo.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não. Pois falta ser Reenvolvente, utilizando push notifications.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: O ngOnInit serve para ser executado na inicialização de um componente. Os outros lifecycle hook são: 
- ngAfterContentInit()
- ngAfterContentChecked() 
- ngAfterViewInit()
- ngAfterViewChecked()
- ngOnDestroy()
- ngDoCheck()
- ngOnChanges()
Eles são executados em momentos principais na "vida" de um componente.

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web components são estruturas de códigos que são bastante utilizada no desenvolvimento web, em forma de componente. A vantagens é a reutilização de linha de código e acelera o desenvolvimento no longo prazo.

### c) Para que serve a tag ngFor do angular?
R: Ele serve para passar por toda a extensão do array e é utilizado diretamente no template (HTML).


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: Ele representa a declaração da variável como um array de strings, e já inicializando o array vazio com [].

### e) Como funciona a api Events do Ionic? Para que serve?
R: É uma api que serve para enviar e responder eventos são feitos pelo usuário. 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: O flexbox é um sistema de responsividade. As tag ion-grid, ion-row e ion-col serve para dividir a tela em partes de um grid, dessa forma a tela se torna responsiva. A vantagem de utilizá-las é a responsividade da aplicação, se adaptando em qualquer tela, igual o sistema de grid do Bootstrap.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: Erro na importação, falta do "this", alguns problema de identação e falta de ponto e virgula ";".

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R: Erro na importação, falta do "this", identação e ponto e virgula. 

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: Com o erro na importação a aplicação não "biuldava", igual com a falta do "this", já a identação e o ponto e virgula não atrapalhava o build do projeto.

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: Serve para executar a função de forma assíncrona e o await para a execução no contexto que pertence, até que a promise seja entregue.

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: A vantagem é a execuão assíncrona das funções, assim aumentando a velocidade da execução.