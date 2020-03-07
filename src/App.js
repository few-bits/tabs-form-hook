import React from "react";

import "./styles.css";
import { useForms } from "./useForms";

import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";

export default () => {
  // const { inputs, onChange, dirty, dirtyFields } = useForms({
  //   defaultValues: {
  //     firstName: "init first name",
  //     lastName: "init last name",
  //     username: "user_1"
  //   }
  // });

  const { tabs, onChange, onCustomChange, dirty, dirtyTabs } = useForms({
    defaultValues: {
      firstName: { value: "init first name", tab: 0 },
      clicker: { value: 3, tab: 0 },
      lastName: { value: "init last name", tab: 0 },
      username: { value: "user_1", tab: 1 },
      check1: { value: false, tab: 2 },
      depend1: { value: "depend", tab: 2 }
    }
  });

  const [tabIndex, setTabIndex] = React.useState(0);

  // console.log("inputs", inputs);

  const renderForm = () => {
    switch (tabIndex) {
      case 0:
        return (
          <Tab1
            {...{
              inputs: tabs[0],
              onChange: e => onChange(0, e),
              onCustomChange: (field, value) => onCustomChange(0, field, value),
              dirtyFields: dirtyTabs[0]
            }}
          />
        );
      case 1:
        return (
          <Tab2
            {...{
              inputs: tabs[1],
              onChange: e => onChange(1, e),
              dirtyFields: dirtyTabs[1]
            }}
          />
        );
      case 2:
        return (
          <Tab3
            {...{
              inputs: tabs[2],
              onChange: e => onChange(2, e),
              dirtyFields: dirtyTabs[2]
            }}
          />
        );
      default:
        return null;
    }
  };

  console.log(tabs);
  return (
    <div className="App">
      <div className="tabs">
        <div
          className={`tabItem ${dirtyTabs[0].size > 0 ? "dirty" : ""} ${
            tabIndex === 0 ? "active" : ""
          }`}
          onClick={() => setTabIndex(0)}
        >
          Default controls
        </div>
        <div
          className={`tabItem ${dirtyTabs[1].size > 0 ? "dirty" : ""} ${
            tabIndex === 1 ? "active" : ""
          }`}
          onClick={() => setTabIndex(1)}
        >
          tab 2
        </div>
        <div
          className={`tabItem ${dirtyTabs[2].size > 0 ? "dirty" : ""} ${
            tabIndex === 2 ? "active" : ""
          }`}
          onClick={() => setTabIndex(2)}
        >
          tab 3
        </div>
      </div>
      <div className="forms">{renderForm()}</div>
    </div>
  );
};
