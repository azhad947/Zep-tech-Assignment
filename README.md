# Shree Hari Traders

Single-page tiles website. React + Vite + Tailwind CSS v4.

    npm install
    npm run dev       # local preview
    npm run build     # production build in /dist

Edit business details (phone, WhatsApp number, address, hours) and the tile list in `src/data.js`.
Tile visuals are generated SVG patterns (`src/components/TileArt.jsx`). To use real photos,
add an `image` URL to a tile in `data.js` and render it in `Collections.jsx`.
