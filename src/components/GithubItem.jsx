import { styles } from "../styles";
function GithubItem() {
  return (
    <section className={`w-full flex justify-between items-center max-w-7xl mx-auto pb-12`}>
        <div className="mt-12 bg-black-100 rounded-[20px] p-12 w-full">
        <h2 className={styles.sectionHeadText}>Github Stats.</h2>
          
          
          
          <div className="flex justify-around" align="center">
  <img className="h-40 w-full" src="https://github-readme-stats.vercel.app/api/top-langs?username=sangamprashant&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false" alt="languages graph" />
  <img className="h-40 w-full" src="https://streak-stats.demolab.com?user=sangamprashant&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5"  alt="streak graph" />
</div>
<img className=" w-full mb-12" src="https://github.com/sangamprashant/sangamprashant/blob/main/profile-3d-contrib/profile-green-animate.svg"/>
<p className={styles.sectionSubText}>Github Contributions</p>
          <img className=" w-full "  src="https://raw.githubusercontent.com/sangamprashant/sangamprashant/output/snake.svg"/>
        </div>
    </section>
  ) 
}

export default GithubItem
