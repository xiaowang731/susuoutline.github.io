import TypingEffect from "@/components/TypingEffect/TypingEffect";
import HeaderView from "@/view/headerView/headerView";
import "./main.scss";
import lightPng from "@/assets/img/light.png";

const Main = () => {
  const EffectList = [
    "书山有路勤为径,学海无涯苦作舟!",
    "知己不足而后进,望山远岐而前行!",
    "慢下脚步,让心灵照亮前行的路!",
  ];
  return (
    <>
      <HeaderView />
      <div className="main-banner">
        {/* 打字机组件 */}
        <div className="effect-box">
          <div className="effect-title">Web星球</div>
          <TypingEffect
            words={EffectList}
            typingSpeed={150}
            deletingSpeed={100}
            pauseTime={1000}
          />
        </div>
        <div className="right-img">
          <img src={lightPng} alt="" />
        </div>
      </div>
      <div className="cs"></div>
    </>
  );
};

export default Main;
