import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-96 bg-cover bg-center "
      style={{
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/3063/89d8/d1232c0ea9130bf2474d6192b3b16680?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZxS6Hs~9bsmNe0diZJ4DOMF-JhbLpxCuiM48d5i12w3gkruou7YaV2sOfVQXuCQGKfH~YCxF2q2DrGb-LSpffunJiRBvCe~Ifho~vRvXNwzEaWSP80cgkgjeDaU457ozXlf8yb0vQkjREQ1I~~RkkebhQllAQpFc5BzYT-DIm8od8dC-o2hLartPTWy9TqHcR5F4xm4qqqCKthYfEwyHQi46G~xlrsXvslZbbk7cwIZJPoUpF6yHI3xuAUjr~nU-DtaugKhqeZIkTR2UYJEFC1fEScVhfkiySVFhdOYBY4IN6QobffsJV5cCbpCpcqalJIDSY3SWH0DYalbZoS0e0Q__)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Course Find</h1>
      </div>
    </section>
  );
}

export default HeroSection;
