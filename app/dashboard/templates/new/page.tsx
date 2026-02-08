"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewTemplatePage() {
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
      base_document_url: formData.get("base_document_url"),
      page_count: formData.get("page_count") ? Number(formData.get("page_count")) : null,
      hellosign_template_id: formData.get("hellosign_template_id"),
      use_count: formData.get("use_count") ? Number(formData.get("use_count")) : null,
    };

    const { error: insertError } = await supabase.from("templates").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/templates");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/templates" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Templates
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Template</h1>
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
          <label htmlFor="base_document_url" className="label">Base Document Url</label>
          <input id="base_document_url" name="base_document_url" type="url" className="input" placeholder="Enter base document url" required />
        </div>
        <div>
          <label htmlFor="page_count" className="label">Page Count</label>
          <input id="page_count" name="page_count" type="number" className="input" placeholder="Enter page count" />
        </div>
        <div>
          <label htmlFor="hellosign_template_id" className="label">Hellosign Template Id</label>
          <input id="hellosign_template_id" name="hellosign_template_id" type="text" className="input" placeholder="Enter hellosign template id" />
        </div>
        <div>
          <label htmlFor="use_count" className="label">Use Count</label>
          <input id="use_count" name="use_count" type="number" className="input" placeholder="Enter use count" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Template"}
          </button>
          <Link href="/dashboard/templates" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
