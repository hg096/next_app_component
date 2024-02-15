/** @format */

import React from "react";
import { useFormContext } from "react-hook-form";
// import { ReactNode } from "react";

// interface BaseInputProps {
// 	name?: string;
// 	label?: string | ReactNode | null;
// 	required_message?: string | null;
// 	success_message?: string | null; // 폼전송후 일반 성공 메시지
// 	custom_success_message?: string | null; // 폼전송전 커스텀 성공 메시지를 보여줄때 ++성공 아이콘만 보여줄때는 " " 이렇게 사용
// 	type?: string;
// 	placeholder?: string | null;
// 	minLength?: number | null;
// 	maxLength?: number | null;
// 	min?: number | null;
// 	max?: number | null;
// 	pattern?: string | null;
// 	pattern_message?: string | null;
// 	disabled?: boolean | null;
// 	value?: string | number;
// 	id?: string;
// 	validate?: any; // 폼전송시 추가검증
// }

export const BaseInput = ({ name = null, label = null, required_message = null, success_message = null, custom_success_message = null, type = "text", placeholder = null, minLength = null, maxLength = null, min = null, max = null, pattern = null, pattern_message = null, disabled = false, value = undefined, id = undefined, validate = () => { } }) => {
	const {
		register,
		formState: { isSubmitting, isSubmitted, errors, isSubmitSuccessful  },
	} = useFormContext();

	let patternVal;

	switch (pattern) {
		case "ko":
			patternVal = /^[가-힣]+$/;
			break;
		case "num":
			patternVal = /^[0-9]+$/;
			break;
		case "email":
			patternVal = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)+$/;
			break;
		case "koEnNumSp":
			patternVal = /^[a-zA-Z가-힣0-9!@#$%^&*()-_+=<>?/,.:;{}|~`]+$/;
			break;
		case "enNum_":
			patternVal = /^[a-zA-Z0-9_]+$/;
			break;
		case "koEnNum":
			patternVal = /^[a-zA-Z가-힣0-9]+$/;
			break;
		case "enNum":
			patternVal = /^[a-zA-Z0-9]+$/;
			break;
		case "koEn":
			patternVal = /^[a-zA-Z가-힣]+$/;
			break;
		case "en":
			patternVal = /^[a-zA-Z]+$/;
			break;
		default:
			break;
	}

	let errors_message;
	errors_message = errors[`${name}`]?.message;

	return (
		<div className={type == 'hidden' ? `hidden`: `w-full `}>
			<div className="relative rounded mb-2 text-black w-full min-h-[48px]">
				<p className="mb-[6px] block text-t-3 min-w-max">{label}</p>
				<label className="relative flex justify-between w-full ">
					<input
						type={type}
						name={name}
						{...register(name, {
							required: required_message,
							minLength: { value: minLength, message: `${minLength}자 이상 입력해주세요` },
							maxLength: { value: maxLength, message: `${maxLength}자 이하 입력해주세요` },
							min: { value: min, message: `${min} 이상 입력해주세요` },
							max: { value: max, message: `${max} 이하 입력해주세요` },
							pattern: { value: patternVal, message: pattern_message },
							validate: isSubmitting ? (value) => validate() : null ,
						})}
						className={`${errors[name] ? "border border-red-500" : isSubmitted || custom_success_message ? "border border-green-500" : ""} text-md h-12 w-full rounded-md border-[1px] border-gray-250 py-3 pl-3 pr-9 text-b-1 text-gray-700 transition duration-100 ease-linear placeholder:text-gray-400 focus:border-purple-600
            `}
						placeholder={placeholder}
						disabled={disabled}
						value={value}
						id={id}
					/>
					{errors[name] ? (
						<div className="absolute top-[16px] right-[12px]">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.48568 7.61312H6.15234V3.61312H7.48568M7.48568 10.2798H6.15234V8.94645H7.48568M6.81901 0.279785C5.94353 0.279785 5.07662 0.452224 4.26779 0.787255C3.45895 1.12229 2.72402 1.61335 2.10497 2.23241C0.854723 3.48265 0.152344 5.17834 0.152344 6.94645C0.152344 8.71456 0.854723 10.4103 2.10497 11.6605C2.72402 12.2796 3.45895 12.7706 4.26779 13.1056C5.07662 13.4407 5.94353 13.6131 6.81901 13.6131C8.58712 13.6131 10.2828 12.9107 11.5331 11.6605C12.7833 10.4103 13.4857 8.71456 13.4857 6.94645C13.4857 6.07097 13.3132 5.20407 12.9782 4.39523C12.6432 3.58639 12.1521 2.85146 11.5331 2.23241C10.914 1.61335 10.1791 1.12229 9.37023 0.787255C8.5614 0.452224 7.69449 0.279785 6.81901 0.279785Z" fill="#FF5656" />
							</svg>
						</div>
					) : (!errors[name] && isSubmitted) || custom_success_message ? (
						<div className="absolute top-[16px] right-[12px]">
							<svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.50781 0.53418C9.36433 0.53418 11.1448 1.27168 12.4576 2.58443C13.7703 3.89719 14.5078 5.67766 14.5078 7.53418C14.5078 9.3907 13.7703 11.1712 12.4576 12.4839C11.1448 13.7967 9.36433 14.5342 7.50781 14.5342C5.6513 14.5342 3.87082 13.7967 2.55806 12.4839C1.24531 11.1712 0.507813 9.3907 0.507812 7.53418C0.507812 5.67766 1.24531 3.89719 2.55806 2.58443C3.87082 1.27168 5.6513 0.53418 7.50781 0.53418ZM6.63581 8.91518L5.08081 7.35918C5.02507 7.30343 4.95889 7.25921 4.88605 7.22904C4.81321 7.19887 4.73515 7.18335 4.65631 7.18335C4.57748 7.18335 4.49941 7.19887 4.42657 7.22904C4.35374 7.25921 4.28756 7.30343 4.23181 7.35918C4.11923 7.47176 4.05598 7.62446 4.05598 7.78368C4.05598 7.9429 4.11923 8.09559 4.23181 8.20818L6.21181 10.1882C6.2674 10.2442 6.33353 10.2887 6.40639 10.319C6.47925 10.3494 6.55739 10.365 6.63631 10.365C6.71524 10.365 6.79338 10.3494 6.86624 10.319C6.93909 10.2887 7.00522 10.2442 7.06081 10.1882L11.1608 6.08718C11.2173 6.03166 11.2622 5.96551 11.293 5.89254C11.3238 5.81957 11.3399 5.74123 11.3403 5.66203C11.3406 5.58282 11.3253 5.50433 11.2952 5.43108C11.2651 5.35783 11.2207 5.29126 11.1648 5.23522C11.1088 5.17918 11.0423 5.13478 10.9691 5.10458C10.8959 5.07437 10.8174 5.05896 10.7382 5.05924C10.659 5.05951 10.5806 5.07547 10.5076 5.10618C10.4346 5.13689 10.3684 5.18175 10.3128 5.23818L6.63581 8.91518Z" fill="#06BE34" />
							</svg>
						</div>
					) : null}
				</label>
			</div>
			<div>
				{errors[`${name}`] ? <p className="mt-[6px] mb-[6px] text-c-2 text-red-500">{errors_message}</p> : custom_success_message ? <p className="mt-[6px] mb-[6px] text-c-2 text-green-500">{custom_success_message}</p> : success_message ? <p className="mt-[6px] mb-[6px] text-c-2 text-green-500">{success_message}</p> : null}
			</div>
		</div>
	);
};
