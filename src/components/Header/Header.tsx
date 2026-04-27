import React, { useState, useEffect, useMemo } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { ThemeToggle } from "../ThemeToggle";
import "./Header.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "domain", label: "Domain" },
  { id: "milestones", label: "Milestones" },
  { id: "documents", label: "Documents" },
  { id: "presentations", label: "Presentations" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState<
    { id: string; label: string; text: string }[]
  >([]);

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = 96;
      const activationLine = headerOffset + 80;
      const pageBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      if (pageBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const documentsEl = document.getElementById("documents");
      const documentsRect = documentsEl?.getBoundingClientRect();

      if (
        documentsRect &&
        documentsRect.top <= activationLine &&
        documentsRect.bottom > activationLine
      ) {
        setActiveSection("documents");
        return;
      }

      const visibleSection = sections.find((section) => {
        const el = document.getElementById(section.id);
        const rect = el?.getBoundingClientRect();

        return rect
          ? rect.top <= activationLine && rect.bottom > activationLine
          : false;
      });

      if (visibleSection) {
        setActiveSection(visibleSection.id);
        return;
      }

      const scrollPosition = window.scrollY + headerOffset;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        const el = document.getElementById(section.id);

        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          return;
        }
      }

      setActiveSection("home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const buildSearchIndex = () => {
      const index = sections
        .map((section) => {
          const el = document.getElementById(section.id);
          return {
            id: section.id,
            label: section.label,
            text: el?.innerText.replace(/\s+/g, " ").trim() || "",
          };
        })
        .filter((item) => item.text.length > 0);

      setSearchIndex(index);
    };

    buildSearchIndex();
    window.addEventListener("load", buildSearchIndex);

    return () => window.removeEventListener("load", buildSearchIndex);
  }, []);

  const searchResults = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return [];

    return searchIndex
      .map((item) => {
        const normalizedText = `${item.label} ${item.text}`.toLowerCase();
        const matchIndex = normalizedText.indexOf(normalizedQuery);

        if (matchIndex === -1) return null;

        const snippetStart = Math.max(0, matchIndex - 45);
        const snippet = item.text.slice(snippetStart, snippetStart + 120);

        return {
          ...item,
          snippet: `${snippetStart > 0 ? "..." : ""}${snippet}`,
        };
      })
      .filter(
        (
          item,
        ): item is {
          id: string;
          label: string;
          text: string;
          snippet: string;
        } => Boolean(item),
      )
      .slice(0, 6);
  }, [searchIndex, searchQuery]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery("");

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/60 dark:border-slate-700/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo (Home click → NO #home) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
            aria-label="Go to home"
          >
            <span className="inline-flex h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 shadow-soft"></span>
            <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
              SinhalaLearn
            </span>
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {sections.map((section) =>
                section.id === "home" ? (
                  <a
                    key={section.id}
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`relative pb-1 transition text-slate-700 dark:text-slate-300 ${
                      activeSection === section.id
                        ? "active-link"
                        : "hover:text-sky-600 dark:hover:text-sky-400"
                    }`}
                  >
                    {section.label}
                  </a>
                ) : (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`relative pb-1 transition text-slate-700 dark:text-slate-300 ${
                      activeSection === section.id
                        ? "active-link"
                        : "hover:text-sky-600 dark:hover:text-sky-400"
                    }`}
                  >
                    {section.label}
                  </a>
                ),
              )}
            </nav>

            {/* Search */}
            <div className="relative">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400 transition-colors"
                aria-label="Search website"
                onClick={() => setSearchOpen((open) => !open)}
              >
                {searchOpen ? (
                  <HiX className="h-5 w-5" />
                ) : (
                  <HiSearch className="h-5 w-5" />
                )}
              </button>

              {searchOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                    onClick={() => setSearchOpen(false)}
                  />

                  {/* Search Panel */}
                  <div className="fixed left-1/2 top-16 z-50 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900 md:absolute md:right-0 md:left-auto md:top-12 md:w-[22rem] md:translate-x-0">
                    <label className="relative block">
                      <HiSearch className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="search"
                        autoFocus
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search the website"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:bg-slate-900 dark:focus:ring-sky-900/40"
                      />
                    </label>

                    <div className="mt-3 max-h-72 overflow-y-auto">
                      {searchQuery.trim() && searchResults.length === 0 && (
                        <p className="px-2 py-3 text-sm text-slate-500 dark:text-slate-400">
                          No matching sections found.
                        </p>
                      )}

                      {searchResults.map((result) => (
                        <button
                          key={result.id}
                          type="button"
                          onClick={() => scrollToSection(result.id)}
                          className="w-full rounded-xl px-3 py-2 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {result.label}
                          </span>
                          <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                            {result.snippet}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-2 pb-4 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  setMenuOpen(false);

                  if (section.id === "home") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`relative pb-1 text-slate-700 dark:text-slate-300 ${
                  activeSection === section.id
                    ? "active-link"
                    : "hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
