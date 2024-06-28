import Search from "./components/Search"
import { BiCalendar } from "react-icons/bi";
import { useState,useEffect,useCallback } from "react";
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppoitmentInfo";

function App() {

  let [appoitmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appoitments
      </h1>
      <AddAppointment/>
      <Search />

      <ul className="divide-y divide-gray-200">
        {appoitmentList
          .map(appoitment => (
          <AppointmentInfo key={appoitment.id}
            appoitment={appoitment}
            onDeleteAppointment={
              appoitmentId => 
                setAppointmentList(appoitmentList.filter(appoitment => appoitment.id !== appoitmentId))
            }
          />
        ))
        }

      </ul>
    </div> 
  );
}

export default App;
