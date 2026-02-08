// Email templates for SignPulse
// These return HTML strings that can be passed to sendEmail()

export function welcomeEmail(userName: string): { subject: string; html: string } {
  return {
    subject: `Welcome to SignPulse!`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome to SignPulse 🎉</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">Hi ${userName},</p>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">Thanks for signing up! We're excited to have you on board.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 16px;">Go to Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function welcome_new_userEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Welcome New User`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome New User</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function document_sent_confirmationEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Document Sent Confirmation`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Document Sent Confirmation</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function please_sign_documentEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Please Sign Document`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Please Sign Document</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function signing_reminder_3_daysEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Signing Reminder 3 Days`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Signing Reminder 3 Days</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function signing_reminder_1_dayEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Signing Reminder 1 Day`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Signing Reminder 1 Day</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function document_fully_signedEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Document Fully Signed`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Document Fully Signed</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function document_declinedEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Document Declined`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Document Declined</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function document_expiredEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Document Expired`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Document Expired</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function payment_confirmationEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Payment Confirmation`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Payment Confirmation</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}

export function payment_failedEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `SignPulse: Payment Failed`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Payment Failed</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from SignPulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The SignPulse Team</p>
      </div>
    `,
  };
}
