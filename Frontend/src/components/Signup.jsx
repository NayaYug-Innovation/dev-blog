import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Signup = () => {
  const { values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
      name: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      cpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      Swal.fire({
        title: "User Created Successfully",
        icon: "success",
        
      });
    },

  })

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-24 mb-20 px-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-black text-3xl font-semibold mb-2">
            Create an account
          </h1>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              id="cpassword"
              name="cpassword"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.cpassword && errors.cpassword && (
              <p className="text-red-500 text-sm">{errors.cpassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white mt-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>

          <div className="mt-4">
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:shadow-md transition"

            >
              <FcGoogle className="mr-2 text-lg" />
              Sign up with Google
            </button>
          </div>

          <div className="flex justify-center mt-6 text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-blue-600 underline underline-offset-4"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
