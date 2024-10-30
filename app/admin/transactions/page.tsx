import { Cards } from "@/components/dashboard/cards";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User2Icon } from "lucide-react";
import Image from "next/image";

const transactions = [
  {
    description: "John Doe",
    type: "Sell",
    reference: "#12548796",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: -45,
  },
  {
    description: "Jane Smith",
    type: "Buy",
    reference: "#12548796",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: 30,
  },
  {
    description: "Michael Johnson",
    type: "Sell",
    reference: "#12548796",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: -15,
  },
  {
    description: "Emily Brown",
    type: "Sell",
    reference: "#12548796",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: -20,
  },
  {
    description: "Chris Green",
    type: "Buy",
    reference: "#12548796",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: 50,
  },
];

function TransactionPage() {
  return (
    <div className="min-h-screen">
      <div className="">
        <Cards />
      </div>
      <div className="my-10 flex flex-col space-y-3">
        <h1 className="text-2xl font-semibold text-[#343C6A] mb-4">
          Recent Transactions
        </h1>
        <div className="flex space-x-6 mx-4">
          <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">
            All Transactions
          </h1>
          <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">
            Income
          </h1>
          <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">
            Expenses
          </h1>
        </div>
        <Table className="bg-white">
          <TableCaption>A list of your recent transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primarycolor font-bold">
                Description
              </TableHead>
              <TableHead className="text-primarycolor font-bold">
                Transaction ID
              </TableHead>
              <TableHead className="text-primarycolor text-center font-bold">
                Type
              </TableHead>
              <TableHead className="text-primarycolor font-bold">
                Date
              </TableHead>
              <TableHead className="text-primarycolor font-bold">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <User2Icon color="#3C6EEA" className="inline mr-1" />
                  {transaction.description}
                </TableCell>
                <TableCell>{transaction.reference}</TableCell>
                <TableCell
                  className={`${
                    transaction.type === "Buy"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }  py-1 rounded-xl text-center flex items-center justify-center`}
                >
                  {transaction.type}
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell
                  className={`${
                    transaction.amount > 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {transaction.amount > 0
                    ? `+$${transaction.amount}`
                    : `-$${Math.abs(transaction.amount)}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end">
          <Image
            src={"/pagination.png"}
            width={200}
            height={100}
            alt="pagination"
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
