import {
  DashBoard,
  Building,
  Components,
  Grid,
  Envelope,
} from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/home",
      icon: DashBoard,
    },
    {
      title: "About",
      href: "/about",
      icon: Building,
    },
    {
      title: "Services",
      href: "/services",
      icon: Components,
    },
    {
      title: "Gallery", 
      href: "/gallery",
      icon: Grid,
    },
    {
      title: "Contact",
      href: "/contact", 
      icon: Envelope,
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Home",
        href: "/home",
        icon: DashBoard,
      },
      {
        title: "About",
        href: "/about",
        icon: Building,
      },
      {
        title: "Services",
        href: "/services",
        icon: Components,
      },
      {
        title: "Gallery", 
        href: "/gallery",
        icon: Grid,
      },
      {
        title: "Contact",
        href: "/contact", 
        icon: Envelope,
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "Navigation",
      },
      {
        title: "Home",
        href: "/home",
        icon: DashBoard,
      },
      {
        title: "About",
        href: "/about",
        icon: Building,
      },
      {
        title: "Services",
        href: "/services",
        icon: Components,
      },
      {
        title: "Gallery", 
        href: "/gallery",
        icon: Grid,
      },
      {
        title: "Contact",
        href: "/contact", 
        icon: Envelope,
      },
    ],
  },
};
