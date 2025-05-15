// components/ContactUs.js
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ContactUs = () => {
  return (

    <div className="max-w-3xl mx-auto p-6 text-center">
        
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      {/* Set up a responsive two-column layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Phone Numbers and Email */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
            <ul className="space-y-2">
              <li>+91 8867818644</li>
              <li>+91 74111 50878</li>
              <li>+91 96065 48236</li>
              <li>+91 86964 14943</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 h-52 flex justify-center items-center">
            <div>
            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <p>pes2202101029@pesu.pes.edu</p>
            <p>pes2202101356@pesu.pes.edu</p>
            <p>pes2202101284@pesu.pes.edu</p>
            <p>pes2202100841@pesu.pes.edu</p>
            </div>
          </div>
        </div>

        {/* Right Column - Location and Map */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <p>PES University E C Campus, Bengaluru, India</p>
          <div className="mt-4 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31110.54836902059!2d77.65137604502227!3d12.841757353393557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae142b2e27f72f%3A0x5581caa29d1d9c98!2sPES%20University%20Electronic%20City%20Campus!5e0!3m2!1sen!2sin!4v1695817824370!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
