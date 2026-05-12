import { defineConfig } from 'vite'

export default defineConfig({
     build: {
          rollupOptions: {
               input: {
                    main: 'index.html',
                    products: 'products.html',
                    contact: 'contact.html',
                    addToCart: 'addToCart.html',
                    about: 'about.html'
               }
          }
     }
})