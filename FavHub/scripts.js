esse codigo [const cheerio = require('cheerio');
const fs = require('fs');
const { format } = require('date-fns');
const path = require('path');

// Função para converter timestamp para data brasileira
const formatarData = (timestamp) => {
  if (!timestamp || isNaN(timestamp)) {
    return 'Data inválida';
  }
  const data = new Date(timestamp * 1000);
  if (isNaN(data.getTime())) {
    return 'Data inválida';
  }
  return format(data, 'dd/MM/yyyy HH:mm:ss');
};

// Função para embaralhar elementos em um array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Caminho para o arquivo HTML
const filePath = 'imports/favoritos_17_12_2023.html';

// Lê o conteúdo do arquivo HTML
const fileContent = fs.readFileSync(filePath, 'utf8');

// Carrega o conteúdo HTML no Cheerio
const $ = cheerio.load(fileContent);

// Encontrar todas as tags <a> e <h3>
const links = [];
$('a').each((index, element) => {
  const attrs = {};
  const atributos = element.attribs;
  for (const atributo in atributos) {
    if (atributo !== 'icon') {
      attrs[atributo] = atributos[atributo];
    }
  }
  links.push({
    indice: index,
    href: attrs.href,
    dataAdicao: formatarData(Number(attrs.dataAdicao)),
    texto: $(element).text(),
  });
});

const pastas = [];
$('h3').each((index, element) => {
  const atributos = element.attribs;
  pastas.push({
    dataAdicao: formatarData(Number(atributos.ADD_DATE)),
    last_modified: formatarData(Number(atributos.LAST_MODIFIED)),
    texto: $(element).text(),
  });
});

// Embaralhar os arrays
shuffleArray(links);
shuffleArray(pastas);

// Limitar o número de elementos
const linksLimitados = links.slice(0, 50);
const pastasLimitadas = pastas.slice(0, 5);

// Criar objeto com as informações
const resultado = { links: linksLimitados, pastas: pastasLimitadas };

// Caminho para o diretório de exportação
const exportDir = 'exports';

// Verificar se o diretório existe e, se não, criá-lo
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir);
}

// Caminho para o arquivo JSON de exportação
const exportPath = path.join(exportDir, path.basename(filePath, path.extname(filePath)) + '_aleatorio.json');

// Salvar objeto como JSON
fs.writeFileSync(exportPath, JSON.stringify(resultado, null, 4));

console.log('Arquivo JSON exportado:', exportPath);
]

está retornando esse erro: [{
  "links": [
      {
          "indice": 2261,
          "href": "https://pt.xhamster.com/videos/skinhead-take-two-huge-cock-baraback-3787505",
          "dataAdicao": "Data inválida",
          "texto": "Skinhead leva dois pau enorme sem camisinha | xHamster"
      },
      {
          "indice": 2910,
          "href": "https://www.flyflv.com/gay/movies/43518/three_bros_banging_each_other_real_good",
          "dataAdicao": "Data inválida",
          "texto": "Nubius, Xl X, Jin Powers in \"Three Bros Banging Each Other Real Good\", HD / From: Next Door Studios / Next Door Ebony"
      },
      {
          "indice": 2329,
          "href": "https://pt.xhamster.com/videos/revenge-xh3ltyJ",
          "dataAdicao": "Data inválida",
          "texto": "Vingança | xHamster"
      },
      {
          "indice": 990,
          "href": "http://www.rci.pr.gov.br/consultar-andamento/acessar",
          "dataAdicao": "Data inválida",
          "texto": "Light"
      },
      {
          "indice": 2102,
          "href": "https://pt.xhamster.com/videos/jamaican-with-big-dick-fucks-an-open-asshole-4007952",
          "dataAdicao": "Data inválida",
          "texto": "Jamaicana com pau grande fode um cu aberto | xHamster"
      },
      {
          "indice": 2103,
          "href": "https://br.xhamster.com/videos/jg-back-to-barstow-xhJ42pQ",
          "dataAdicao": "Data inválida",
          "texto": "Jg de volta ao barstow | xHamster"
      },
      {
          "indice": 1675,
          "href": "https://pt.pornhub.com/view_video.php?viewkey=ph594ae69c1ae11",
          "dataAdicao": "Data inválida",
          "texto": "Blackbreeders - Pornhub.com"
      },
      {
          "indice": 2249,
          "href": "https://pt.xhamster.com/videos/sacre-college-xhDLLNI",
          "dataAdicao": "Data inválida",
          "texto": "Sacre College: Free Fuck the Gays Porn Video 36 | xHamster"
      },
      {
          "indice": 1015,
          "href": "http://files.isec.pt/DOCUMENTOS/SERVICOS/BIBLIO/teses/Tese_Mest_Marcio-Carvalho.pdf",
          "dataAdicao": "Data inválida",
          "texto": "Microsoft Word - MarcioCarvalho_Relatorio_Mestrado_Final"
      },
      {
          "indice": 97,
          "href": "content://com.google.android.apps.nbu.files.provider/2/101057",
          "dataAdicao": "Data inválida",
          "texto": "Bootstrap & Jquery"
      },
      {
          "indice": 726,
          "href": "https://codepen.io/pen/",
          "dataAdicao": "Data inválida",
          "texto": "A Pen by Pedro Dias"
      },
      {
          "indice": 797,
          "href": "https://soundcloud.com/castiel_project/?fbclid=IwAR0Vo7-zDNOIwNraA6qOKtfKSI7nMWDkhUIPd8b3l3zJu_yrorJbuUDVjxA",
          "dataAdicao": "Data inválida",
          "texto": "Castiel | Ouça grátis na SoundCloud"
      },
      {
          "indice": 176,
          "href": "https://isqi.org/en/12-software-testing",
          "dataAdicao": "Data inválida",
          "texto": "Software Testing"
      },
      {
          "indice": 751,
          "href": "https://www.caelum.com.br/apostilas",
          "dataAdicao": "Data inválida",
          "texto": "Apostilas de Java, Front-end, C# e Rails para download | Caelum"
      },
      {
          "indice": 1191,
          "href": "http://www.ufpr.br/portalufpr/",
          "dataAdicao": "Data inválida",
          "texto": "Universidade Federal do Paraná"
      },
      {
          "indice": 1379,
          "href": "https://www.meuscontoseroticos.com/arrombado-por-um-cacete-enorme/",
          "dataAdicao": "Data inválida",
          "texto": "Arrombado por um cacete enorme - Meus Contos Eroticos"
      },
      {
          "indice": 2223,
          "href": "https://pt.xhamster.com/videos/power-fucker-and-slut-xh9HVMo",
          "dataAdicao": "Data inválida",
          "texto": "Poderoso filho da puta e puta | xHamster"
      },
      {
          "indice": 790,
          "href": "https://docs.google.com/forms/d/e/1FAIpQLSf3Yk9NRs3vrzTqQvxTnSrz_-RQ7cYzVsT-eWFuN5HMWNC1lA/viewform",
          "dataAdicao": "Data inválida",
          "texto": "Capacitação iOS Visionnaire Scopus"
      },
      {
          "indice": 1041,
          "href": "https://www.coursera.org/learn/orientacao-a-objetos-com-java",
          "dataAdicao": "Data inválida",
          "texto": "Orientação a Objetos com Java - Instituto Tecnológico de Aeronáutica | Coursera"
      },
      {
          "indice": 163,
          "href": "https://www.php.net/manual/pt_BR/language.variables.superglobals.php",
          "dataAdicao": "Data inválida",
          "texto": "PHP: Superglobais - Manual"
      },
      {
          "indice": 480,
          "href": "https://confluencecorp.ctsp.prod.cloud.ihf/display/CSDI/Massa+de+Dados",
          "dataAdicao": "Data inválida",
          "texto": "Massa de Dados - Comunidade de Soluções de Investimentos - Confluence Itaú"
      },
      {
          "indice": 469,
          "href": "https://confluencecorp.ctsp.prod.cloud.ihf/display/CSDI/Jornada+de+Testes",
          "dataAdicao": "Data inválida",
          "texto": "Jornada de Testes - Comunidade de Soluções de Investimentos - Confluence Itaú"
      },
      {
          "indice": 315,
          "href": "https://acervolima.com/relogio-analogico-responsivo-usando-html-css-e-vanilla-javascript/",
          "dataAdicao": "Data inválida",
          "texto": "Relógio analógico responsivo usando HTML, CSS e Vanilla JavaScript – Acervo Lima"
      },
      {
          "indice": 1877,
          "href": "https://pt.pornhub.com/view_video.php?viewkey=ph5f43b2546163d",
          "dataAdicao": "Data inválida",
          "texto": "Tasty Rooftop Bareback Party Part 1 - Pornhub.com"
      },
      {
          "indice": 1151,
          "href": "https://m.soundcloud.com/prohi",
          "dataAdicao": "Data inválida",
          "texto": "Stream música de ProHi | Ouça a músicas, álbuns, playlists gratuitamente online no SoundCloud"
      },
      {
          "indice": 2906,
          "href": "https://www.meninosonline.net/pt-BR/intro",
          "dataAdicao": "Data inválida",
          "texto": "Meninos Online"
      },
      {
          "indice": 2634,
          "href": "https://www.xvideos.com/video52578587/monster_cock",
          "dataAdicao": "Data inválida",
          "texto": "Monster cock - XVIDEOS.COM"
      },
      {
          "indice": 1716,
          "href": "https://pt.pornhub.com/view_video.php?viewkey=641c496c63784",
          "dataAdicao": "Data inválida",
          "texto": "DL Jock with 11” Drilled me on College Campus - Pornhub.com"
      },
      {
          "indice": 1485,
          "href": "https://www.wattpad.com/1189371924-contos-er%C3%B3ticos-gay-comi-meu-filho-b%C3%AAbado-pela",
          "dataAdicao": "Data inválida",
          "texto": "contos eróticos gay - Comi meu Filho Bêbado pela Primeira Vez - Wattpad"
      },
      {
          "indice": 2914,
          "href": "https://befuck.me/id/57506353/tes-and-atilde-o-de-quarentena-fui-servido-por-4-macho-safado-no-meu-quarto/",
          "dataAdicao": "Data inválida",
          "texto": "Tesã_o de quarentena, fui servido por 4 macho safado no meu quarto. - Befuck.me"
      },
      {
          "indice": 733,
          "href": "https://www.udemy.com/user/adriano-r-sacardo/",
          "dataAdicao": "Data inválida",
          "texto": "Adriano Sacardo | Analista de Sistemas | Udemy"
      },
      {
          "indice": 1117,
          "href": "https://www.revendamais.com.br/trabalhe-conosco.html",
          "dataAdicao": "Data inválida",
          "texto": "Revenda Mais | Sistema web para lojas de veículos"
      },
      {
          "indice": 678,
          "href": "https://confluence-itau.tecnologia.prod.ops.aws.cloud.ihf/pages/viewpage.action?pageId=432898613",
          "dataAdicao": "Data inválida",
          "texto": "Fórum de Tecnologia - Fórum de Tecnologia - Confluence Itaú"
      },
      {
          "indice": 1556,
          "href": "https://www.casadoscontos.com.br/texto/202302305",
          "dataAdicao": "Data inválida",
          "texto": "Na verdade, jogar futebol é ótimo!"
      },
      {
          "indice": 2277,
          "href": "https://br.xhamster.com/videos/three-hot-amigos-14960908",
          "dataAdicao": "Data inválida",
          "texto": "Three Hot Amigos: Gay Hot Twinks Porn Video 65 - xHamster | xHamster"
      },
      {
          "indice": 962,
          "href": "https://pypi.org/project/kivy-django/",
          "dataAdicao": "Data inválida",
          "texto": "imagens de kivy-django · PyPI"
      },
      {
          "indice": 319,
          "href": "https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module-pt",
          "dataAdicao": "Data inválida",
          "texto": "Como criar um servidor Web em Node.js com o módulo HTTP | DigitalOcean"
      },
      {
          "indice": 2394,
          "href": "https://www.xvideos.com/video5152819/boys_in_the_crib",
          "dataAdicao": "Data inválida",
          "texto": "Boys In The Crib - XVIDEOS.COM"
      },
      {
          "indice": 1543,
          "href": "https://www.casadoscontos.com.br/texto/201112410",
          "dataAdicao": "Data inválida",
          "texto": "Meu amigo,meu irmao -1"
      },
      {
          "indice": 269,
          "href": "http://pythonplot.com/",
          "dataAdicao": "Data inválida",
          "texto": "Python Plotting for Exploratory Analysis"
      },
      {
          "indice": 2301,
          "href": "https://pt.xhamster.com/videos/a-boy-very-gifted-14687939",
          "dataAdicao": "Data inválida",
          "texto": "Um garoto ..... muito talentoso | xHamster"
      },
      {
          "indice": 2853,
          "href": "https://www.xvideos.com/favorite/67010317/venza",
          "dataAdicao": "Data inválida",
          "texto": "Venza, Lista de favoritos - XVIDEOS.COM"
      },
      {
          "indice": 1315,
          "href": "https://www.boyfriendtv.com/videos/853001/maximum-pounding/",
          "dataAdicao": "Data inválida",
          "texto": "MAXIMUM POUNDING - BoyFriendTV.com"
      },
      {
          "indice": 750,
          "href": "https://www.caelum.com.br/apostila-java-web/",
          "dataAdicao": "Data inválida",
          "texto": "Apostila Java para Desenvolvimento Web - Caelum"
      },
      {
          "indice": 87,
          "href": "https://uicookies.com/free-portfolio-website-templates/",
          "dataAdicao": "Data inválida",
          "texto": "45 Free Portfolio Website Templates For All Creative Professionals 2021"
      },
      {
          "indice": 664,
          "href": "https://degreed.com/pathway/dp63n0wwp7/pathway",
          "dataAdicao": "Data inválida",
          "texto": "Serviço de Negócio | Trilha | Degreed"
      },
      {
          "indice": 815,
          "href": "https://www.freecodecamp.org/portuguese/news/como-testar-componentes-do-react-o-guia-completo/amp/",
          "dataAdicao": "Data inválida",
          "texto": "Como testar componentes do React: o guia completo"
      },
      {
          "indice": 1123,
          "href": "https://lh3.googleusercontent.com/proxy/RlmsfMHyQ9lto8qmnXJ4g74c1HB4GbDH5jftQZLKNeac5QVOZgdLCg_D_sw-hf-3pQjTgz8vlcytZmoxeOqN2UL0I4cF-QSzBis7dGOb35rlpbOxErHwSTvE_m_VJD2OzJjCqbTSmSl9exDIomWfi-LhHdcRbs7eEGNV3fIZEnsRg546ieYjSOdxoMc6ge0I",
          "dataAdicao": "Data inválida",
          "texto": "Scanear Produto"
      },
      {
          "indice": 2023,
          "href": "https://pt.xhamster.com/videos/huge-gay-cocks-fuck-raw-gay-holes-by-ve1988-14496729",
          "dataAdicao": "Data inválida",
          "texto": "Enormes paus gays fodem buracos gays crus por ve1988 | xHamster"
      },
      {
          "indice": 1206,
          "href": "http://www.w3c.br/Cursos/CursoHTML5",
          "dataAdicao": "Data inválida",
          "texto": "W3C Brasil - World Wide Web Consortium Escritório Brasil"
      }
  ],
  "pastas": [
      {
          "dataAdicao": "Data inválida",
          "last_modified": "Data inválida",
          "texto": "Menu & Atalhos"
      },
      {
          "dataAdicao": "Data inválida",
          "last_modified": "Data inválida",
          "texto": "Barra de favoritos"
      },
      {
          "dataAdicao": "Data inválida",
          "last_modified": "Data inválida",
          "texto": "Alura"
      },
      {
          "dataAdicao": "Data inválida",
          "last_modified": "Data inválida",
          "texto": "MEI"
      },
      {
          "dataAdicao": "Data inválida",
          "last_modified": "Data inválida",
          "texto": "GitHub"
      }
  ]
}]

de data inválida em todas as TagSelector, tem como corrigir isso?
