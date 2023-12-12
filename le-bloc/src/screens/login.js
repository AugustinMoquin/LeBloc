import { React } from "react";
import style from 'le-bloc/src/styles/login_style.css';

const AndroidLarge4 = () => {
  return (
    <div className="android-large-4" style={style.AndroidLarge}>
      <img className="android-large-4-child" alt="" src="le-bloc/src/img/mains.png" style={style.android_child}/>
      <img className="android-large-4-item" alt="" src="le-bloc/src/img/fond1.png" style={style.android_item}/>
      <div className="android-large-4-inner" style={style.android_inner} />
      <img className="texture-icon" alt="" src="le-bloc/src/img/Texture.png" style={style.texture_icon}/>
      <div className="frame-parent"style={style.frae_parent}>
        <div className="rectangle-parent"style={style.rectangle_parent}>
          <div className="frame-child" style={style.frame_child}/>
          <div className="frame-item" style={style.frame_item}/>
          <img className="mousqueton-icon" alt="" src="le-bloc/src/img/Mousqueton.png" style={style.mousqueton_icon}/>
          <div className="je-reviens-de" style={style.je_reviens_de}>Je reviens de loin</div>
        </div>
        <div className="rectangle-group" style={style.rectangle_group}>
          <div className="frame-child" style={style.frame_child}/>
          <div className="rectangle-div" style={style.rectangle_div}/>
          <img className="chaussure-icon" alt="" src="le-bloc/src/img/Chaussure.png" style={style.chaussure_icon}/>
          <div className="je-suis-nouveau" style={style.je_suis_nouveau}>Je suis Nouveau</div>
        </div>
      </div>
      <div className="bienvenue-parent" style={style.bienvenue_parent}>
        <div className="bienvenue" style={style.bienvenue}>Bienvenue</div>
        <img className="line-icon" alt="" src="le-bloc/src/img/line1.png" style={style.line_icon}/>
      </div>
      <img className="logo-icon" alt="" src="le-bloc/src/img/logo.jpg" style={style.logo_icon}/>
    </div>
  );
};

export default AndroidLarge4;

