document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.hero-content, .about-container, .projeto-card, .contact-section');
    
    // 2. Adiciona a classe que "esconde" eles inicialmente
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-hidden');
    });

    // 3. Cria o "Observador" que vai ver quando o usuário rolar a tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento apareceu na tela...
            if (entry.isIntersecting) {
                // Adiciona a classe que faz ele aparecer suavemente
                entry.target.classList.add('fade-in-visible');
                // Para de observar para a animação rodar apenas uma vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Dispara a animação quando 10% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouquinho antes de chegar no limite
    });

    // 4. Manda o observador ficar de olho em todos os elementos
    elementsToAnimate.forEach((el) => observer.observe(el));
});