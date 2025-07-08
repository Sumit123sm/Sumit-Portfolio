import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function projects() {
    const {alldata,loading}=useFetchData('/api/projects')

    const publishedData=alldata.filter(ab=>ab.status==='publish')

    const [selectedCategory,setSelectedCategory]=useState('All')
  const [filteredProjects,setFilteredProjects]=useState([])

  useEffect(()=>{
      // filter projects based on selectedCategory
  
      if(selectedCategory==='All'){
        setFilteredProjects(alldata.filter(pro=>pro.status==='publish'))
      }else{
        setFilteredProjects(alldata.filter(pro=>pro.status==='publish' && pro.projectcategory[0]===selectedCategory))
      }
    },[selectedCategory,alldata])

    
    return <>
        <Head>
            <title>Project</title>
        </Head>
        <div className="projectpage">
            <div className="projects">
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
                        filteredProjects.map((pro)=>(
                           <Link href={`projects/${pro.slug}`} key={pro._id} className="procard">
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
            </div>
        </div>
    </>
}