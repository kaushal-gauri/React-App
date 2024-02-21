import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Home() {
  const [parsedData, setParsedData] = useState([]);

  // Fetching data from local storage
  useEffect(() => {
    const fetchData = () => {
      const data = localStorage.getItem("sampleData");
      const parsedData = JSON.parse(data) ?? [];
      setParsedData(parsedData);
    };

    fetchData();

    // Subscribe to changes in local storage
    window.addEventListener('storage', fetchData);

    // Cleanup subscription on component unmount
    return () => {
      window.removeEventListener('storage', fetchData);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      <div className='home-main'>
        <header>
          <h1>React Js Winter PEP Project</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/formAction'>FormAction</Link>
          </nav>

          <div className='home-content'>
            <h2>The data saved in the Form action  Conponent will be displayed here</h2>
            {parsedData.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {parsedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.address}</td>
                      <td>{data.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <h3> NO DATA TO VIEW</h3>

                <Link to='/formAction'><button>Open FormAction</button></Link>
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
