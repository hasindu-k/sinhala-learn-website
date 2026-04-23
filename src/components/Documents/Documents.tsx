import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { documents } from "../../data";
import type { Document } from "../../types";
import { useFileSizes } from "../../hooks/useFileSizes";

const Documents: React.FC = () => {
  const docUrls = React.useMemo(
    () => documents.map((d) => d.link).filter(Boolean),
    [],
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

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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

  const getLastUpdatedText = () => {
    const dates = documents
      .filter((doc) => doc.lastUpdated)
      .map((doc) => doc.lastUpdated!.getTime());

    if (dates.length === 0) return "No updates yet";

    const latestDate = new Date(Math.max(...dates));
    return `Last updated: ${formatDate(latestDate)}`;
  };

  const getStatusText = (doc: Document): string => {
    switch (doc.status) {
      case "completed":
        return "Open document →";
      case "in-progress":
        return doc.lastUpdated
          ? `Updated ${formatRelativeTime(doc.lastUpdated)}`
          : "In progress";
      case "planned":
        return "Scheduled for development";
      default:
        return "";
    }
  };

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

  const getCardSpanClass = (doc: Document) => {
    const subDocCount = doc.subDocuments?.length || 0;
    const hasLongDescription = doc.description.length > 140;

    // multiple docs / richer cards -> taller
    if (subDocCount >= 3) {
      return "md:row-span-2 lg:col-span-2 lg:row-span-2";
    }

    if (subDocCount >= 1 || hasLongDescription) {
      return "md:row-span-2";
    }

    // single simple docs
    return "row-span-1";
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row-dense">
          {documents.map((doc) => {
            const size = doc.link && doc.link !== "#" ? sizes[doc.link] : null;
            const isCompleted = doc.status === "completed";
            const cardSpanClass = getCardSpanClass(doc);

            return (
              <div
                key={doc.title}
                className={`group ${cardSpanClass} rounded-2xl border border-slate-200/70 dark:border-slate-700 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 overflow-hidden ${
                  isCompleted
                    ? "bg-slate-50 dark:bg-slate-800"
                    : "bg-white dark:bg-slate-800/70"
                }`}
              >
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-2xl mr-3 select-none">
                      {getFileIcon(doc.fileType)}
                    </div>

                    <span
                      className={`text-xs px-2 py-1 rounded-full whitespace-nowrap transition-colors ${
                        statusColors[doc.status].bg
                      } ${statusColors[doc.status].text}`}
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

                  {doc.subDocuments && doc.subDocuments.length > 0 && (
                    <div className="mt-2 space-y-2 border-t border-slate-100 dark:border-slate-700 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Attached Files:
                      </p>

                      <div className="space-y-2">
                        {doc.subDocuments.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 hover:border-sky-500 transition-all text-sm group/sub"
                          >
                            <span className="text-slate-700 dark:text-slate-300 group-hover/sub:text-sky-600 transition-colors pr-3">
                              {sub.title}
                            </span>
                            <HiExternalLink className="text-slate-400 group-hover/sub:text-sky-600 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-4">
                    {doc.link && (
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                          isCompleted
                            ? "text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                            : "text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        }`}
                        onClick={
                          isCompleted ? undefined : (e) => e.preventDefault()
                        }
                      >
                        {getStatusText(doc)}
                        {isCompleted && (
                          <HiExternalLink className="w-4 h-4 ml-1" />
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Documents;
