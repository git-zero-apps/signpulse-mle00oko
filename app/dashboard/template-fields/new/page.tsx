"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewTemplateFieldPage() {
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
      template_id: formData.get("template_id"),
      field_type: formData.get("field_type"),
      page_number: formData.get("page_number") ? Number(formData.get("page_number")) : null,
      x_position: formData.get("x_position") ? Number(formData.get("x_position")) : null,
      y_position: formData.get("y_position") ? Number(formData.get("y_position")) : null,
      width: formData.get("width") ? Number(formData.get("width")) : null,
      height: formData.get("height") ? Number(formData.get("height")) : null,
      signer_role: formData.get("signer_role"),
      is_required: formData.get("is_required") === "on",
    };

    const { error: insertError } = await supabase.from("template_fields").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/template-fields");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/template-fields" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Template Fields
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Template Field</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="template_id" className="label">Template Id</label>
          <input id="template_id" name="template_id" type="text" className="input" placeholder="Enter template id" required />
        </div>
        <div>
          <label htmlFor="field_type" className="label">Field Type</label>
          <input id="field_type" name="field_type" type="text" className="input" placeholder="Enter field type" required />
        </div>
        <div>
          <label htmlFor="page_number" className="label">Page Number</label>
          <input id="page_number" name="page_number" type="number" className="input" placeholder="Enter page number" required />
        </div>
        <div>
          <label htmlFor="x_position" className="label">X Position</label>
          <input id="x_position" name="x_position" type="number" className="input" placeholder="Enter x position" required step="0.01" />
        </div>
        <div>
          <label htmlFor="y_position" className="label">Y Position</label>
          <input id="y_position" name="y_position" type="number" className="input" placeholder="Enter y position" required step="0.01" />
        </div>
        <div>
          <label htmlFor="width" className="label">Width</label>
          <input id="width" name="width" type="number" className="input" placeholder="Enter width" required step="0.01" />
        </div>
        <div>
          <label htmlFor="height" className="label">Height</label>
          <input id="height" name="height" type="number" className="input" placeholder="Enter height" required step="0.01" />
        </div>
        <div>
          <label htmlFor="signer_role" className="label">Signer Role</label>
          <input id="signer_role" name="signer_role" type="text" className="input" placeholder="Enter signer role" />
        </div>
        <div className="flex items-center gap-3">
          <input id="is_required" name="is_required" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
          <label htmlFor="is_required" className="text-sm font-medium text-gray-700">Is Required</label>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Template Field"}
          </button>
          <Link href="/dashboard/template-fields" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
