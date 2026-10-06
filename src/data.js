export const BUSINESS = {
  name: "Shree Hari Traders",
  phone: "+91 9582834061",
  whatsapp: "919582834061", 
  email: "info@shreeharitraders.in",
  address: "Shop 12, Tile Market Road, New Delhi 110001",
  hours: "Mon to Sat 9:30 am to 8:00 pm, Sun 10:30 am to 5:00 pm",
};

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;

export const CATEGORIES = ["All", "Floor", "Wall", "Bathroom", "Kitchen", "Outdoor"];


export const TILES = [
  {
    id: "carrara",
    name: "Carrara Gloss",
    variant: "marble",
    a: "#f2f2ef", b: "#7d8a93", c: "#cdd1d0",
    size: "800 x 800 mm",
    finish: "Polished vitrified",
    tags: ["Floor", "Wall"],
    rooms: "Living rooms, lobbies, showrooms",
  },
  {
    id: "walnut",
    name: "Walnut Plank",
    variant: "wood",
    a: "#9a6b45", b: "#865a3a", c: "#3b2a1d",
    size: "200 x 1200 mm",
    finish: "Matte wood-look",
    tags: ["Floor"],
    rooms: "Bedrooms, living rooms, cafes",
  },
  {
    id: "metro",
    name: "Metro Subway",
    variant: "subway",
    a: "#1d6f7c", b: "#2a808d", c: "#e6eae8",
    size: "75 x 300 mm",
    finish: "Glossy ceramic",
    tags: ["Wall", "Kitchen", "Bathroom"],
    rooms: "Kitchen backsplashes, shower walls",
  },
  {
    id: "jaali",
    name: "Jaali Star",
    variant: "star",
    a: "#0f4c5c", b: "#e9a23b", c: "#efe6cf",
    size: "200 x 200 mm",
    finish: "Matte decorative",
    tags: ["Wall", "Bathroom"],
    rooms: "Feature walls, entrances, washrooms",
  },
  {
    id: "slate",
    name: "Harlequin Slate",
    variant: "harlequin",
    a: "#2b3945", b: "#e7e3da", c: "#98a1a3",
    size: "600 x 600 mm",
    finish: "Matte vitrified",
    tags: ["Floor"],
    rooms: "Hallways, offices, retail floors",
  },
  {
    id: "terrazzo",
    name: "Terrazzo Chip",
    variant: "terrazzo",
    a: "#e8e3d9", b: "#c46b4a", c: "#2f4858",
    size: "600 x 600 mm",
    finish: "Satin vitrified",
    tags: ["Floor", "Kitchen"],
    rooms: "Kitchens, dining areas, studios",
  },
  {
    id: "checker",
    name: "Checker Classic",
    variant: "checker",
    a: "#f3f2ee", b: "#1b2630", c: "#aab0ae",
    size: "300 x 300 mm",
    finish: "Glossy ceramic",
    tags: ["Floor", "Kitchen"],
    rooms: "Kitchens, entrances, balconies",
  },
  {
    id: "scales",
    name: "Sea Scale",
    variant: "scales",
    a: "#cfe3df", b: "#8fbdb6", c: "#f5f6f4",
    size: "150 x 150 mm",
    finish: "Glossy ceramic",
    tags: ["Wall", "Bathroom"],
    rooms: "Bathroom walls, powder rooms",
  },
  {
    id: "chevron",
    name: "Sandstone Chevron",
    variant: "chevron",
    a: "#cdb592", b: "#b99b72", c: "#8b7556",
    size: "300 x 600 mm",
    finish: "Anti-skid matte",
    tags: ["Outdoor", "Floor"],
    rooms: "Balconies, terraces, driveways",
  },
];

export const byId = (id) => TILES.find((t) => t.id === id);
