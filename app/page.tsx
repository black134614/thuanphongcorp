import HomeSlider from './components/home/HomeSlider'
import HomeNews from './components/home/HomeNews'
import HomeIntroMain from './components/home/HomeIntroMain'
import HomeBusinessMain from './components/home/HomeBusinessMain'
import HomeImprint from './components/home/HomeImprint'
import HomeEcoSystem from './components/home/HomeEcoSystem'



export default async function Home() {
  return (
    <>
        <div>
          <HomeSlider />
          <HomeNews />
          <HomeIntroMain />
          <HomeBusinessMain />
          <HomeImprint />
          <HomeEcoSystem />
          <div className="zalo-chat-widget" data-oaid="1337303147334772731" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="2" data-width="300" data-height="400"></div>
        </div>
    </>
  )
}
