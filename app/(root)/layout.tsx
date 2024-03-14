import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ToastContainer } from "../nexttoast";
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <ToastContainer />  
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}