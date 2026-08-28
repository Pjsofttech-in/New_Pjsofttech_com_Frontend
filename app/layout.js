import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import "../styles.css";
import "./globals.css";
import SiteShell from "../components/SiteShell";

export const metadata = {
  metadataBase: new URL("https://www.pjsofttech.com"),
  title: "PJSoftTech | ERP, CRM, HRMS, School Management & Software Development Company Pune",
  description: "PJSOFTTECH provides ERP and CRM software solutions for schools, colleges, academies, universities and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
