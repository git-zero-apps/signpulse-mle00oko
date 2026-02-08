"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditDocumentPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [record, setRecord] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function fetchRecord() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("documents")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) setError(error.message);
      else setRecord(data);
      setFetching(false);
    }
    fetchRecord();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();

    const updates: Record<string, unknown> = {
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

    const { error: updateError } = await supabase
      .from("documents")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/documents");
      router.refresh();
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!record) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-4">
        <p className="text-sm text-red-700">Document not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/documents" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Documents
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Document</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" defaultValue={String(record.name ?? "")} required />
        </div>
        <div>
          <label htmlFor="file_url" className="label">File Url</label>
          <input id="file_url" name="file_url" type="url" className="input" defaultValue={String(record.file_url ?? "")} required />
        </div>
        <div>
          <label htmlFor="file_size" className="label">File Size</label>
          <input id="file_size" name="file_size" type="number" className="input" defaultValue={String(record.file_size ?? "")} required />
        </div>
        <div>
          <label htmlFor="page_count" className="label">Page Count</label>
          <input id="page_count" name="page_count" type="number" className="input" defaultValue={String(record.page_count ?? "")} />
        </div>
        <div>
          <label htmlFor="status" className="label">Status</label>
          <input id="status" name="status" type="text" className="input" defaultValue={String(record.status ?? "")} />
        </div>
        <div>
          <label htmlFor="message_to_signer" className="label">Message To Signer</label>
          <input id="message_to_signer" name="message_to_signer" type="text" className="input" defaultValue={String(record.message_to_signer ?? "")} />
        </div>
        <div>
          <label htmlFor="hellosign_signature_request_id" className="label">Hellosign Signature Request Id</label>
          <input id="hellosign_signature_request_id" name="hellosign_signature_request_id" type="text" className="input" defaultValue={String(record.hellosign_signature_request_id ?? "")} />
        </div>
        <div>
          <label htmlFor="signed_document_url" className="label">Signed Document Url</label>
          <input id="signed_document_url" name="signed_document_url" type="url" className="input" defaultValue={String(record.signed_document_url ?? "")} />
        </div>
        <div>
          <label htmlFor="signing_order" className="label">Signing Order</label>
          <input id="signing_order" name="signing_order" type="text" className="input" defaultValue={String(record.signing_order ?? "")} />
        </div>
        <div>
          <label htmlFor="expires_at" className="label">Expires At</label>
          <input id="expires_at" name="expires_at" type="datetime-local" className="input" defaultValue={String(record.expires_at ?? "")} />
        </div>
        <div>
          <label htmlFor="sent_at" className="label">Sent At</label>
          <input id="sent_at" name="sent_at" type="datetime-local" className="input" defaultValue={String(record.sent_at ?? "")} />
        </div>
        <div>
          <label htmlFor="signed_at" className="label">Signed At</label>
          <input id="signed_at" name="signed_at" type="datetime-local" className="input" defaultValue={String(record.signed_at ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Document"}
          </button>
          <Link href="/dashboard/documents" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
