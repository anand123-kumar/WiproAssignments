import React from 'react';

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #ccc'
  },
  th: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold'
  },
  td: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
    verticalAlign: 'top'
  },
  deityList: {
    margin: 0,
    paddingLeft: '20px'
  }
};

function TempleList() {
  const temples = [
    {
      id: 1,
      name: 'Meenakshi Amman Temple',
      location: 'Madurai, Tamil Nadu',
      deities: ['Meenakshi', 'Sundareswarar']
    },
    {
      id: 2,
      name: 'Sri Venkateswara Temple',
      location: 'Tirupati, Andhra Pradesh',
      deities: ['Venkateswara', 'Lakshmi']
    },
    {
      id: 3,
      name: 'Jagannath Temple',
      location: 'Puri, Odisha',
      deities: ['Jagannath', 'Balabhadra', 'Subhadra']
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏛️ Famous Temples in India</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Temple Name</th>
            <th style={styles.th}>Location</th>
            <th style={styles.th}>Deities</th>
          </tr>
        </thead>
        <tbody>
          {temples.map((temple) => (
            <tr key={temple.id}>
              <td style={styles.td}>{temple.id}</td>
              <td style={styles.td}>{temple.name}</td>
              <td style={styles.td}>{temple.location}</td>
              <td style={styles.td}>
                <ul style={styles.deityList}>
                  {temple.deities.map((deity, index) => (
                    <li key={index}>{deity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TempleList;