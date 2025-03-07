import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: "M18 2H6a4..." },
  { href: "https://twitter.com", label: "Twitter", icon: "M22.46 6c-.77..." },
  { href: "https://instagram.com", label: "Instagram", icon: "M12 2.16c3.19..." }
];

export default function ContactInfo() {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-5 px-10 flex flex-col md:flex-row items-center justify-between text-sm border-b border-gray-700">
      {/* Left - Contact Info */}
      <div className="flex flex-wrap items-center gap-6">
        <a href="mailto:contact@tetemekomedia.com" className="flex items-center gap-2 hover:text-yellow-400 transition duration-300">
          ✉️ <span className="hidden sm:inline">contact@tetemekomedia.com</span>
        </a>
        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-yellow-400 transition duration-300">
          📞 <span className="hidden sm:inline">+123 456 7890</span>
        </a>
      </div>

      {/* Right - Social Media Icons with Tooltips */}
      <TooltipProvider>
        <div className="flex items-center gap-6 mt-3 md:mt-0">
          {socialLinks.map(({ href, label, icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  target="_blank"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon} />
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-gray-800 text-white px-3 py-1 rounded-md shadow-lg">
                <span className="text-xs font-medium">{label}</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
