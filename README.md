# Guitar Store
Este proyecto es una tienda de guitarras construida con React y Vite, utilizando TypeScript para el tipado y localStorage para la persistencia de datos.

# Características

- **Framework**: React con Vite para el desarrollo rápido de la aplicación.
- **Tipado**: TypeScript proporciona un tipado estático para mejorar la robustez del código.
- **Persistencia**: LocalStorage mantiene el estado del carrito de compras entre sesiones.
- **Optimización**: React Hooks - Uso de useState, useEffect, useMemo, y props para la gestión del estado y optimización del rendimiento.

# Instalación


- Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

**Clona el repositorio**:

```sh
git clone https://github.com/tuusuario/guitar-store.git
Navega al directorio del proyecto:

Copiar código
cd guitar-store
Instala las dependencias:

Copiar código
npm install
Inicia el servidor de desarrollo:

Copiar código
npm run dev
```

# Uso
- Carrito de Compras
El carrito de compras está gestionado por el hook useCart, que proporciona las siguientes funcionalidades:

- Agregar al carrito: Añade una guitarra al carrito. Si la guitarra ya existe en el carrito, incrementa la cantidad.
- Eliminar del carrito: Elimina una guitarra del carrito.
- Aumentar cantidad: Incrementa la cantidad de una guitarra en el carrito.
- Disminuir cantidad: Disminuye la cantidad de una guitarra en el carrito, hasta un mínimo de uno.
- Vaciar carrito: Elimina todos los artículos del carrito.

# Estado derivado:

-**isEmpty**: Indica si el carrito está vacío.
- **cartTotal**: Calcula el total del precio de los artículos en el carrito.


