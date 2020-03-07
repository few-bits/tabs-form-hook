import React from "react";

export const useForms = ({ defaultValues }) => {
  const nextTabs = Object.keys(defaultValues).reduce((memo, key) => {
    const tab = defaultValues[key].tab;
    const value = defaultValues[key].value;
    if (!memo[tab]) {
      memo[tab] = {};
    }
    memo[tab][key] = value;
    // if (memo[tab] event.target.name === key) {
    //   memo[key].value = event.target.value;
    // }
    return memo;
  }, {});

  const defaultDirtyTabs = Object.keys(nextTabs).reduce((memo, key) => {
    memo[key] = new Set();
    return memo;
  }, {});

  // const [inputs, setInputs] = React.useState({ ...defaultValues });
  const [defaultTabs] = React.useState(nextTabs);
  const [tabs, setTabs] = React.useState(nextTabs);
  const [dirtyTabs, setDirtyTabs] = React.useState(defaultDirtyTabs);
  // const [dirtyFields, setDirtyFields] = React.useState(new Set());

  // const getDiff = (o1, o2) => {
  //   const diff = Object.keys(o2).reduce((diff, key) => {
  //     if (o1[key] !== o2[key]) {
  //       diff.add(key);
  //     }
  //     return diff;
  //   }, new Set());

  //   return [diff.size > 0, diff];
  // };

  const onChange = (tabIndex, event) => {
    event.persist();

    let value;

    const { type } = event.target;
    switch (type) {
      case "checkbox":
        value = event.target.checked;
        break;
      default:
        value = event.target.value;
        break;
    }

    const nextTabs = {
      ...tabs,
      [tabIndex]: {
        ...tabs[tabIndex],
        [event.target.name]: value
      }
    };
    console.log("value", value);

    const nextDirtyTabs = { ...dirtyTabs };
    if (
      nextTabs[tabIndex][event.target.name] !==
      defaultTabs[tabIndex][event.target.name]
    ) {
      nextDirtyTabs[tabIndex].add(event.target.name);
    } else {
      nextDirtyTabs[tabIndex].delete(event.target.name);
    }
    setTabs(nextTabs);
    setDirtyTabs(nextDirtyTabs);
    // const nextInputs = Object.keys(defaultValues).reduce(
    //   (memo, key) => {
    //     if (event.target.name === key) {
    //       memo[key].value = event.target.value;
    //     }
    //     return memo;
    //   },
    //   { ...inputs }
    // );
    // setInputs(nextInputs);
    // const [isDirty, dirtyFields] = getDiff(defaultValues, nextInputs);
    // console.log("diff::::", isDirty, dirtyFields);
    // setDirty(isDirty);
    // setDirtyFields(dirtyFields);
  };

  const onCustomChange = (tabIndex, field, value) => {
    const nextTabs = {
      ...tabs,
      [tabIndex]: {
        ...tabs[tabIndex],
        [field]: value
      }
    };
    console.log(" field, value", field, value);

    const nextDirtyTabs = { ...dirtyTabs };
    if (nextTabs[tabIndex][field] !== defaultTabs[tabIndex][field]) {
      nextDirtyTabs[tabIndex].add(field);
    } else {
      nextDirtyTabs[tabIndex].delete(field);
    }
    setTabs(nextTabs);
    setDirtyTabs(nextDirtyTabs);
  };

  return {
    onChange,
    onCustomChange,
    tabs,
    dirtyTabs
    // dirty,
    // dirtyFields
  };
};
