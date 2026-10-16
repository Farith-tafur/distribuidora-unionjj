// ============================================
// GALERÍA - FILTROS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    inicializarFiltrosGaleria();
});

function inicializarFiltrosGaleria() {
    const filtros = document.querySelectorAll('.filtro-btn');
    const items = document.querySelectorAll('.galeria-completa-item');
    
    if (filtros.length === 0) return;
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Cambiar botón activo
            filtros.forEach(f => f.classList.remove('activo'));
            this.classList.add('activo');
            
            const filtroSeleccionado = this.dataset.filtro;
            
            // Filtrar items
            items.forEach(item => {
                if (filtroSeleccionado === 'todos') {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else if (item.dataset.categoria === filtroSeleccionado) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}