// ==========================================
// FILE KONFIGURASI UTAMA
// ==========================================
// File ini berada di root folder. 
// Jika Anda mengakses admin panel, URLnya sekarang /admin (atau /admin/index.html)

const APP_CONFIG = {
    // PENGATURAN EMAILJS (MENDUKUNG MULTIPLE CONFIG & BISA DIGANTI-GANTI)
    emailjsConfigs: [
        {
            id: 'cfg_1',
            name: 'SMTP Utama',
            serviceId: 'service_4yqzmfr',
            templateId: 'template_r1swz0l',
            publicKey: 'm2S18u_ZyJgkqx7ry',
            isActive: true
        },
        {
            id: 'cfg_2',
            name: 'SMTP Cadangan',
            serviceId: 'service_backup01',
            templateId: 'template_backup01',
            publicKey: 'xxx_backup_key_xxx',
            isActive: false
        }
    ],
    
    // PENGATURAN APLIKASI UTAMA
    app: {
        title: "Sosialisasi IP Phone",
        subtitle: "Pilih jadwal kegiatan. Tautan meeting akan dikirim otomatis ke alamat email Anda."
    },
    
    // DATA JADWAL MEETING
    meetings: [
        {
            id: '1',
            date_string: 'Rabu, 11 November 2026 18:30 WIB',
            meeting_link: 'https://zoom.us/j/123456789',
            meeting_password: 'PASS-RABU'
        },
        {
            id: '2',
            date_string: 'Kamis, 12 November 2026 16:30 WIB',
            meeting_link: 'https://zoom.us/j/987654321',
            meeting_password: 'PASS-KAMIS'
        }
    ]
};
