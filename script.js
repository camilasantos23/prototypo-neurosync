// --- NAVEGAÇÃO ENTRE MODOS ---
        function changeMode(mode, btn) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            
            document.getElementById('screen-' + mode).classList.add('active');
            btn.classList.add('active');
        }

        // --- LÓGICA DE TAREFAS ---
        function toggleTask(btn) {
            btn.classList.toggle('done');
            btn.innerText = btn.classList.contains('done') ? '✓ Feito' : '✓ Marcar';
        }

        // --- SISTEMA "TÔ TRAVADO" ---
        let currentStep = 1;
        const steps = [
            "Pegue a escova de dentes",
            "Coloque pasta de dente",
            "Escove por 2 minutos",
            "Enxágue a boca"
        ];

        function openStuck(title) {
            currentStep = 1;
            document.getElementById('stuck-title').innerText = title;
            updateStepUI();
            document.getElementById('modal-stuck').style.display = 'block';
        }

        function closeStuck() {
            document.getElementById('modal-stuck').style.display = 'none';
        }

        function nextStep() {
            if(currentStep < steps.length) {
                currentStep++;
                updateStepUI();
            } else {
                alert("Parabéns! Você concluiu a tarefa.");
                closeStuck();
            }
        }

        function updateStepUI() {
            document.getElementById('step-text').innerText = `Passo ${currentStep}: ${steps[currentStep-1]}`;
            const percent = (currentStep / steps.length) * 100;
            document.getElementById('step-progress').style.width = percent + "%";
        }

        // --- EMERGÊNCIA SOS ---
        function triggerSOS() {
            alert("🆘 SOS ENVIADO! O cuidador recebeu sua localização.");
            // Simulando redirecionamento para o cuidador ver o alerta
            setTimeout(() => {
                changeMode('cuidador', document.querySelectorAll('.mode-btn')[1]);
            }, 1000);
        }