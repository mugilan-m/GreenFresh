"use client";
import { Input } from "@heroui/react";
import Form from "next/form";
import React from "react";
import { ContactFormData } from "../action";
import Payment from "./Payment";
function ContactInfo() {
  return (
    <div className="m-5">

      <Form action={ContactFormData}>
      <h1 className="text-xl font-bold ml-[50px]">Contact</h1>

        <div className="container mx-auto flex gap-5  w-[90%] m-5">
          
          <div className="w-[400px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="email"
              id="text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div className="w-[400px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="email"
              id="text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
        </div>
        <div className="container mx-auto flex gap-5  w-[90%]">
          <div className="w-[400px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div className="w-[400px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Mobile Number*
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-bold ml-[50px] mb-5">Delivery </h1>
          <div className="container mx-auto flex gap-5  w-[90%]">
            <div className="w-[400px]">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Address*
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Apartment, suite, etc. (optional)
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
          </div>
          <div className="container mx-auto flex gap-5  w-[90%]">
            <div className="w-[280px]">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-[200px]">
              <label
                htmlFor="email"
                className="block mt-2 mb-1 text-sm font-bold text-gray-900 dark:text-white"
              >
                State
              </label>
              <select
                id="states"
                name="states"
                className="w-49 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select>
            </div>
            <div className="w-[300px]">
              <label
                htmlFor="email"
                className="block mt-2 mb-1 text-sm font-bold text-gray-900 dark:text-white"
              >
                Zip Code
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold ml-[50px] mb-5 mt-5">
              Shipping method
            </h1>
            <div className="ml-12 flex justify-between m-2 w-[75%] bg-green-100 p-4 rounded-xl border-green-500 border-2 font-bold">
              <h1>Standard</h1>
              <h1>FREE</h1>
            </div>
          </div>
        </div>
      </Form>

      <div className="mt-10">
      <Payment/>
      </div>
    </div>
  );
}

export default ContactInfo;
