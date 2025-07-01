import { Link } from "react-router-dom";

export default function CampusConnect() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center text-center">
        <h1>Micro CC-3<Link className="underline text-blue-600"> Coming Soon</Link></h1>
        <h1>Micro CC-4<Link className="underline text-blue-600">Coming Soon</Link></h1>
        <h1>Micro GE-2<Link className="underline text-blue-600">Coming Soon</Link></h1>
        <h1>Micro AECC-2<Link className="underline text-blue-600">Coming Soon</Link></h1>
      </div>
    </>
  );
}
