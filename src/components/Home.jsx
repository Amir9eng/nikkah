import React, { useState } from 'react';
import Layout from './Layout';
import hero from '../assets/first.jpg';
import foot from '../assets/foot-logo.svg';
import secondly from '../assets/secondly.svg';
import second from '../assets/second.jpg';
import musa from '../assets/musa.svg';
import zayd from '../assets/zayd.svg';
import google from '../assets/google.svg';
import apple from '../assets/apple.svg';
import rayhan from '../assets/rayhan.svg';
import boy from '../assets/boy.svg';
import star from '../assets/star.svg';
import girl from '../assets/girl.svg';
import arrow from '../assets/arrow.svg';
import search from '../assets/search.svg';
import white from '../assets/white.svg';
import thirdly from '../assets/thirdly.jpg';
import { Link } from 'react-router-dom';
import CsLoader from './CsLoader/Csloader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout>
      <section className="w-full">
        <div
          className="lg:h-[45.5rem] bg-center bg-cover bg-no-repeat  flex flex-col items-center px-24"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="flex flex-col w-full items-end">
            <h2 className="lg:text-6xl text-3xl font-semibold text-center text-white lg:pt-48 pt-16 lg:leading-[5rem]">
              <p className="text-navbar-color">HALAL</p> MADE EASY
            </h2>
            <p className="text-white text-lg font-semibold mr-10 pt-3">
              Connect with your Halal partner
            </p>
            <div className="mt-5 flex gap-x-5 mr-5">
              <Link to="/">
                <button className="bg-navbar-color text-white py-3 px-4 rounded-full">
                  Make a profile
                </button>
              </Link>
              <Link to="/">
                <button className="border-2 border-navbar-color text-white py-2 px-4 rounded-full">
                  Start your search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-[60%] mx-auto py-8 items-center justify-center gap-x-5 shadow-2xl rounded-lg mt-[-.8rem] bg-white">
        <div className="flex flex-col gap-y-2">
          <img src={boy} alt="boy" className="w-12 h-12" />
          <h3 className="font-semibold">Latest Male Profiles</h3>
          <p className="text-sm">Find your male compatibilty partner</p>
          <div className="flex gap-x-2">
            <p className="text-navbar-color text-lg font-semibold">
              Explore profiles
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <img src={girl} alt="girl" className="w-12 h-12" />
          <h3 className="font-semibold">Latest Female Profiles</h3>
          <p className="text-sm">Find your female compatibilty partner</p>
          <div className="flex gap-x-2">
            <p className="text-navbar-color text-lg font-semibold">
              Explore profiles
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="border-2 border-navbar-color flex w-[14.6875rem]">
            <img src={search} alt="search" className="ml-1" />
            <input type="text" className="outline-none" />
          </div>
          <h3 className="font-semibold">Search for the best</h3>
          <p className="text-sm">Improve your search for potential spouse</p>
          <div className="flex gap-x-2">
            <p className="text-navbar-color text-lg font-semibold">Search</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <section className="flex w-full justify-center px-48  py-16 gap-x-9">
        <div className="w-[23.375rem]">
          <img src={thirdly} alt="" className="rounded-2xl" />
        </div>
        <div className="flex flex-col w-1/2 py-9">
          <h2 className="text-lg font-semibold pb-6">Embrace Divine Love</h2>
          <p className="py-3">
            Welcome to Bukhari Nikkah, a platform devoted to fostering genuine
            connections within the framework of Shariah principles. Our Muslim
            community embraces the essence of traditional values, providing a
            space where individuals can explore meaningful relationships rooted
            in faith and commitment.
          </p>
          <button className="bg-navbar-color py-3 px-3 rounded-full text-white flex gap-x-2 w-[8rem]">
            Sign Up
            <img src={white} alt="arrow" />
          </button>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${second})` }}
        className="lg:h-[30rem] bg-cover bg-no-repeat bg-center px-24"
      >
        <div className="flex flex-col items-end pt-24">
          <h2 className="text-white font-semibold text-4xl text-center">
            Create meaningful connection <br /> based on your preferences <br />{' '}
            with the one you love.
          </h2>
          <button className="bg-navbar-color py-2 px-2 mr-44 rounded-2xl text-white w-[8rem] mt-2">
            Find out more
          </button>
        </div>
      </section>
      <section className="bg-primary-color py-10">
        <h3 className="text-2xl font-semibold text-center">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="px-24">
          <p className="font-semibold text-xl pt-6 border-b-[1px] border-b-black/50 pb-8">
            1. What are the requirement for signing up?
          </p>
          <p className="font-semibold text-xl pt-6 border-b-[1px] border-b-black/50 pb-8">
            2. How Islamic is the Bukhari Nikkah process?
          </p>
          <p className="font-semibold text-xl pt-6 border-b-[1px] border-b-black/50 pb-8">
            3. Is Bukhari Nikah available in my country?
          </p>
          <p className="font-semibold text-xl pt-6 border-b-[1px] border-b-black/50 pb-8">
            4. How can I contact Bukhari Nikkah for assistance?
          </p>
          <p className="font-semibold text-xl pt-6 border-b-[1px] border-b-black/50 pb-8">
            5. I am experiencing issues with my account. What should I do?
          </p>
          <p className="font-semibold text-xl pt-6 border-b-[1px] border-b-black/50 pb-8">
            6. Is my Information safe with Bukhari Nikkah?
          </p>
        </div>
      </section>
      <section className="py-10">
        <h3 className="text-3xl font-semibold text-center">
          What our members say
        </h3>
        <div className="px-56">
          <div className="flex">
            <img src={musa} alt="musa" className=" mr-[-2rem] mb-4" />
            <div className="bg-primary-color -z-10 mt-28 px-8 py-5 rounded-lg">
              <div className="flex items-center gap-x-2">
                <h3 className="py-2">Fantastic Platform!</h3>
                <span className="flex gap-x-1">
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                </span>
              </div>
              <p className="">
                Bukhari Nikkah website exceeded my expectations! The matches
                were spot-on, and the interface is so easy to use. Within days,
                I found someone truly special. Highly recommend!"
              </p>
              <p className="py-2">Musa, Qatar</p>
            </div>
          </div>
          <div className="flex mt-10">
            <img src={zayd} alt="musa" className=" mr-[-2rem] mb-4" />
            <div className="bg-primary-color -z-10 mt-28 px-8 py-5 rounded-lg">
              <div className="flex items-center gap-x-2">
                <h3 className="py-2">"Amazing Experience!</h3>
                <span className="flex gap-x-1">
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                </span>
              </div>
              <p className="">
                I've tried a few matchmaking sites, but this one stands out. The
                matches were great, and I felt safe interacting with others. Met
                someone incredible, couldn't be happier!"
              </p>
              <p className="py-2">Zayd, London</p>
            </div>
          </div>
          <div className="flex mt-10">
            <img src={rayhan} alt="musa" className=" mr-[-2rem] mb-4" />
            <div className="bg-primary-color -z-10 mt-28 px-8 py-5 rounded-lg">
              <div className="flex items-center gap-x-2">
                <h3 className="py-2">"Best Decision Ever!</h3>
                <span className="flex gap-x-1">
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                  <img src={star} alt="star" className="w-6 h-6" />
                </span>
              </div>
              <p className="">
                Joined this site on a whim, and it turned out to be the best
                decision! The matches were tailored to my preferences, and the
                conversations flowed naturally. Found my perfect match. Thank
                you!"
              </p>
              <p className="py-2">Rayhan, Canada</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex py-8">
        <div
          style={{ backgroundImage: `url(${second})` }}
          className="lg:h-[30rem] w-[30%] bg-contain rounded-r-lg bg-no-repeat px-10"
        >
          <div className="flex flex-col">
            <img
              src={foot}
              alt=""
              className="w-[11.8125rem] h-[4.625rem] mt-3"
            />
            <p className="text-white pt-20">
              An indispensable app fostering <br /> global connections for
              Muslim individuals seeking marriage.
            </p>
            <div className="flex text-white pt-52">
              <p>Already have an account ? </p>
              <button className="text-navbar-color">Login</button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-center">Sign up Free</h3>
          <form className="flex flex-col justify-center px-5">
            <div className="flex flex-col pt-3">
              <label className="text-sm">Email</label>
              <div className="w-full flex lg:w-[33rem] h-[3.5rem] px-3 bg-white mt-3 placeholder:text-black/50 border-navbar-color border-[1px] rounded-md">
                <input
                  type="email"
                  name="email"
                  className="flex-1 outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <label className="text-sm">Password</label>

              <div className="w-full flex lg:w-[33rem] h-[3.5rem] px-3 bg-white mt-3 border-navbar-color border-[1px] placeholder:text-black/50 rounded-md">
                <input
                  placeholder="Enter your password"
                  className="flex-1 outline-none"
                />
                <button
                  type="button"
                  className="items-center text-sm "
                ></button>
              </div>
            </div>
            <button
              className="py-3 mt-6 w-full lg:w-[33rem] rounded-md  hover:text-white hover:bg-black text-white bg-navbar-color flex justify-center items-center gap-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <CsLoader /> : <>Sign Up</>}
            </button>
            <div className="flex items-center justify-start gap-x-2 pt-2">
              <input type="checkbox" name="" id="" />
              <p className="text-sm">Show password</p>
            </div>

            <button className="border-[1px] border-navbar-color py-2 mt-5 hover:text-white hover:bg-navbar-color rounded-md flex justify-center items-center gap-2 hover:gap-4">
              <img src={google} alt="google" />
              Google Sign Up with Google
            </button>

            <button className="border-[1px] border-navbar-color py-2 mt-5 hover:text-white hover:bg-navbar-color rounded-md  flex justify-center items-center gap-2 hover:gap-4">
              <img src={apple} alt="google" />
              Google Sign Up with Apple
            </button>
          </form>
        </div>
      </section>
      <section className="w-[65%] shadow-2xl p-12 rounded-md mx-auto my-10">
        <div className="flex items-center justify-center gap-x-10">
          <h2 className="text-3xl">Connect with your Halal partner</h2>
          <button className="bg-navbar-color py-2 px-2 mr-44 rounded-2xl text-white w-[7rem] flex gap-x-2 mt-2">
            Sign Up
            <img src={white} alt="white-arrow" />
          </button>
        </div>
        <p className="block text-center pt-4 font-semibold">
          To contact us:{' '}
          <span className="text-navbar-color">
            email Bukharinikkah1@gmail.com
          </span>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
