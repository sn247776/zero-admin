import { Package2 } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">Zero Book</span>
      </Link>
    </div>
  );
}

export default Logo;
