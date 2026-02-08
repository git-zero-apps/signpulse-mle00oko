"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewAuditTrailPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const record: Record<string, unknown> = {
      document_id: formData.get("document_id"),
      event_type: formData.get("event_type"),
      actor_name: formData.get("actor_name"),
      actor_email: formData.get("actor_email"),
      ip_address: formData.get("ip_address"),
      user_agent: formData.get("user_agent"),
      metadata: formData.get("metadata"),
    };

    const { error: insertError } = await supabase.from("audit_trail").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/audit-trail");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/audit-trail" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Audit Trail
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Audit Trail</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="document_id" className="label">Document Id</label>
          <input id="document_id" name="document_id" type="text" className="input" placeholder="Enter document id" required />
        </div>
        <div>
          <label htmlFor="event_type" className="label">Event Type</label>
          <input id="event_type" name="event_type" type="text" className="input" placeholder="Enter event type" required />
        </div>
        <div>
          <label htmlFor="actor_name" className="label">Actor Name</label>
          <input id="actor_name" name="actor_name" type="text" className="input" placeholder="Enter actor name" />
        </div>
        <div>
          <label htmlFor="actor_email" className="label">Actor Email</label>
          <input id="actor_email" name="actor_email" type="email" className="input" placeholder="Enter actor email" />
        </div>
        <div>
          <label htmlFor="ip_address" className="label">Ip Address</label>
          <input id="ip_address" name="ip_address" type="text" className="input" placeholder="Enter ip address" />
        </div>
        <div>
          <label htmlFor="user_agent" className="label">User Agent</label>
          <input id="user_agent" name="user_agent" type="text" className="input" placeholder="Enter user agent" />
        </div>
        <div>
          <label htmlFor="metadata" className="label">Metadata</label>
          <input id="metadata" name="metadata" type="text" className="input" placeholder="Enter metadata" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Audit Trail"}
          </button>
          <Link href="/dashboard/audit-trail" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
