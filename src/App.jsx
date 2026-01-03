import { Suspense, useState } from 'react'
import './App.css'
import Tickets from './Component/Tickets/Tickets';
import { ToastContainer, toast } from 'react-toastify';


const fetchTicket = async () => {
  const res = await fetch('/ticket.json')
  return res.json();
};

const useFetchTicket = fetchTicket();

function App() {
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolveTask, setResolveTask] = useState([]);

  return (
    <div className='font-[Inter] text-[16px] text-[#627382] bg-[#F5F5F5]'>
      <Suspense fallback={<p>Loading Some </p>}>
        <Tickets useFetchTicket={useFetchTicket} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolveTask={resolveTask} setResolveTask={setResolveTask}></Tickets>
      </Suspense>
       <ToastContainer />
    </div>
  )
}

export default App
