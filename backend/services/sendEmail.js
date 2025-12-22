const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

dotenv.config();

const sendEmail = async (token) => {
    const verificationURL = `http://localhost:5173/auth/verify-email?token=${token}`;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    const decoded = jwt.verify(token, process.env.JWT_LOGIN_SECRET);
    const { fullName, userName, email } = decoded;
    // send email
    await transporter.sendMail({
        from: `${process.env.EMAIL_USER}`,
        to: email,
        subject: "🚀 Welcome to DezNov - Verify Your Account",
        html: `
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #0D0E11; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #1A1B23; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #2A9F8D 0%, #3DD3BC 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -1px;">DezNov</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Welcome to the future</p>
                    </div>

                    <!-- Content -->
                    <div style="padding: 40px 30px;">
                    <h2 style="color: #FFFFFF; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Hey ${fullName || userName
            }! 👋</h2>
                    
                    <p style="color: #B0B3B8; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                        You're just one click away from joining the DezNov community. Let's get your account verified and ready to go!
                    </p>

                    <!-- CTA Button -->
                    <div style="text-align: center; margin: 40px 0;">
                        <a href="${verificationURL}" 
                        style="display: inline-block; background: linear-gradient(135deg, #2A9F8D 0%, #3DD3BC 100%); 
                                color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; 
                                font-weight: 600; font-size: 16px; transition: all 0.3s ease;
                                box-shadow: 0 4px 15px rgba(42, 159, 141, 0.3);">
                        ✨ Verify My Account
                        </a>
                    </div>

                    <div style="background-color: #2A2D37; border-radius: 8px; padding: 20px; margin: 30px 0;">
                        <p style="color: #8B949E; font-size: 14px; margin: 0; text-align: center;">
                        <strong style="color: #F79009;">⚡ Quick verification link:</strong><br>
                        <a href="${verificationURL}" style="color: #2A9F8D; text-decoration: none; word-break: break-all; font-size: 13px;">
                            ${verificationURL}
                        </a>
                        </p>
                    </div>

                    <!-- Security Note -->
                    <div style="border-left: 3px solid #F79009; padding-left: 16px; margin: 30px 0;">
                        <p style="color: #8B949E; font-size: 14px; margin: 0;">
                        <strong style="color: #F79009;">🔒 Security Note:</strong> This verification link expires in <strong style="color: #FFFFFF;">10 minutes</strong> for your security.
                        </p>
                    </div>

                    <p style="color: #8B949E; font-size: 14px; line-height: 1.5; margin: 30px 0 0 0;">
                        If you didn't create a DezNov account, you can safely ignore this email.
                    </p>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #16181D; padding: 30px; text-align: center; border-top: 1px solid #2A2D37;">
                    <p style="color: #6B7280; font-size: 14px; margin: 0 0 10px 0;">
                        Made with ❤️ by the DezNov Team
                    </p>
                    <p style="color: #4B5563; font-size: 12px; margin: 0;">
                        This is an automated message, please do not reply to this email.
                    </p>
                    </div>

                </div>
                </body>
                </html>
            `,
    });
}
module.exports = {
    sendEmail
};