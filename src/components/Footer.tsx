export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white">DigiHelic</h3>
          <p className="mt-2 text-sm">Next-gen IT consulting & digital transformation.</p>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>AI & ML</li>
            <li>Cloud & DevOps</li>
            <li>Enterprise Applications</li>
            <li>Data Engineering</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">Head Office: Pune, Maharashtra, India</p>
          <p className="text-sm">Email: contact@digihelic.com</p>
        </div>
      </div>

      <div className="bg-slate-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} DigiHelic Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
