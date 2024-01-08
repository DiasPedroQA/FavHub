const formatDate = timestamp => {
    return timestamp ? new Date(parseInt(timestamp) * 1000).toLocaleString('pt-BR') : 'Data inválida';
};

const lerTags = (html) => {
    const body = html.querySelector('body');
    const dl = body.querySelector('dl');
    const allTags = dl.querySelectorAll('*');
    return allTags;
};

const processTags = (tags) => {
    const jsonResult = {};
    let tagContent = null;

    tags.forEach(tag => {
        const tagName = tag.tagName.toLowerCase();
        tagContent = tag.textContent.trim();
        
        console.log('<tag>:', tag)
        let dt = tag.querySelector('dt');
        console.log('tem dt:', dt)

        /*if (tagName === 'h3') {
            tagContent = tag.textContent.trim();
            h3Values = {
                h3Data: {
                    'add_date': formatDate(tag.getAttribute('add_date')),
                    'last_modified': formatDate(tag.getAttribute('last_modified'))
                },
                links: {}
            }
            jsonResult[tagContent] = h3Values;
            console.log('jsonResult:', jsonResult);
        } else if (tagName === 'a' && tagContent !== null) {
            const aValues = {
                'name': tag.textContent.trim(),
                'href': tag.getAttribute('href'),
                'add_date': formatDate(tag.getAttribute('add_date')),
                'last_modified': formatDate(tag.getAttribute('last_modified')),
            };
            console.log('aValues:', aValues)
            jsonResult[tagContent][h3Values][links].push(aValues);
        }*/
    });

    return jsonResult;
};

const processFile = (content, display) => {
    const html = new DOMParser().parseFromString(content, 'text/html');
    if (html) {
        const documento = lerTags(html);
        const tags = documento ? [...documento] : [];
        const jsonResult = processTags(tags);
        display.innerHTML = JSON.stringify(jsonResult, null, 4);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#fileInput');
    const display = document.querySelector('#displayArea');

    input.addEventListener('change', function () {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => { processFile(e.target.result, display); };
            reader.readAsText(file);
        }
    });
});
