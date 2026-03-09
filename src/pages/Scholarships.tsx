import React, { useState } from 'react';
import { Award, Landmark, X } from 'lucide-react';

const scholarships = [
  { id: 1, title: 'Delta State Bursary 2026', provider: 'Delta State Government', amount: '₦50,000', deadline: 'May 30, 2026' },
  { id: 2, title: 'Federal Government Scholarship', provider: 'Federal Ministry of Education', amount: '₦250,000/yr', deadline: 'June 15, 2026' },
];

const loans = [
  { id: 1, title: 'Student Education Loan Fund (SELF)', provider: 'Central Bank of Nigeria', interest: '0%', terms: 'Payable after NYSC' },
];

const Scholarships = () => {
  const [selectedItem, setSelectedItem] = useState<{ title: string, type: 'Loan' | 'Scholarship' } | null>(null);

  const handleApply = (title: string, type: 'Loan' | 'Scholarship') => {
    setSelectedItem({ title, type });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="page-header">
        <h1><Award style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Scholarships & Government Loans</h1>
        <p>Financial aids available for UNIDEL students.</p>
      </div>

      <div className="grid">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h2 className="card-title"><Award /> Active Scholarships</h2>
          <div className="timetable" style={{ marginTop: '1rem' }}>
            <table className="timetable">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Provider</th>
                  <th>Amount</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map(s => (
                  <tr key={s.id}>
                    <td><strong>{s.title}</strong></td>
                    <td>{s.provider}</td>
                    <td>{s.amount}</td>
                    <td>{s.deadline}</td>
                    <td><button onClick={() => handleApply(s.title, 'Scholarship')} className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Apply</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h2 className="card-title"><Landmark /> Government Loans</h2>
          <div className="timetable" style={{ marginTop: '1rem' }}>
            <table className="timetable">
              <thead>
                <tr>
                  <th>Loan Program</th>
                  <th>Provider</th>
                  <th>Interest Rate</th>
                  <th>Terms</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loans.map(l => (
                  <tr key={l.id}>
                    <td><strong>{l.title}</strong></td>
                    <td>{l.provider}</td>
                    <td>{l.interest}</td>
                    <td>{l.terms}</td>
                    <td><button onClick={() => handleApply(l.title, 'Loan')} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Apply</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedItem && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="card" style={{ width: '400px', maxWidth: '90%', position: 'relative' }}>
            <button onClick={closeModal} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              <X />
            </button>
            <h2 style={{ marginBottom: '1rem' }}>Apply for {selectedItem.type}</h2>
            <p style={{ marginBottom: '1rem' }}>You are applying for: <strong>{selectedItem.title}</strong></p>
            <form onSubmit={(e) => { e.preventDefault(); alert(`Application submitted for ${selectedItem.title}`); closeModal(); }}>
              <div className="input-group">
                <label>Matric Number</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Department</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Level</label>
                <input type="text" required />
              </div>
              <button type="submit" className="btn" style={{ width: '100%' }}>Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scholarships;
