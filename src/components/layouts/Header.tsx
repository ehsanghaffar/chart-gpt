import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <>
      <nav
        aria-label="Site Nav"
        className="mx-auto flex max-w-3xl items-center justify-between p-4"
      >
        <a
          href="/"
          className="inline-flex h-10 w-40 items-center justify-center rounded-lg bg-gray-100"
        >
          <span className="sr-only">Logo</span>
          👋 ChartGPT
        </a>

        <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <li className="hidden lg:block">
            <a className="rounded-lg px-3 py-2" href="/">
              {" "}
              Home{" "}
            </a>
          </li>

          <li>
            <a className="rounded-lg px-3 py-2" href="">
              {" "}
              Projects{" "}
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
              href="https://github.com/ehsanghaffar"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <ArrowTopRightOnSquareIcon width={16} height={16} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
