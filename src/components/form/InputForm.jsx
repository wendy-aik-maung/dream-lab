import React from "react";

const InputForm = ({
	label,
	name,
	type = "text",
	placeholder = "",
	register,
	errors,
}) => {
	return (
		<fieldset className="w-full my-2">
			{label ? (
				<label className="mb-2 block font-semibold font-poppins text-textColor4 capitalize text-lg">
					{label}
				</label>
			) : null}
			<input
				type={type}
				name={name}
				className="w-full  py-2 px-2 border-2 font-bold rounded-md font-poppins focus:outline-none focus:border-black placeholder:text-[#bfbfbf]  placeholder:font-semibold "
				placeholder={placeholder}
				{...register(name)}
			/>
			{errors[name] ? (
				<p className="text-red-600 mt-2">{errors[name]?.message}</p>
			) : null}
		</fieldset>
	);
};

export default InputForm;
