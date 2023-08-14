import HomeSlider from './components/home/HomeSlider'
import HomeNews from './components/home/HomeNews'
import HomeIntroMain from './components/home/HomeIntroMain'
import HomeBusinessMain from './components/home/HomeBusinessMain'
import HomeImprint from './components/home/HomeImprint'
import HomeEcoSystem from './components/home/HomeEcoSystem'

export default function Home() {
  return (
    <>
      <div>
        <HomeSlider />
        <HomeNews />
        <HomeIntroMain />
        <HomeBusinessMain />
        <HomeImprint />
        <HomeEcoSystem />
      </div>
    </>
  )
}
