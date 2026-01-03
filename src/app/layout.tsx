import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre = Libre_Franklin({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const bodyRef = useRef<HTMLBodyElement>(null);
  // const { scrollY, scrollYProgress } = useScroll({ container: bodyRef });
  // const [scrollYValue, setScrollYValue] = useState<number>(0);
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("\nPage scrollY: ", latest);
  //   setScrollYValue(latest);
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scrollYProgress: ", latest);
  // });

  return (
    <html lang="en">
      <body data-nav-open={false.toString()} className={libre.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
