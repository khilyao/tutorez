import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const other = formData.get("other") as string | null;
  const subject = formData.get("subject") as string;

  if (!name || !phone) {
    return NextResponse.json(
      { message: "Спробуйте відправити форму ще раз." },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Tutorez@tutorez.com.ua",
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL || "",
      subject,
      html: `<div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="margin-bottom: 20px; font-size: 24px; color: #007BFF;">Деталі замовлення</h2>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px;">
          <strong style="color: #007BFF;">ПІБ:</strong> ${name}
        </li>
        <li style="margin-bottom: 10px;">
          <strong style="color: #007BFF;">Телефон:</strong> ${phone}
        </li>
        <li style="margin-bottom: 10px;">
          <strong style="color: #007BFF;">Email:</strong> ${
            email || "Не вказано"
          }
        </li>
        <li style="margin-bottom: 10px;">
          <strong style="color: #007BFF;">Додаткова інформація:</strong> ${
            other || "Не вказано"
          }
        </li>
        <li style="margin-bottom: 10px;">
          <strong style="color: #007BFF;">Предмет:</strong> ${subject}
        </li>
      </ul>
      <p style="margin-top: 20px; font-size: 14px; color: #666;">
        Дякуємо за вашу заявку! Ми зв'яжемося з вами найближчим часом.
      </p>
    </div>`,
      // react: EmailTemplate({ firstName: "John" }),
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
