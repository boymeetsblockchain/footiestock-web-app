import { ImageIcon, Search, Square } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Image from "next/image";

function Market() {
  return (
    <div className="py-5 px-3 space-y-2">
      <h1 className="font-bold text-xl text-left text-primarycolor">
        Market Activities
      </h1>
      <div>
        <Image
          src={"/balance.png"}
          alt="bar chart"
          width={730}
          height={360}
          className=""
        />
      </div>
    </div>
  );
}
export default Market;
