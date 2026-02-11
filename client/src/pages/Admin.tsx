/**
 * Admin Dashboard
 * Manage newsletter subscribers and contact form submissions
 * Features: Data tables, date filtering, CSV export
 */

import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Download, Mail, MessageSquare, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Admin() {
  const [subscriberDateFilter, setSubscriberDateFilter] = useState("");
  const [contactDateFilter, setContactDateFilter] = useState("");

  const { data: subscribers, isLoading: subscribersLoading } = trpc.admin.getNewsletterSubscribers.useQuery();
  const { data: submissions, isLoading: submissionsLoading } = trpc.admin.getContactSubmissions.useQuery();

  // Filter subscribers by date
  const filteredSubscribers = subscribers?.filter((sub) => {
    if (!subscriberDateFilter) return true;
    const subDate = new Date(sub.createdAt).toISOString().split("T")[0];
    return subDate === subscriberDateFilter;
  });

  // Filter submissions by date
  const filteredSubmissions = submissions?.filter((sub) => {
    if (!contactDateFilter) return true;
    const subDate = new Date(sub.createdAt).toISOString().split("T")[0];
    return subDate === contactDateFilter;
  });

  // Export subscribers to CSV
  const exportSubscribersCSV = () => {
    if (!filteredSubscribers || filteredSubscribers.length === 0) return;

    const headers = ["Email", "Date Subscribed"];
    const rows = filteredSubscribers.map((sub) => [
      sub.email,
      new Date(sub.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  // Export contact submissions to CSV
  const exportContactsCSV = () => {
    if (!filteredSubmissions || filteredSubmissions.length === 0) return;

    const headers = ["Name", "Email", "Message", "Date Submitted"];
    const rows = filteredSubmissions.map((sub) => [
      sub.name,
      sub.email,
      sub.message,
      new Date(sub.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `contact-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b-4 border-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="inline-block brutalist-border bg-[var(--lime)] px-4 py-2 font-mono text-sm font-black text-black hover:translate-x-1 hover:translate-y-1 transition-transform">
                ← BACK TO HOME
              </a>
            </Link>
            <h1 className="text-2xl font-black font-mono">ADMIN DASHBOARD</h1>
          </div>
        </div>
      </header>

      <div className="container py-12 space-y-16">
        {/* Newsletter Subscribers Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="brutalist-border bg-[var(--lime)] p-3">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-3xl font-black">Newsletter Subscribers</h2>
                <p className="font-mono text-sm text-muted-foreground">
                  Total: {filteredSubscribers?.length || 0}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <input
                  type="date"
                  value={subscriberDateFilter}
                  onChange={(e) => setSubscriberDateFilter(e.target.value)}
                  className="brutalist-border bg-card px-4 py-2 font-mono text-sm"
                />
                {subscriberDateFilter && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSubscriberDateFilter("")}
                    className="font-mono"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <Button
                onClick={exportSubscribersCSV}
                disabled={!filteredSubscribers || filteredSubscribers.length === 0}
                className="brutalist-border bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="brutalist-border bg-card overflow-hidden">
            {subscribersLoading ? (
              <div className="p-8 text-center font-mono text-muted-foreground">
                Loading subscribers...
              </div>
            ) : !filteredSubscribers || filteredSubscribers.length === 0 ? (
              <div className="p-8 text-center font-mono text-muted-foreground">
                No subscribers found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b-4 border-white bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-mono font-black">Email</th>
                      <th className="px-6 py-4 text-left font-mono font-black">Date Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubscribers.map((subscriber, index) => (
                      <tr
                        key={subscriber.id}
                        className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}
                      >
                        <td className="px-6 py-4 font-mono">{subscriber.email}</td>
                        <td className="px-6 py-4 font-mono text-muted-foreground">
                          {new Date(subscriber.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form Submissions Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="brutalist-border bg-[var(--lime)] p-3">
                <MessageSquare className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-3xl font-black">Contact Form Submissions</h2>
                <p className="font-mono text-sm text-muted-foreground">
                  Total: {filteredSubmissions?.length || 0}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <input
                  type="date"
                  value={contactDateFilter}
                  onChange={(e) => setContactDateFilter(e.target.value)}
                  className="brutalist-border bg-card px-4 py-2 font-mono text-sm"
                />
                {contactDateFilter && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setContactDateFilter("")}
                    className="font-mono"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <Button
                onClick={exportContactsCSV}
                disabled={!filteredSubmissions || filteredSubmissions.length === 0}
                className="brutalist-border bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="brutalist-border bg-card overflow-hidden">
            {submissionsLoading ? (
              <div className="p-8 text-center font-mono text-muted-foreground">
                Loading submissions...
              </div>
            ) : !filteredSubmissions || filteredSubmissions.length === 0 ? (
              <div className="p-8 text-center font-mono text-muted-foreground">
                No submissions found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b-4 border-white bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-mono font-black">Name</th>
                      <th className="px-6 py-4 text-left font-mono font-black">Email</th>
                      <th className="px-6 py-4 text-left font-mono font-black">Message</th>
                      <th className="px-6 py-4 text-left font-mono font-black">Date Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.map((submission, index) => (
                      <tr
                        key={submission.id}
                        className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}
                      >
                        <td className="px-6 py-4 font-mono">{submission.name}</td>
                        <td className="px-6 py-4 font-mono">{submission.email}</td>
                        <td className="px-6 py-4 font-mono text-sm max-w-md truncate">
                          {submission.message}
                        </td>
                        <td className="px-6 py-4 font-mono text-muted-foreground">
                          {new Date(submission.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
