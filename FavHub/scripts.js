const cheerio = require('cheerio');
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
