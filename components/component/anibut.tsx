import React, { useState } from "react";

interface CustomizableInfoWidgetProps {
  infoText: string;
  className?: string;
  infoBoxClassName?: string;
}

const CustomizableInfoWidget: React.FC<CustomizableInfoWidgetProps> = ({ 
  infoText, 
  className = "",
  infoBoxClassName = ""
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer"
        style={{
          animation: "glow 1s linear infinite",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showInfo && (
          <div
            className={`absolute bg-neutral-950 p-4 rounded-md shadow-md w-48 max-w-xs ${infoBoxClassName}`}
          >
            <p className="text-gray-200">{infoText}</p>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 10px yellow;
          }
          50% {
            box-shadow: 0 0 30px yellow;
          }
          100% {
            box-shadow: 0 0 15px yellow;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomizableInfoWidget;