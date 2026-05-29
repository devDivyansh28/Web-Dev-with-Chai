import Link from "next/link";
import Image from 'next/image'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image
        src={"/undraw_day-dreaming_2mlz (1).svg"}
        fill={true}
        alt="Page not Found"
      ></Image>
      <Link href="/">Return Home</Link>
    </div>
  );
}
