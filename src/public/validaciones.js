
    const form = document.querySelector('.add');

    form.addEventListener('submit', function (e) {
        const poderesInput = document.getElementById('poderes');
        const poderesTexto = poderesInput.value.trim();

        if (!poderesTexto) {
            alert("El campo 'Poderes' es requerido.");
            e.preventDefault();
            return;
        }

        // Separa por coma y elimina espacios al inicio/final de cada elemento
        const poderesArray = poderesTexto.split(',').map(p => p.trim());

        if (poderesArray.length === 0) {
            alert("Debe ingresar al menos un poder.");
            e.preventDefault();
            return;
        }

        for (let i = 0; i < poderesArray.length; i++) {
            let poder = poderesArray[i];

            if (!poder) {
                alert(`El poder en la posición ${i + 1} está vacío.`);
                e.preventDefault();
                return;
            }

            // Elimina espacios al inicio y final
            poder = poder.trim();

            // Verifica que no haya espacios dobles seguidos
            if (poder.includes('  ')) {
                alert(`El poder "${poder}" no debe contener espacios dobles seguidos.`);
                e.preventDefault();
                return;
            }
            

            if (poder.length < 3) {
                alert(`El poder "${poder}" debe tener al menos 3 caracteres.`);
                e.preventDefault();
                return;
            }

            if (poder.length > 60) {
                alert(`El poder "${poder}" no debe superar los 60 caracteres.`);
                e.preventDefault();
                return;
            }
        }

        // Si pasa todo, el formulario se envía normalmente
    });
