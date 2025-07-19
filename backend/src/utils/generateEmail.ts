export function verificationEmail(name: string, verification_link: string) {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - Play Zone</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8f9fa">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td>
        <![endif]-->
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(30, 30, 30, 0.1);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #A5FF90 0%, #15E500 100%); height: 6px;"></td>
          </tr>
          
          <!-- Logo Section -->
          <tr>
            <td align="center" style="padding: 40px 30px 30px 30px; background-color: #ffffff;">
              <h1 style="font-size: 32px; font-weight: 700; color: #15E500; margin: 0; letter-spacing: -0.5px; text-align: center;">
                Play Zone
              </h1>
            </td>
          </tr>
          
          <!-- Main Title -->
          <tr>
            <td align="center" style="padding: 0 30px 25px 30px; background-color: #ffffff;">
              <h1 style="font-size: 28px; font-weight: 700; color: #1E1E1E; margin: 0; letter-spacing: -0.5px;">
                Verify Your Email
              </h1>
            </td>
          </tr>
          
          <!-- Content Section -->
          <tr>
            <td style="padding: 0 40px 30px 40px; background-color: #ffffff;">
              <div style="font-size: 16px; line-height: 1.6; color: #1E1E1E; text-align: center;">
                <p style="margin: 0 0 20px 0;">
                  Hello <strong style="color: #15E500;">${name}</strong>,
                </p>
                <p style="margin: 0 0 20px 0;">
                  Welcome to <strong style="color: #15E500;">Play Zone</strong>! We're excited to have you join our community.
                </p>
                <p style="margin: 0 0 30px 0;">
                  To complete your registration and start exploring, please verify your email address by clicking the button below.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 0 40px 40px 40px; background-color: #ffffff;">
              <div style="text-align: center;">
                <a href="${verification_link}" style="display: inline-block; background: linear-gradient(135deg, #A5FF90 0%, #15E500 100%); color: #1E1E1E; padding: 16px 40px; text-decoration: none; font-weight: 700; border-radius: 12px; font-size: 16px; border: none; box-shadow: 0 4px 15px rgba(21, 229, 0, 0.3); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px;">
                  Verify Email Address
                </a>
              </div>
              <p style="margin: 20px 0 0 0; font-size: 14px; color: #666; text-align: center;">
                This link will expire in 24 hours for security reasons.
              </p>
            </td>
          </tr>
          
          <!-- Alternative Link -->
          <tr>
            <td style="padding: 0 40px 30px 40px; background-color: #ffffff; border-top: 1px solid #f0f0f0;">
              <div style="font-size: 14px; color: #666; text-align: center; padding-top: 20px;">
                <p style="margin: 0 0 10px 0;">
                  Having trouble with the button? Copy and paste this link into your browser:
                </p>
                <p style="margin: 0; word-break: break-all;">
                  <a href="${verification_link}" style="color: #15E500; text-decoration: none;">
                    ${verification_link}
                  </a>
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px 40px;">
              <div style="text-align: center;">
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #666; line-height: 1.5;">
                  If you didn't create an account with Play Zone, you can safely ignore this email.
                </p>
                <p style="margin: 0; font-size: 12px; color: #999;">
                  &copy; 2025 Play Zone. All rights reserved.
                </p>
              </div>
            </td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>
`;

  return html;
}
