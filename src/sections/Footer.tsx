import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import instaLogo from "@/assets/social-insta.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container ">
        <div className="inline-flex relative before:content-[''] before:absolute before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)]">
          <Image
            src={Logo}
            alt="logo"
            height={40}
            width={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 ">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex items-center justify-center gap-6 mt-6">
          <XIcon className="h-4 w-4" />
          <Image src={instaLogo} alt="insta logo" height={20} width={20} />
          <LinkedInIcon className="h-5 w-5" />
          <PinterestIcon className="h-5 w-5" />
          <YouTubeIcon className="h-6 w-6" />
        </div>
        <p className="mt-6">
          &copy; 2024 Nihar kushwaha, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
