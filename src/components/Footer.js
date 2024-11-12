import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-800 text-white p-8">
      <div className="flex justify-between gap-24 ml-16">
        <div className="w-1/3">
          <h3 className="font-bold text-xl mb-4">Invest Learning LTD</h3>
          <p className="text-sm">
            <span className="font-semibold">U.K Office:</span> Suite 3740 Unit
            34 34-35 Hatton Garden Holborn London EC1N 8DX
          </p>
          <p className="text-sm mt-3">
            <span className="font-semibold">Nigeria Office:</span> 10 Fadeyi
            Aladura Street, Off Orishe road, Obafemi Awolowo Way, Ikeja Lagos,
            Nigeria.
          </p>
          <p className="text-sm mt-3">
            <span className="font-semibold">Telephone:</span> +44(0) 7904122514
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Email:</span> info@ill.com
          </p>
        </div>

        <div className="w-1/3 text-center">
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#whyill"
                className="hover:underline"
              >
                Why ILL
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="hover:underline"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="hover:underline"
              >
                Industries we serve
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/3">
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png"
                alt="Facebook"
                className="h-8 w-8"
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-circled--v1.png"
                alt="LinkedIn"
                className="h-8 w-8"
              />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                alt="YouTube"
                className="h-8 w-8"
              />
            </a>

            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/google-logo.png"
                alt="Google"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 pt-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} Invest Learning LTD - All
          rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
