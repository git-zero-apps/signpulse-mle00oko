"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewDocumentPage() {
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
      user_id: user?.id,
      name: formData.get("name"),
      file_url: formData.get("file_url"),
      file_size: formData.get("file_size") ? Number(formData.get("file_size")) : null,
      page_count: formData.get("page_count") ? Number(formData.get("page_count")) : null,
      status: formData.get("status"),
      message_to_signer: formData.get("message_to_signer"),
      hellosign_signature_request_id: formData.get("hellosign_signature_request_id"),
      signed_document_url: formData.get("signed_document_url"),
      signing_order: formData.get("signing_order"),
      expires_at: formData.get("expires_at"),
      sent_at: formData.get("sent_at"),
      signed_at: formData.get("signed_at"),
    };

    const { error: insertError } = await supabase.from("documents").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/documents");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/documents" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Documents
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Document</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="file_url" className="label">File Url</label>
          <input id="file_url" name="file_url" type="url" className="input" placeholder="Enter file url" required />
        </div>
        <div>
          <label htmlFor="file_size" className="label">File Size</label>
          <input id="file_size" name="file_size" type="number" className="input" placeholder="Enter file size" required />
        </div>
        <div>
          <label htmlFor="page_count" className="label">Page Count</label>
          <input id="page_count" name="page_count" type="number" className="input" placeholder="Enter page count" />
        </div>
        <div>
          <label htmlFor="status" className="label">Status</label>
          <input id="status" name="status" type="text" className="input" placeholder="Enter status" />
        </div>
        <div>
          <label htmlFor="message_to_signer" className="label">Message To Signer</label>
          <input id="message_to_signer" name="message_to_signer" type="text" className="input" placeholder="Enter message to signer" />
        </div>
        <div>
          <label htmlFor="hellosign_signature_request_id" className="label">Hellosign Signature Request Id</label>
          <input id="hellosign_signature_request_id" name="hellosign_signature_request_id" type="text" className="input" placeholder="Enter hellosign signature request id" />
        </div>
        <div>
          <label htmlFor="signed_document_url" className="label">Signed Document Url</label>
          <input id="signed_document_url" name="signed_document_url" type="url" className="input" placeholder="Enter signed document url" />
        </div>
        <div>
          <label htmlFor="signing_order" className="label">Signing Order</label>
          <input id="signing_order" name="signing_order" type="text" className="input" placeholder="Enter signing order" />
        </div>
        <div>
          <label htmlFor="expires_at" className="label">Expires At</label>
          <input id="expires_at" name="expires_at" type="datetime-local" className="input" placeholder="Enter expires at" />
        </div>
        <div>
          <label htmlFor="sent_at" className="label">Sent At</label>
          <input id="sent_at" name="sent_at" type="datetime-local" className="input" placeholder="Enter sent at" />
        </div>
        <div>
          <label htmlFor="signed_at" className="label">Signed At</label>
          <input id="signed_at" name="signed_at" type="datetime-local" className="input" placeholder="Enter signed at" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Document"}
          </button>
          <Link href="/dashboard/documents" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
