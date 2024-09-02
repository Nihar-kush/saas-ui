import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex items-center justify-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <Image src={ArrowRight} alt="->" height={16} width={16} />
        </div>
      </div>
      <div className="py-5">
        <div className="container flex items-center justify-between">
          <Image src={Logo} alt="logo" height={40} width={40} />
          <Image
            src={MenuIcon}
            alt="logo"
            height={20}
            width={20}
            className="md:hidden"
          />
          <nav className="hidden md:flex items-center text-black/60 gap-6">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="btn btn-primary">Get for free</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
