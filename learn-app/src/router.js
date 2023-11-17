import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from 'react-router-dom';
import RegistrationFormStudent from './components/register/registrationform-student';
import Login from './components/register/login';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/general/home';
import MyAccount from './components/student/my-account';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';
import Blog from './components/general/blog';
import Pricing from './components/general/pricing';
import About from './components/general/aboutus';
import Features from './components/general/features';
import Joinus from './components/general/joinus';
import RegistrationFormTrainer from './components/register/registrationform-trainer';
import AddTrainer from './components/student/add-trainers';
import EditProfile from './components/student/edit-profile';
import ChangePassword from './components/student/change-password';
import AddTrainings from './components/student/add-trainings';
import AddPassedTraining from './components/student/add-passed-training';
import StudentLoginHome from './components/student/student-login-home';
import TrainerMyAccount from './components/trainer/trainer-my-account';
import TrainerEditProfile from './components/trainer/trainer-edit-prfile';
import TrainerChangePassword from './components/trainer/trainer-change-password';
import TrainerAddTrainings from './components/trainer/trainer-add-trainings';

function Routes() {
	const { currentUser } = useContext(AuthContext);

	const LayoutLogged = () => {
		return (
			<div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		);
	};

	const LayoutLoggedTrainer = () => {
		return (
			<div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		);
	};

	const LayoutUnlogged = () => {
		return (
			<div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		);
	};

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to='/login' />;
		}
		return children;
	};
	const router = createBrowserRouter([
		{
			path: '/my-account',
			element: (
				<ProtectedRoute>
					<LayoutLogged />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/my-account/login-home',
					element: <StudentLoginHome />,
				},
				{
					path: `/my-account/student-profile`,
					element: <MyAccount />,
				},
				{
					path: '/my-account/add-trainer',
					element: <AddTrainer />,
				},
				{
					path: '/my-account/edit-profile/:id',
					element: <EditProfile />,
				},
				{
					path: '/my-account/change-password',
					element: <ChangePassword />,
				},
				{
					path: '/my-account/add-trainings',
					element: <AddTrainings />,
				},
				{
					path: '/my-account/add-passed-training',
					element: <AddPassedTraining />,
				},
			],
		},
		{
			path: '/my-account-trainer',
			element: (
				<ProtectedRoute>
					<LayoutLoggedTrainer />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/my-account-trainer/trainer-profile',
					element: <TrainerMyAccount />,
				},
				{
					path: '/my-account-trainer/edit-profile/:id',
					element: <TrainerEditProfile />,
				},
				{
					path: '/my-account-trainer/change-password',
					element: <TrainerChangePassword />,
				},
				{
					path: '/my-account-trainer/add-trainings',
					element: <TrainerAddTrainings />,
				},
			],
		},
		{
			path: '/',
			element: <LayoutUnlogged />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/login',
					element: <Login />,
				},
				{
					path: '/registration-student',
					element: <RegistrationFormStudent />,
				},
				{
					path: '/blog',
					element: <Blog />,
				},
				{
					path: '/pricing',
					element: <Pricing />,
				},
				{
					path: '/aboutus',
					element: <About />,
				},
				{
					path: '/features',
					element: <Features />,
				},
				{
					path: '/joinus',
					element: <Joinus />,
				},
				{
					path: '/registration-trainer',
					element: <RegistrationFormTrainer />,
				},
			],
		},
		{
			path: '*',
			element: 'Sorry this page does not exist, go back to home',
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default Routes;
