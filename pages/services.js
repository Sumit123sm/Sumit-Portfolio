import Head from "next/head";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

export default function services() {
    return <>
        <Head>
            <title>Services</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2>Sumitcoder Services</h2>
                    <p>Home <span>&gt;</span> Services</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice">
                            <span>01</span>
                            <div>
                                <h2>Web Develpment</h2>
                                <img src="/img/website_icon.svg" alt="" />
                            </div>
                            <ul>
                                <li>Perfomance & Load Time</li>
                                <li>Reusable Components</li>
                                <li>Responsiveness</li>
                                <li>Quality assurance and testing.</li>
                                <li>Quality maintenance, updates, and bug fixes.</li>
                            </ul>
                            <p>I am very good in web development offering services, i offer reliable web development services to generate the remarkable results which your business need.</p>
                        </div>
                       <div className="csservice">
  <span>01</span>
  <div>
    <h2>Data Analysis</h2>
    <img src="/img/icons8-data-analyst-50.png" alt="" />
  </div>
  <ul>
    <li>Data Cleaning & Preparation</li>
    <li>Exploratory Data Analysis (EDA)</li>
    <li>Data Visualization & Reporting</li>
    <li>Dashboard Design (Power BI, Tableau)</li>
  </ul>
  <p>
    I provide professional data analysis services focused on uncovering valuable insights and trends from your data. From cleaning messy raw data to delivering actionable, interactive visualizations, I ensure smarter, data-driven decisions that drive business growth.
  </p>
</div>
    

                    </div>

                </div>
            </div>
            <div className="pricingplansec">
        <div className="container">
            <div className="pricingtitles text-center">
                <h3><img src="/img/chevron_right.png" alt="" /> PRICING PLAN</h3>
                <h2>Pricing My Work</h2>
            </div>
            <div className="pricingcards">
                <div className="pricingcard">
                    <h4>Life Plan</h4>
                    <p>Perfect Choice for individual</p>
                    <h2>$29.00 <span>Monthly</span></h2>
                    <Link href='/contact' ><button>Get Start Now</button></Link>
                    <div>
                        <h5>Lite includes:</h5>
                        <ul>
                            <li><IoMdCheckmark/> Powerful admin panel</li>
                            <li><IoMdCheckmark/> 1 Native android app</li>
                            <li><HiXMark/> Multi-language support</li>
                            <li><HiXMark/> Multi-language support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

    </>
}