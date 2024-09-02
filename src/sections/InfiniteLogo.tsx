"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfiniteLogo() {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="acme logo"
              className="infinite-logo-img"
            />
            <Image
              src={quantumLogo}
              alt="quantum logo"
              className="infinite-logo-img"
            />
            <Image src={echoLogo} alt="echo logo" />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              className="infinite-logo-img"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              className="infinite-logo-img"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              className="infinite-logo-img"
            />

            {/* duplicate logos for animation */}

            <Image
              src={acmeLogo}
              alt="acme logo"
              className="infinite-logo-img"
            />
            <Image
              src={quantumLogo}
              alt="quantum logo"
              className="infinite-logo-img"
            />
            <Image src={echoLogo} alt="echo logo" />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              className="infinite-logo-img"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              className="infinite-logo-img"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              className="infinite-logo-img"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
