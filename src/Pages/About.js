import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="bg-theme-light bg-[url('/src/assests/how-to-hire-the-right-person_nyt-jumbo-v2.gif')] bg-blend-overlay bg-no-repeat bg-cover ">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="lg:w-10/12 w-full">
            <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-black-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
              We are here to help companies find the most desirable candidate
              for their organizations
            </h2>
            <p className="font-normal text-base leading-6 text-black-600 mt-6">
              Founders of this company are Harmanpreet Singh, Anupam Sagar,
              Parameswar Das, Ketan Mishra.
            </p>
            <p>
              In our last year of Engineering we realized that selecting
              desirable applicants for an organization is one of the major
              challenges in human resource management. Through e-recruitment,
              candidates can now be represented on the web under a wider range
              of possibilities.This manual screening process may hinder the
              team's efforts to find the right candidate at the right time.The
              difficult screening process may be significantly streamlined by
              using an automated system for screening and ranking applicants.
            </p>
          </div>

          <div className="lg:mt-14 sm:mt-10 mt-12">
            <img
              className="lg:block hidden w-full"
              src="https://i.ibb.co/GvwJnvn/Group-736.png"
              alt="Group of people Chilling"
            />
            <img
              className="lg:hidden sm:block hidden w-full"
              src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
              alt="Group of people Chilling"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
              alt="Group of people Chilling"
            />
          </div>

          <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div className="w-full xl:w-5/12 lg:w-6/12">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-black-800">
                Our Story
              </h2>
              <p className="font-normal text-base leading-6 text-black-600 mt-4">
                To accommodate the identified intelligence in hiring patterns,
                machine learning would be applied to understand the intelligence
                behind them. Using ML (Machine Learning) to rank the resumes
                with the given job requirements to match the best comparable
                candidates which is the most important and crucial task for any
                company to hire an ideal candidate for their job role.
              </p>
              <p className="font-normal text-base leading-6 text-black-600 mt-6">
                To classify resumes based on their respective categories, NLP
                (Natural Language Processing) and Machine Learning (ML) are
                used, while MaLSTM model(Siamese networks + LSTM with Manhattan
                distance) is used to rank candidates based on their resume's
                similarity to the job description.
              </p>
            </div>
            <div className="lg:flex items-center w-full lg:w-1/2 ">
              <img
                className="lg:block hidden w-full"
                src="https://i.ibb.co/2kxWpNm/Group-740.png"
                alt="people discussing on board"
              />
              <img
                className="lg:hidden sm:block hidden w-full h-3/4"
                src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
                alt="people discussing on board"
              />
              <img
                className="sm:hidden block w-full"
                src="https://i.ibb.co/9g2R7Xr/Group-803.png"
                alt="people discussing on board"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
