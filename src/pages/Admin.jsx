import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; // global styles

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.get('https://dream-destination-website-1.onrender.com/api/contacts');
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete a contact by ID
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this entry?");
    if (!confirm) return;

    try {
await axios.delete(`https://dream-destination-website-1.onrender.com/api/contacts/${id}`);
      setContacts(prev => prev.filter(contact => contact._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
      alert("Something went wrong while deleting.");
    }
  };

  // Filter contacts by selected date range
  const filteredContacts = contacts.filter((contact) => {
  const created = new Date(contact.createdAt).getTime();

  if (startDate && endDate) {
    const start = new Date(startDate).getTime();
    const end = new Date(new Date(endDate).setHours(23, 59, 59, 999)).getTime();
    return created >= start && created <= end;
  }

  return true; // Show all if no filter is applied
});



  return (
    <div className="admin-dashboard" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2>📋 Contact Submissions</h2>

      {/* 📅 Date Filters */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            style={{ marginLeft: "8px" }}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            style={{ marginLeft: "8px" }}
          />
        </label>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredContacts.length === 0 ? (
        <p>No submissions found for selected dates.</p>
      ) : (
        <table
          className="admin-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "1rem",
            backgroundColor: "white"
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#0077cc", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Email</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Message</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Date</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(contact => (
              <tr key={contact._id}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.email}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.message}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {new Date(contact.createdAt).toLocaleString()}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      padding: "6px 12px",
                      cursor: "pointer",
                      borderRadius: "4px"
                    }}
                  >
                    Delete ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
