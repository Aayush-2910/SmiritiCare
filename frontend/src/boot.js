// Static-preview adapter: compile the same JSX modules that Vite builds in production.
// No application data leaves the browser. External requests only load libraries and images.
const cache = new Map();
async function loadModule(url) {
  if (cache.has(url)) return cache.get(url);
  const pending = (async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Could not load application module');
    let code = await response.text();
    const imports = [...code.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)];
    const dependencies = await Promise.all(imports.map(async match => [match[1], await loadModule(new URL(match[1], url).href)]));
    for (const [path, dependency] of dependencies) {
      code = code.replaceAll(`'${path}'`, `'${dependency}'`).replaceAll(`"${path}"`, `"${dependency}"`);
    }
    const compiled = Babel.transform(code, { presets: ['react'], filename: url.split('/').pop(), sourceMaps: 'inline' }).code;
    return URL.createObjectURL(new Blob([compiled], { type: 'text/javascript' }));
  })();
  cache.set(url, pending);
  return pending;
}
async function start() {
  while (!window.Babel) await new Promise(resolve => setTimeout(resolve, 50));
  const entry = await loadModule(new URL('./main.jsx', import.meta.url).href);
  await import(entry);
}
start().catch(error => {
  console.error(error);
  document.getElementById('root').innerHTML = '<main class="initial-loading"><span>🌿</span><h2>A little pause.</h2><p>SmritiCare could not load. Please check your connection and try again.</p><button onclick="location.reload()">Try again</button></main>';
});