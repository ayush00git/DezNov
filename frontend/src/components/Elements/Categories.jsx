import React, { useState, useRef, useEffect } from 'react';

const Categories = ({ setSelectedCategory }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  const tabs = [
    "All",
    "UI/UX Design",
    "Blockchain & Web3",
    "Web Dev",
    "Graphic Design",
    "AI-ML"
  ];

  useEffect(() => {
    updateIndicator();
  }, [activeTab]);

  const updateIndicator = () => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  // Handle window resize to recalculate indicator position
  useEffect(() => {
    const handleResize = () => {
      updateIndicator();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  const handleTabClick = (index, category) => {
    setActiveTab(index);
    setSelectedCategory(category);
  };

  return (
    <div className="w-full p-4">
      {/* Tab Navigation Container - Full Width */}
      <div className="relative rounded-full p-1 shadow-2xl border border-gray-200/50 w-full backdrop-blur-[4px]">
        {/* Animated Background Indicator */}
        <div
          className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-out shadow-lg"
          style={indicatorStyle}
        />
        
        {/* Tab Buttons */}
        <div className="relative flex w-full">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => handleTabClick(index, tab)}
              className={`
                relative z-10 px-2 py-3 text-xs font-medium rounded-full cursor-pointer transition-all duration-300 ease-out
                flex-1 text-center min-w-0
                sm:px-4 sm:text-sm
                lg:px-6 lg:text-base
                ${
                  activeTab === index
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-200'
                }
                hover:scale-105 active:scale-95
              `}
            >
              <span className="relative z-10 truncate block">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;