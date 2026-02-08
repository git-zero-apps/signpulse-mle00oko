"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewSignerPage() {
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
      name: formData.get("name"),
      email: formData.get("email"),
      signing_order: formData.get("signing_order") ? Number(formData.get("signing_order")) : null,
      status: formData.get("status"),
      hellosign_signature_id: formData.get("hellosign_signature_id"),
      signing_url: formData.get("signing_url"),
      signed_at: formData.get("signed_at"),
      ip_address: formData.get("ip_address"),
      decline_reason: formData.get("decline_reason"),
      reminder_sent_at: formData.get("reminder_sent_at"),
    };

    const { error: insertError } = await supabase.from("signers").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/signers");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/signers" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Signers
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Signer</h1>
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
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input id="email" name="email" type="email" className="input" placeholder="Enter email" required />
        </div>
        <div>
          <label htmlFor="signing_order" className="label">Signing Order</label>
          <input id="signing_order" name="signing_order" type="number" className="input" placeholder="Enter signing order" />
        </div>
        <div>
          <label htmlFor="status" className="label">Status</label>
          <input id="status" name="status" type="text" className="input" placeholder="Enter status" />
        </div>
        <div>
          <label htmlFor="hellosign_signature_id" className="label">Hellosign Signature Id</label>
          <input id="hellosign_signature_id" name="hellosign_signature_id" type="text" className="input" placeholder="Enter hellosign signature id" />
        </div>
        <div>
          <label htmlFor="signing_url" className="label">Signing Url</label>
          <input id="signing_url" name="signing_url" type="url" className="input" placeholder="Enter signing url" />
        </div>
        <div>
          <label htmlFor="signed_at" className="label">Signed At</label>
          <input id="signed_at" name="signed_at" type="datetime-local" className="input" placeholder="Enter signed at" />
        </div>
        <div>
          <label htmlFor="ip_address" className="label">Ip Address</label>
          <input id="ip_address" name="ip_address" type="text" className="input" placeholder="Enter ip address" />
        </div>
        <div>
          <label htmlFor="decline_reason" className="label">Decline Reason</label>
          <input id="decline_reason" name="decline_reason" type="text" className="input" placeholder="Enter decline reason" />
        </div>
        <div>
          <label htmlFor="reminder_sent_at" className="label">Reminder Sent At</label>
          <input id="reminder_sent_at" name="reminder_sent_at" type="datetime-local" className="input" placeholder="Enter reminder sent at" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Signer"}
          </button>
          <Link href="/dashboard/signers" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
