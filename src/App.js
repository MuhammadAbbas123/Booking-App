import React from 'react';
import {
  // createBrowserRouter,
  // RouterProvider,
  // BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// Components Imports
import Home from './Home';
import Profile from './Profile';
import DemoRequest from './DemoRequest';
import DemoRequestConfirmation from './DemoRequestConfirmation';
import DemoRequestEdit from './DemoRequestEdit';
import Layout from './components/Layout';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/profile/:id',
//     element: <Profile />,
//   },
//   {
//     path: '/demo-request',
//     element: <DemoRequest />,
//   },
//   {
//     path: '/demo-request-confirmation',
//     element: <DemoRequestConfirmation />,
//   },
//   {
//     path: '/demo-request-edit',
//     element: <DemoRequestEdit />,
//   },
// ]);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/profile/:id',
//         element: <Profile />,
//       },
//       {
//         path: '/demo-request',
//         element: <DemoRequest />,
//       },
//       {
//         path: '/demo-request-confirmation',
//         element: <DemoRequestConfirmation />,
//       },
//       {
//         path: '/demo-request-edit',
//         element: <DemoRequestEdit />,
//       },
//     ],
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Home />} />

//       {/* <Route element={<AuthLayout />}>
//         <Route path="login" element={<Login />} loader={redirectIfUser} />
//         <Route path="logout" action={logoutUser} />
//       </Route> */}
//     </Route>
//   )
// );

/* <Layout>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />

    <Route path="/demo-request" element={<DemoRequest />} />
  </Routes>
</BrowserRouter>
</Layout> */

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />

        <Route path="/demo-request" element={<DemoRequest />} />
        <Route
          path="/demo-request-confirmation"
          element={<DemoRequestConfirmation />}
        />
        <Route path="/demo-request-edit" element={<DemoRequestEdit />} />
      </Routes>
    </Layout>
  );
};

export default App;
