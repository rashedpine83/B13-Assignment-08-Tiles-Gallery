import Link from "next/link";
import Image from "next/image";
import logoFooter from "@/assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-24 bg-accent-soft-hover">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={logoFooter}
                alt="pixgen logo"
                width={80}
                height={80}
                className=""
              />
            </div>

            <p className="text-2xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Follow Us
            </p>
            <div className="flex gap-3">
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaYoutube /></Link>
            <Link href="#"><FaLinkedin /></Link>
            <Link href="#"><FaPinterest /></Link>
          </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/all-prducts"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer-profile"
                  className="hover:text-black dark:hover:text-white transition"
                >
                 Dealer Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/latest"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Latest Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
             Customer Service
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              CORPORATE OFFICE
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              2nd Floor, House 10, <br />
              Road 04, Gulshan 1, <br />
              Dhaka 1212, Bangladesh
            </p>
            <h3 className="text-sm font-semibold text-black dark:text-white">
              FACTORY
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dhanua, Sreepur, <br /> Gazipur, Bangladesh
            </p>
          </div>
        </div>

        

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} ALVIONI Ceramics Limited. All rights reserved..</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
             Privacy Policy
Terms And Conditions
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;