interface VehicleObject {
    vehicleId: string;
    batteryPercentage: string;
    distanceTravelled: string;
    status: string;
}

const AllVehicles = ({ allVehicles, setAllVehicles }: { allVehicles: VehicleObject[], setAllVehicles: any }) => {
    console.log(allVehicles);
    const deleteHandler = (key: string) => {
        const updatedVehicles= allVehicles.filter(vehicle => vehicle.vehicleId !== key);
        setAllVehicles(updatedVehicles);
    };

    return (
        <div className="flex flex-col gap-4 p-5 bg-gray-200 min-h-screen">
            {allVehicles.map((vehicle: VehicleObject, key: number) => (
                <div 
                    key={vehicle.vehicleId} 
                    className="flex justify-between items-center w-full bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:shadow-xl"
                >
                    <div className="flex-1">
                        <span className="text-gray-800 font-semibold">
                            Vehicle ID: <span className="text-blue-600">{vehicle.vehicleId}</span>
                        </span>
                        <span className="text-gray-600 ml-4">
                            Battery: <span className="text-green-600">{vehicle.batteryPercentage}%</span>
                        </span>
                        <span className="text-gray-600 ml-4">
                            Distance: <span className="text-gray-800">{vehicle.distanceTravelled} km</span>
                        </span>
                        <span className={`text-gray-600 font-semibold ml-4 ${vehicle.status === 'Charging' ? 'text-yellow-500' : vehicle.status === 'InTransit' ? 'text-blue-500' : 'text-gray-800'}`}>
                            Status: {vehicle.status}
                        </span>
                    </div>
                    <div className="flex-shrink-0 flex space-x-2">
                        <button 
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
                        >
                            Update
                        </button>
                        <button 
                            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
                            onClick = { () => deleteHandler(key.toString()) }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllVehicles;
