import React from "react";
import DatePicker1 from "@/components/ui/DatePicker";
import InputWithCharsLeft from "../ui/InputWithCharsLeft";
import AmountInput from "@/components/ui/AmountInput";
import SaveButton from "@/components/ui/SaveButton";

function AddExpense() {
	return (
		<>
			<center>
				<div className="bg-blue-50   border-input has-data-[state=checked]:border-primary/50 relative flex flex-col w-xl py-20 my-20 items-center gap-2 rounded-md border p-4 shadow-xs outline-none">
					<DatePicker1 />
					<InputWithCharsLeft left={30} />
					<InputWithCharsLeft left={35} />
					<AmountInput />
					<SaveButton />
				</div>
			</center>
		</>
	);
}

export default AddExpense;
