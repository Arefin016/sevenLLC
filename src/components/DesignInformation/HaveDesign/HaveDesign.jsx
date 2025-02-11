import { useState } from "react";
import { UploadFileSvg } from "../../SvgContainer/SvgConainer";

const HaveDesign = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setSelectedFile(file);
    }
  };
  return (
    <section>
      {/*  */}
      <div className="mt-12">
        {/* This is the text area */}
        <div className="mt-[19px]">
          <div className="flex flex-col gap-y-[10.5px]">
            <label className="text-lg text-headingColor font-medium">
              Describe Your Design Idea*
            </label>
            <textarea
              className="bg-[#D9D9D91A] rounded-[10px] pt-[31.5px] pb-[160.5px] pl-[43px] pr-[65px]"
              type="text"
              placeholder="Tell us about your design concept, including colors, size, width, function text, logos, and placement preferences. Please be very specific."
            />
          </div>
        </div>
        {/* Upload Images */}
        <div className="mt-[11px]">
          <h1 className="text-headingColor text-lg font-medium">
            Upload References (can be a rough sketch)
          </h1>
          <p className="text-navbarColor font-semibold mt-[7px]">
            Upload images, logos, or references to guide the design.
          </p>
          <p className="text-navbarColor mt-3">
            *Accept PNG, JPG, PDF, AI, SVG (max size: 5MB).
          </p>
          {/* This is the choose file section */}
          <div className="bg-[#FFF] shadow-fileUpload py-4 rounded-[10px]">
            <div className="flex justify-center items-center">
              <label className="cursor-pointer px-4 py-2 text-headingColor text-base rounded-lg text-center font-semibold">
                Choose File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <UploadFileSvg />
            </div>
            {selectedFile && (
              <p className="text-gray-700">
                Selected File: {selectedFile.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveDesign;
