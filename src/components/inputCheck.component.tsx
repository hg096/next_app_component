"use client";
import { useFormContext, useForm } from 'react-hook-form';

export const InputCheck = ({ name, label = "",
  labelStyle = "text-b-2 ml-2 cursor-pointer text-gray-500 peer-checked:text-black",
  inputStyle = "square", id, required_message = "", isSelectAll = false, value, selectArr = [] }) => {

  const { register, setValue, formState: { isSubmitting, isSubmitted, errors } } = useFormContext();
  let styleClasses;

  switch (inputStyle) {
    case "round":
      styleClasses = `h-6 w-6 bg-white rounded-full border-2 border-gray-250 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('/next/assets/images/icons/checkbold-gray.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:after:bg-[url('/next/assets/images/icons/checkbold-white.svg')] checked:bg-purple-600 checked:border-purple-600 peer relative cursor-pointer appearance-none transition-all`;
      break;

    case "simple":
      styleClasses = `h-4 w-4 bg-transparent after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('/next/assets/images/icons/checkbold-gray.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:after:bg-[url('/next/assets/images/icons/checkbold-purple.svg')] peer relative cursor-pointer appearance-none transition-all`;
      break;

    case "square":
      styleClasses = "h-4 w-4 bg-white rounded border-2 border-gray-250 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('/next/assets/images/icons/checkbold-white.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:border-purple-600 checked:bg-purple-600 peer relative cursor-pointer appearance-none transition-all";
      break;
  }

  const handleSelectAllChange1 = (target: string[], e: React.ChangeEvent<HTMLInputElement>) => {
    target.forEach(elementName => {
      const elements = document.getElementsByName(elementName) as NodeListOf<HTMLInputElement>;
      if (elements.length > 0) {
        elements[0].checked = e.target.checked;
        setValue(elementName, e.target.checked);
      }
    });
  };

  return (
    <div className={` `}>
      <div className='flex '>
        {isSelectAll ? (
          <input
            type="checkbox"
            name={name}
            {...register(`${name}`, {
              required: `${required_message}`,
            })}
            id={id}
            className={`${styleClasses}`}
            value={value}
            onChange={(e) => handleSelectAllChange1(selectArr, e)}
          />
        ) : (
          <input
            type="checkbox"
            name={name}
            {...register(`${name}`, {
              required: `${required_message}`,
            })}
            id={id}
            className={`${styleClasses}`}
            value={value}
          />
        )}
        <label className={labelStyle} htmlFor={id}>{label}</label>
      </div>
      {/* <div>
        <p className='mt-[6px] text-c-2 text-red-500'>{errors[`${name}`]?.message}</p>
      </div> */}
    </div>
  );
};


