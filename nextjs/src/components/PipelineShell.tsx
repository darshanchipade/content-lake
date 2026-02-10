import {
  ArrowTrendingUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, ComponentType, SVGProps } from "react";
import { PipelineTracker, type StepId } from "@/components/PipelineTracker";

type PipelineShellProps = {
  currentStep: StepId;
  showTracker?: boolean;
  children: ReactNode;
};

const workspaceLinks = [
  { label: "Workspace Overview", href: "/ingestion", icon: HomeModernIcon },
  { label: "Upload Activity", href: "/ingestion/activity", icon: CloudArrowUpIcon },
  { label: "Pipeline Health", href: "/extraction", icon: ArrowTrendingUpIcon },
  { label: "Search Finder", href: "/search", icon: MagnifyingGlassIcon },
];

export function PipelineShell({ currentStep, showTracker = true, children }: PipelineShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#f9fafb] text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-72 bg-white border-r border-gray-100 flex flex-col z-40">
        <div className="p-8 flex items-center gap-3">
           <img
             src="https://ea854xr24n6.exactdn.com/wp-content/uploads/2025/03/CX-Studios-logo-25.png?strip=all"
             alt="CX Studios Logo"
             className="h-10 w-auto object-contain shrink-0"
           />
           <div className="flex flex-col min-w-0">
             <span className="text-lg font-black tracking-tight leading-none text-gray-900 truncate">Content Lake</span>
             <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-none mt-1">Platform</span>
           </div>
        </div>

        <nav className="flex-1 px-6 py-4 space-y-10 overflow-y-auto">
          <div>
            <h3 className="px-2 text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Workspace</h3>
            <div className="space-y-4">
              {workspaceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-4 px-2 py-2 rounded-lg text-sm font-bold transition-all",
                    pathname === link.href ? "text-primary" : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  <link.icon className={clsx("size-5", pathname === link.href ? "text-primary" : "text-gray-400")} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-50 bg-gray-50/30">
           <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm">
                 N
              </div>
              <div className="flex-1 min-w-0">
                 <p className="text-sm font-bold truncate">Taylor</p>
                 <p className="text-[10px] text-gray-500 truncate">Data Analyst</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pl-72 flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b border-gray-100 bg-white sticky top-0 z-30 flex items-center px-8 justify-between">
           <div className="flex items-center gap-4 text-sm">
              <Squares2X2Icon className="size-5 text-gray-400" />
              <div className="flex items-center gap-2 text-gray-400">
                 <span>Workspaces</span>
                 <ChevronRightIcon className="size-3" />
                 <span>Delta</span>
                 <ChevronRightIcon className="size-3" />
                 <span className="text-gray-900 font-semibold">Product</span>
              </div>
           </div>
        </header>

        {/* Pipeline Stepper */}
        {showTracker && (
          <div className="bg-white border-b border-gray-100 px-8 py-10">
            <div className="max-w-[1200px] mx-auto">
              <PipelineTracker current={currentStep} />
            </div>
          </div>
        )}

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

type NavLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function NavSection({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{title}</p>
      <div className="mt-3 space-y-1.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 rounded-2xl px-3 py-2 font-semibold text-slate-500 transition hover:text-slate-900"
          >
            <link.icon className="size-4 text-slate-900" />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}