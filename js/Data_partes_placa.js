export const partes = {
    ranuras: [
        {
            nombre: "Ranura PCI",
            descripcion: "Ranura para tarjetas de expansión, como tarjetas gráficas y adaptadores de red.",
            ubicacion: {
                gridColumn: "18 / span 9",
                gridRow: "26 / span 3"
            }
        },
        {
            nombre: "Ranura RAM",
            descripcion: "Ranura para módulos de memoria RAM.",
            ubicacion: {
                gridColumn: "29 / span 3",
                gridRow: "4 / span 23"
            }
        },
        {
            nombre: "Ranura M.2",
            descripcion: "Ranura para unidades de almacenamiento M.2 y otros dispositivos.",
            ubicacion: {
                gridColumn: "18 / span 8",
                gridRow: "35 / span 3"
            }
        }
    ],
    puertos: [
        {
            nombre: "Puerto USB",
            descripcion: "Puerto para conectar dispositivos USB, como teclados, ratones y unidades flash.",
            ubicacion: {
                gridColumn: "14 / span 4",
                gridRow: "15 / span 4"
            }
        },
        {
            nombre: "Puerto Ethernet",
            descripcion: "Puerto para conexión de red mediante cable Ethernet.",
            ubicacion: {
                gridColumn: "18 / span 3",
                gridRow: "3 / span 4"
            }
        },
        {
            nombre: "Puerto HDMI",
            descripcion: "Puerto para conectar monitores y otros dispositivos de visualización a través de HDMI.",
            ubicacion: {
                gridColumn: "25 / span 4",
                gridRow: "4 / span 6"
            }
        },
        {
            nombre: "Conector de audio",
            descripcion: "Puerto para conectar auriculares, micrófonos y otros dispositivos de audio.",
            ubicacion: {
                gridColumn: "14 / span 4",
                gridRow: "4 / span 4"
            }
        },
        {
            nombre: "Puerto SATA",
            descripcion: "Puerto para conectar discos duros y unidades SSD mediante cables SATA.",
            ubicacion: {
                gridColumn: "18 / span 4",
                gridRow: "33 / span 2"
            }
        }
    ],
    alimentacion: [
        {
            nombre: "Conector de alimentación ATX",
            descripcion: "Conector principal para suministrar energía a la placa base.",
            ubicacion: {
                gridColumn: "32 / span 3",
                gridRow: "14 / span 10"
            }
        },
        {
            nombre: "Conector de ventilador",
            descripcion: "Conector para alimentar y controlar ventiladores de la placa base.",
            ubicacion: {
                gridColumn: "32 / span 3",
                gridRow: "26 / span 8"
            }
        },
        {
            nombre: "Conector de alimentación CPU",
            descripcion: "Conector específico para suministrar energía al procesador.",
            ubicacion: {
                gridColumn: "32 / span 3",
                gridRow: "9 / span 5"
            }
        }
    ],
    disipadores: [
        {
            nombre: "Disipador de chipset",
            descripcion: "Disipador que ayuda a enfriar el chipset de la placa base.",
            ubicacion: {
                gridColumn: "21 / span 7",
                gridRow: "12 / span 12"
            }
        },
        {
            nombre: "Disipador de VRM",
            descripcion: "Disipador que ayuda a enfriar los módulos de regulación de voltaje.",
            ubicacion: {
                gridColumn: "18 / span 3",
                gridRow: "9 / span 12"
            }
        }
    ],
    chips: [
        {
            nombre: "Socket del CPU",
            descripcion: "Socket donde se instala el procesador.",
            ubicacion: {
                gridColumn: "21 / span 7",
                gridRow: "12 / span 12"
            }
        },
        {
            nombre: "Chipset",
            descripcion: "Chipset principal que controla la comunicación entre el CPU y otros componentes.",
            ubicacion: {
                gridColumn: "27 / span 5",
                gridRow: "27 / span 7"
            }
        }
    ]
};

export const partes_flex = {
    ranuras: [
        {
            nombre: "Ranura PCI",
            descripcion: "Ranura para tarjetas de expansión, como tarjetas gráficas y adaptadores de red.",
            ubicacion: {
                gridColumn: "12 / span 17",
                gridRow: "26 / span 2"
            }
        },
        {
            nombre: "Ranura RAM",
            descripcion: "Ranura para módulos de memoria RAM.",
            ubicacion: {
                gridColumn: "32 / span 6",
                gridRow: "6 / span 20"
            }
        },
        {
            nombre: "Ranura M.2",
            descripcion: "Ranura para unidades de almacenamiento M.2 y otros dispositivos.",
            ubicacion: {
                gridColumn: "12 / span 15",
                gridRow: "34 / span 2"
            }
        }
    ],
    puertos: [
        {
            nombre: "Puerto USB",
            descripcion: "Puerto para conectar dispositivos USB, como teclados, ratones y unidades flash.",
            ubicacion: {
                gridColumn: "4 / span 7",
                gridRow: "16 / span 3"
            }
        },
        {
            nombre: "Puerto Ethernet",
            descripcion: "Puerto para conexión de red mediante cable Ethernet.",
            ubicacion: {
                gridColumn: "20 / span 4",
                gridRow: "6 / span 4"
            }
        },
        {
            nombre: "Puerto HDMI",
            descripcion: "Puerto para conectar monitores y otros dispositivos de visualización a través de HDMI.",
            ubicacion: {
                gridColumn: "27 / span 5",
                gridRow: "6 / span 5"
            }
        },
        {
            nombre: "Conector de audio",
            descripcion: "Puerto para conectar auriculares, micrófonos y otros dispositivos de audio.",
            ubicacion: {
                gridColumn: "13 / span 5",
                gridRow: "4 / span 4"
            }
        },
        {
            nombre: "Puerto SATA",
            descripcion: "Puerto para conectar discos duros y unidades SSD mediante cables SATA.",
            ubicacion: {
                gridColumn: "12 / span 5",
                gridRow: "32 / span 2"
            }
        }
    ],
    alimentacion: [
        {
            nombre: "Conector de alimentación ATX",
            descripcion: "Conector principal para suministrar energía a la placa base.",
            ubicacion: {
                gridColumn: "39 / span 6",
                gridRow: "15 / span 9"
            }
        },
        {
            nombre: "Conector de ventilador",
            descripcion: "Conector para alimentar y controlar ventiladores de la placa base.",
            ubicacion: {
                gridColumn: "39 / span 6",
                gridRow: "26 / span 8"
            }
        },
        {
            nombre: "Conector de alimentación CPU",
            descripcion: "Conector específico para suministrar energía al procesador.",
            ubicacion: {
                gridColumn: "39 / span 6",
                gridRow: "9 / span 6"
            }
        }
    ],
    disipadores: [
        {
            nombre: "Disipador de chipset",
            descripcion: "Disipador que ayuda a enfriar el chipset de la placa base.",
            ubicacion: {
                gridColumn: "18 / span 12",
                gridRow: "13 / span 10"
            }
        },
        {
            nombre: "Disipador de VRM",
            descripcion: "Disipador que ayuda a enfriar los módulos de regulación de voltaje.",
            ubicacion: {
                gridColumn: "11 / span 3",
                gridRow: "9 / span 10"
            }
        }
    ],
    chips: [
        {
            nombre: "Socket del CPU",
            descripcion: "Socket donde se instala el procesador.",
            ubicacion: {
                gridColumn: "18 / span 12",
                gridRow: "13 / span 10"
            }
        },
        {
            nombre: "Chipset",
            descripcion: "Chipset principal que controla la comunicación entre el CPU y otros componentes.",
            ubicacion: {
                gridColumn: "30 / span 9",
                gridRow: "27 / span 5"
            }
        }
    ]
};
