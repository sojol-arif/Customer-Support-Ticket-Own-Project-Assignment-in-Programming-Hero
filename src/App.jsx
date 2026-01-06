import { Suspense, useState } from 'react'
import './App.css'
import Tickets from './Component/Tickets/Tickets';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';


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
      <div>
        <Navbar></Navbar>
        <Suspense fallback={<p>Loading Some </p>}>
          <Tickets useFetchTicket={useFetchTicket} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolveTask={resolveTask} setResolveTask={setResolveTask}></Tickets>
        </Suspense>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
