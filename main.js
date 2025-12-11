// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Memilih semua elemen header pada accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Mengambil parent element (accordion-item)
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // 1. Tutup semua accordion item lain agar hanya satu yang terbuka (opsional)
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
                
                // Ubah icon kembali ke plus (+)
                const icon = acc.querySelector('.accordion-icon');
                if(icon) icon.innerHTML = '&plus;';
            });

            // 2. Jika item yang diklik belum aktif sebelumnya, maka aktifkan sekarang
            if (!isActive) {
                item.classList.add('active');
                
                // Ubah icon menjadi minus (-)
                const icon = item.querySelector('.accordion-icon');
                if(icon) icon.innerHTML = '&minus;';
            }
        });
    });
});