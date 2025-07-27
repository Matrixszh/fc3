import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "/public/assets/css/fancybox.min.css";
import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.min.css";
import "/public/assets/css/hamburger.min.css";
import "/public/assets/css/odometer.min.css";
import "/public/assets/css/style.css";
import "/public/assets/css/swiper.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
