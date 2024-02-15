"use client";
import React, { useState, useEffect } from 'react';

export const Switch = ({ name, label = "", id, switchUseFn, isDefault = false }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(isDefault);
  const [isOnSwitchOn, setIsOnSwitchOn] = useState(true);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setIsOnSwitchOn(false)
  };
  useEffect(() => {
    if (isOnSwitchOn) {
      return;
    }
    if (typeof switchUseFn === "function") {
      if (isSwitchOn) {
        switchUseFn();
      }
    }
  }, [ switchUseFn, isOnSwitchOn, isSwitchOn]);

  return (
    <div className="flex items-center">
      <label className="relative inline-block w-[36px] h-[20px]">
        <input type="checkbox" className="hidden" name={name} id={id} checked={isSwitchOn} onChange={toggleSwitch} />
        <div className={`w-[36px] h-[20px] ${isSwitchOn ? 'bg-success' : 'bg-gray-300'}  rounded-full transition duration-500`}></div>
        <div className={`w-[16px] h-[16px]  ${isSwitchOn ? 'bg-white right-[2px]' : 'bg-white left-[2px]'} rounded-full  transition duration-500 absolute top-[2px] `}></div>
      </label>
      <p className="text-b-2 ml-2 cursor-pointer text-gray-500 ">{label}</p>
    </div>
  );
};
