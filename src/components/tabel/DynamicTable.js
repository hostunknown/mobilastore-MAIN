import React, { useEffect, useState } from 'react';
import tableDataa from "./Data.json"

const DynamicTable = () => {
  const [setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./Data.json');
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [setTableData]);

  return (
    <div className='tabelclass'>
      <h1>Tabel</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableDataa.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.surname}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
