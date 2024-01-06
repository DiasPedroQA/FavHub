document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const displayArea = document.getElementById('displayArea');

    fileInput.addEventListener('change', handleFileSelect);
    
    function handleFileSelect(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const content = e.target.result;
                displayArea.innerText = content;
                
                // Aqui você pode adicionar lógica para realizar operações de CRUD com o conteúdo do arquivo.
                // Por exemplo, enviar o conteúdo para o servidor ou manipulá-lo de alguma outra forma.
            };

            reader.readAsText(file);
        }
    }
});
