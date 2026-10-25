# gsw-lab2-WendyFlores

**Laboratorio 2 – Gestión de Servidores Web (Ciclo 02-2026, UNIVO)**
Caso: *"Dulce Hogar" – Repostería Artesanal*
Estudiante: **Wendy Yessenia Flores Reyes**
Docente: Ing. Alberto Turcios Ortez

## Infraestructura montada

| Componente | Puerto | Detalle |
|---|---|---|
| Apache HTTP | 8085 | Redirige (301) a HTTPS |
| Apache HTTPS | 4443 | Certificado mkcert para `dulcehogar.local` |
| Express (Windows) | 9090 | `/api/saludo` y `/api/pedido`, vía reverse proxy `/api` |

Entorno: Windows + WSL2 (Ubuntu LTS). Apache corre en WSL2 y Express en Windows; Apache llega a Express por la IP del host (`ip route show | grep default`).

## Estructura

```
fase1-dimensionamiento.txt   Cálculos y justificación
fase2-apache.txt             Instalación de Apache y Virtual Host
fase3-reverseproxy.txt       Express + ProxyPass
fase4-https-permisos.txt     mkcert, permisos POSIX y logs
codigo/                      index.js (Express), index.html + img/ (sitio estático)
config/                      ports.conf y Virtual Hosts finales
capturas/                    Evidencias
```

Cada archivo de fase incluye los comandos ejecutados, las respuestas a las preguntas y los errores encontrados con su solución.
