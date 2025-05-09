"use client";

import { AnalyticsClickEvent } from "@/utils/AnalyticsEvents";
import { RiAtLine, RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import Link from "next/link";

export default function Header() {
  function handleClick(contact: string) {
    AnalyticsClickEvent("contact_clicked", contact);
  }

  return (
    <header className="flex justify-between animation-blur">
      <h1 className="font-BlueParadise text-2xl">
        <Link href="/">hxmoura</Link>
      </h1>
      <div className="flex items-center gap-3">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/hxmoura/"
          onClick={() => handleClick("linkedin")}
          title="Linkedin"
          className="flex gap-2 items-center bg-[#0076B2] rounded-full py-2 px-2 sm:px-3 text-white sm:hover:-translate-y-1 transition-transform duration-300"
        >
          <span className="text-xs max-sm:hidden">Conecte-se comigo</span>
          <RiLinkedinFill size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/hxmoura"
          onClick={() => handleClick("github")}
          title="Github"
          className="bg-brand-50 dark:bg-brand-800 rounded-full p-2 sm:hover:-translate-y-1 transition-transform duration-300"
        >
          <RiGithubFill size={20} />
        </Link>
        <Link
          href="mailto:hxmoura@hotmail.com"
          onClick={() => handleClick("e-mail")}
          title="E-mail"
          className="bg-brand-50 dark:bg-brand-800 rounded-full p-2 sm:hover:-translate-y-1 transition-transform duration-300"
        >
          <RiAtLine size={20} />
        </Link>
      </div>
    </header>
  );
}
