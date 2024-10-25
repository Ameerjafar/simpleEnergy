import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const AddVehicle = ({ setAllVehicles }: { setAllVehicles: any }) => {
    const [vehicleId, setVehicleId] = useState<string>("");
    const [batteryPercentage, setBatteryPercentage] = useState<string>("");
    const [distanceTravelled, setDistanceTravelled] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation logic
        if (!vehicleId) {
            toast.error("Vehicle ID is required");
            return;
        }

        if (!batteryPercentage) {
            toast.error("Battery percentage is required");
            return;
        } else if (isNaN(Number(batteryPercentage)) || Number(batteryPercentage) < 0 || Number(batteryPercentage) > 100) {
            toast.error("Battery percentage must be a number between 0 and 100");
            return;
        }

        if (!distanceTravelled) {
            toast.error("Distance travelled is required");
            return;
        } else if (isNaN(Number(distanceTravelled)) || Number(distanceTravelled) < 0) {
            toast.error("Distance travelled must be a positive number");
            return;
        }

        if (!status) {
            toast.error("Status is required");
            return;
        }
        setAllVehicles((prev: any) => [
            ...prev,
            {
                vehicleId,
                batteryPercentage,
                distanceTravelled,
                status
            }
        ]);

        toast.success('Vehicle added successfully');
        navigate('/');
    };

    return (
        <div className="p-20">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Vehicle ID</label>
                    <input
                        type="number"
                        value={vehicleId}
                        onChange={(e) => setVehicleId(e.target.value)}
                        placeholder="Enter your vehicle ID"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Battery Percentage</label>
                    <input
                        type="number"
                        value={batteryPercentage}
                        onChange={(e) => setBatteryPercentage(e.target.value)}
                        placeholder="Enter battery percentage"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Total Distance Travelled</label>
                    <input
                        type="number"
                        value={distanceTravelled}
                        onChange={(e) => setDistanceTravelled(e.target.value)}
                        placeholder="Enter distance travelled"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Status</label>
                    <div className="flex space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="InTransit"
                                checked={status === "InTransit"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <span className="ml-2">In Transit</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="Charging"
                                checked={status === "Charging"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <span className="ml-2">Charging</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="Idle"
                                checked={status === "Idle"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <span className="ml-2">Idle</span>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="flex justify-center bg-blue-500 text-white rounded-md px-4 py-2 w-full mt-4"
                >
                    Submit
                </button>
            </form>
        </div>
    )
};

export default AddVehicle;
