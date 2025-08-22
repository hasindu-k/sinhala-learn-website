import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { documents } from "../../data";
import type { Document } from "../../types";
import "./Documents.css";
import { useFileSizes } from "../../hooks/useFileSizes";

const Documents: React.FC = () => {
  const docUrls = React.useMemo(
    () => documents.map((d) => d.link),
    [documents]
  );
  const sizes = useFileSizes(docUrls);

  const statusColors = {
    completed: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-700 dark:text-emerald-300",
    },
    "in-progress": {
      bg: "bg-amber-100 dark:bg-amber-900/30",
      text: "text-amber-700 dark:text-amber-300",
    },
    planned: {
      bg: "bg-slate-100 dark:bg-slate-800",
      text: "text-slate-700 dark:text-slate-300",
    },
  };

  // Get the most recent update date from all documents
  const getLastUpdatedText = () => {
    const dates = documents
      .filter((doc) => doc.lastUpdated)
      .map((doc) => doc.lastUpdated!.getTime());
    if (dates.length === 0) return "No updates yet";
    const latestDate = new Date(Math.max(...dates));
    return `Last updated: ${formatDate(latestDate)}`;
  };

  // Format date to readable string
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format relative time (e.g., "2 days ago")
  const formatRelativeTime = (date: Date): string => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

    return formatDate(date);
  };

  // Get status text based on document status
  const getStatusText = (doc: Document): string => {
    switch (doc.status) {
      case "completed":
        return "Open document →";
      case "in-progress":
        return `Updated ${formatRelativeTime(doc.lastUpdated!)}`;
      case "planned":
        return "Scheduled for development";
      default:
        return "";
    }
  };

  // Get icon based on file type
  const getFileIcon = (fileType: string): string => {
    const iconMap: Record<string, string> = {
      PDF: "📄",
      Draft: "📝",
      Planned: "📅",
      Word: "📄",
      Excel: "📊",
      Presentation: "📊",
    };
    return iconMap[fileType] || "📄";
  };

  return (
    <section
      id="documents"
      className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-b border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
            Documents
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
            {getLastUpdatedText()}
          </span>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const size = doc.link && doc.link !== "#" ? sizes[doc.link] : null;

            return (
              <div
                key={index}
                className={`group rounded-2xl p-6 border border-slate-200/70 dark:border-slate-700 ${
                  doc.status === "completed"
                    ? "bg-slate-50 dark:bg-slate-800"
                    : "bg-white dark:bg-slate-800/70"
                } transition-colors duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl mr-3 select-none">
                    {" "}
                    {getFileIcon(doc.fileType)}{" "}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      statusColors[doc.status].bg
                    } ${
                      statusColors[doc.status].text
                    } whitespace-nowrap transition-colors`}
                  >
                    {doc.fileType}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 transition-colors">
                  {doc.description}
                </p>

                {/* Additional document info */}
                <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-4 transition-colors">
                  {size && (
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="font-medium text-slate-700 dark:text-slate-200 transition-colors">
                        {size}
                      </span>
                    </div>
                  )}
                  {doc.lastUpdated && (
                    <div className="flex justify-between">
                      <span>Updated:</span>
                      <span className="font-medium text-slate-700 dark:text-slate-200 transition-colors">
                        {formatDate(doc.lastUpdated)}
                      </span>
                    </div>
                  )}
                </div>

                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm font-medium transition-colors ${
                    doc.status === "completed"
                      ? "text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                      : "text-slate-400 dark:text-slate-500 cursor-not-allowed"
                  }`}
                  onClick={
                    doc.status !== "completed"
                      ? (e) => e.preventDefault()
                      : undefined
                  }
                >
                  {getStatusText(doc)}
                  {doc.status === "completed" && (
                    <HiExternalLink className="w-4 h-4 ml-1" />
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Documents;
