import Container from "./container";
import Card from "./card";

type Props = { data: { phone: string; hours: string; email: string; days: string } };

export default function Contact({ data }: Props) {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold text-ink-900 mb-8">Get in touch !</h2>
            <p className="text-ink-500 mb-8 max-w-2xl">
              Always available for freelancing if the right project comes along, Feel free to contact me.
            </p>
            <form className="grid sm:grid-cols-2 gap-6">
              <input className="p-4" placeholder="Your name" />
              <input className="p-4" placeholder="Your email" />
              <input className="p-4 sm:col-span-2" placeholder="your subject" />
              <input className="p-4" placeholder="+00 1234 5678 90" />
              <textarea className="p-4 sm:col-span-2 min-h-[160px]" placeholder="Enter your message..."></textarea>
              <button type="button" className="w-full sm:w-max px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600">Send message</button>
            </form>
          </div>
          <Card>
            <div className="p-8 space-y-8">
              <Block title={data.phone} subtitle={data.hours} icon="📞" />
              <Block title={data.email} subtitle={data.days} icon="✉️" />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Block({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-xl">{icon}</div>
      <div>
        <p className="font-semibold text-ink-900">{title}</p>
        <p className="text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
}
