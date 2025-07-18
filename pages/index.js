import Head from "next/head";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaCalendarDays, FaGithub, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";

export default function Home() {

  // active service background color
  const  [activeIndex,setActiveIndex]=useState(0)

  const handleHover=(index)=>{
    setActiveIndex(index)
  }

  const handleMouseOut=()=>{
    setActiveIndex(0)// set the first item as active when mouse leaves
  }



  // services data
  const services = [
    {
      title: "Web Development",
      description: "I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need."
    },
    {
      title: "Data Analytics",
      description: "Detail-oriented data analyst with a strong foundation in extracting insights from complex datasets. Proficient in data cleaning, visualization, and statistical analysis using tools like Python, SQL, Excel, and Power BI. Committed to transforming raw data into actionable business intelligence."

    },
    // {
    //   title: "Digital Marketing(SEO)",
    //   description: "My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers."
    // },
    // {
    //   title: "Content Creator",
    //   description: "Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content."
    // }
  ];

  const [loading,setLoading]=useState(true)
  const [alldata,setAlldata]=useState([])
  const [allwork,setAllwork]=useState([])
  const [selectedCategory,setSelectedCategory]=useState('All')
  const [filteredProjects,setFilteredProjects]=useState([])

  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const [projectResponse,blogsResponse]=await Promise.all([
          fetch('/api/projects'),
          fetch('/api/blogs')
        ])

        const projectData=await projectResponse.json()
        const blogsData=await blogsResponse.json()

        setAlldata(projectData)
        setAllwork(blogsData)
      } catch (error) {
        console.error("Error Fetching Data",error)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])

  useEffect(()=>{
    // filter projects based on selectedCategory

    if(selectedCategory==='All'){
      setFilteredProjects(alldata.filter(pro=>pro.status==='publish'))
    }else{
      setFilteredProjects(alldata.filter(pro=>pro.status==='publish' && pro.projectcategory[0]===selectedCategory))
    }
  },[selectedCategory,alldata])

  const handleCategoryChange=(category)=>{
    setSelectedCategory(category)
  }

  // function to format the date as '20 may 2024 14:11 pm'

  const formatDate=(date)=>{
    // check if date if valid

    if(!date || isNaN(date)){
      return ''// or handle the error as method
    }

    const options={
      day:'numeric',
      month:'long',
      year:'numeric',
      hour12:true// use 12-hour format
    }
    return new Intl.DateTimeFormat('en-US',options).format(date)
  }


  

  return (
    <>
      <Head>
        <title>Sumit - Personal Portfolio</title>
        <meta name="description" content="Sumit - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x='50%' y='50%' text-anchor='middle' className="animate-stroke">Hi</text>

          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title" data-aos='fade-right'>I am Sumit</span>
              <h1 className="hero_title" data-aos='fade-right'>Web Developer + <br /> <span className="typed-text">Data Analyst</span></h1>
              <div className="hero_img_box heroimgbox" data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='2000'>
                <img src="img/me.jpg" alt="coder" className="hero-img" />

              </div>
              <div className="lead" data-aos='fade-up'>BTech Graduate 2026 | NIT NAGALAND</div>
              <div className="hero_btn_box" data-aos='fade-up'>
                {/* <Link href='/' download={'/img/resume.pdf'} className="download_cv">Download CV <BiDownload/></Link> */}
                <a href="/img/resume.pdf" download="Sumit-Prasad-Resume.pdf" className="download_cv">
  Download CV <BiDownload />
</a>

                <ul className="hero_social">
                  {/* <li><a href="/" ><FaTwitter/></a></li>
                  <li><a href="/" ><LiaBasketballBallSolid/></a></li> */}
                  <li><a href="https://www.linkedin.com/in/sumit-prasad-811736264/" ><GrLinkedinOption/></a></li>
                  <li><a href="https://github.com/Sumit123sm" ><FaGithub/></a></li>
                </ul>
              </div>
            </div>

            {/* rightside image section */}
            <div className="heroimageright">
              <div className="hero_img_box" data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='2000'>
                <img src="/img/me.png" alt="" className="hero-img" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex-sb">
            <div className="funfect_item" data-aos='fade-right'>
              <h3>1+</h3>
              <h4>Year of <br />
              Experience </h4>
            </div>
            <div className="funfect_item" data-aos='fade-right'>
              <h3>9+</h3>
              <h4>Projects <br />
              Complated </h4>
            </div>
            <div className="funfect_item" data-aos='fade-left'>
              <h3>2+</h3>
              <h4>Open Source <br />
              Library </h4>
            </div>
            <div className="funfect_item" data-aos='fade-left'>
              <h3>2+</h3>
              <h4>Happy <br />
              Customers </h4>
            </div>
          </div>
        </div>
      
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2>My Quality Services</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>

          </div>
          <div className="services_menu">
            {services.map((service,index)=>(
              <div key={index} className={`services_item ${activeIndex===index ? 'sactive':''}`} onMouseOver={()=>handleHover(index)}
              onMouseOut={handleMouseOut}>
                <div className="left_s_box">
                  <span>0{index+1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight/>

              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Recent Works</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="project_buttons">
            {(() => {
              // Flatten all categories, normalize, and count
              const categoryCounts = {};
              alldata.forEach(project => {
                (project.projectcategory || []).forEach(cat => {
                  const normCat = cat.trim();
                  if (normCat) {
                    categoryCounts[normCat] = (categoryCounts[normCat] || 0) + 1;
                  }
                });
              });
              // Add 'All' option
              const allCount = alldata.filter(pro=>pro.status==='publish').length;
              const sortedCategories = Object.keys(categoryCounts).sort((a, b) => a.localeCompare(b));
              return [
                <button key="All" className={selectedCategory==='All' ? 'active':''} onClick={()=>setSelectedCategory('All')}>All <span>({allCount})</span></button>,
                ...sortedCategories.map(cat => (
                  <button key={cat} className={selectedCategory===cat ? 'active':''} onClick={()=>setSelectedCategory(cat)}>
                    {cat} <span>({categoryCounts[cat]})</span>
                  </button>
                ))
              ];
            })()}
          </div>
          <div className="projects_cards">

            {loading ? <div className="flex flex-center wh_50"> <Spinner/></div> : (
              filteredProjects.length===0 ? (
                <h1>No Project Found</h1>
              ) : (
              filteredProjects.slice(0,4).map((pro)=>(
                 <Link href='/' key={pro._id} className="procard">
            <div className="proimgbox">
              <img src={pro.images[0]} alt={pro.title} />
            </div>
            <div className="procontentbox">
              <h2>{pro.title}</h2>
              <GoArrowUpRight/>
            </div>
            </Link>

              ))
            )
            )}
           
          </div>
          
        </div>
       
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experience_title flex gap-1">
              <LuMedal/>
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span> Sep 2024 - Oct 2024</span>
                <h3>Trainity</h3>
                <p>Data Analytics Virtual Intern</p>
              </div>
              
            </div>
          </div>
          <div className="education">
              <div className="experience_title flex gap-1">
              <PiGraduationCap/>
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2022 - 2026</span>
                <h3>B.TECH NIT NAGALAND</h3>
                <p>CSE</p>
              </div>
              <div className="exper_card">
                <span>2020 - 2022</span>
                <h3>N.G. ACHARYA & D.K. MARATHE COLLEGE</h3>
                <p> Class XII</p>
              </div>
              <div className="exper_card">
                <span>2019 - 2020</span>
                <h3> Joymax English High School</h3>
                <p> Class X</p>
              </div>
              
            </div>
          </div>
        </div>

      </section>

      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="myskils_cards">
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="python" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Python</p>
            </div>
            {/* <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/firebase.svg" alt="firebase" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Firebase</p>
            </div> */}
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/mongodb.svg" alt="mongodb" />
                <h3>92%</h3>
              </div>
              <p className="text-center">MongoDB</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/redux.svg" alt="redux" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Redux</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/react.svg" alt="react" />
                <h3>92%</h3>
              </div>
              <p className="text-center">React</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/js.svg" alt="js" />
                <h3>92%</h3>
              </div>
              <p className="text-center">JavaScript</p>
            </div>
            {/* Added Skills */}
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/powerbi.png" alt="Power BI" />
                <h3>90%</h3>
              </div>
              <p className="text-center">Power BI</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/excel.png" alt="Excel" />
                <h3>90%</h3>
              </div>
              <p className="text-center">Excel</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/sql.png" alt="SQL" />
                <h3>90%</h3>
              </div>
              <p className="text-center">SQL</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/aws.png" alt="AWS" />
                <h3>85%</h3>
              </div>
              <p className="text-center">AWS</p>
            </div>
          </div>
        </div>
      
      </section>

      {/* Recent Blogs */}
      {/* <section className="recentblogs">
        <div className="container">
          <div className="myskills_title">
            <h2>Recent Blog</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="recent_blogs">
            {allwork.slice(0,3).map((blog)=>{
              return <Link href={`/blogs/${blog.slug}`} key={blog._id} className="re_blog" >
                <div className="re_blogimg">
                  <img src={blog.images[0] || '/img/noimage.png'} alt={blog.title} />
                  <span>{blog.blogcategory[0]}</span>
                </div>
                <div className="re_bloginfo">
                  <div className="re_toupdate flex gap-1">
                    <div className="res_date">
                      <FaCalendarDays/> <span>{formatDate(new Date(blog.createdAt))}</span>
                    </div>
                  </div>
                <h2>{blog.title}</h2>
                </div>
              </Link>
            })}
          </div>
        </div>
       
      </section> */}

    </>
  );
}
