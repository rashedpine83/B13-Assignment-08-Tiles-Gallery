import Link from "next/link";
import Image from "next/image";
import logoFooter from "@/assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 bg-accent-soft-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Image
                src={logoFooter}
                alt="logo"
                width={80}
                height={80}
              />
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Follow Us
            </p>

            <div className="flex justify-center sm:justify-start gap-4 text-xl">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaYoutube /></Link>
              <Link href="#"><FaLinkedin /></Link>
              <Link href="#"><FaPinterest /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/all-prducts" className="hover:text-black dark:hover:text-white transition">All Products</Link></li>
              <li><Link href="/dealer-profile" className="hover:text-black dark:hover:text-white transition">Dealer Profile</Link></li>
              <li><Link href="/latest" className="hover:text-black dark:hover:text-white transition">Latest Collection</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-black dark:hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/store" className="hover:text-black dark:hover:text-white transition">Store Locator</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              CORPORATE OFFICE
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              2nd Floor, House 10,<br />
              Road 04, Gulshan 1,<br />
              Dhaka 1212, Bangladesh
            </p>

            <h3 className="text-sm font-semibold text-black dark:text-white">
              FACTORY
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dhanua, Sreepur,<br />
              Gazipur, Bangladesh
            </p>
          </div>
        </div>

       
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
          
          <p>
            © {new Date().getFullYear()} ALVIONI Ceramics Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;