import Section from "./Section";
// import Heading from "./Heading";
// import { gallery } from "../constants";
// import Arrow from "../assets/svg/Arrow";
// import ClipPath from "../assets/svg/ClipPath";

const Gallery = () => {
  return (
    <Section id="gallery">
      <div className="flex flex-wrap gap-10 mb-10 justify-center">
        <div className="flex flex-col items-center w-[650px] h-[400px] border-n-6 rounded-[1rem]  shadow-lg overflow-hidden bg-n-7">
          {/* Image Section */}
          <div className="w-full h-[60%]">
            <img
              src="../assets/background.jpg"
              alt="Descriptive Alt Text"
              className="w-[300px] h-[400px] object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-full h-[40%] p-4 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-n-1">Card Title</h3>
            <p className="text-gray-600 text-sm">
              This is a brief description of the content in the card. It gives a
              summary of what the card is about.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[650px] h-[400px] rounded-lg shadow-lg overflow-hidden bg-n-7 border-green-800">
          {/* Image Section */}
          <div className="w-full h-[60%]">
            <img
              src="/path/to/your-image.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-full h-[40%] p-4 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-n-1">Card Title</h3>
            <p className="text-gray-600 text-sm">
              This is a brief description of the content in the card. It gives a
              summary of what the card is about.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[650px] h-[400px] rounded-lg shadow-lg overflow-hidden bg-n-7 border-green-800">
          {/* Image Section */}
          <div className="w-full h-[60%]">
            <img
              src="/path/to/your-image.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-full h-[40%] p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-n-1">Card Title</h3>
            <p className="text-gray-600 text-sm">
              This is a brief description of the content in the card. It gives a
              summary of what the card is about.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[650px] h-[400px] rounded-lg shadow-lg overflow-hidden bg-n-7 border-green-800">
          {/* Image Section */}
          <div className="w-full h-[60%]">
            <img
              src="/path/to/your-image.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-full h-[40%] p-4 flex flex-col justify-between">
            <h3 className="text-xl font-boldtext-n-1">Card Title</h3>
            <p className="text-gray-600 text-sm">
              This is a brief description of the content in the card. It gives a
              summary of what the card is about.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Gallery;
