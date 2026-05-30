"use client"

import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-white to-slate-100 dark:from-black dark:to-zinc-900 dark:text-white transition-colors duration-300">
      {/* Theme toggle pinned to the corner so it reads as a control, not content */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <main className="mx-auto w-full max-w-xl px-4 py-20 sm:py-28 space-y-14">
        {/* Identity */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-6xl font-bold bg-linear-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent pb-2">
              Goh Kang Sheng
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
            <p className="text-gray-600 dark:text-gray-400">Malaysia</p>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold">
              Software Engineer with 3+ years of experience in both frontend and backend
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Primarily working in{" "}
              <span className="font-medium text-gray-900 dark:text-white">Java</span> and{" "}
              <span className="font-medium text-gray-900 dark:text-white">Spring Boot</span>{" "}
              for backend development, with experience building frontend applications using{" "}
              <span className="font-medium text-gray-900 dark:text-white">Vue.js</span>,{" "}
              <span className="font-medium text-gray-900 dark:text-white">Angular</span> and{" "}
              <span className="font-medium text-gray-900 dark:text-white">React</span>.
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://github.com/KKANGsheng"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all"
            >
              <FaGithub className="w-6 h-6" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/kang-sheng-goh-ab448420b/"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>

            <Link
              href="kangsheng0721@gmail.com"
              aria-label="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
          </motion.div>
        </section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Dec 2025 - Mar 2026</p>
              <p className="font-medium">Backend Engineer</p>
              <p className="text-blue-600 dark:text-blue-400">Dtcpay</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {/* Maintained and developed the card feature such as revamping the card
                statement report, and added whitelist control for the card OpenAPI by
                restricting external callers. */}
                Maintained and developed the card feature in dtcpay app
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Nov 2023 - Nov 2025</p>
              <p className="font-medium">Associate Software Engineer</p>
              <p className="text-blue-600 dark:text-blue-400">Soft Space</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {/* Developed and maintained features for an e-wallet system using Vue.js and
                Spring Boot, including direct debit setup, DuitNow QR refund integration
                with UOB, autopay for parking services, and passport expiry reminder
                functionality. */}

                Developed and maintained features for an e-wallet system using Vue.js and
                Spring Boot.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Nov 2022 - Nov 2023</p>
              <p className="font-medium">Software Development Engineer</p>
              <p className="text-blue-600 dark:text-blue-400">Curlec</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
               Maintained and enhanced the direct debit system supporting both one-off and recurring payment transactions.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2022 - Sep 2022</p>
              <p className="font-medium">Quality Assurance Specialist</p>
              <p className="text-blue-600 dark:text-blue-400">TNG Digital</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Performed API, regression, risk and end-to-end testing for the e-wallet app.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
