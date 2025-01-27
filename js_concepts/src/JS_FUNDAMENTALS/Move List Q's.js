import React, { useState } from 'react';

export function App(props) {
  const [selectedItems, setSelectedItems] = useState({});

  const [values, setValues] = useState({
    values1: [
      { val: 'Check 1 - 1', id: 1 },
      { val: 'Check 1 - 2', id: 2 },
      { val: 'Check 1 - 3', id: 3 },
      { val: 'Check 1 - 4', id: 4 },
      { val: 'Check 1 - 5', id: 5 },
      { val: 'Check 1 - 6', id: 6 },
      { val: 'Check 1 - 7', id: 7 },
      { val: 'Check 1 - 8', id: 8 },
      { val: 'Check 1 - 9', id: 9 },
      { val: 'Check 1 - 10', id: 10 },
    ],
    values2: [
      { val: 'Check 2 - 1', id: 11 },
      { val: 'Check 2 - 2', id: 12 },
      { val: 'Check 2 - 3', id: 13 },
      { val: 'Check 2 - 4', id: 14 },
      { val: 'Check 2 - 5', id: 15 },
      { val: 'Check 2 - 6', id: 16 },
      { val: 'Check 2 - 7', id: 17 },
      { val: 'Check 2 - 8', id: 18 },
      { val: 'Check 2 - 9', id: 19 },
      { val: 'Check 2 - 10', id: 20 },
    ],
    values3: [
      { val: 'Check 3 - 1', id: 21 },
      { val: 'Check 3 - 2', id: 22 },
      { val: 'Check 3 - 3', id: 23 },
      { val: 'Check 3 - 4', id: 24 },
      { val: 'Check 3 - 5', id: 25 },
      { val: 'Check 3 - 6', id: 26 },
      { val: 'Check 3 - 7', id: 27 },
      { val: 'Check 3 - 8', id: 28 },
      { val: 'Check 3 - 9', id: 29 },
      { val: 'Check 3 - 10', id: 30 },
    ],
    values4: [
      { val: 'Check 4 - 1', id: 31 },
      { val: 'Check 4 - 2', id: 32 },
      { val: 'Check 4 - 3', id: 33 },
      { val: 'Check 4 - 4', id: 34 },
      { val: 'Check 4 - 5', id: 35 },
      { val: 'Check 4 - 6', id: 36 },
      { val: 'Check 4 - 7', id: 37 },
      { val: 'Check 4 - 8', id: 38 },
      { val: 'Check 4 - 9', id: 39 },
      { val: 'Check 4 - 10', id: 40 },
    ],
    values5: [
      { val: 'Check 5 - 1', id: 41 },
      { val: 'Check 5 - 2', id: 42 },
      { val: 'Check 5 - 3', id: 43 },
      { val: 'Check 5 - 4', id: 44 },
      { val: 'Check 5 - 5', id: 45 },
      { val: 'Check 5 - 6', id: 46 },
      { val: 'Check 5 - 7', id: 47 },
      { val: 'Check 5 - 8', id: 48 },
      { val: 'Check 5 - 9', id: 49 },
      { val: 'Check 5 - 10', id: 50 },
    ],
  });

  const handleChange = (item) => {
    let updateSelectedItems = { ...selectedItems };

    if (!updateSelectedItems?.[item?.id]) {
      updateSelectedItems[item.id] = item;
    } else {
      delete updateSelectedItems?.[item?.id];
    }

    setSelectedItems(updateSelectedItems);
  };

  const moveData = (listType, moveToListType) => {
    let updateValues = { ...values };

    Object.keys(selectedItems || {})?.map((key) => {
      let index = updateValues?.[`values${listType}`]?.findIndex(
        (item) => item?.id == key
      );

      if (index != -1) {
        updateValues?.[`values${moveToListType}`].push(selectedItems?.[key]);

        updateValues[`values${listType}`] = updateValues?.[`values${listType}`]
          ?.slice(0, index)
          ?.concat(
            updateValues?.[`values${listType}`]?.slice(
              index + 1,
              updateValues?.[`values${listType}`].length
            )
          );
      }
    });

    setValues(updateValues);
    // setSelectedItems({});
  };

  let valLength = Object.keys(values || {})?.length;

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>List1</p>

      {Object.keys(values)?.map((mainKey, index) => (
        <div>
          <p>List {index + 1}</p>
          {values?.[mainKey]?.map((item) => (
            <div style={{ display: 'flex', flexDirecttion: 'row' }}>
              <input
                onClick={() => handleChange(item)}
                type="checkbox"
                checked={selectedItems?.[item?.id]}
              />
              <p>{item?.val}</p>
            </div>
          ))}

          <button
            onClick={() => moveData(index + 1, index == 0 ? valLength : index)}
          >
            Move To Left
          </button>
          <button
            onClick={() =>
              moveData(index + 1, index + 1 == valLength ? 1 : index + 2)
            }
          >
            Move To Right
          </button>
        </div>
      ))}
    </div>
  );
}

// Log to console
console.log('Hello console');
