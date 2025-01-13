import { Sidebar, GraduationCap, Settings, LogOutIcon, Info } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice"; 
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Sider() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            Swal.fire({
                title: "Logged Out",
                text: "You have been logged out successfully.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error || "Logout failed.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <aside className="w-64 bg-green-800 text-white min-h-screen shadow-lg">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-wider text-center">
                        BencanaNews
                    </h1>
                    <div className="mt-2 h-1 w-16 bg-[#8B4513] mx-auto rounded-full" />
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-green-700 hover:pl-6 group"
                            >
                                <Sidebar className="w-5 h-5 text-green-400 group-hover:text-white" />
                                <span className="font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-green-700 hover:pl-6 group"
                            >
                                <Info className="w-5 h-5 text-green-400 group-hover:text-white" />
                                <span className="font-medium">Info Lanjut</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-green-700 hover:pl-6 group"
                            >
                                <Settings className="w-5 h-5 text-green-400 group-hover:text-white" />
                                <span className="font-medium">Setting</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Logout Button */}
                <div className="mt-6">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md w-full transform hover:scale-105" // Tambahkan efek hover
                    >
                        <LogOutIcon size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sider;
