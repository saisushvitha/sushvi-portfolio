import React from "react";
import { Clock, Mail } from "lucide-react";
import Container from "./ui/container";
import Card from "./ui/card";
import SectionHeader from "./ui/section-header";
import Input from "./ui/input";
import Textarea from "./ui/textarea";

type ContactData = {
  phone: string;
  hours: string;
  email: string;
  days: string;
};

type Props = {
  data: ContactData;
};

const Contact = ({ data }: Props) => {
  return (
    <section id="contact" className="bg-white py-8">
      <Container>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: form */}
          <div className="lg:col-span-2">
            <SectionHeader
              title="Get in touch"
              subtitle="Always open to meaningful projects and collaborations. Feel free to reach out."
              align="left"
            />

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-8 grid sm:grid-cols-2 gap-6"
            >
              {/* required hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <Input name="name" placeholder="Your name" />
              <Input name="email" placeholder="Your email" />

              <Input
                name="subject"
                className="sm:col-span-2"
                placeholder="Subject"
              />

              <Input name="phone" placeholder="Phone (optional)" />

              <Textarea
                name="message"
                className="sm:col-span-2"
                placeholder="Enter your message..."
              />

              <button
                type="submit"
                className="w-full sm:w-max px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition shadow-sm"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: contact info */}
          <Card className="h-fit lg:mt-24">
            <div className="p-8 space-y-6">
              <InfoBlock
                title={data.email}
                subtitle={data.days}
                icon={<Mail size={20} />}
              />
              <InfoBlock
                title={data.hours}
                subtitle="Hours"
                icon={<Clock size={20} />}
              />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

type BlockProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const InfoBlock = ({ title, subtitle, icon }: BlockProps) => {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-slate-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-ink-900 break-all">{title}</p>
        <p className="text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default Contact;
