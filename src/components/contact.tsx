import React from "react";
import { Clock, Mail, Phone } from "lucide-react";
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

            <form className="mt-8 grid sm:grid-cols-2 gap-6">
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />

              <Input className="sm:col-span-2" placeholder="Subject" />

              <Input placeholder="Phone (optional)" />

              <Textarea className="sm:col-span-2" placeholder="Enter your message..." />

              <button
                type="button"
                className="w-full sm:w-max px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition shadow-sm"
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
        <p className="font-semibold text-ink-900">{title}</p>
        <p className="text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default Contact;
