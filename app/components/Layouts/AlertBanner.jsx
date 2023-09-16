import Link from "next/link";
import React from "react";

const AlertBanner = () => {
  return (
    <div className="bg-creamatic flex justify-center items-center py-2">
      <ul>
        <li className="flex justify-center items-center gap-4 text-sm">
          <p>
            Trained Aesop consultations are available to provide bespoke skin
            care advise.
          </p>
          <Link href="#" className="font-medium">
            Book a video consultation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AlertBanner;
