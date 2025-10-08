import Americano from "../assets/menu/americano.webp";
import Cappuccino from "../assets/menu/cappuccino.jpg";
import ChocolateCaliente from "../assets/menu/chocolate.jpg";
import ColdBrew from "../assets/menu/cold-brew.jpg";
import Croissant from "../assets/menu/croissant.jpg";
import Espresso from "../assets/menu/espresso.webp";
import Frappuccino from "../assets/menu/frappuccino.jpg";
import Galletas from "../assets/menu/galletas.jpg";
import IcedCoffee from "../assets/menu/iced-coffe.jpg";
import Latte from "../assets/menu/latte.jpg";
import MuffinChocolate from "../assets/menu/muffin-chocolate.jpg";
import TeNegro from "../assets/menu/te-negro.webp";
import TeVerde from "../assets/menu/te-verde.webp";
import AvocadoToast from "../assets/menu/avocado-toast.jpg";
import YogurtGranola from "../assets/menu/yogurt-granola.jpeg";
import HuevosRevueltos from "../assets/menu/huevos-revueltos.avif";

export const menuItems = [
  {
    category: "Cafés calientes",
    items: [
      {
        name: "Espresso",
        price: "$2.50",
        description: "Café intenso y aromático",
        img: Espresso,
      },
      {
        name: "Cappuccino",
        price: "$3.00",
        description: "Espresso con leche vaporizada y espuma",
        img: Cappuccino,
      },
      {
        name: "Latte",
        price: "$3.50",
        description: "Espresso suave con más leche cremosa",
        img: Latte,
      },
      {
        name: "Americano",
        price: "$2.75",
        description: "Café filtrado, suave y aromático",
        img: Americano,
      },
    ],
  },
  {
    category: "Cafés fríos",
    items: [
      {
        name: "Iced Coffee",
        price: "$3.00",
        description: "Café frío con hielo y un toque refrescante",
        img: IcedCoffee,
      },
      {
        name: "Cold Brew",
        price: "$3.50",
        description: "Café infusionado en frío por 12 horas",
        img: ColdBrew,
      },
      {
        name: "Frappuccino",
        price: "$4.00",
        description: "Café helado batido con crema",
        img: Frappuccino,
      },
    ],
  },
  {
    category: "Tés y otras bebidas",
    items: [
      {
        name: "Té verde",
        price: "$2.00",
        description: "Infusión natural con propiedades antioxidantes",
        img: TeVerde,
      },
      {
        name: "Té negro",
        price: "$2.00",
        description: "Clásico té caliente de sabor intenso",
        img: TeNegro,
      },
      {
        name: "Chocolate caliente",
        price: "$3.00",
        description: "Espeso, cremoso y con cacao puro",
        img: ChocolateCaliente,
      },
    ],
  },
  {
    category: "Repostería",
    items: [
      {
        name: "Croissant",
        price: "$2.50",
        description: "Mantecoso y crujiente, recién horneado",
        img: Croissant,
      },
      {
        name: "Muffin de chocolate",
        price: "$2.75",
        description: "Esponjoso con chispas de chocolate",
        img: MuffinChocolate,
      },
      {
        name: "Galletas artesanales",
        price: "$1.50",
        description: "Variedad de sabores dulces",
        img: Galletas,
      },
    ],
  },
  {
    category: "Desayunos",
    items: [
      {
        name: "Tostadas con aguacate",
        price: "$5.00",
        description:
          "Pan artesanal tostado con aguacate fresco, un toque de limón y semillas.",
        img: AvocadoToast,
      },
      {
        name: "Yogur con granola y frutas",
        price: "$4.50",
        description:
          "Yogur natural acompañado de granola crujiente y frutas de temporada.",
        img: YogurtGranola,
      },
      {
        name: "Huevos revueltos con pan",
        price: "$6.00",
        description:
          "Huevos frescos revueltos servidos con pan tostado y mantequilla.",
        img: HuevosRevueltos,
      },
    ],
  },
];
