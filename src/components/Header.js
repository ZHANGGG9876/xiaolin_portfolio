import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <nav id="nav" style={{ 
                  background: "tranparent", 
                  display: "flex", 
                  justifyContent: "end",
                  alignItems: "end", 
                  padding: "10px",
                  position: "fixed",
                  top: "0",
                  left: "0",
                  right: "0",
                  zIndex: "1000",
                }}>
                <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", fontSize: "15px", borderBlockEnd: "1px solid #303030" }}>
                    <li style={{marginRight: "15px"}}><a href="#home" onclick="seleccionar()" style={{ color: "#303030", fontWeight: "bold"}}>HOME</a></li>
                    <li style={{marginRight: "15px"}}><a href="#about" onclick="seleccionar()" style={{ color: "#303030", fontWeight: "bold"}}>SOBRE MI</a></li>
                    <li style={{marginRight: "15px"}}><a href="#portfolio" onclick="seleccionar()" style={{ color: "#303030", fontWeight: "bold"}}>PROJECTS</a></li>
                    <li style={{marginRight: "15px"}}><a href="#skills" onclick="seleccionar()" style={{ color: "#303030", fontWeight: "bold"}}>SKILLS</a></li>
                    <li style={{marginRight: "15px"}}><a href="#resume" onclick="seleccionar()" style={{ color: "#303030", fontWeight: "bold"}}>EXPERIENCE</a></li>
                    <li style={{marginRight: "15px"}}><a href="#contact" onclick="seleccionar()" style={{ color: "#303030", fontWeight: "bold"}}>CONTACT</a></li>
                </ul>
            </nav>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
