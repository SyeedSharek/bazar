import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="">
      {/* Tab headers */}
      <div className="flex border-b border-gray-200">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium text-sm focus:outline-none ${
              activeTab === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="pt-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
