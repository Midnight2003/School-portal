import { useState } from 'react'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

function Documents({ documentHistory }) {
  const [docType, setDocType] = useState('COG')
  const [purpose, setPurpose] = useState('')
  const [delivery, setDelivery] = useState('Pickup')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submission
    setSubmitted(true)
    // Reset form
    setDocType('COG')
    setPurpose('')
    setDelivery('Pickup')
    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Document request</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Request a new document</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Request hard copies of certificates including COG. Grades are also available online.</p>
            </div>
            <div className="rounded-3xl bg-brand/10 px-4 py-3 text-sm font-bold text-brand dark:bg-brandLight/10 dark:text-brandLight">
              Demo form
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Document Type" id="document-type">
                <select
                  id="document-type"
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                >
                  <option>COG</option>
                  <option>COR</option>
                  <option>Good Moral</option>
                </select>
              </Input>

              <Input label="Delivery Method" id="delivery-method">
                <select
                  id="delivery-method"
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                >
                  <option>Pickup</option>
                  <option>Digital</option>
                </select>
              </Input>
            </div>

            <div>
              <Input label="Purpose" id="purpose">
                <textarea
                  id="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  rows="4"
                  placeholder="Reason for request"
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </Input>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Submit Request</Button>
            </div>
          </form>

          {submitted && (
            <div className="mt-6 rounded-3xl bg-emerald-50 p-4 text-emerald-700 dark:bg-emerald-200/20 dark:text-emerald-200">
              <p className="text-sm font-semibold">Request submitted successfully!</p>
              <p className="text-xs">Your document request has been received and is being processed.</p>
            </div>
          )}
        </div>

        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Request history</p>
          <div className="mt-6 overflow-hidden rounded-3xl border-2 border-brand/20 dark:border-brandLight/20">
            <table className="min-w-full divide-y divide-brand/20 dark:divide-brandLight/20">
              <thead className="bg-brand/5 text-left text-xs font-bold uppercase tracking-[0.24em] text-brand dark:bg-brandLight/5 dark:text-brandLight">
                <tr>
                  <th className="px-4 py-4">Document Type</th>
                  <th className="px-4 py-4">Date Requested</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-950">
                {documentHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/60">
                    <td className="px-4 py-4 text-sm text-slate-700 dark:text-slate-200">{item.type}</td>
                    <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">{item.date}</td>
                    <td className="px-4 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents
