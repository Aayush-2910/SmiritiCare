import { defineConfig } from 'vite';

// Use the standard JSX entry before Vite parses the HTML. The browser adapter is
// only needed by static previews, which cannot run npm or a development server.
export default defineConfig({
  base: './',
  plugins: [{
    name: 'smriticare-entry',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace(/<script type="importmap">[\s\S]*?<\/script>/, '')
          .replace(/<script src="https:\/\/cdn.jsdelivr.net\/npm\/@babel[^>]+><\/script>/, '')
          .replace('./src/boot.js', './src/main.jsx');
      }
    }
  }],
  build: { outDir: 'dist' }
});
