import img3 from "../assets/2.jpeg";
import img1 from "../assets/5.jpeg";
import img2 from "../assets/8.jpeg";
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center px-2 md:px-4">
      {/* Section 1 */}
      <div
        className="pt-4 md:pt-8 lg:pt-28 flex flex-col md:flex-row items-center md:items-start lg:max-w-[70rem]"
        id="about"
      >
        <div className="md:w-1/2 flex content-center justify-center md:py-12 lg:py-0">
          <img
            src={img1}
            alt="La Bettola Restaurant Interior"
            className="rounded-lg shadow-lg h-full max-w-full lg:size-[25rem] object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <h2 className="text-3xl  text-brand-heading mb-4 font-heading">
            Authentic Italian Flavors in Singapore
          </h2>
          <p className="text-brand-text leading-relaxed mb-4 font-sans">
            Welcome to La Bettola Pizza & Grill, where we bring the heart of
            Italy to the vibrant city of Singapore. Our passion for authentic
            Italian cuisine is reflected in every dish we serve, crafted with
            the finest ingredients and traditional recipes. Whether you&apos;re
            in the mood for a classic Margherita pizza or a savory grilled
            entrée, our menu promises a culinary journey that celebrates
            Italy&apos;s rich flavors. Join us for an unforgettable dining
            experience that combines warm hospitality with exceptional food.
          </p>
          <p className="text-brand-text font-sans">
            I am Emiddio Cioffi, Chef Owner of La Bettola, pleased to welcome
            you all anytime, whether you want to host your business meeting or
            savour a meal with your family and friends.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="flex flex-col md:flex-row items-center pt-8  md:items-start lg:justify-center lg:px-16 lg:max-w-[70rem] lg:pt-24"
        id="menu"
      >
        {/* Text content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:mr-12 lg:mr-0 order-2 md:order-1">
          <h2 className="text-3xl text-brand-heading mb-4 font-heading">
            Savor Authentic Italian Cuisine at La Bettola Pizza & Grill
          </h2>
          <p className="text-brand-text leading-relaxed mb-4 font-sans">
            Enjoy a taste of Italy in Singapore at La Bettola Pizza & Grill. Our
            chefs craft delicious pizzas and grilled dishes using fresh
            ingredients. Join us for a memorable dining experience.
          </p>
          <h3 className="font-medium text-lg text-brand-heading text-center sm:text-start">
            <a href="/wine_menu.pdf" download="ala_carte_menu.pdf">
              Our Ala Carte Wine Menu
            </a>
          </h3>
          <h3 className="font-medium text-lg text-brand-heading text-center sm:text-start">
            <a href="/food_menu.pdf" download="ala_carte_menu.pdf">
              Our Ala Carte Food Menu
            </a>
          </h3>
        </div>

        {/* Image */}
        <div className="md:w-1/2 order-1 md:order-2 flex content-center justify-start lg:justify-end">
          <img
            src={img2}
            alt="Grilled Meat Dish"
            className="rounded-lg shadow-lg h-full max-w-full lg:size-[25rem] object-cover"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="flex flex-col md:flex-row pt-8 items-center md:items-start lg:max-w-[70rem] lg:pt-16"
        id="about"
      >
        <div className="md:w-1/2 flex content-center justify-center  lg:py-12">
          <img
            src={img3}
            alt="La Bettola Restaurant Interior"
            className="rounded-lg shadow-lg h-full max-w-full lg:size-[25rem] object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 lg:py-28">
          <h2 className="text-3xl  text-brand-heading mb-4 font-medium">
            Make your <br /> Reservation with us <br /> now
          </h2>
          <p className="text-brand-text leading-relaxed mb-4 font-sans">
            For large booking (more than 10 guests) or last minute booking
            please contact the restaurant directly for availability at
            +6593979837 or +6560380260
          </p>
          <p className="text-brand-text font-sans">
            You can also make reservation by email us via
            infolabettolasg@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
