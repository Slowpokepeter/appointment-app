import Search from "./components/Search"
import { BiCalendar } from "react-icons/bi";
import AddAppointment from "./components/AddAppointment"
import appoitmentList from "./data.json"
import AppointmentInfo from "./components/AppoitmentInfo";

function App() {
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
          />
        ))
        }

      </ul>
    </div> 
  );
}

export default App;
