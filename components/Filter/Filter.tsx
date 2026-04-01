"use client";
import { useState, useEffect, useRef } from "react";
import css from "./Filter.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Filter = () => {
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState({
    languages: "French",
    level: "A1 Beginner",
    price: "30 $",
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const data = {
    languages: ["French", "English", "German", "Ukrainian", "Polish"],
    level: [
      "A1 Beginner",
      "A2 Elementary",
      "B1 Intermediate",
      "B2 Upper-Intermediate",
    ],
    price: ["10 $", "20 $", "30 $", "40 $"],
  };

  const selects = [
    { className: "select", label: "Languages", key: "languages" },
    { className: "level", label: "Level of knowledge", key: "level" },
    { className: "price", label: "Price", key: "price" },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenSelect(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleSelect = (selectKey: string) => {
    setOpenSelect(openSelect === selectKey ? null : selectKey);
  };

  const selectOption = (selectKey: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [selectKey]: value }));
    setOpenSelect(null);
  };

  return (
    <>
      <div className={css.container} ref={containerRef}>
        {selects.map(({ className, label, key }) => (
          <div key={key} className={css.selectWrapper}>
            <label className={css.label}>{label}</label>
            <div className={css.customSelectWrapper}>
              <div
                className={`${css[className as keyof typeof css]} ${
                  openSelect === key ? css.active : ""
                }`}
                onClick={() => toggleSelect(key)}
              >
                <span>
                  {selectedValues[key as keyof typeof selectedValues]}
                </span>
                {openSelect === key ? (
                  <FaChevronUp className={css.selectIcon} />
                ) : (
                  <FaChevronDown className={css.selectIcon} />
                )}
              </div>

              {openSelect === key && (
                <div className={css.dropdown}>
                  {data[key as keyof typeof data]?.map((option, idx) => (
                    <div
                      key={idx}
                      className={css.dropdownItem}
                      onClick={() => selectOption(key, option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
