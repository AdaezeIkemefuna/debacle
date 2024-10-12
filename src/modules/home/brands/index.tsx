import { Partner1, Partner2, Partner3, Partner4 } from "assets";
import { useMobile } from "hooks";

const Brands = () => {
  const brands = [Partner1, Partner2, Partner3, Partner4];
  const { isMobile } = useMobile({ size: 640 });
  return (
    <div className="overflow-hidden py-20 px-4">
      {isMobile && (
        <p className="text-xl text-[#7B8DA8] mb-4 tracking-tighter font-bold">
          We are supported by
        </p>
      )}
      <div
        className={`flex items-center gap-8 ${
          !isMobile ? "justify-center" : "animate-scroll whitespace-nowrap"
        }`}
      >
        {brands.map((brand, index) => (
          <img
            src={brand}
            key={index}
            alt={`Brand ${index + 1}`}
            className={`h-12 ${!isMobile ? "" : "inline-block"}`}
          />
        ))}
        {isMobile &&
          brands.map((brand, index) => (
            <img
              src={brand}
              key={`duplicate-${index}`}
              alt={`Brand ${index + 1}`}
              className="h-12 inline-block"
              data-aos="fade-left"
            />
          ))}
      </div>
    </div>
  );
};

export { Brands };
