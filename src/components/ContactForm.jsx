import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import useContact from "../hooks/useContact";


const validationSchema = Yup.object({

  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  company: Yup.string(),

  message: Yup.string()
    .min(20, "Minimum 20 characters")
    .required("Message is required"),

});


export default function ContactForm() {


  const {
    sendMessage,
    loading,
  } = useContact();



  return (

    <Formik

      initialValues={{

        name: "",
        email: "",
        company: "",
        message: "",

      }}


      validationSchema={validationSchema}


      onSubmit={async(values, { resetForm })=>{
        const wasSent = await sendMessage(values);

        if (wasSent) {
          resetForm();
        }
      }}


    >


      {({isSubmitting})=>(


      <Form className="space-y-6">


        {/* Name */}

        <div>

          <Field

            name="name"

            placeholder="Your Name"

            className="
            w-full rounded-lg 
            border p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            "

          />


          <ErrorMessage

            name="name"

            component="div"

            className="
            mt-1 
            text-sm 
            text-red-500
            "

          />


        </div>



        {/* Email */}


        <div>


          <Field

            name="email"

            type="email"

            placeholder="Email Address"

            className="
            w-full rounded-lg 
            border p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            "

          />


          <ErrorMessage

            name="email"

            component="div"

            className="
            mt-1 
            text-sm 
            text-red-500
            "

          />


        </div>




        {/* Company */}


        <div>


          <Field

            name="company"

            placeholder="Company (Optional)"

            className="
            w-full rounded-lg 
            border p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            "

          />


        </div>




        {/* Message */}


        <div>


          <Field

            as="textarea"

            rows="6"

            name="message"

            placeholder="Your Message"

            className="
            w-full rounded-lg 
            border p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            "

          />



          <ErrorMessage

            name="message"

            component="div"

            className="
            mt-1 
            text-sm 
            text-red-500
            "

          />


        </div>




        <button

          type="submit"

          disabled={loading || isSubmitting}


          className="
          rounded-lg 
          bg-blue-600 
          px-8 
          py-3 
          text-white
          transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-50
          "

        >

          {

          loading

          ? "Sending..."

          : "Send Message"

          }


        </button>



      </Form>


      )}


    </Formik>

  );

}