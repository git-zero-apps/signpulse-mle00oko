// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  email: string;
  role: string;
  subscription_plan: string;
  subscription_status?: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  signature_image_url: string | null;
  documents_sent_this_month: number;
  billing_period_start: string | null;
  owner_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  email: string;
  role?: string;
  subscription_plan?: string;
  subscription_status?: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  signature_image_url: string | null;
  documents_sent_this_month?: number;
  billing_period_start: string | null;
  owner_id: string | null;
}

export interface Documents {
  id?: string;
  user_id: string;
  name: string;
  file_url: string;
  file_size: number;
  page_count: number;
  status: string;
  message_to_signer: string | null;
  hellosign_signature_request_id: string | null;
  signed_document_url: string | null;
  signing_order: string;
  expires_at: string | null;
  sent_at: string | null;
  signed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface DocumentsInsert {
  user_id: string;
  name: string;
  file_url: string;
  file_size: number;
  page_count?: number;
  status?: string;
  message_to_signer: string | null;
  hellosign_signature_request_id: string | null;
  signed_document_url: string | null;
  signing_order?: string;
  expires_at: string | null;
  sent_at: string | null;
  signed_at: string | null;
}

export interface SignatureFields {
  id?: string;
  document_id: string;
  field_type: string;
  page_number: number;
  x_position: number;
  y_position: number;
  width: number;
  height: number;
  signer_id: string | null;
  is_required: boolean;
  field_value: string | null;
  created_at: string;
  updated_at: string;
}

export interface SignatureFieldsInsert {
  document_id: string;
  field_type: string;
  page_number: number;
  x_position: number;
  y_position: number;
  width: number;
  height: number;
  signer_id: string | null;
  is_required?: boolean;
  field_value: string | null;
}

export interface Signers {
  id?: string;
  document_id: string;
  name: string;
  email: string;
  signing_order: number;
  status: string;
  hellosign_signature_id: string | null;
  signing_url: string | null;
  signed_at: string | null;
  ip_address: string | null;
  decline_reason: string | null;
  reminder_sent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface SignersInsert {
  document_id: string;
  name: string;
  email: string;
  signing_order?: number;
  status?: string;
  hellosign_signature_id: string | null;
  signing_url: string | null;
  signed_at: string | null;
  ip_address: string | null;
  decline_reason: string | null;
  reminder_sent_at: string | null;
}

export interface AuditTrail {
  id?: string;
  document_id: string;
  event_type: string;
  actor_name: string | null;
  actor_email: string | null;
  ip_address: string | null;
  user_agent: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export interface AuditTrailInsert {
  document_id: string;
  event_type: string;
  actor_name: string | null;
  actor_email: string | null;
  ip_address: string | null;
  user_agent: string | null;
  metadata: Record<string, unknown> | null;
}

export interface Templates {
  id?: string;
  user_id: string;
  name: string;
  base_document_url: string;
  page_count: number;
  hellosign_template_id: string | null;
  use_count: number;
  created_at: string;
  updated_at: string;
}

export interface TemplatesInsert {
  user_id: string;
  name: string;
  base_document_url: string;
  page_count?: number;
  hellosign_template_id: string | null;
  use_count?: number;
}

export interface TemplateFields {
  id?: string;
  template_id: string;
  field_type: string;
  page_number: number;
  x_position: number;
  y_position: number;
  width: number;
  height: number;
  signer_role: string;
  is_required: boolean;
  created_at: string;
  updated_at: string;
}

export interface TemplateFieldsInsert {
  template_id: string;
  field_type: string;
  page_number: number;
  x_position: number;
  y_position: number;
  width: number;
  height: number;
  signer_role?: string;
  is_required?: boolean;
}
