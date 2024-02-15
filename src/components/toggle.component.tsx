import React from 'react';

function ToggleButton({ isChecked, onToggle }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked}
                onChange={onToggle}
            />
            <div
                className={`w-11 h-6 ${isChecked ? 'bg-[#06BE34]' : 'bg-gray-350'} rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-350 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#06BE34]`}
                style={{ transition: 'background-color 0.3s ease' }}
            ></div>
        </label>
    );
}

export default ToggleButton;
