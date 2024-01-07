const formatDate = timestamp => {
    return timestamp ? new Date(parseInt(timestamp) * 1000).toLocaleString('pt-BR') : 'Data inválida';
};

const generateRandomId = () => {
    return Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#fileInput');
    const display = document.querySelector('#displayArea');

    input.addEventListener('change', function () {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                showContent(e.target.result, display);
            };
            reader.readAsText(file);
        }
    });
});

const findDlParentAfterH1 = h1 => {
    let nextElement = h1.nextElementSibling;
    while (nextElement && nextElement.tagName.toLowerCase() !== 'dl') {
        nextElement = nextElement.nextElementSibling;
    }
    return nextElement && nextElement.tagName.toLowerCase() === 'dl' ? nextElement : null;
};

const showContent = (content, display) => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const h1 = doc.querySelector('h1');

    if (h1) {
        const dlParent = findDlParentAfterH1(h1);
        const tags = dlParent ? [...dlParent.children] : [];
        const jsonResult = processTags(tags);
        display.innerHTML = JSON.stringify(jsonResult, null, 4);
    }
};

const processTags = tags => {
    const jsonResult = {};
    let currentKey = null;

    tags.forEach(tag => {
        const tagName = tag.tagName.toLowerCase();
        if (tagName === 'dt') {
            currentKey = tag.textContent.trim();
            jsonResult[currentKey] = [];
        } else if (tagName === 'a' && currentKey !== null) {
            const value = {
                text: tag.textContent.trim(),
                href: tag.getAttribute('href'),
                add_date: formatDate(tag.getAttribute('add_date')),
                last_modified: formatDate(tag.getAttribute('last_modified')),
            };
            jsonResult[currentKey].push(value);
        }
    });
    return jsonResult;
};

