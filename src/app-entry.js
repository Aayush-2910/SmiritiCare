// Convenient static-host entry. Hash routes work without server rewrite rules.
const target = new URL('../index.html', import.meta.url);
target.hash = location.hash || '/app/home';
location.replace(target.href);
