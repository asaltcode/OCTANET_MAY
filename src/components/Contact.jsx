import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import emailJs from "@emailjs/browser"

const Contact = () => {
    let formik = useFormik({
        initialValues: {
          email: '',
          userName: '',
          subject: '',
          message: '',
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email('Invalid email')
            .matches(
              /^(.+)@(?!sparet\.com)(gmail\.com|outlook\.com|yahoo\.com|zoho\.com)$/,
              'Email must be from Gmail, Outlook, Yahoo Mail, or Zoho Mail'
            )
            .required('Email is Required'),
          userName: Yup.string().required('Name is required'),
          subject: Yup.string().required('Subject is required'),
          message: Yup.string().required('message is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            //send Email
            try {
                const template_params = transformValues(values);
                const response = await emailJs.send(service_id, template_id, template_params, public_key);
                toast.success("Email sent successfully")
                console.log("Email sent successfully", response);
                
            } catch (error) {
                toast.success("Error sending email")
                console.error("Error sending email", error);
            }
                     
          resetForm(); // Optionally, reset the form after submission
        },
      });
  return (
    <div className="box row-12" id="contact">           
    <div className="container ">           
        <div className="row justify-content-center">
            <div className="contactBox mb-5 mt-3 rounded-3 p-4 col-md-8">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-row row">
                        <div data-aos="fade-right" data-aos-duration="1000" className="form-group col-md-6 mt-4">
                            <label htmlFor="email">Email</label>
                            <input id='email' type="email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className="form-control" placeholder="Enter your email"/>
                            {formik.errors.email && formik.touched.email ? <div className="errorMes text-start">{formik.errors.email}</div>: null}
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" className="form-group col-md-6 mt-4">
                            <label htmlFor="userName">Name</label>
                            <input id='userName' type="text" name='userName' onChange={formik.handleChange} value={formik.values.userName} onBlur={formik.handleBlur} className="form-control" placeholder="Enter your name"/>
                            {formik.errors.userName && formik.touched.userName ? <div className="errorMes text-start">{formik.errors.userName}</div>: null}
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="form-group mt-4">
                        <label htmlFor="subject">Subject</label>
                        <input id='subject' type="text" name='subject' onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur} className="form-control" placeholder="text..."/>
                        {formik.errors.subject && formik.touched.subject ? <div className="errorMes text-start">{formik.errors.subject}</div>: null}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="form-group mt-4">
                        <label htmlFor="message">message</label>
                        {/* <input type="text" className="form-control" id="inputAddress" placeholder="text..."/> */}
                        <textarea id='message' className="form-control" name='message' onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur} rows="3"></textarea>
                        {formik.errors.message && formik.touched.message ? <div className="errorMes text-start">{formik.errors.message}</div>: null}
                    </div>
                    <div className='text-center mt-4'>
                        <button type="submit" className='btn btn-primary'>Send <i className='fa-regular fa-paper-plane'></i></button>
                    </div>
                </form>             
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact