import { POSTS } from "@/lib/constants";
import { Icons } from "./icons";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">Cyberscribe</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Stay Up to Date with the latest news and insights from our blog.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="https://twitter.com/w3tsadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a> */}
              <a
                href="https://github.com/lallaPNG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              {POSTS.map((post) => (
                <li key={post.title}>
                  <Link
                    href={post.href}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:w3tsadev@gmail.com"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 Cyberscribe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
