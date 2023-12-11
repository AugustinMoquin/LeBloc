import { React } from "react";
import style from 'le-bloc/src/styles/login_style.css';

const AndroidLarge4 = () => {
  return (
    <div className="android-large-4" style={style.AndroidLarge4}>
      <img className="android-large-4-child" alt="" src="/group-5@2x.png" />
      <img className="android-large-4-item" alt="" src="/rectangle-16.svg" />
      <div className="android-large-4-inner" />
      <img className="texture-icon" alt="" src="le-bloc/src/img/Texture.png" />
      <div className="frame-parent">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-item" />
          <img className="mousqueton-icon" alt="" src="le-bloc/src/img/Mousqueton.png" />
          <div className="je-reviens-de">Je reviens de loin</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child" />
          <div className="rectangle-div" />
          <img className="chaussure-icon" alt="" src="le-bloc/src/img/Chaussure.png" />
          <div className="je-suis-nouveau">Je suis Nouveau</div>
        </div>
      </div>
      <div className="bienvenue-parent">
        <div className="bienvenue">Bienvenue</div>
        <img className="line-icon" alt="" src="/line-1.svg" />
      </div>
      <img className="logo-icon" alt="" src="/logo.jpg" />
    </div>
  );
};

export default AndroidLarge4;

