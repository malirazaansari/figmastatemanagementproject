import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-800 text-white p-8">
      <div className="flex justify-between">
        <div className="w-72 h-60">
          <h3 className="font-bold text-2xl">Invest Learning LTD</h3>
          <p>
            UK Office: Suite 3740 Unit 34 34-35 Hatton Garden Holborn London
            EC1N 8DX
          </p>
          <p className="text-base">
            Nigeria Office: 10 Fadeyi Aladura Street, Off Orishe road, Obafemi
            Awolowo Way. Ikeja Lagos. Nigeria.
          </p>
          <p className="text-sm">Telephone: +44(0) 7804122514</p>
          <p className="text-sm">Email: info@ill.com</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#about">Why Ill</a>
            </li>
            <li>
              <a href="#about">Courses</a>
            </li>
            <li>
              <a href="#about">Industries we serve</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/youtube.png"
                alt="Youtube"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google.png"
                alt="Google"
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
