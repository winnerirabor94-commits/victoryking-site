import React from 'react';
import { Clock } from 'lucide-react';

const timetableData = [
  { id: 1, date: 'Monday, April 20, 2026', time: '09:00 AM - 12:00 PM', course: 'MTH 101 - General Mathematics I', venue: 'Lecture Theater 1' },
  { id: 2, date: 'Tuesday, April 21, 2026', time: '02:00 PM - 05:00 PM', course: 'PHY 101 - General Physics I', venue: 'Science Faculty Hall' },
  { id: 3, date: 'Wednesday, April 22, 2026', time: '09:00 AM - 11:00 AM', course: 'GST 111 - Communication in English', venue: 'ETF Building' },
];

const Timetable = () => {
  return (
    <div>
      <div className="page-header">
        <h1><Clock style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Exams Timetable</h1>
        <p>First Semester Examination Schedule 2025/2026 Session.</p>
      </div>

      <div className="card">
        <table className="timetable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Course</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map(item => (
              <tr key={item.id}>
                <td><strong>{item.date}</strong></td>
                <td>{item.time}</td>
                <td>{item.course}</td>
                <td>{item.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
