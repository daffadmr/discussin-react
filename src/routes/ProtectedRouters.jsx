import { Navigate, Outlet } from "react-router-dom";
import auth from "../utils/auth";

export default function ProtectedRouters() {
	if (auth.isAuthorization()) {
		return <Navigate to="/dashboard" replace />;
	}

	return  (
		<>
			<Outlet />
		</>
	);
}