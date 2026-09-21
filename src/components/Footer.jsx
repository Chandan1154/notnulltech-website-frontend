import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logos/home.png";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="flex items-center text-2xl font-bold">
              <img src={logo} alt="NotNullTech Logo" className="h-22 w-80" />
            </h2>

            <p className="mt-3 text-gray-300">
              Building AI-powered products for the future.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About</Link>
              <br />
              <Link to="/products">Products</Link>
              <br />
              <Link to="/technology">Technology</Link>
            </div>
          </div>

          <div>

            <h3 className="mb-4 font-semibold">
              Connect
            </h3>

            <div className="flex gap-4">

              <a href="#">
                <FaLinkedin  style={{ fontSize: "1.5rem" }}/>
              </a>

              <a href="#">
                <FaGithub  style={{ fontSize: "1.5rem" }}/>
              </a>

              <a href="#">
                <Mail />
              </a>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 NotNullTech. All rights reserved.
        </p>

      </div>
    </footer>
  );
}