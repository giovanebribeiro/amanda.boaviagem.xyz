# site-amanda-boaviagem

Projeto referente ao site da escritora Amanda Boaviagem. 

## Dependências/stack:

* Node.JS 16+
* React 18
* Next JS 13+

Após o clone do projeto, instalar as dependências:

`$ npm install`

## Executando a aplicação

```shell

# Executar a aplicação local (acessar http://localhost:3000)
$ npm run dev

# Executar apenas o lint
$ npm run lint

# Preparando a aplicação para deploy (Aplicação estará disponível na pasta out/)
$ npm run build

# dexecutando a aplicação local com compilação otimizada para produção (acessar http://localhost:3000)
$ npm run start

```

## Gerenciamento de conteúdo

Todo o conteúdo do site se apresenta de forma estática no diretório public/data. Todos os arquivos presentes nesta pasta possuem a mesma estrutura:

```javascript

const Data = {
    items: [
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "foo": "bar"
        }
    ]
}

```

Cada arquivo de data pode possuir atributos específicos. Consultar cada arquivo para mais informações sobre a estrutura de dados. 

Tomemos como exemplo o arquivo que armazena os dados da loja (DataStore). Para adicionar novas entradas na loja basta acessar o arquivo public/data/DataStore e incluir um novo objeto conforme o template abaixo. Caso o arquivo possua apenas dois itens, nao sera habilitada a opcao de "ver mais" que leva para a pagina exclusiva da loja.

```javascript

const DataStore = {
    items: [

        ...

        {
            "id": 4,
            "title": "Amor nos Tempos de Quarentena - Amanda Boaviagem",
            "description": "Amor e Morte andam lado a lado. O dia a dia da jovem médica Manuela no hospital em que trabalha em tempos de pandemia do Covid19. Flashes de um passado não tão distante mas feliz, a lua de mel dela e Pedro na Riviera Maya, nas cálidas águas do Caribe. O medo e a insegurança que sente ao ter de encarar a pandemia sozinha. O marido preso em outro país sem poder voltar ao Brasil. Amizades, sonhos, descobertas. Uma luz em sua vida quando tudo parecia perdido. Um antídoto para a pandemia? Acompanhe Manuela nesses tempos difusos (e confusos) em que a verdade é desmentida e o que era solução se torna problema. Sua sanidade mental está sendo posta à prova a todo o momento nessa pandemia? Manuela está pronta pro jogo e disposta a arriscar tudo. E você? O que você seria capaz de fazer por amor?",
            "image": "/images/session03/book1.png",
            "linkAmazon": "https://www.amazon.com.br/gp/product/B095L64BDN/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B095L64BDN&linkCode=as2&tag=amandaboaviag-20&linkId=6c8777f4c063d10938dc2ffcbe3883d5",
            "linkUiclap": "https://loja.uiclap.com/titulo/ua8461/",
            "direction": "right"
        }
    ]
}

```

De forma análoga, para adicionar novo banner deve ser alterado o arquivo DataIntro adicionando uma entrada no objeto bannersDesktop e outra no objeto bannersMobile com a imagem do tamanho certo para mobile. Para um novo depoimento, deve ser alterado o arquivo DataTestimonials adicionando uma nova entrada no objeto Images e ImagesMobile com o endereço equivalente para a imagem desktop e para a imagem mobile.

**OBS:** Para criar a imagem do tamanho mobile deve-se acessar o canva e cortar a imagem no tamanho para post do instagram. Extensão preferencial de qualquer imagem: *SVG*