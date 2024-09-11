import ScrollSection from '../components/ScrollObserver';
import ContactForm from '../components/Contact';
import ProjCard from '../components/ProjCard';
export default function Index(){
    return (
        <>
        <section id="welcome">
          <div className="flex items-center justify-center flex-col h-screen bg-home bg-no-repeat bg-cover gap-12">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl">Max ROBERT</h1>
              <h2 className="text-4xl">Developer web</h2>
            </div>
            <a className="btn btn-outline btn-white shadow-lg shadow-sky-400 text-xl" href="/#about-me">About me</a>
          </div>
        </section>
        <section id="about-me" className="pt-24 bg-[#0a0a0a]">
            <div className="flex items-center flex-col gap-16">
              <h2 className="font-bold text-4xl text-sky-400 text-shadow">About me...</h2>
              <img src="image/profile.jpg" className="w-full max-w-64"></img>
              <div id='paragrph' className="flex flex-col gap-5 text-left font-bold max-w-screen-xl text-xl">
                <p>Hello,</p>
                <p>I am a student at Epitech, currently living in Lyon. During my studies, I have gained strong programming skills. I have also had the opportunity to work on various academic and personal projects, where I was able to develop web applications as well as information systems.</p>
                <p>With Epitech's methodology, it is easy for me to learn how to use new tools or languages in a very short time. These experiences have allowed me to strengthen my analytical skills, autonomy, and ability to work in a team.</p>
                <p>I am looking for a 4-month internship starting in September. Highly interested in new technologies and software development, I would like to join your company to deepen my knowledge and contribute to your innovative projects.</p>
              </div>
            </div>
        </section>
        <div className="bg-[#0a0a0a] pt-20">
          <div className="bg-blsky w-full h-96 bg-fixed bg-no-repeat bg-cover"></div>
        </div>
        <section id="skills" className="pt-24 bg-[#0a0a0a]">
          <h2 className="flex justify-center pb-20 font-bold text-4xl text-sky-400 text-shadow">Skills...</h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 auto-rows-auto place-items-center ">
            <div id="skills_list" className="flex flex-col gap-12 w-1/4 pb-60">
            <div className="space-y-20">
      <ScrollSection
        title="Programming languages"
        items={['C', 'JavaScript', 'TypeScript', 'HTML', 'Python']}
      />

      <ScrollSection
        title="Soft skills"
        items={['Teamwork', 'Fast learner', 'Project management', 'Communication']}
      />

      <ScrollSection
        title="Languages"
        items={['French', 'English', 'Swedish']}
      />
    </div>
            </div>
            <div id="CV" className="flex flex-col items-center max-w-screen-sm">
              <img src="/image/CV_Max_ROBERT.png" className="shadow-lg shadow-sky-400 hover:scale-105 transition-transform"></img>
              <a className="btn btn-outline btn-white shadow-md shadow-white mt-12" href='/image/CV_Max_ROBERT.pdf' download>Download</a>
            </div>
          </div>
        </section>
        <section id='portfolio'className="pt-24 pb-24 bg-[#0a0a0a]">
          <h2 className="flex justify-center mb-20 font-bold text-4xl text-sky-400 text-shadow">Portfolio...</h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-16 place-items-center">
            <ProjCard
              src_img='image/rpg.png'
              title='My RPG'
              item='Development of an RPG-type game using CSFML, including inventory management, music implementation, and save system management.'/>
            <ProjCard
              src_img='image/corewar.png'
              title='Corewar'
              item='Development of a Corewar program, a game where robots battle by modifying memory to destroy each other in a virtual machine.'/>
            <ProjCard
              src_img='/image/shell.png'
              title='42sh'
              item='Recreation of a shell including several built-ins (cd, environment variables, alias, history, etc.) in C.'/>
            <ProjCard
              src_img='/image/geo-music.png'
              title='Geo-Music'
              item='Development of a website featuring an interactive world map, with a database of music, while interacting with the Spotify API.'/>
          </div>
        </section>
        <ContactForm/>
        </>
    )
}