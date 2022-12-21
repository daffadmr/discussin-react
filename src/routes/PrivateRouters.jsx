import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import auth from "../utils/auth";

export default function PrivateRouters() {
	if (!auth.isAuthorization()) {
		return <Navigate to="/login" replace />;
	}
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}