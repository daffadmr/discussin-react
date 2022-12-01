import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

export default function ProtectedRouters() {
	if (Auth.isAuthorization()) {
		return <Navigate to="/dashboard" replace />;
	}

	return  (
		<>
			<Outlet />
		</>
	);
}