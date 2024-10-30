"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row  rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl">
        <div className="flex-grow px-6 md:px-10 lg:px-16">
          <form className="flex flex-col gap-y-6">
            <div className="flex justify-center mb-8">
              <Image src={"/logo.png"} height={100} width={100} alt="logo" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone
              </Label>
              <Input
                id="phone"
                placeholder="08141889944"
                className="p-3 border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                className="p-3 border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="mt-8">
              <Button
                type="button"
                onClick={() => router.push("/admin")}
                className="bg-blue-600 text-white w-full py-3 rounded-md transition duration-300 ease-in-out transform hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
