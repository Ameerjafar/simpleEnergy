import AllVehicles from "./AllVechicles";
import { useNavigate } from "react-router-dom";

const Dashboard = ( { allVehicles, setAllVehicles }: { allVehicles: any, setAllVehicles: any}) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col items-start p-6 space-y-4">
                <div className="flex space-x-4">
                    <button 
                        className="w-24 h-10 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
                        onClick={() => navigate('/add-vechicle')}
                    >
                        Add
                    </button>
                </div>
            </div>
            <AllVehicles allVehicles = { allVehicles } setAllVehicles={ setAllVehicles }/>
        </div>
    );
};

export default Dashboard;
