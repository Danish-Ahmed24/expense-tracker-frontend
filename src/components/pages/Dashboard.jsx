import axios from "axios";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

function Dashboard() {
	const [data, setdata] = useState([]);

  const handleDelete =async (id) =>{
      await axios.delete(`http://localhost:8080/api/expenses/${id}`);
      getExpenses();
      console.log(data);
      
  }
const getExpenses = async () => {
			const data = await axios.get("http://localhost:8080/api/expenses");
			console.log(data.data[0].title);
			setdata(data.data);
		};
	useEffect(() => {
		
		getExpenses();
	}, []);

	return (
		<>
			<Table className="px-5">
				<TableCaption>A list of your recent Expenses.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Id</TableHead>
						<TableHead>Title</TableHead>
						<TableHead>Category</TableHead>
						<TableHead>Date</TableHead>
						<TableHead></TableHead>
						<TableHead className="text-right">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item) => (
						<TableRow>
							<TableCell className="font-medium">{item.id}</TableCell>
							<TableCell>{item.title}</TableCell>
							<TableCell>{item.category}</TableCell>
							<TableCell>{item.date}</TableCell>
							<TableCell>
								<Button variant="outline"
                        className="bg-emerald-500 text-black mx-1.5"
                >
									Update
								</Button>
								<Button
									variant="outline"
									className="bg-red-500 text-white mx-1.5"
                  onClick={()=>handleDelete(item.id)}>  
									Delete
								</Button>
							</TableCell>
							<TableCell className="text-right">PKR{item.amount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}

export default Dashboard;
// {
//   "title": "Movie Night",
//   "amount": 1500.50,
//   "category": "Entertainment",
//   "date": "2025-07-10"
// }
