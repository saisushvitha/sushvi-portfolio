export default function Footer({ data, brand }: { data: { about: string; links1: string[]; links2: string[]; links3: string[] }, brand: string }) {
    return (
      <footer className="bg-ink-900 text-white">
        <div className="container-section grid md:grid-cols-4 gap-12 py-16">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl">
              <span className="inline-flex h-6 w-6 rounded-md bg-brand-500"></span>
              <span>{brand}</span>
            </div>
            <p className="mt-6 text-white/70">{data.about}</p>
            <div className="mt-6 flex gap-4 text-xl text-white/70">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          <Column title="Company" items={data.links1}/>
          <Column title="Information" items={data.links2}/>
          <Column title="More info" items={data.links3}/>
        </div>
        <div className="bg-[#0f1c31]">
          <div className="container-section py-6 text-white/70 text-sm flex items-center justify-between">
            <span>© 2025 SaiSushvita. Created with ♥ by Mannatthemes</span>
            <a className="text-brand-400 hover:text-brand-300" href="#">– Terms & condition*</a>
          </div>
        </div>
      </footer>
    );
  }
  
  function Column({ title, items }: { title: string; items: string[] }) {
    return (
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <ul className="space-y-3 text-white/70">
          {items.map(i => (<li key={i}><a className="hover:text-white" href="#">{i}</a></li>))}
        </ul>
      </div>
    );
  }
  