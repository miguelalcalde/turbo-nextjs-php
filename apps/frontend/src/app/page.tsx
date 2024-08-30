import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { fileURLToPath } from "url";

// Get the current file URL and convert it to a file path
const __filename = fileURLToPath(import.meta.url);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:size-auto">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="gap-10 relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="mb-2">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Next.js docs
                <ExternalLink className="w-4 h-4" />
              </a>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="text-4xl">+</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-20 w-20 rounded-md"
                  src="/shadcn.png"
                  alt="Shadcn Logo"
                  width={180}
                  height={180}
                  priority
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="mb-2">
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Shadcn-ui docs
                <ExternalLink className="w-4 h-4" />
              </a>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h2 className="font-extralight text-4xl -mt-40">Demo starter kit</h2>

      <div className="flex mb-32 gap-5 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full hover:-translate-y-1 transition hover:shadow-lg">
            <CardHeader>
              <CardTitle className="mb-3 text-2xl font-semibold">
                Docs <ArrowRight className="w-6 h-6 inline-flex mb-1" />
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full hover:-translate-y-1 transition hover:shadow-lg">
            <CardHeader>
              <CardTitle className="mb-3 text-2xl font-semibold">
                Learn <ArrowRight className="w-6 h-6 inline-flex mb-1" />
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </CardDescription>
            </CardHeader>
          </Card>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full hover:-translate-y-1 transition hover:shadow-lg">
            <CardHeader>
              <CardTitle className="mb-3 text-2xl font-semibold">
                Templates <ArrowRight className="w-6 h-6 inline-flex mb-1" />
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Explore starter templates for Next.js.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full hover:-translate-y-1 transition hover:shadow-lg">
            <CardHeader>
              <CardTitle className="mb-3 text-2xl font-semibold">
                Deploy <ArrowRight className="w-6 h-6 inline-flex mb-1" />
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>
      </div>
    </main>
  );
}
