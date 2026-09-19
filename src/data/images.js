const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const images = {
  hero: photo('photo-1511895426328-dc8714191300'),
  family: photo('photo-1511632765486-a01980e01a18'),
  beach: photo('photo-1476514525535-07fb3b4ae5f1'),
  celebration: photo('photo-1511795409834-ef04bbd61622'),
  garden: photo('photo-1416879595882-3373a0480b5b'),
  tea: photo('photo-1544787219-7f47ccb76574'),
  meera: photo('photo-1551836022-d5d88e9218df', 200),
  rahul: photo('photo-1500648767791-00dcc994a43e', 300),
  anita: photo('photo-1580489944761-15a19d654956', 300),
  arjun: photo('photo-1506794778202-cad84cf45f1d', 300),
  sunita: photo('photo-1544005313-94ddf0286df2', 300)
};
export const imageFallback = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="#e4ebda"/><text x="300" y="205" text-anchor="middle" font-size="60">🌿</text><text x="300" y="265" text-anchor="middle" fill="#35543e" font-family="sans-serif" font-size="20">A moment to remember</text></svg>');
