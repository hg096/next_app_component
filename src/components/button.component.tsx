"use client";
import React, { useState, useEffect } from 'react';

export const BaseButton = ({ name = "", label = "", id = "", buttonUseFn = () => { }, color = "", className = "" }) => {


  let defaultClass = "min-w-fit rounded"

  switch (color) {
    case "primary-solid":
      defaultClass =  defaultClass + " bg-purple-600 text-white active:bg-purple-700 disabled:bg-purple-100"
      break;
    case "primary-line":
      defaultClass =  defaultClass + " bg-white text-purple-600 border border-purple-600 active:text-purple-700 disabled:text-purple-100 disabled:border-purple-100"
      break;
    case "secondary-line":
      defaultClass =  defaultClass + " bg-white text-gray-700 border border-gray-300 active:border-gray-350 disabled:border-gray-200 disabled:text-gray-300"
      break;

    default:
      break;
  }
  defaultClass = defaultClass + " " + className

  return (
    <button className={ defaultClass } name={name} id={ id } onClick={buttonUseFn} type='button' >
      { label }
    </button>
  );
};
