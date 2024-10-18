import HeadShot from '/mugshot.png'

export default function Nav() {
  // const activeLink = ({ isActive }: { isActive: boolean }) => isActive ? "block underline" : "block"

  return (
    <nav className="lg:px-[20px] overflow-y-scroll z-[1] right-0 h-full fixed w-[70px] lg:w-[350px] bg-dark-grey">
      <div className="flex items-center text-white">
        <div className="w-full">
          <h3 className="text-center text-3xl mt-12">
            <a className="block" href="/">
              <span className="lg:hidden">LA</span>
              <span className="hidden lg:block">Luis Amador</span>
            </a>
          </h3>

          <div className="">
            <a className="block" href="/">
              <img
                className="block"
                src={HeadShot}
                alt="Head Shot"
                width={310}
                height={310}
              />
            </a>
          </div>

          <ul className="mt-4 mb-4 text-center border-t-[1px] border-t-[#ddd] border-b-[1px] border-b-[#ddd] pt-5 pb-5 lg:pt-0 lg:border-none">
          <li className="mb-3.5">
              <a className="" href="/" aria-label="Home">
                <span className="block">Home</span>
              </a>
            </li>
            <li className="mb-3.5">
              <a className="" href="/about" aria-label="About">
                <span className="block">About</span>
              </a>
            </li>

            <li className="mb-3.5">
              <a className="" href="/services" aria-label="Skills">
                <span className="block">Services</span>
              </a>
            </li>

            <li className="mb-3.5">
              <a className="" href="/projects" aria-label="Projects">
                <span className="block">Projects</span>
              </a>
            </li>

            <li className="mb-3.5">
              <a className="" href="/blogs" aria-label="Blog">
                <span className="block">Blogs</span>
              </a>
            </li>

            <li className="">
              <a className="" href="/contact" aria-label="Contact">
                <span className="block">Contact</span>
              </a>
            </li>
          </ul>

          <div className="mb-4">
            <ul className="lg:flex lg:justify-center">
              <li className="lg:mr-2.5 mb-2.5 lg:mb-0 text-center">
                <a
                  className="block transition-colors hover:text-linkedin-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mrluisamador"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-10 h-10 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"></path>
                  </svg>
                </a>
              </li>

              <li className="lg:mr-2.5 mb-2.5 lg:mb-0  text-center">
                <a
                  className="block transition-colors hover:text-twitter-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/LinuxLue"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-10 h-10 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </li>

              <li className="text-center">
                <a
                  className="block transition-colors hover:text-github-orange"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MrLuisAmador"
                  aria-label="Github"
                >
                  <svg
                    className="w-10 h-10 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                    </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}