import { createBrowserRouter} from "react-router-dom";
import App from "../../App";
import User from "../user/User";
import Form from './../form/Form';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path:'/form',
        element: <Form />
      }
    ],
  },
]);

export default router;
