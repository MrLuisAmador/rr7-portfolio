import {type MetaFunction, ActionFunction, json } from "react-router";
import Sendgrid from "@sendgrid/mail";
import { Form } from "react-router";

export const meta: MetaFunction = () => {
    return [
      { title: "Contact | Luis Amador Portfolio" },
      { name: "description", content: "Portfolio Website And Blog" },
    ];
};

type ActionData =
  | {
      email: null | string;
      message: null | string;
    };

type Success =
  | {
      successMessage: string;
    };

type Error =
  | {
      errorMessage: string;
    };

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    
    const email = formData.get("email");
    const message = formData.get("message");

    const content = `
        Email: ${email}\r\n
        Message: ${message}
    `
    
    const errors: ActionData = {
        email: email ? null : "Email is required",
        message: message ? null : "Message is required",
    };
    
    const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
    
    if (hasErrors) {
        return json<ActionData>(errors);
    }
    
    Sendgrid.setApiKey(process.env.SENDGRID_API_KEY || ""); 
    
    const msg = {
        to: process.env.CONTACT_FORM_EMAIL,
        from: "webmaster@mrluisamador.com",
        subject: "A mail was sent from your websites contact form!",
        text: content?.toString(),
        html: content.replace(/\r\n/g, '<br>'),
    };
    
    const res = await Sendgrid.send(msg)
        .then(() => {
        return json<Success>({
            successMessage: "Email sent succesfully!",
        });
        })
        .catch((error) => {
        return json<Error>({
            errorMessage: error.response.body.errors[0].message,
        });
        });
    
    return res;
};

const Contact: React.FC = () => {
  return (
    <section className="h-screen items-center flex justify-center text-white py-16 bg-contact-blue px-5">
      <div className="md:w-3/6">
        <h1 className="text-4xl mb-5 text-center">Do you need something done?</h1>
        <p className="mb-14 text-lg text-center">
          I&apos;m currently accepting new projects and would love to help with yours. Please take a
          few minutes and tell me how I can help.
        </p>

        <Form method="post" id="mail" className="mail">
          <label className="">
            <span className="absolute border-0 overflow-hidden h-px w-px m-[-1px] p-0">Email</span>
            <input
              required={true}
              type="email"
              name="email"
              size={40}
              className="w-full bg-[#053c50] text-xl mb-2.5 pl-2.5 border-none rounded h-12"
              id="email"
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label className="">
            <span className="absolute border-0 overflow-hidden h-px w-px m-[-1px] p-0">
              What service do you need done?
            </span>
            <textarea
              minLength={20}
              required={true}
              id="message"
              name="message"
              cols={40}
              rows={10}
              className="w-full bg-[#053c50] text-xl mb-2.5 p-2.5 border-none rounded h-12 min-h-[250px]"
              placeholder="What service do you need done?"
              autoComplete="off"
              aria-label="Enter your comment"
            ></textarea>
          </label>
          <label className="">
            <span className="absolute border-0 overflow-hidden h-px w-px m-[-1px] p-0">Submit</span>
            <input
              id="submit"
              type="submit"
              value="Send It!"
              className="border border-solid border-white text-white py-2.5 px-4 w-full max-w-[50%] inline-block rounded text-xl hover:bg-white/[.15] transition-colors cursor-pointer"
            />
          </label>
        </Form>
      </div>
    </section>
  )
}

export default Contact