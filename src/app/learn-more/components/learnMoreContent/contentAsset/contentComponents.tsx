"use client";
import { CSSProperties, useState } from "react";

import { TaskBuddyFooterLogo } from "@/assets/logos/taskBuddyLogoSvg";
import { Spinner } from "@/components/spinner/spinner";
import { SwitchButton } from "@/components/switchButton/switchButton";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import { IconAdd, IconFilter } from "@/utils/icons";
import styles from "./css/contentComponents.module.css";
import { IconSettings } from "./learnMoreIcons/learnMoreIcons";
export const LearnMoreContentDashboardSwitch = () => {
  const [value, setValue] = useState("Default");
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleOnChange = (event: React.MouseEvent<HTMLLIElement>) => {
    if (event.target instanceof HTMLLIElement) {
      setValue(event.target.innerText);
      setIsOpen(!isOpen);
      setIsLoading(true);

      const timeout = setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);

        const newTimeout = setTimeout(() => {
          setSuccess(false);

          const lastTimeout = setTimeout(() => {
            setIsOpen(true);

            return () => {
              clearTimeout(lastTimeout);
            };
          }, 1000);

          return () => {
            clearTimeout(newTimeout);
          };
        }, 1000);

        return () => {
          clearTimeout(newTimeout);
        };
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setIsLoading(false);
  };
  return (
    <>
      <div className={styles.switch}>
        <div onClick={handleMenuClick} className={styles.triggerButton}>
          <p className={styles.menuText}>{value}</p>
          {isLoading && <Spinner />}
          {success && (
            <TaskBuddyFooterLogo className={styles.selectCheckmark} />
          )}
        </div>
        {isOpen && (
          <ul className={styles.switchList}>
            <li
              key="Default"
              className={styles.switchItem}
              onClick={handleOnChange}
            >
              Default {value === "Default" && <TaskBuddyFooterLogo />}
            </li>
            <li
              key="Private"
              className={styles.switchItem}
              onClick={handleOnChange}
            >
              Private {value === "Private" && <TaskBuddyFooterLogo />}
            </li>
            <li
              key="Work"
              className={styles.switchItem}
              onClick={handleOnChange}
            >
              Work {value === "Work" && <TaskBuddyFooterLogo />}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export const LearnMoreContentFiltering = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [state, setState] = useState<boolean[]>([true, false, false]);

  const handleFilterOnClick = () => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
      setIsSettingsOpen(false);
    } else {
      setIsFilterOpen(true);
      setIsSettingsOpen(false);
    }
  };

  const handleSettingsClick = () => {
    console.log("click");
    if (isSettingsOpen) {
      setIsFilterOpen(false);
      setIsSettingsOpen(false);
    } else {
      setIsSettingsOpen(true);
      setIsFilterOpen(false);
    }
  };

  return (
    <>
      <div className={styles.filteringWrapper}>
        <button className={styles.createButton} tabIndex={-1}>
          <IconAdd />
          Create
        </button>

        <div className={styles.mainButtonWrapper}>
          <button
            onClick={handleFilterOnClick}
            className={`${styles.learnMorebutton} ${
              isFilterOpen ? styles.activeButton : ""
            }`}
          >
            {/* <DragAndDropSimpleIcon2 /> */}
            <IconFilter />
          </button>
          {isFilterOpen && (
            <>
              <ul className={styles.filterList}>
                <li key="Created" className={styles.filterItem}>
                  Created <input defaultChecked type="checkbox" />
                </li>
                <li key="Pending" className={styles.filterItem}>
                  Pending <input type="checkbox" />
                </li>
                <li key={"In progress"} className={styles.filterItem}>
                  In progress <input defaultChecked type="checkbox" />
                </li>
                <li key="On hold" className={styles.filterItem}>
                  On hold <input type="checkbox" />
                </li>
                <li key="Cancelled" className={styles.filterItem}>
                  Cancelled <input type="checkbox" />
                </li>
                <li key="Deleted" className={styles.filterItem}>
                  Deleted <input type="checkbox" />
                </li>
                <li key="Completed" className={styles.filterItem}>
                  Completed <input defaultChecked type="checkbox" />
                </li>
              </ul>
            </>
          )}
        </div>

        <div className={styles.settingsButtonWrapper}>
          <button
            onClick={handleSettingsClick}
            tabIndex={-1}
            className={`${styles.settingsButton} ${
              isSettingsOpen ? styles.activeButton : ""
            }`}
          >
            <IconSettings />
          </button>
          {isSettingsOpen && (
            <>
              <ul className={styles.settingsMenu}>
                <li key={"Drag"} className={styles.settingsMenuItem}>
                  Drag & drop{" "}
                  <SwitchButton className={styles.switchButton} size="xs" />
                </li>
                <li key={"column"} className={styles.settingsMenuItem}>
                  Column layout{" "}
                  <SwitchButton className={styles.switchButton} size="xs" />
                </li>
                <li key={"limit"} className={styles.settingsMenuItem}>
                  Limit visible tasks{" "}
                  <SwitchButton className={styles.switchButton} size="xs" />
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export const LearnMoreTaskviewer = ({
  className = "",
}: {
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 3504 1868"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M994.68 356C1347.41 365.794 1233.62 933.912 1596.2 933.912C1213.1 933.912 983 644.119 983 764.625"
              stroke="#566277"
              stroke-width="16"
            />
            <path
              d="M994.875 1511.75C1347.49 1501.95 1233.74 933.75 1596.2 933.75C1213.22 933.75 983.199 1223.59 983.199 1103.06"
              stroke="#566277"
              stroke-width="16"
            />
            <rect
              x="27.3594"
              y="144.1"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="#020817"
              stroke="#454F61"
              stroke-width="8"
            />
            <rect
              x="77.4453"
              y="351.144"
              width="225.154"
              height="65.3376"
              rx="17"
              fill="#454F61"
              stroke="#454F61"
              stroke-width="2"
            />
            <rect
              x="336.414"
              y="351.144"
              width="384.943"
              height="65.3376"
              rx="17"
              fill="#454F61"
              stroke="#454F61"
              stroke-width="2"
            />
            <rect
              x="78.3555"
              y="214.84"
              width="879.859"
              height="49.6883"
              rx="16"
              fill="#454F61"
            />
            <rect
              x="27.3594"
              y="552.725"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="#020817"
              stroke="#454F61"
              stroke-width="8"
            />
            <rect
              x="77.9453"
              y="760.269"
              width="224.154"
              height="64.3376"
              rx="32.1688"
              fill="#454F61"
              stroke="#454F61"
            />
            <rect
              x="336.914"
              y="760.269"
              width="383.943"
              height="64.3376"
              rx="32.1688"
              fill="#454F61"
              stroke="#454F61"
            />
            <rect
              x="78.3555"
              y="623.465"
              width="879.859"
              height="49.6883"
              rx="8"
              fill="#454F61"
            />
            <rect
              x="27.3594"
              y="961.35"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="#020817"
              stroke="#454F61"
              stroke-width="8"
            />
            <rect
              x="77.9453"
              y="1168.89"
              width="224.154"
              height="64.3376"
              rx="32.1688"
              fill="#454F61"
              stroke="#454F61"
            />
            <rect
              x="336.914"
              y="1168.89"
              width="383.943"
              height="64.3376"
              rx="32.1688"
              fill="#454F61"
              stroke="#454F61"
            />
            <rect
              x="78.3555"
              y="1032.09"
              width="879.859"
              height="49.6883"
              rx="8"
              fill="#454F61"
            />
            <rect
              x="27.3594"
              y="1369.98"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="#020817"
              stroke="#454F61"
              stroke-width="8"
            />
            <rect
              x="77.9453"
              y="1577.52"
              width="224.154"
              height="64.3376"
              rx="32.1688"
              fill="#454F61"
              stroke="#454F61"
            />
            <rect
              x="336.914"
              y="1577.52"
              width="383.943"
              height="64.3376"
              rx="32.1688"
              fill="#454F61"
              stroke="#454F61"
            />
            <rect
              x="78.3555"
              y="1440.72"
              width="879.859"
              height="49.6883"
              rx="8"
              fill="#454F61"
            />
            <path d="M1624 934H2009.44" stroke="#566277" stroke-width="16" />
            <path
              d="M1809 934C1809 1036.15 1725.97 1119 1623.5 1119C1521.03 1119 1438 1036.15 1438 934C1438 831.847 1521.03 749 1623.5 749C1725.97 749 1809 831.847 1809 934Z"
              fill="#020817"
              stroke="#566277"
              stroke-width="16"
            />
            <rect
              x="1967"
              y="132"
              width="1510"
              height="1554"
              rx="60"
              fill="#020817"
              stroke="#454F61"
              stroke-width="8"
            />
            <path
              d="M2088.15 1577V1554.28H2095.99C2103.35 1554.28 2107.48 1558.38 2107.48 1565.67C2107.48 1572.94 2103.41 1577 2096.18 1577H2088.15ZM2095.99 1572.9C2100.37 1572.9 2102.45 1570.17 2102.45 1565.64C2102.45 1560.71 2100.37 1558.38 2095.99 1558.38H2093.01V1572.9H2095.99ZM2118.64 1577.38C2113.39 1577.38 2110 1573.83 2110 1568.42C2110 1563.02 2113.39 1559.46 2118.61 1559.46C2123.69 1559.46 2126.99 1562.98 2126.99 1568.74V1569.7H2114.96C2115.05 1572.42 2116.49 1573.74 2118.73 1573.74C2120.33 1573.74 2121.45 1573.06 2121.93 1571.66L2126.77 1571.94C2125.84 1575.37 2122.77 1577.38 2118.64 1577.38ZM2122.09 1566.76C2121.97 1564.26 2120.19 1563.02 2118.61 1563.02C2116.59 1563.02 2115.21 1564.39 2114.96 1566.76H2122.09ZM2134.69 1577C2131.9 1577 2130.21 1575.69 2130.21 1572.52V1554.28H2135.01V1572.01C2135.01 1573.03 2135.49 1573.42 2136.38 1573.42H2137.53V1577H2134.69ZM2148.23 1577.38C2142.98 1577.38 2139.59 1573.83 2139.59 1568.42C2139.59 1563.02 2142.98 1559.46 2148.2 1559.46C2153.29 1559.46 2156.58 1562.98 2156.58 1568.74V1569.7H2144.55C2144.65 1572.42 2146.09 1573.74 2148.33 1573.74C2149.93 1573.74 2151.05 1573.06 2151.53 1571.66L2156.36 1571.94C2155.43 1575.37 2152.36 1577.38 2148.23 1577.38ZM2151.69 1566.76C2151.56 1564.26 2150.18 1563.02 2148.2 1563.02C2146.18 1563.02 2144.81 1564.39 2144.55 1566.76H2151.69ZM2166.22 1577C2162.66 1577 2161.06 1575.43 2161.06 1571.85V1563.43H2158.31V1559.85H2161.06V1555.82H2165.86V1559.85H2170.38V1563.43H2165.86V1571.27C2165.86 1572.94 2166.57 1573.42 2167.98 1573.42H2170.38V1577H2166.22ZM2180.86 1577.38C2175.61 1577.38 2172.22 1573.83 2172.22 1568.42C2172.22 1563.02 2175.61 1559.46 2180.82 1559.46C2185.91 1559.46 2189.21 1562.98 2189.21 1568.74V1569.7H2177.18C2177.27 1572.42 2178.71 1573.74 2180.95 1573.74C2182.55 1573.74 2183.67 1573.06 2184.15 1571.66L2188.98 1571.94C2188.06 1575.37 2184.98 1577.38 2180.86 1577.38ZM2184.31 1566.76C2184.18 1564.26 2182.81 1563.02 2180.82 1563.02C2178.81 1563.02 2177.43 1564.39 2177.18 1566.76H2184.31ZM2206.97 1577C2203.41 1577 2201.81 1575.43 2201.81 1571.85V1563.43H2199.06V1559.85H2201.81V1555.82H2206.61V1559.85H2211.13V1563.43H2206.61V1571.27C2206.61 1572.94 2207.32 1573.42 2208.73 1573.42H2211.13V1577H2206.97ZM2219.33 1577.38C2215.74 1577.38 2213.31 1575.66 2213.31 1572.71C2213.31 1569.7 2215.2 1568.17 2218.94 1567.4L2224.48 1566.31C2224.48 1564.07 2223.45 1562.95 2221.53 1562.95C2219.74 1562.95 2218.72 1563.82 2218.4 1565.42L2213.6 1565.19C2214.24 1561.42 2217.09 1559.46 2221.53 1559.46C2226.65 1559.46 2229.28 1561.96 2229.28 1566.63V1572.49C2229.28 1573.45 2229.6 1573.7 2230.24 1573.7H2230.72V1577C2230.4 1577.1 2229.66 1577.19 2228.99 1577.19C2227.23 1577.19 2225.66 1576.58 2225.25 1574.41C2224.35 1576.23 2222.24 1577.38 2219.33 1577.38ZM2220.48 1574.09C2222.88 1574.09 2224.48 1572.62 2224.48 1570.15V1569.32L2220.17 1570.15C2219.01 1570.47 2218.24 1571.14 2218.24 1572.26C2218.24 1573.42 2219.01 1574.09 2220.48 1574.09ZM2240.85 1577.38C2235.54 1577.38 2232.88 1574.95 2232.62 1571.59L2237.49 1571.43C2237.78 1573.06 2238.8 1573.99 2240.88 1573.99C2242.58 1573.99 2243.6 1573.45 2243.6 1572.3C2243.6 1571.24 2243.02 1570.73 2240.11 1570.25C2234.67 1569.35 2233.04 1567.94 2233.04 1564.97C2233.04 1561.67 2235.57 1559.46 2240.66 1559.46C2245.49 1559.46 2247.98 1561.93 2248.4 1565.35L2243.6 1565.54C2243.38 1563.88 2242.32 1562.86 2240.19 1562.86C2238.9 1562.86 2237.97 1563.62 2237.97 1564.78C2237.97 1566.02 2238.8 1566.54 2241.17 1566.89C2246.67 1567.69 2248.53 1569.22 2248.53 1572.2C2248.53 1575.53 2245.55 1577.38 2240.85 1577.38ZM2251.61 1577V1554.28H2256.41V1566.89L2262.78 1559.85H2268.54L2261.88 1566.92L2268.73 1577H2263.48L2258.78 1569.64L2256.41 1572.17V1577H2251.61Z"
              fill="#F8FAFC"
            />
            <rect
              x="2189"
              y="1405"
              width="195"
              height="49"
              rx="24.5"
              fill="#445375"
              stroke="#5E719F"
              stroke-width="2"
            />
            <rect
              x="2036"
              y="1405"
              width="115"
              height="51"
              rx="25.5"
              fill="#BA9695"
            />
            <rect
              x="2037"
              y="1198"
              width="522"
              height="107"
              rx="17"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <rect
              x="2038"
              y="909"
              width="98"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2038"
              y="1145"
              width="501"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2038"
              y="656"
              width="267"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2038"
              y="410"
              width="173"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2038"
              y="227"
              width="173"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2454"
              y="909"
              width="114"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2778"
              y="909"
              width="137"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="2779"
              y="960"
              width="384"
              height="106"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3104.67 996V997.548V999.097H3115.33V997.548V996H3118.53V997.548V999.097H3122.8H3126V1002.19V1022.84C3126 1025.69 3123.61 1028 3120.67 1028H3099.33C3096.39 1028 3094 1025.69 3094 1022.84V1002.19V999.097H3097.2H3101.47V997.548V996H3104.67ZM3097.2 1002.19H3122.8V1007.35H3097.2V1002.19ZM3097.2 1010.45V1022.84C3097.2 1023.98 3098.16 1024.9 3099.33 1024.9H3120.67C3121.84 1024.9 3122.8 1023.98 3122.8 1022.84V1010.45H3097.2Z"
              fill="#DBDBDB"
            />
            <rect
              x="2455"
              y="960"
              width="246"
              height="106"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <path
              d="M2662 1008L2671.5 1017.5L2681 1008"
              stroke="#DBDBDB"
              stroke-width="3"
            />
            <rect
              x="2037"
              y="960"
              width="340"
              height="106"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <path
              d="M2334 1008L2343.5 1017.5L2353 1008"
              stroke="#DBDBDB"
              stroke-width="3"
            />
            <rect
              x="2039"
              y="708"
              width="150"
              height="81"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <rect
              x="2031"
              y="461"
              width="1415"
              height="126"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <rect x="2033" y="340" width="1414" height="3" fill="white" />
            <rect
              x="2038"
              y="1522"
              width="365"
              height="87"
              rx="8"
              fill="#3C82F6"
            />
            <path
              d="M2161 744L2170.1 753.5L2180 744"
              stroke="#DBDBDB"
              stroke-width="3"
            />
            <path
              d="M3387 186L3424 223M3424 186L3387 223"
              stroke="#9F9F9F"
              stroke-width="4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1584.16 837.423V805H1608.48V837.423H1584.16ZM1510.72 837.915L1535.04 862.232L1552.23 845.037L1527.91 820.72L1510.72 837.915ZM1563.83 873.833L1572.74 898.319L1621.37 1032.06L1632.26 1062L1644.09 1032.42L1661.56 988.751L1713.36 1040.16L1730.16 1023.36L1678.75 971.556L1722.42 954.087L1752 942.257L1722.06 931.372L1588.32 882.737L1563.83 873.833ZM1683.82 943.339L1659.05 953.246C1651.84 956.13 1646.13 961.842 1643.25 969.051L1633.34 993.818L1604.49 914.494L1683.82 943.339ZM1495 918.481H1527.42V894.164H1495V918.481Z"
              fill="#F7F7F7"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 3504 1868"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M994.68 356C1347.41 365.794 1233.62 933.912 1596.2 933.912C1213.1 933.912 983 644.119 983 764.625"
              stroke="#DDE4F5"
              stroke-width="16"
            />
            <path
              d="M994.875 1511.75C1347.49 1501.95 1233.74 933.75 1596.2 933.75C1213.22 933.75 983.199 1223.59 983.199 1103.06"
              stroke="#DDE4F5"
              stroke-width="16"
            />
            <rect
              x="27.3594"
              y="144.1"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
              stroke-width="8"
            />
            <rect
              x="78.4453"
              y="352.144"
              width="223.154"
              height="63.3376"
              rx="16"
              fill="#E2E8F0"
            />
            <rect
              x="77.4453"
              y="351.144"
              width="225.154"
              height="65.3376"
              rx="17"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
              stroke-width="2"
            />
            <rect
              x="337.414"
              y="352.144"
              width="382.943"
              height="63.3376"
              rx="16"
              fill="#E2E8F0"
            />
            <rect
              x="336.414"
              y="351.144"
              width="384.943"
              height="65.3376"
              rx="17"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
              stroke-width="2"
            />
            <rect
              x="78.3555"
              y="214.84"
              width="879.859"
              height="49.6883"
              rx="16"
              fill="#E2E8F0"
            />
            <rect
              x="27.3594"
              y="552.725"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
              stroke-width="8"
            />
            <rect
              x="78.4453"
              y="760.769"
              width="223.154"
              height="63.3376"
              rx="31.6688"
              fill="#E2E8F0"
            />
            <rect
              x="77.9453"
              y="760.269"
              width="224.154"
              height="64.3376"
              rx="32.1688"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="337.414"
              y="760.769"
              width="382.943"
              height="63.3376"
              rx="31.6688"
              fill="#E2E8F0"
            />
            <rect
              x="336.914"
              y="760.269"
              width="383.943"
              height="64.3376"
              rx="32.1688"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="78.3555"
              y="623.465"
              width="879.859"
              height="49.6883"
              rx="8"
              fill="#E2E8F0"
            />
            <rect
              x="27.3594"
              y="961.35"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
              stroke-width="8"
            />
            <rect
              x="78.4453"
              y="1169.39"
              width="223.154"
              height="63.3376"
              rx="31.6688"
              fill="#E2E8F0"
            />
            <rect
              x="77.9453"
              y="1168.89"
              width="224.154"
              height="64.3376"
              rx="32.1688"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="337.414"
              y="1169.39"
              width="382.943"
              height="63.3376"
              rx="31.6688"
              fill="#E2E8F0"
            />
            <rect
              x="336.914"
              y="1168.89"
              width="383.943"
              height="64.3376"
              rx="32.1688"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="78.3555"
              y="1032.09"
              width="879.859"
              height="49.6883"
              rx="8"
              fill="#E2E8F0"
            />
            <rect
              x="27.3594"
              y="1369.98"
              width="1113.28"
              height="344.487"
              rx="28"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
              stroke-width="8"
            />
            <rect
              x="78.4453"
              y="1578.02"
              width="223.154"
              height="63.3376"
              rx="31.6688"
              fill="#E2E8F0"
            />
            <rect
              x="77.9453"
              y="1577.52"
              width="224.154"
              height="64.3376"
              rx="32.1688"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="337.414"
              y="1578.02"
              width="382.943"
              height="63.3376"
              rx="31.6688"
              fill="#E2E8F0"
            />
            <rect
              x="336.914"
              y="1577.52"
              width="383.943"
              height="64.3376"
              rx="32.1688"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="78.3555"
              y="1440.72"
              width="879.859"
              height="49.6883"
              rx="8"
              fill="#E2E8F0"
            />
            <path d="M1624 934H2009.44" stroke="#DDE4F5" stroke-width="16" />
            <path
              d="M1809 934C1809 1036.15 1725.97 1119 1623.5 1119C1521.03 1119 1438 1036.15 1438 934C1438 831.847 1521.03 749 1623.5 749C1725.97 749 1809 831.847 1809 934Z"
              fill="#FEFEFE"
              stroke="#DDE4F5"
              stroke-width="16"
            />
            <rect
              x="1967"
              y="132"
              width="1510"
              height="1554"
              rx="60"
              fill="white"
              stroke="#E2E8F0"
              stroke-width="8"
            />
            <path
              d="M2088.15 1577V1554.28H2095.99C2103.35 1554.28 2107.48 1558.38 2107.48 1565.67C2107.48 1572.94 2103.41 1577 2096.18 1577H2088.15ZM2095.99 1572.9C2100.37 1572.9 2102.45 1570.17 2102.45 1565.64C2102.45 1560.71 2100.37 1558.38 2095.99 1558.38H2093.01V1572.9H2095.99ZM2118.64 1577.38C2113.39 1577.38 2110 1573.83 2110 1568.42C2110 1563.02 2113.39 1559.46 2118.61 1559.46C2123.69 1559.46 2126.99 1562.98 2126.99 1568.74V1569.7H2114.96C2115.05 1572.42 2116.49 1573.74 2118.73 1573.74C2120.33 1573.74 2121.45 1573.06 2121.93 1571.66L2126.77 1571.94C2125.84 1575.37 2122.77 1577.38 2118.64 1577.38ZM2122.09 1566.76C2121.97 1564.26 2120.19 1563.02 2118.61 1563.02C2116.59 1563.02 2115.21 1564.39 2114.96 1566.76H2122.09ZM2134.69 1577C2131.9 1577 2130.21 1575.69 2130.21 1572.52V1554.28H2135.01V1572.01C2135.01 1573.03 2135.49 1573.42 2136.38 1573.42H2137.53V1577H2134.69ZM2148.23 1577.38C2142.98 1577.38 2139.59 1573.83 2139.59 1568.42C2139.59 1563.02 2142.98 1559.46 2148.2 1559.46C2153.29 1559.46 2156.58 1562.98 2156.58 1568.74V1569.7H2144.55C2144.65 1572.42 2146.09 1573.74 2148.33 1573.74C2149.93 1573.74 2151.05 1573.06 2151.53 1571.66L2156.36 1571.94C2155.43 1575.37 2152.36 1577.38 2148.23 1577.38ZM2151.69 1566.76C2151.56 1564.26 2150.18 1563.02 2148.2 1563.02C2146.18 1563.02 2144.81 1564.39 2144.55 1566.76H2151.69ZM2166.22 1577C2162.66 1577 2161.06 1575.43 2161.06 1571.85V1563.43H2158.31V1559.85H2161.06V1555.82H2165.86V1559.85H2170.38V1563.43H2165.86V1571.27C2165.86 1572.94 2166.57 1573.42 2167.98 1573.42H2170.38V1577H2166.22ZM2180.86 1577.38C2175.61 1577.38 2172.22 1573.83 2172.22 1568.42C2172.22 1563.02 2175.61 1559.46 2180.82 1559.46C2185.91 1559.46 2189.21 1562.98 2189.21 1568.74V1569.7H2177.18C2177.27 1572.42 2178.71 1573.74 2180.95 1573.74C2182.55 1573.74 2183.67 1573.06 2184.15 1571.66L2188.98 1571.94C2188.06 1575.37 2184.98 1577.38 2180.86 1577.38ZM2184.31 1566.76C2184.18 1564.26 2182.81 1563.02 2180.82 1563.02C2178.81 1563.02 2177.43 1564.39 2177.18 1566.76H2184.31ZM2206.97 1577C2203.41 1577 2201.81 1575.43 2201.81 1571.85V1563.43H2199.06V1559.85H2201.81V1555.82H2206.61V1559.85H2211.13V1563.43H2206.61V1571.27C2206.61 1572.94 2207.32 1573.42 2208.73 1573.42H2211.13V1577H2206.97ZM2219.33 1577.38C2215.74 1577.38 2213.31 1575.66 2213.31 1572.71C2213.31 1569.7 2215.2 1568.17 2218.94 1567.4L2224.48 1566.31C2224.48 1564.07 2223.45 1562.95 2221.53 1562.95C2219.74 1562.95 2218.72 1563.82 2218.4 1565.42L2213.6 1565.19C2214.24 1561.42 2217.09 1559.46 2221.53 1559.46C2226.65 1559.46 2229.28 1561.96 2229.28 1566.63V1572.49C2229.28 1573.45 2229.6 1573.7 2230.24 1573.7H2230.72V1577C2230.4 1577.1 2229.66 1577.19 2228.99 1577.19C2227.23 1577.19 2225.66 1576.58 2225.25 1574.41C2224.35 1576.23 2222.24 1577.38 2219.33 1577.38ZM2220.48 1574.09C2222.88 1574.09 2224.48 1572.62 2224.48 1570.15V1569.32L2220.17 1570.15C2219.01 1570.47 2218.24 1571.14 2218.24 1572.26C2218.24 1573.42 2219.01 1574.09 2220.48 1574.09ZM2240.85 1577.38C2235.54 1577.38 2232.88 1574.95 2232.62 1571.59L2237.49 1571.43C2237.78 1573.06 2238.8 1573.99 2240.88 1573.99C2242.58 1573.99 2243.6 1573.45 2243.6 1572.3C2243.6 1571.24 2243.02 1570.73 2240.11 1570.25C2234.67 1569.35 2233.04 1567.94 2233.04 1564.97C2233.04 1561.67 2235.57 1559.46 2240.66 1559.46C2245.49 1559.46 2247.98 1561.93 2248.4 1565.35L2243.6 1565.54C2243.38 1563.88 2242.32 1562.86 2240.19 1562.86C2238.9 1562.86 2237.97 1563.62 2237.97 1564.78C2237.97 1566.02 2238.8 1566.54 2241.17 1566.89C2246.67 1567.69 2248.53 1569.22 2248.53 1572.2C2248.53 1575.53 2245.55 1577.38 2240.85 1577.38ZM2251.61 1577V1554.28H2256.41V1566.89L2262.78 1559.85H2268.54L2261.88 1566.92L2268.73 1577H2263.48L2258.78 1569.64L2256.41 1572.17V1577H2251.61Z"
              fill="#F8FAFC"
            />
            <rect
              x="2189"
              y="1405"
              width="195"
              height="49"
              rx="24.5"
              fill="#CFD9F1"
              stroke="#BAC5DD"
              stroke-width="2"
            />
            <rect
              x="2036"
              y="1405"
              width="115"
              height="51"
              rx="25.5"
              fill="#FEE2E1"
            />
            <rect
              x="2037"
              y="1198"
              width="522"
              height="107"
              rx="17"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <rect
              x="2038"
              y="909"
              width="98"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2038"
              y="1145"
              width="501"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2038"
              y="656"
              width="267"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2038"
              y="410"
              width="173"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2038"
              y="227"
              width="173"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2454"
              y="909"
              width="114"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2778"
              y="909"
              width="137"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="2779"
              y="960"
              width="384"
              height="106"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3104.67 996V997.548V999.097H3115.33V997.548V996H3118.53V997.548V999.097H3122.8H3126V1002.19V1022.84C3126 1025.69 3123.61 1028 3120.67 1028H3099.33C3096.39 1028 3094 1025.69 3094 1022.84V1002.19V999.097H3097.2H3101.47V997.548V996H3104.67ZM3097.2 1002.19H3122.8V1007.35H3097.2V1002.19ZM3097.2 1010.45V1022.84C3097.2 1023.98 3098.16 1024.9 3099.33 1024.9H3120.67C3121.84 1024.9 3122.8 1023.98 3122.8 1022.84V1010.45H3097.2Z"
              fill="#020817"
            />
            <rect
              x="2455"
              y="960"
              width="246"
              height="106"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <path
              d="M2662 1008L2671.5 1017.5L2681 1008"
              stroke="black"
              stroke-width="3"
            />
            <rect
              x="2037"
              y="960"
              width="340"
              height="106"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <path
              d="M2334 1008L2343.5 1017.5L2353 1008"
              stroke="black"
              stroke-width="3"
            />
            <rect
              x="2039"
              y="708"
              width="150"
              height="81"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <rect
              x="2031"
              y="461"
              width="1415"
              height="126"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <rect x="2033" y="340" width="1414" height="3" fill="#666666" />
            <rect
              x="2038"
              y="1522"
              width="365"
              height="87"
              rx="8"
              fill="#2463EB"
            />
            <path
              d="M2161 744L2170.1 753.5L2180 744"
              stroke="black"
              stroke-width="3"
            />
            <path
              d="M3387 186L3424 223M3424 186L3387 223"
              stroke="black"
              stroke-width="4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1584.16 837.423V805H1608.48V837.423H1584.16ZM1510.72 837.915L1535.04 862.232L1552.23 845.037L1527.91 820.72L1510.72 837.915ZM1563.83 873.833L1572.74 898.319L1621.37 1032.06L1632.26 1062L1644.09 1032.42L1661.56 988.751L1713.36 1040.16L1730.16 1023.36L1678.75 971.556L1722.42 954.087L1752 942.257L1722.06 931.372L1588.32 882.737L1563.83 873.833ZM1683.82 943.339L1659.05 953.246C1651.84 956.13 1646.13 961.842 1643.25 969.051L1633.34 993.818L1604.49 914.494L1683.82 943.339ZM1495 918.481H1527.42V894.164H1495V918.481Z"
              fill="black"
            />
          </svg>
        </>
      )}
    </>
  );
};

export const LearnMoreTaskClick = ({
  className = "",
}: {
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="300"
            height="160"
            viewBox="0 0 300 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M173 26C180.72 26.1651 196.159 30.756 196.159 47.7982C196.159 69.1009 193.953 80 232 80"
              stroke="#566277"
              stroke-width="3.3"
            />
            <path
              d="M173 134C180.72 133.835 196.159 129.244 196.159 112.202C196.159 90.8991 193.953 80 232 80"
              stroke="#566277"
              stroke-width="3.3"
            />
            <path d="M226 80H172" stroke="#566277" stroke-width="3.3" />
            <rect
              x="17.5"
              y="1.5"
              width="154.914"
              height="48.0345"
              rx="7.5"
              fill="#020817"
              stroke="#454F61"
            />
            <rect
              x="24.168"
              y="29.9975"
              width="32.0296"
              height="9.81088"
              rx="4.90544"
              fill="#454F61"
              stroke="#0B1121"
            />
            <rect
              x="60.1719"
              y="29.9975"
              width="54.2484"
              height="9.81088"
              rx="4.90544"
              fill="#454F61"
              stroke="#0B1121"
            />
            <rect
              x="24.6484"
              y="11.3972"
              width="122.345"
              height="6.91213"
              rx="3.45606"
              fill="#454F61"
            />
            <rect
              x="17.5"
              y="55.9828"
              width="154.914"
              height="48.0345"
              rx="7.5"
              fill="#020817"
              stroke="#454F61"
            />
            <rect
              x="24.168"
              y="84.4802"
              width="32.0296"
              height="9.81088"
              rx="4.90544"
              fill="#454F61"
              stroke="#0B1121"
            />
            <rect
              x="60.1719"
              y="84.4802"
              width="54.2484"
              height="9.81088"
              rx="4.90544"
              fill="#454F61"
              stroke="#0B1121"
            />
            <rect
              x="24.6484"
              y="65.88"
              width="122.345"
              height="6.91213"
              rx="3.45606"
              fill="#454F61"
            />
            <rect
              x="17.5"
              y="110.466"
              width="154.914"
              height="48.0345"
              rx="7.5"
              fill="#020817"
              stroke="#454F61"
            />
            <rect
              x="24.168"
              y="138.963"
              width="32.0296"
              height="9.81088"
              rx="4.90544"
              fill="#454F61"
              stroke="#0B1121"
            />
            <rect
              x="60.1719"
              y="138.963"
              width="54.2484"
              height="9.81088"
              rx="4.90544"
              fill="#454F61"
              stroke="#0B1121"
            />
            <rect
              x="24.6484"
              y="120.363"
              width="122.345"
              height="6.91213"
              rx="3.45606"
              fill="#454F61"
            />
            <path
              d="M257.7 106.4C272.446 106.4 284.4 94.446 284.4 79.7C284.4 64.954 272.446 53 257.7 53C242.954 53 231 64.954 231 79.7C231 94.446 242.954 106.4 257.7 106.4Z"
              fill="#020817"
              stroke="#566277"
              stroke-width="2"
            />
            <path
              d="M262.153 92.4445L260.316 85.5839M260.316 85.5839L256.921 88.5936L257.69 75.7841L264.761 86.4929L260.316 85.5839ZM258.038 66.1737V69.2171M265.929 69.4416L263.777 71.5937M269.197 77.3329H266.154M252.299 83.0721L250.148 85.2228M249.922 77.3329H246.879M252.299 71.5937L250.148 69.443"
              stroke="#F2F2F2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            width="300"
            height="160"
            viewBox="0 0 300 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M173 26C180.72 26.1651 196.159 30.756 196.159 47.7982C196.159 69.1009 193.953 80 232 80"
              stroke="#DDE4F5"
              stroke-width="3.3"
            />
            <path
              d="M173 134C180.72 133.835 196.159 129.244 196.159 112.202C196.159 90.8991 193.953 80 232 80"
              stroke="#DDE4F5"
              stroke-width="3.3"
            />
            <path d="M226 80H172" stroke="#DDE4F5" stroke-width="3.3" />
            <rect
              x="17.5"
              y="1.5"
              width="154.914"
              height="48.0345"
              rx="7.5"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
            />
            <rect
              x="24.668"
              y="30.4975"
              width="31.0296"
              height="8.81088"
              rx="4.40544"
              fill="#E2E8F0"
            />
            <rect
              x="24.168"
              y="29.9975"
              width="32.0296"
              height="9.81088"
              rx="4.90544"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="60.6719"
              y="30.4975"
              width="53.2484"
              height="8.81088"
              rx="4.40544"
              fill="#E2E8F0"
            />
            <rect
              x="60.1719"
              y="29.9975"
              width="54.2484"
              height="9.81088"
              rx="4.90544"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="24.6484"
              y="11.3972"
              width="122.345"
              height="6.91213"
              rx="3.45606"
              fill="#E2E8F0"
            />
            <rect
              x="17.5"
              y="55.9828"
              width="154.914"
              height="48.0345"
              rx="7.5"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
            />
            <rect
              x="24.668"
              y="84.9802"
              width="31.0296"
              height="8.81088"
              rx="4.40544"
              fill="#E2E8F0"
            />
            <rect
              x="24.168"
              y="84.4802"
              width="32.0296"
              height="9.81088"
              rx="4.90544"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="60.6719"
              y="84.9802"
              width="53.2484"
              height="8.81088"
              rx="4.40544"
              fill="#E2E8F0"
            />
            <rect
              x="60.1719"
              y="84.4802"
              width="54.2484"
              height="9.81088"
              rx="4.90544"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="24.6484"
              y="65.88"
              width="122.345"
              height="6.91213"
              rx="3.45606"
              fill="#E2E8F0"
            />
            <rect
              x="17.5"
              y="110.466"
              width="154.914"
              height="48.0345"
              rx="7.5"
              fill="white"
              fill-opacity="0.98"
              stroke="#E2E8F0"
            />
            <rect
              x="24.668"
              y="139.463"
              width="31.0296"
              height="8.81088"
              rx="4.40544"
              fill="#E2E8F0"
            />
            <rect
              x="24.168"
              y="138.963"
              width="32.0296"
              height="9.81088"
              rx="4.90544"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="60.6719"
              y="139.463"
              width="53.2484"
              height="8.81088"
              rx="4.40544"
              fill="#E2E8F0"
            />
            <rect
              x="60.1719"
              y="138.963"
              width="54.2484"
              height="9.81088"
              rx="4.90544"
              stroke="#CFD9F1"
              stroke-opacity="0.7"
            />
            <rect
              x="24.6484"
              y="120.363"
              width="122.345"
              height="6.91213"
              rx="3.45606"
              fill="#E2E8F0"
            />
            <path
              d="M257.7 106.4C272.446 106.4 284.4 94.446 284.4 79.7C284.4 64.954 272.446 53 257.7 53C242.954 53 231 64.954 231 79.7C231 94.446 242.954 106.4 257.7 106.4Z"
              fill="#FEFEFE"
              stroke="#DDE4F5"
              stroke-width="2"
            />
            <path
              d="M262.153 92.4445L260.316 85.584M260.316 85.584L256.921 88.5936L257.69 75.7841L264.761 86.4929L260.316 85.584ZM258.038 66.1737V69.2171M265.929 69.4416L263.777 71.5937M269.197 77.3329H266.154M252.299 83.0721L250.148 85.2228M249.922 77.3329H246.879M252.299 71.5937L250.148 69.443"
              stroke="#02040C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      )}
    </>
  );
};

export const LearnMoreTaskViewer = ({
  className = "",
}: {
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();

  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path d="M1317 794L2597 795" stroke="#6A778E" stroke-width="20" />
            <circle
              cx="1844.9"
              cy="812.105"
              r="317.895"
              fill="#020817"
              stroke="#6A778E"
              stroke-width="10"
            />
            <path
              d="M1980.45 701.302L1957.04 677.895C1955.43 676.282 1953.24 675.375 1950.95 675.375C1948.67 675.375 1946.48 676.281 1944.87 677.895L1980.45 701.302ZM1980.45 701.302V701.32L1980.19 701.466C1982.2 703.079 1983.1 705.265 1983.1 707.543C1983.1 709.821 1982.2 712.006 1980.19 713.62L1980.45 701.302ZM1786.8 837.269L1786.8 837.27L1772.14 881.242L1786.8 837.269ZM1786.8 837.269C1787.23 835.998 1787.94 834.842 1788.89 833.895L1788.53 833.542M1786.8 837.269L1788.53 833.542M1788.53 833.542L1788.89 833.895L1912.64 710.126L1948.36 745.851L1824.61 869.636C1824.61 869.636 1824.61 869.637 1824.61 869.637C1823.66 870.178 1822.51 871.285 1821.24 871.702L1821.24 871.703M1788.53 833.542L1821.24 871.703M1821.24 871.703L1777.26 886.366L1821.24 871.703ZM1926.22 696.559L1944.87 677.895L1980.19 713.62L1961.95 732.283L1926.22 696.559ZM1772.04 883.453C1771.87 882.721 1771.9 881.956 1772.14 881.243L1777.26 886.367C1776.55 886.603 1775.78 886.637 1775.05 886.463C1774.32 886.29 1773.65 885.917 1773.12 885.385C1772.59 884.854 1772.22 884.184 1772.04 883.453Z"
              fill="#F8F8F8"
              stroke="#6A778E"
            />
            <path
              d="M1725.14 930.654C1720.11 925.624 1717.28 918.801 1717.28 911.687V711.313C1717.28 704.199 1720.11 697.377 1725.14 692.346C1730.17 687.316 1736.99 684.49 1744.1 684.49H1862.51C1864.79 684.49 1866.98 685.397 1868.59 687.011C1870.21 688.625 1871.12 690.815 1871.12 693.098C1871.12 695.381 1870.21 697.57 1868.59 699.184C1866.98 700.799 1864.79 701.706 1862.51 701.706H1744.1C1741.56 701.706 1739.11 702.718 1737.31 704.52C1735.51 706.321 1734.5 708.765 1734.5 711.313V911.687C1734.5 914.235 1735.51 916.679 1737.31 918.481C1739.11 920.283 1741.56 921.295 1744.1 921.295H1944.48C1947.03 921.295 1949.47 920.283 1951.27 918.481C1953.07 916.679 1954.09 914.235 1954.09 911.687V802.392C1954.09 800.109 1954.99 797.92 1956.61 796.306C1958.22 794.691 1960.41 793.784 1962.69 793.784C1964.98 793.784 1967.17 794.691 1968.78 796.306C1970.4 797.92 1971.3 800.109 1971.3 802.392V911.687C1971.3 918.801 1968.48 925.624 1963.45 930.654C1958.42 935.684 1951.59 938.511 1944.48 938.511H1744.1C1736.99 938.511 1730.17 935.684 1725.14 930.654Z"
              fill="#F8F8F8"
              stroke="#6A778E"
            />
            <circle
              cx="2695.9"
              cy="810.895"
              r="317.895"
              fill="#020817"
              stroke="#6A778E"
              stroke-width="10"
            />
            <mask id="path-6-inside-1_95_2490" fill="white">
              <path d="M2574.42 843.866C2572.63 843.866 2571.06 843.194 2569.72 841.851C2568.37 840.108 2567.7 838.941 2567.7 837.151C2567.7 835.36 2568.37 833.793 2569.72 832.45C2571.06 831.107 2572.63 830.436 2574.42 830.436C2576.21 830.436 2577.78 831.107 2579.12 832.45C2580.46 833.793 2581.13 835.36 2581.13 837.151C2581.13 838.941 2580.46 840.108 2579.12 841.851C2577.78 843.194 2576.21 843.866 2574.42 843.866ZM2574.42 790.145C2572.63 790.145 2571.06 789.474 2569.72 788.131C2568.37 786.788 2567.7 785.221 2567.7 783.43C2567.7 781.64 2568.37 780.073 2569.72 778.73C2571.06 777.387 2572.63 776.715 2574.42 776.715C2576.21 776.715 2577.78 777.387 2579.12 778.73C2580.46 780.073 2581.13 781.64 2581.13 783.43C2581.13 785.221 2580.46 786.788 2579.12 788.131C2577.78 789.474 2576.21 790.145 2574.42 790.145ZM2614.71 904.301C2610.9 904.301 2607.71 903.014 2605.14 900.44C2602.57 897.866 2601.28 894.676 2601.28 890.871C2601.28 887.066 2602.57 883.876 2605.14 881.302C2607.71 878.728 2610.9 877.441 2614.71 877.441C2618.51 877.441 2621.7 878.728 2624.28 881.302C2626.85 883.876 2628.14 887.066 2628.14 890.871C2628.14 894.676 2626.85 897.866 2624.28 900.44C2621.7 903.014 2618.51 904.301 2614.71 904.301ZM2614.71 850.181C2610.9 850.181 2607.71 849.294 2605.14 846.72C2602.57 844.146 2601.28 840.956 2601.28 837.151C2601.28 833.346 2602.57 830.156 2605.14 827.582C2607.71 825.008 2610.9 823.721 2614.71 823.721C2618.51 823.721 2621.7 825.008 2624.28 827.582C2626.85 830.156 2628.14 833.346 2628.14 837.151C2628.14 840.956 2626.85 844.146 2624.28 846.72C2621.7 849.294 2618.51 850.181 2614.71 850.181ZM2614.71 796.86C2610.9 796.86 2607.71 795.573 2605.14 792.999C2602.57 790.425 2601.28 787.236 2601.28 783.43C2601.28 779.625 2602.57 776.436 2605.14 773.861C2607.71 771.287 2610.9 770 2614.71 770C2618.51 770 2621.7 771.287 2624.28 773.861C2626.85 776.436 2628.14 779.625 2628.14 783.43C2628.14 787.236 2626.85 790.425 2624.28 792.999C2621.7 795.573 2618.51 796.86 2614.71 796.86ZM2614.71 743.14C2610.9 743.14 2607.71 741.853 2605.14 739.279C2602.57 736.705 2601.28 733.515 2601.28 729.71C2601.28 725.905 2602.57 722.715 2605.14 720.141C2607.71 717.567 2610.9 716.28 2614.71 716.28C2618.51 716.28 2621.7 717.567 2624.28 720.141C2626.85 722.715 2628.14 725.905 2628.14 729.71C2628.14 733.515 2626.85 736.705 2624.28 739.279C2621.7 741.853 2618.51 743.14 2614.71 743.14ZM2668.43 857.296C2662.83 857.296 2658.08 855.337 2654.16 851.42C2650.24 847.503 2648.28 842.747 2648.28 837.151C2648.28 831.555 2650.24 826.798 2654.16 822.881C2658.08 818.964 2662.83 817.006 2668.43 817.006C2674.02 817.006 2678.78 818.964 2682.7 822.881C2686.62 826.798 2688.57 831.555 2688.57 837.151C2688.57 842.747 2686.62 847.503 2682.7 851.42C2678.78 855.337 2674.02 857.296 2668.43 857.296ZM2668.43 803.576C2662.83 803.576 2658.08 801.617 2654.16 797.7C2650.24 793.783 2648.28 789.026 2648.28 783.43C2648.28 777.834 2650.24 773.078 2654.16 769.161C2658.08 765.244 2662.83 763.285 2668.43 763.285C2674.02 763.285 2678.78 765.244 2682.7 769.161C2686.62 773.078 2688.57 777.834 2688.57 783.43C2688.57 789.026 2686.62 793.783 2682.7 797.7C2678.78 801.617 2674.02 803.576 2668.43 803.576ZM2668.43 904.301C2664.62 904.301 2661.43 903.014 2658.86 900.44C2656.29 897.866 2655 894.676 2655 890.871C2655 887.066 2656.29 883.876 2658.86 881.302C2661.43 878.728 2664.62 877.441 2668.43 877.441C2672.23 877.441 2675.42 878.728 2678 881.302C2680.17 883.876 2681.86 887.066 2681.86 890.871C2681.86 894.676 2680.17 897.866 2678 900.44C2675.42 903.014 2672.23 904.301 2668.43 904.301ZM2668.43 743.14C2664.62 743.14 2661.43 741.853 2658.86 739.279C2656.29 736.705 2655 733.515 2655 729.71C2655 725.905 2656.29 722.715 2658.86 720.141C2661.43 717.567 2664.62 716.28 2668.43 716.28C2672.23 716.28 2675.42 717.567 2678 720.141C2680.17 722.715 2681.86 725.905 2681.86 729.71C2681.86 733.515 2680.17 736.705 2678 739.279C2675.42 741.853 2672.23 743.14 2668.43 743.14ZM2668.43 937.877C2666.64 937.877 2665.07 937.205 2663.73 935.862C2662.39 934.519 2661.71 932.952 2661.71 931.161C2661.71 929.371 2662.39 927.804 2663.73 926.461C2665.07 925.118 2666.64 924.446 2668.43 924.446C2670.22 924.446 2671.79 925.118 2673.13 926.461C2674.47 927.804 2675.14 929.371 2675.14 931.161C2675.14 932.952 2674.47 934.519 2673.13 935.862C2671.79 937.205 2670.22 937.877 2668.43 937.877ZM2668.43 696.135C2666.64 696.135 2665.07 695.463 2663.73 694.12C2662.39 692.777 2661.71 691.21 2661.71 689.42C2661.71 687.629 2662.39 686.062 2663.73 684.719C2665.07 683.376 2666.64 682.705 2668.43 682.705C2670.22 682.705 2671.79 683.376 2673.13 684.719C2674.47 686.062 2675.14 687.629 2675.14 689.42C2675.14 691.21 2674.47 692.777 2673.13 694.12C2671.79 695.463 2670.22 696.135 2668.43 696.135ZM2722.15 857.296C2716.55 857.296 2711.8 855.337 2707.88 851.42C2703.96 847.503 2702 842.747 2702 837.151C2702 831.555 2703.96 826.798 2707.88 822.881C2711.8 818.964 2716.55 817.006 2722.15 817.006C2727.75 817.006 2732.5 818.964 2736.42 822.881C2740.34 826.798 2742.29 831.555 2742.29 837.151C2742.29 842.747 2740.34 847.503 2736.42 851.42C2732.5 855.337 2727.75 857.296 2722.15 857.296ZM2722.15 803.576C2716.55 803.576 2711.8 801.617 2707.88 797.7C2703.96 793.783 2702 789.026 2702 783.43C2702 777.834 2703.96 773.078 2707.88 769.161C2711.8 765.244 2716.55 763.285 2722.15 763.285C2727.75 763.285 2732.5 765.244 2736.42 769.161C2740.34 773.078 2742.29 777.834 2742.29 783.43C2742.29 789.026 2740.34 793.783 2736.42 797.7C2732.5 801.617 2727.75 803.576 2722.15 803.576ZM2722.15 904.301C2718.34 904.301 2715.15 903.014 2712.58 900.44C2710.01 897.866 2708.72 894.676 2708.72 890.871C2708.72 887.066 2710.01 883.876 2712.58 881.302C2715.15 878.728 2718.34 877.441 2722.15 877.441C2725.95 877.441 2729.14 878.728 2731.72 881.302C2734.29 883.876 2735.58 887.066 2735.58 890.871C2735.58 894.676 2734.29 897.866 2731.72 900.44C2729.14 903.014 2725.95 904.301 2722.15 904.301ZM2722.15 743.14C2718.34 743.14 2715.15 741.853 2712.58 739.279C2710.01 736.705 2708.72 733.515 2708.72 729.71C2708.72 725.905 2710.01 722.715 2712.58 720.141C2715.15 717.567 2718.34 716.28 2722.15 716.28C2725.95 716.28 2729.14 717.567 2731.72 720.141C2734.29 722.715 2735.58 725.905 2735.58 729.71C2735.58 733.515 2734.29 736.705 2731.72 739.279C2729.14 741.853 2725.95 743.14 2722.15 743.14ZM2722.15 937.877C2720.36 937.877 2718.79 937.205 2717.45 935.862C2716.11 934.519 2715.43 932.952 2715.43 931.161C2715.43 929.371 2716.11 927.804 2717.45 926.461C2718.79 925.118 2720.36 924.446 2722.15 924.446C2723.94 924.446 2725.51 925.118 2726.85 926.461C2728.19 927.804 2728.86 929.371 2728.86 931.161C2728.86 932.952 2728.19 934.519 2726.85 935.862C2725.51 937.205 2723.94 937.877 2722.15 937.877ZM2722.15 696.135C2720.36 696.135 2718.79 695.463 2717.45 694.12C2716.11 692.777 2715.43 691.21 2715.43 689.42C2715.43 687.629 2716.11 686.062 2717.45 684.719C2718.79 683.376 2720.36 682.705 2722.15 682.705C2723.94 682.705 2725.51 683.376 2726.85 684.719C2728.19 686.062 2728.86 687.629 2728.86 689.42C2728.86 691.21 2728.19 692.777 2726.85 694.12C2725.51 695.463 2723.94 696.135 2722.15 696.135ZM2775.87 904.301C2772.06 904.301 2768.87 903.014 2766.3 900.44C2763.73 897.866 2762.44 894.676 2762.44 890.871C2762.44 887.066 2763.73 883.876 2766.3 881.302C2768.87 878.728 2772.06 877.441 2775.87 877.441C2779.67 877.441 2782.86 878.728 2785.44 881.302C2788.01 883.876 2789.3 887.066 2789.3 890.871C2789.3 894.676 2788.01 897.866 2785.44 900.44C2782.86 903.014 2779.67 904.301 2775.87 904.301ZM2775.87 850.181C2772.06 850.181 2768.87 849.294 2766.3 846.72C2763.73 844.146 2762.44 840.956 2762.44 837.151C2762.44 833.346 2763.73 830.156 2766.3 827.582C2768.87 825.008 2772.06 823.721 2775.87 823.721C2779.67 823.721 2782.86 825.008 2785.44 827.582C2788.01 830.156 2789.3 833.346 2789.3 837.151C2789.3 840.956 2788.01 844.146 2785.44 846.72C2782.86 849.294 2779.67 850.181 2775.87 850.181ZM2775.87 796.86C2772.06 796.86 2768.87 795.573 2766.3 792.999C2763.73 790.425 2762.44 787.236 2762.44 783.43C2762.44 779.625 2763.73 776.436 2766.3 773.861C2768.87 771.287 2772.06 770 2775.87 770C2779.67 770 2782.86 771.287 2785.44 773.861C2788.01 776.436 2789.3 779.625 2789.3 783.43C2789.3 787.236 2788.01 790.425 2785.44 792.999C2782.86 795.573 2779.67 796.86 2775.87 796.86ZM2775.87 743.14C2772.06 743.14 2768.87 741.853 2766.3 739.279C2763.73 736.705 2762.44 733.515 2762.44 729.71C2762.44 725.905 2763.73 722.715 2766.3 720.141C2768.87 717.567 2772.06 716.28 2775.87 716.28C2779.67 716.28 2782.86 717.567 2785.44 720.141C2788.01 722.715 2789.3 725.905 2789.3 729.71C2789.3 733.515 2788.01 736.705 2785.44 739.279C2782.86 741.853 2779.67 743.14 2775.87 743.14ZM2816.16 843.866C2814.37 843.866 2812.8 843.194 2811.46 841.851C2810.12 840.108 2809.44 838.941 2809.44 837.151C2809.44 835.36 2810.12 833.793 2811.46 832.45C2812.8 831.107 2814.37 830.436 2816.16 830.436C2817.95 830.436 2819.52 831.107 2820.86 832.45C2822.2 833.793 2822.88 835.36 2822.88 837.151C2822.88 838.941 2822.2 840.108 2820.86 841.851C2819.52 843.194 2817.95 843.866 2816.16 843.866ZM2816.16 790.145C2814.37 790.145 2812.8 789.474 2811.46 788.131C2810.12 786.788 2809.44 785.221 2809.44 783.43C2809.44 781.64 2810.12 780.073 2811.46 778.73C2812.8 777.387 2814.37 776.715 2816.16 776.715C2817.95 776.715 2819.52 777.387 2820.86 778.73C2822.2 780.073 2822.88 781.64 2822.88 783.43C2822.88 785.221 2822.2 786.788 2820.86 788.131C2819.52 789.474 2817.95 790.145 2816.16 790.145Z" />
            </mask>
            <path
              d="M2574.42 843.866C2572.63 843.866 2571.06 843.194 2569.72 841.851C2568.37 840.108 2567.7 838.941 2567.7 837.151C2567.7 835.36 2568.37 833.793 2569.72 832.45C2571.06 831.107 2572.63 830.436 2574.42 830.436C2576.21 830.436 2577.78 831.107 2579.12 832.45C2580.46 833.793 2581.13 835.36 2581.13 837.151C2581.13 838.941 2580.46 840.108 2579.12 841.851C2577.78 843.194 2576.21 843.866 2574.42 843.866ZM2574.42 790.145C2572.63 790.145 2571.06 789.474 2569.72 788.131C2568.37 786.788 2567.7 785.221 2567.7 783.43C2567.7 781.64 2568.37 780.073 2569.72 778.73C2571.06 777.387 2572.63 776.715 2574.42 776.715C2576.21 776.715 2577.78 777.387 2579.12 778.73C2580.46 780.073 2581.13 781.64 2581.13 783.43C2581.13 785.221 2580.46 786.788 2579.12 788.131C2577.78 789.474 2576.21 790.145 2574.42 790.145ZM2614.71 904.301C2610.9 904.301 2607.71 903.014 2605.14 900.44C2602.57 897.866 2601.28 894.676 2601.28 890.871C2601.28 887.066 2602.57 883.876 2605.14 881.302C2607.71 878.728 2610.9 877.441 2614.71 877.441C2618.51 877.441 2621.7 878.728 2624.28 881.302C2626.85 883.876 2628.14 887.066 2628.14 890.871C2628.14 894.676 2626.85 897.866 2624.28 900.44C2621.7 903.014 2618.51 904.301 2614.71 904.301ZM2614.71 850.181C2610.9 850.181 2607.71 849.294 2605.14 846.72C2602.57 844.146 2601.28 840.956 2601.28 837.151C2601.28 833.346 2602.57 830.156 2605.14 827.582C2607.71 825.008 2610.9 823.721 2614.71 823.721C2618.51 823.721 2621.7 825.008 2624.28 827.582C2626.85 830.156 2628.14 833.346 2628.14 837.151C2628.14 840.956 2626.85 844.146 2624.28 846.72C2621.7 849.294 2618.51 850.181 2614.71 850.181ZM2614.71 796.86C2610.9 796.86 2607.71 795.573 2605.14 792.999C2602.57 790.425 2601.28 787.236 2601.28 783.43C2601.28 779.625 2602.57 776.436 2605.14 773.861C2607.71 771.287 2610.9 770 2614.71 770C2618.51 770 2621.7 771.287 2624.28 773.861C2626.85 776.436 2628.14 779.625 2628.14 783.43C2628.14 787.236 2626.85 790.425 2624.28 792.999C2621.7 795.573 2618.51 796.86 2614.71 796.86ZM2614.71 743.14C2610.9 743.14 2607.71 741.853 2605.14 739.279C2602.57 736.705 2601.28 733.515 2601.28 729.71C2601.28 725.905 2602.57 722.715 2605.14 720.141C2607.71 717.567 2610.9 716.28 2614.71 716.28C2618.51 716.28 2621.7 717.567 2624.28 720.141C2626.85 722.715 2628.14 725.905 2628.14 729.71C2628.14 733.515 2626.85 736.705 2624.28 739.279C2621.7 741.853 2618.51 743.14 2614.71 743.14ZM2668.43 857.296C2662.83 857.296 2658.08 855.337 2654.16 851.42C2650.24 847.503 2648.28 842.747 2648.28 837.151C2648.28 831.555 2650.24 826.798 2654.16 822.881C2658.08 818.964 2662.83 817.006 2668.43 817.006C2674.02 817.006 2678.78 818.964 2682.7 822.881C2686.62 826.798 2688.57 831.555 2688.57 837.151C2688.57 842.747 2686.62 847.503 2682.7 851.42C2678.78 855.337 2674.02 857.296 2668.43 857.296ZM2668.43 803.576C2662.83 803.576 2658.08 801.617 2654.16 797.7C2650.24 793.783 2648.28 789.026 2648.28 783.43C2648.28 777.834 2650.24 773.078 2654.16 769.161C2658.08 765.244 2662.83 763.285 2668.43 763.285C2674.02 763.285 2678.78 765.244 2682.7 769.161C2686.62 773.078 2688.57 777.834 2688.57 783.43C2688.57 789.026 2686.62 793.783 2682.7 797.7C2678.78 801.617 2674.02 803.576 2668.43 803.576ZM2668.43 904.301C2664.62 904.301 2661.43 903.014 2658.86 900.44C2656.29 897.866 2655 894.676 2655 890.871C2655 887.066 2656.29 883.876 2658.86 881.302C2661.43 878.728 2664.62 877.441 2668.43 877.441C2672.23 877.441 2675.42 878.728 2678 881.302C2680.17 883.876 2681.86 887.066 2681.86 890.871C2681.86 894.676 2680.17 897.866 2678 900.44C2675.42 903.014 2672.23 904.301 2668.43 904.301ZM2668.43 743.14C2664.62 743.14 2661.43 741.853 2658.86 739.279C2656.29 736.705 2655 733.515 2655 729.71C2655 725.905 2656.29 722.715 2658.86 720.141C2661.43 717.567 2664.62 716.28 2668.43 716.28C2672.23 716.28 2675.42 717.567 2678 720.141C2680.17 722.715 2681.86 725.905 2681.86 729.71C2681.86 733.515 2680.17 736.705 2678 739.279C2675.42 741.853 2672.23 743.14 2668.43 743.14ZM2668.43 937.877C2666.64 937.877 2665.07 937.205 2663.73 935.862C2662.39 934.519 2661.71 932.952 2661.71 931.161C2661.71 929.371 2662.39 927.804 2663.73 926.461C2665.07 925.118 2666.64 924.446 2668.43 924.446C2670.22 924.446 2671.79 925.118 2673.13 926.461C2674.47 927.804 2675.14 929.371 2675.14 931.161C2675.14 932.952 2674.47 934.519 2673.13 935.862C2671.79 937.205 2670.22 937.877 2668.43 937.877ZM2668.43 696.135C2666.64 696.135 2665.07 695.463 2663.73 694.12C2662.39 692.777 2661.71 691.21 2661.71 689.42C2661.71 687.629 2662.39 686.062 2663.73 684.719C2665.07 683.376 2666.64 682.705 2668.43 682.705C2670.22 682.705 2671.79 683.376 2673.13 684.719C2674.47 686.062 2675.14 687.629 2675.14 689.42C2675.14 691.21 2674.47 692.777 2673.13 694.12C2671.79 695.463 2670.22 696.135 2668.43 696.135ZM2722.15 857.296C2716.55 857.296 2711.8 855.337 2707.88 851.42C2703.96 847.503 2702 842.747 2702 837.151C2702 831.555 2703.96 826.798 2707.88 822.881C2711.8 818.964 2716.55 817.006 2722.15 817.006C2727.75 817.006 2732.5 818.964 2736.42 822.881C2740.34 826.798 2742.29 831.555 2742.29 837.151C2742.29 842.747 2740.34 847.503 2736.42 851.42C2732.5 855.337 2727.75 857.296 2722.15 857.296ZM2722.15 803.576C2716.55 803.576 2711.8 801.617 2707.88 797.7C2703.96 793.783 2702 789.026 2702 783.43C2702 777.834 2703.96 773.078 2707.88 769.161C2711.8 765.244 2716.55 763.285 2722.15 763.285C2727.75 763.285 2732.5 765.244 2736.42 769.161C2740.34 773.078 2742.29 777.834 2742.29 783.43C2742.29 789.026 2740.34 793.783 2736.42 797.7C2732.5 801.617 2727.75 803.576 2722.15 803.576ZM2722.15 904.301C2718.34 904.301 2715.15 903.014 2712.58 900.44C2710.01 897.866 2708.72 894.676 2708.72 890.871C2708.72 887.066 2710.01 883.876 2712.58 881.302C2715.15 878.728 2718.34 877.441 2722.15 877.441C2725.95 877.441 2729.14 878.728 2731.72 881.302C2734.29 883.876 2735.58 887.066 2735.58 890.871C2735.58 894.676 2734.29 897.866 2731.72 900.44C2729.14 903.014 2725.95 904.301 2722.15 904.301ZM2722.15 743.14C2718.34 743.14 2715.15 741.853 2712.58 739.279C2710.01 736.705 2708.72 733.515 2708.72 729.71C2708.72 725.905 2710.01 722.715 2712.58 720.141C2715.15 717.567 2718.34 716.28 2722.15 716.28C2725.95 716.28 2729.14 717.567 2731.72 720.141C2734.29 722.715 2735.58 725.905 2735.58 729.71C2735.58 733.515 2734.29 736.705 2731.72 739.279C2729.14 741.853 2725.95 743.14 2722.15 743.14ZM2722.15 937.877C2720.36 937.877 2718.79 937.205 2717.45 935.862C2716.11 934.519 2715.43 932.952 2715.43 931.161C2715.43 929.371 2716.11 927.804 2717.45 926.461C2718.79 925.118 2720.36 924.446 2722.15 924.446C2723.94 924.446 2725.51 925.118 2726.85 926.461C2728.19 927.804 2728.86 929.371 2728.86 931.161C2728.86 932.952 2728.19 934.519 2726.85 935.862C2725.51 937.205 2723.94 937.877 2722.15 937.877ZM2722.15 696.135C2720.36 696.135 2718.79 695.463 2717.45 694.12C2716.11 692.777 2715.43 691.21 2715.43 689.42C2715.43 687.629 2716.11 686.062 2717.45 684.719C2718.79 683.376 2720.36 682.705 2722.15 682.705C2723.94 682.705 2725.51 683.376 2726.85 684.719C2728.19 686.062 2728.86 687.629 2728.86 689.42C2728.86 691.21 2728.19 692.777 2726.85 694.12C2725.51 695.463 2723.94 696.135 2722.15 696.135ZM2775.87 904.301C2772.06 904.301 2768.87 903.014 2766.3 900.44C2763.73 897.866 2762.44 894.676 2762.44 890.871C2762.44 887.066 2763.73 883.876 2766.3 881.302C2768.87 878.728 2772.06 877.441 2775.87 877.441C2779.67 877.441 2782.86 878.728 2785.44 881.302C2788.01 883.876 2789.3 887.066 2789.3 890.871C2789.3 894.676 2788.01 897.866 2785.44 900.44C2782.86 903.014 2779.67 904.301 2775.87 904.301ZM2775.87 850.181C2772.06 850.181 2768.87 849.294 2766.3 846.72C2763.73 844.146 2762.44 840.956 2762.44 837.151C2762.44 833.346 2763.73 830.156 2766.3 827.582C2768.87 825.008 2772.06 823.721 2775.87 823.721C2779.67 823.721 2782.86 825.008 2785.44 827.582C2788.01 830.156 2789.3 833.346 2789.3 837.151C2789.3 840.956 2788.01 844.146 2785.44 846.72C2782.86 849.294 2779.67 850.181 2775.87 850.181ZM2775.87 796.86C2772.06 796.86 2768.87 795.573 2766.3 792.999C2763.73 790.425 2762.44 787.236 2762.44 783.43C2762.44 779.625 2763.73 776.436 2766.3 773.861C2768.87 771.287 2772.06 770 2775.87 770C2779.67 770 2782.86 771.287 2785.44 773.861C2788.01 776.436 2789.3 779.625 2789.3 783.43C2789.3 787.236 2788.01 790.425 2785.44 792.999C2782.86 795.573 2779.67 796.86 2775.87 796.86ZM2775.87 743.14C2772.06 743.14 2768.87 741.853 2766.3 739.279C2763.73 736.705 2762.44 733.515 2762.44 729.71C2762.44 725.905 2763.73 722.715 2766.3 720.141C2768.87 717.567 2772.06 716.28 2775.87 716.28C2779.67 716.28 2782.86 717.567 2785.44 720.141C2788.01 722.715 2789.3 725.905 2789.3 729.71C2789.3 733.515 2788.01 736.705 2785.44 739.279C2782.86 741.853 2779.67 743.14 2775.87 743.14ZM2816.16 843.866C2814.37 843.866 2812.8 843.194 2811.46 841.851C2810.12 840.108 2809.44 838.941 2809.44 837.151C2809.44 835.36 2810.12 833.793 2811.46 832.45C2812.8 831.107 2814.37 830.436 2816.16 830.436C2817.95 830.436 2819.52 831.107 2820.86 832.45C2822.2 833.793 2822.88 835.36 2822.88 837.151C2822.88 838.941 2822.2 840.108 2820.86 841.851C2819.52 843.194 2817.95 843.866 2816.16 843.866ZM2816.16 790.145C2814.37 790.145 2812.8 789.474 2811.46 788.131C2810.12 786.788 2809.44 785.221 2809.44 783.43C2809.44 781.64 2810.12 780.073 2811.46 778.73C2812.8 777.387 2814.37 776.715 2816.16 776.715C2817.95 776.715 2819.52 777.387 2820.86 778.73C2822.2 780.073 2822.88 781.64 2822.88 783.43C2822.88 785.221 2822.2 786.788 2820.86 788.131C2819.52 789.474 2817.95 790.145 2816.16 790.145Z"
              fill="#6A778E"
              stroke="#6A778E"
              stroke-width="0.05"
              mask="url(#path-6-inside-1_95_2490)"
            />
            <path
              d="M2736.09 851.087C2713.89 873.284 2677.9 873.284 2655.7 851.087C2633.51 828.89 2633.51 792.901 2655.7 770.704C2677.9 748.507 2713.89 748.507 2736.09 770.704C2758.28 792.901 2758.28 828.89 2736.09 851.087Z"
              fill="#F0F0F0"
            />
            <path
              d="M2661.68 809.821C2658.19 806.327 2658.19 800.664 2661.68 797.171V797.171C2665.18 793.677 2670.84 793.677 2674.33 797.171L2680.2 803.033C2680.45 803.288 2680.45 803.703 2680.2 803.958L2668.47 815.683C2668.22 815.938 2667.8 815.938 2667.55 815.683L2661.68 809.821Z"
              fill="#020817"
            />
            <rect
              x="2669.29"
              y="817.427"
              width="17.8896"
              height="17.8896"
              transform="rotate(-45 2669.29 817.427)"
              fill="#020817"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2749.06 790.771L2695.85 843.983L2683.2 831.333L2739.7 774.833L2740.37 775.505C2744.12 780.206 2747.01 785.364 2749.06 790.771Z"
              fill="#020817"
            />
            <rect
              x="41"
              y="35"
              width="1272"
              height="1554"
              rx="60"
              fill="#020817"
              stroke="#454F61"
              stroke-width="8"
            />
            <path
              d="M162.149 1480V1457.28H169.989C177.349 1457.28 181.477 1461.38 181.477 1468.67C181.477 1475.94 177.413 1480 170.181 1480H162.149ZM169.989 1475.9C174.373 1475.9 176.453 1473.57 176.453 1468.64C176.453 1463.71 174.373 1461.38 169.989 1461.38H167.013V1475.9H169.989ZM192.638 1480.38C187.39 1480.38 183.998 1476.83 183.998 1471.42C183.998 1466.02 187.39 1462.46 192.606 1462.46C197.694 1462.46 200.99 1465.98 200.99 1471.74V1472.7H188.958C189.054 1475.42 190.494 1476.74 192.734 1476.74C194.334 1476.74 195.454 1476.06 195.934 1474.66L200.766 1474.94C199.838 1478.37 196.766 1480.38 192.638 1480.38ZM196.094 1469.76C195.966 1467.26 194.59 1466.02 192.606 1466.02C190.19 1466.02 189.214 1467.39 188.958 1469.76H196.094ZM208.686 1480C205.902 1480 204.206 1478.69 204.206 1475.52V1457.28H209.006V1475.01C209.006 1476.03 209.486 1476.42 210.382 1476.42H211.534V1480H208.686ZM222.232 1480.38C216.984 1480.38 213.592 1476.83 213.592 1471.42C213.592 1466.02 216.984 1462.46 222.2 1462.46C227.288 1462.46 230.184 1465.98 230.184 1471.74V1472.7H218.552C218.648 1475.42 220.088 1476.74 222.328 1476.74C223.928 1476.74 225.048 1476.06 225.528 1474.66L230.36 1474.94C229.432 1478.37 226.36 1480.38 222.232 1480.38ZM225.688 1469.76C225.56 1467.26 224.184 1466.02 222.2 1466.02C220.184 1466.02 218.808 1467.39 218.552 1469.76H225.688ZM240.216 1480C236.664 1480 235.064 1478.43 235.064 1474.85V1466.43H232.312V1462.85H235.064V1458.82H239.864V1462.85H244.376V1466.43H239.864V1474.27C239.864 1475.94 240.168 1476.42 241.976 1476.42H244.376V1480H240.216ZM254.857 1480.38C249.609 1480.38 246.217 1476.83 246.217 1471.42C246.217 1466.02 249.609 1462.46 254.825 1462.46C259.913 1462.46 263.209 1465.98 263.209 1471.74V1472.7H251.177C251.273 1475.42 252.713 1476.74 254.953 1476.74C256.553 1476.74 257.673 1476.06 258.153 1474.66L262.985 1474.94C262.057 1478.37 258.985 1480.38 254.857 1480.38ZM258.313 1469.76C258.185 1467.26 256.809 1466.02 254.825 1466.02C252.809 1466.02 251.433 1467.39 251.177 1469.76H258.313ZM280.966 1480C277.414 1480 275.814 1478.43 275.814 1474.85V1466.43H273.062V1462.85H275.814V1458.82H280.614V1462.85H285.126V1466.43H280.614V1474.27C280.614 1475.94 281.318 1476.42 282.726 1476.42H285.126V1480H280.966ZM293.327 1480.38C289.743 1480.38 287.311 1478.66 287.311 1475.71C287.311 1472.7 289.199 1471.17 292.943 1470.4L298.479 1469.31C298.479 1467.07 297.455 1465.95 295.535 1465.95C293.743 1465.95 292.719 1466.82 292.399 1468.42L287.599 1468.19C288.239 1464.42 291.087 1462.46 295.535 1462.46C300.655 1462.46 303.279 1464.96 303.279 1469.63V1475.49C303.279 1476.45 303.599 1476.7 304.239 1476.7H304.719V1480C304.399 1480.1 303.663 1480.19 302.991 1480.19C301.231 1480.19 299.663 1479.58 299.247 1477.41C298.351 1479.23 296.239 1480.38 293.327 1480.38ZM294.479 1477.09C296.879 1477.09 298.479 1475.62 298.479 1473.15V1472.32L294.575 1473.15C293.007 1473.47 292.239 1474.14 292.239 1475.26C292.239 1476.42 293.007 1477.09 294.479 1477.09ZM314.847 1480.38C309.535 1480.38 306.879 1477.95 306.623 1474.59L311.487 1474.43C311.775 1476.06 312.799 1476.99 314.879 1476.99C316.575 1476.99 317.599 1476.45 317.599 1475.3C317.599 1474.24 317.023 1473.73 314.111 1473.25C308.671 1472.35 307.039 1470.94 307.039 1467.97C307.039 1464.67 309.567 1462.46 314.655 1462.46C319.487 1462.46 321.983 1464.93 322.399 1468.35L317.599 1468.54C317.375 1466.88 316.319 1465.86 314.591 1465.86C312.895 1465.86 311.967 1466.62 311.967 1467.78C311.967 1469.02 312.799 1469.54 315.167 1469.89C320.671 1470.69 322.527 1472.22 322.527 1475.2C322.527 1478.53 319.551 1480.38 314.847 1480.38ZM325.612 1480V1457.28H330.412V1469.89L336.78 1462.85H342.54L335.884 1469.92L342.732 1480H337.484L332.78 1472.64L330.412 1475.17V1480H325.612Z"
              fill="#F8FAFC"
            />
            <rect
              x="263"
              y="1308"
              width="195"
              height="49"
              rx="24.5"
              fill="#445375"
              stroke="#5E719F"
              stroke-width="2"
            />
            <rect
              x="110"
              y="1308"
              width="115"
              height="51"
              rx="25.5"
              fill="#BA9695"
            />
            <rect
              x="111"
              y="1101"
              width="522"
              height="107"
              rx="17"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <rect
              x="112"
              y="812"
              width="98"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="112"
              y="1048"
              width="501"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="110"
              y="559"
              width="267"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="112"
              y="313"
              width="173"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="112"
              y="130"
              width="173"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="530"
              y="812"
              width="114"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="854"
              y="812"
              width="137"
              height="29"
              rx="8"
              fill="#1E293B"
            />
            <rect
              x="855"
              y="863"
              width="384"
              height="106"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1180.67 899V900.148V902.097H1191.33V900.148V899H1194.53V900.148V902.097H1198.8H1202V905.194V925.839C1202 928.689 1199.61 931 1196.67 931H1175.33C1172.39 931 1170 928.689 1170 925.839V905.194V902.097H1173.2H1177.47V900.148V899H1180.67ZM1173.2 905.194H1198.8V910.355H1173.2V905.194ZM1173.2 913.452V925.839C1173.2 926.979 1174.16 927.903 1175.33 927.903H1196.67C1197.84 927.903 1198.8 926.979 1198.8 925.839V913.452H1173.2Z"
              fill="#DBDBDB"
            />
            <rect
              x="531"
              y="863"
              width="246"
              height="106"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <path
              d="M738 911L747.5 920.1L757 911"
              stroke="#DBDBDB"
              stroke-width="3"
            />
            <rect
              x="113"
              y="863"
              width="340"
              height="106"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <path
              d="M410 911L419.5 920.1L429 911"
              stroke="#DBDBDB"
              stroke-width="3"
            />
            <rect
              x="111"
              y="611"
              width="150"
              height="81"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <rect
              x="113"
              y="367"
              width="1126"
              height="120"
              rx="15"
              fill="#454F61"
              stroke="#0F1525"
              stroke-width="2"
            />
            <rect
              x="110"
              y="191"
              width="1130"
              height="65"
              rx="8"
              fill="#454F61"
            />
            <rect
              x="112"
              y="1425"
              width="365"
              height="87"
              rx="8"
              fill="#3C82F6"
            />
            <path
              d="M235 647L244.5 656.5L254 647"
              stroke="#DBDBDB"
              stroke-width="3"
            />
            <path
              d="M1219 89L1256 126M1256 89L1219 126"
              stroke="white"
              stroke-width="5"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path d="M1317 794L2597 795" stroke="#E2E8F0" stroke-width="20" />
            <circle
              cx="1844.9"
              cy="812"
              r="317.895"
              fill="white"
              stroke="#E2E8F0"
              stroke-width="10"
            />
            <path
              d="M1980.95 701.007C1982.65 702.715 1983.6 705.027 1983.6 707.438C1983.6 709.848 1982.65 712.161 1980.95 713.868L1961.95 732.885L1925.52 696.453L1944.51 677.436C1946.22 675.729 1948.54 674.77 1950.95 674.77C1953.37 674.77 1955.69 675.729 1957.39 677.436L1980.95 700.989V701.007ZM1949.07 745.745L1912.64 709.314L1788.53 833.436C1787.53 834.438 1786.78 835.661 1786.33 837.006L1771.67 880.979C1771.4 881.781 1771.36 882.641 1771.56 883.463C1771.75 884.284 1772.17 885.036 1772.77 885.633C1773.36 886.23 1774.12 886.65 1774.94 886.844C1775.76 887.039 1776.62 887.001 1777.42 886.735L1821.39 872.072C1822.74 871.63 1823.96 870.882 1824.96 869.886L1949.07 745.745Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1716.78 911.582C1716.78 918.829 1719.66 925.778 1724.78 930.903C1729.91 936.027 1736.86 938.906 1744.1 938.906H1944.48C1951.73 938.906 1958.67 936.027 1963.8 930.903C1968.92 925.778 1971.8 918.829 1971.8 911.582V802.287C1971.8 799.872 1970.84 797.555 1969.13 795.847C1967.43 794.139 1965.11 793.179 1962.69 793.179C1960.28 793.179 1957.96 794.139 1956.25 795.847C1954.55 797.555 1953.59 799.872 1953.59 802.287V911.582C1953.59 913.997 1952.63 916.314 1950.92 918.022C1949.21 919.73 1946.89 920.69 1944.48 920.69H1744.1C1741.69 920.69 1739.37 919.73 1737.66 918.022C1735.96 916.314 1735 913.997 1735 911.582V711.208C1735 708.793 1735.96 706.476 1737.66 704.768C1739.37 703.06 1741.69 702.101 1744.1 702.101H1862.51C1864.92 702.101 1867.24 701.141 1868.95 699.433C1870.66 697.725 1871.62 695.408 1871.62 692.993C1871.62 690.177 1870.66 688.26 1868.95 686.552C1867.24 684.844 1864.92 683.885 1862.51 683.885H1744.1C1736.86 683.885 1729.91 686.764 1724.78 691.888C1719.66 697.012 1716.78 703.962 1716.78 711.208V911.582Z"
              fill="black"
            />
            <circle
              cx="2695.9"
              cy="811.895"
              r="317.895"
              fill="white"
              stroke="#E2E8F0"
              stroke-width="10"
            />
            <path
              d="M2574.42 844.866C2572.63 844.866 2571.06 844.194 2569.72 842.851C2568.37 841.508 2567.7 839.941 2567.7 838.151C2567.7 836.36 2568.37 834.793 2569.72 833.45C2571.06 832.107 2572.63 831.436 2574.42 831.436C2576.21 831.436 2577.78 832.107 2579.12 833.45C2580.46 834.793 2581.13 836.36 2581.13 838.151C2581.13 839.941 2580.46 841.508 2579.12 842.851C2577.78 844.194 2576.21 844.866 2574.42 844.866ZM2574.42 791.145C2572.63 791.145 2571.06 790.474 2569.72 789.131C2568.37 787.788 2567.7 786.221 2567.7 784.43C2567.7 782.64 2568.37 781.073 2569.72 779.73C2571.06 778.387 2572.63 777.715 2574.42 777.715C2576.21 777.715 2577.78 778.387 2579.12 779.73C2580.46 781.073 2581.13 782.64 2581.13 784.43C2581.13 786.221 2580.46 787.788 2579.12 789.131C2577.78 790.474 2576.21 791.145 2574.42 791.145ZM2614.71 905.301C2610.9 905.301 2607.71 904.014 2605.14 901.44C2602.57 898.866 2601.28 895.676 2601.28 891.871C2601.28 888.066 2602.57 884.876 2605.14 882.302C2607.71 879.728 2610.9 878.441 2614.71 878.441C2618.51 878.441 2621.7 879.728 2624.28 882.302C2626.85 884.876 2628.14 888.066 2628.14 891.871C2628.14 895.676 2626.85 898.866 2624.28 901.44C2621.7 904.014 2618.51 905.301 2614.71 905.301ZM2614.71 851.581C2610.9 851.581 2607.71 850.294 2605.14 847.72C2602.57 845.145 2601.28 841.956 2601.28 838.151C2601.28 834.345 2602.57 831.156 2605.14 828.582C2607.71 826.008 2610.9 824.721 2614.71 824.721C2618.51 824.721 2621.7 826.008 2624.28 828.582C2626.85 831.156 2628.14 834.345 2628.14 838.151C2628.14 841.956 2626.85 845.145 2624.28 847.72C2621.7 850.294 2618.51 851.581 2614.71 851.581ZM2614.71 797.86C2610.9 797.86 2607.71 796.573 2605.14 793.999C2602.57 791.425 2601.28 788.235 2601.28 784.43C2601.28 780.625 2602.57 777.435 2605.14 774.861C2607.71 772.287 2610.9 771 2614.71 771C2618.51 771 2621.7 772.287 2624.28 774.861C2626.85 777.435 2628.14 780.625 2628.14 784.43C2628.14 788.235 2626.85 791.425 2624.28 793.999C2621.7 796.573 2618.51 797.86 2614.71 797.86ZM2614.71 744.14C2610.9 744.14 2607.71 742.853 2605.14 740.279C2602.57 737.705 2601.28 734.515 2601.28 730.71C2601.28 726.905 2602.57 723.715 2605.14 721.141C2607.71 718.567 2610.9 717.28 2614.71 717.28C2618.51 717.28 2621.7 718.567 2624.28 721.141C2626.85 723.715 2628.14 726.905 2628.14 730.71C2628.14 734.515 2626.85 737.705 2624.28 740.279C2621.7 742.853 2618.51 744.14 2614.71 744.14ZM2668.43 858.296C2662.83 858.296 2658.08 856.337 2654.16 852.42C2650.24 848.503 2648.28 843.746 2648.28 838.151C2648.28 832.555 2650.24 827.798 2654.16 823.881C2658.08 819.964 2662.83 818.005 2668.43 818.005C2674.02 818.005 2678.78 819.964 2682.7 823.881C2686.62 827.798 2688.57 832.555 2688.57 838.151C2688.57 843.746 2686.62 848.503 2682.7 852.42C2678.78 856.337 2674.02 858.296 2668.43 858.296ZM2668.43 804.575C2662.83 804.575 2658.08 802.617 2654.16 798.7C2650.24 794.783 2648.28 790.026 2648.28 784.43C2648.28 778.834 2650.24 774.078 2654.16 770.161C2658.08 766.244 2662.83 764.285 2668.43 764.285C2674.02 764.285 2678.78 766.244 2682.7 770.161C2686.62 774.078 2688.57 778.834 2688.57 784.43C2688.57 790.026 2686.62 794.783 2682.7 798.7C2678.78 802.617 2674.02 804.575 2668.43 804.575ZM2668.43 905.301C2664.62 905.301 2661.43 904.014 2658.86 901.44C2656.29 898.866 2655 895.676 2655 891.871C2655 888.066 2656.29 884.876 2658.86 882.302C2661.43 879.728 2664.62 878.441 2668.43 878.441C2672.23 878.441 2675.42 879.728 2678 882.302C2680.17 884.876 2681.86 888.066 2681.86 891.871C2681.86 895.676 2680.17 898.866 2678 901.44C2675.42 904.014 2672.23 905.301 2668.43 905.301ZM2668.43 744.14C2664.62 744.14 2661.43 742.853 2658.86 740.279C2656.29 737.705 2655 734.515 2655 730.71C2655 726.905 2656.29 723.715 2658.86 721.141C2661.43 718.567 2664.62 717.28 2668.43 717.28C2672.23 717.28 2675.42 718.567 2678 721.141C2680.17 723.715 2681.86 726.905 2681.86 730.71C2681.86 734.515 2680.17 737.705 2678 740.279C2675.42 742.853 2672.23 744.14 2668.43 744.14ZM2668.43 938.876C2666.64 938.876 2665.07 938.205 2663.73 936.862C2662.39 935.519 2661.71 933.952 2661.71 932.161C2661.71 930.371 2662.39 928.804 2663.73 927.461C2665.07 926.118 2666.64 925.446 2668.43 925.446C2670.22 925.446 2671.79 926.118 2673.13 927.461C2674.47 928.804 2675.14 930.371 2675.14 932.161C2675.14 933.952 2674.47 935.519 2673.13 936.862C2671.79 938.205 2670.22 938.876 2668.43 938.876ZM2668.43 697.135C2666.64 697.135 2665.07 696.463 2663.73 695.12C2662.39 693.777 2661.71 692.21 2661.71 690.42C2661.71 688.629 2662.39 687.062 2663.73 685.719C2665.07 684.376 2666.64 683.705 2668.43 683.705C2670.22 683.705 2671.79 684.376 2673.13 685.719C2674.47 687.062 2675.14 688.629 2675.14 690.42C2675.14 692.21 2674.47 693.777 2673.13 695.12C2671.79 696.463 2670.22 697.135 2668.43 697.135ZM2722.15 858.296C2716.55 858.296 2711.8 856.337 2707.88 852.42C2703.96 848.503 2702 843.746 2702 838.151C2702 832.555 2703.96 827.798 2707.88 823.881C2711.8 819.964 2716.55 818.005 2722.15 818.005C2727.75 818.005 2732.5 819.964 2736.42 823.881C2740.34 827.798 2742.29 832.555 2742.29 838.151C2742.29 843.746 2740.34 848.503 2736.42 852.42C2732.5 856.337 2727.75 858.296 2722.15 858.296ZM2722.15 804.575C2716.55 804.575 2711.8 802.617 2707.88 798.7C2703.96 794.783 2702 790.026 2702 784.43C2702 778.834 2703.96 774.078 2707.88 770.161C2711.8 766.244 2716.55 764.285 2722.15 764.285C2727.75 764.285 2732.5 766.244 2736.42 770.161C2740.34 774.078 2742.29 778.834 2742.29 784.43C2742.29 790.026 2740.34 794.783 2736.42 798.7C2732.5 802.617 2727.75 804.575 2722.15 804.575ZM2722.15 905.301C2718.34 905.301 2715.15 904.014 2712.58 901.44C2710.01 898.866 2708.72 895.676 2708.72 891.871C2708.72 888.066 2710.01 884.876 2712.58 882.302C2715.15 879.728 2718.34 878.441 2722.15 878.441C2725.95 878.441 2729.14 879.728 2731.72 882.302C2734.29 884.876 2735.58 888.066 2735.58 891.871C2735.58 895.676 2734.29 898.866 2731.72 901.44C2729.14 904.014 2725.95 905.301 2722.15 905.301ZM2722.15 744.14C2718.34 744.14 2715.15 742.853 2712.58 740.279C2710.01 737.705 2708.72 734.515 2708.72 730.71C2708.72 726.905 2710.01 723.715 2712.58 721.141C2715.15 718.567 2718.34 717.28 2722.15 717.28C2725.95 717.28 2729.14 718.567 2731.72 721.141C2734.29 723.715 2735.58 726.905 2735.58 730.71C2735.58 734.515 2734.29 737.705 2731.72 740.279C2729.14 742.853 2725.95 744.14 2722.15 744.14ZM2722.15 938.876C2720.36 938.876 2718.79 938.205 2717.45 936.862C2716.11 935.519 2715.43 933.952 2715.43 932.161C2715.43 930.371 2716.11 928.804 2717.45 927.461C2718.79 926.118 2720.36 925.446 2722.15 925.446C2723.94 925.446 2725.51 926.118 2726.85 927.461C2728.19 928.804 2728.86 930.371 2728.86 932.161C2728.86 933.952 2728.19 935.519 2726.85 936.862C2725.51 938.205 2723.94 938.876 2722.15 938.876ZM2722.15 697.135C2720.36 697.135 2718.79 696.463 2717.45 695.12C2716.11 693.777 2715.43 692.21 2715.43 690.42C2715.43 688.629 2716.11 687.062 2717.45 685.719C2718.79 684.376 2720.36 683.705 2722.15 683.705C2723.94 683.705 2725.51 684.376 2726.85 685.719C2728.19 687.062 2728.86 688.629 2728.86 690.42C2728.86 692.21 2728.19 693.777 2726.85 695.12C2725.51 696.463 2723.94 697.135 2722.15 697.135ZM2775.87 905.301C2772.06 905.301 2768.87 904.014 2766.3 901.44C2763.73 898.866 2762.44 895.676 2762.44 891.871C2762.44 888.066 2763.73 884.876 2766.3 882.302C2768.87 879.728 2772.06 878.441 2775.87 878.441C2779.67 878.441 2782.86 879.728 2785.44 882.302C2788.01 884.876 2789.3 888.066 2789.3 891.871C2789.3 895.676 2788.01 898.866 2785.44 901.44C2782.86 904.014 2779.67 905.301 2775.87 905.301ZM2775.87 851.581C2772.06 851.581 2768.87 850.294 2766.3 847.72C2763.73 845.145 2762.44 841.956 2762.44 838.151C2762.44 834.345 2763.73 831.156 2766.3 828.582C2768.87 826.008 2772.06 824.721 2775.87 824.721C2779.67 824.721 2782.86 826.008 2785.44 828.582C2788.01 831.156 2789.3 834.345 2789.3 838.151C2789.3 841.956 2788.01 845.145 2785.44 847.72C2782.86 850.294 2779.67 851.581 2775.87 851.581ZM2775.87 797.86C2772.06 797.86 2768.87 796.573 2766.3 793.999C2763.73 791.425 2762.44 788.235 2762.44 784.43C2762.44 780.625 2763.73 777.435 2766.3 774.861C2768.87 772.287 2772.06 771 2775.87 771C2779.67 771 2782.86 772.287 2785.44 774.861C2788.01 777.435 2789.3 780.625 2789.3 784.43C2789.3 788.235 2788.01 791.425 2785.44 793.999C2782.86 796.573 2779.67 797.86 2775.87 797.86ZM2775.87 744.14C2772.06 744.14 2768.87 742.853 2766.3 740.279C2763.73 737.705 2762.44 734.515 2762.44 730.71C2762.44 726.905 2763.73 723.715 2766.3 721.141C2768.87 718.567 2772.06 717.28 2775.87 717.28C2779.67 717.28 2782.86 718.567 2785.44 721.141C2788.01 723.715 2789.3 726.905 2789.3 730.71C2789.3 734.515 2788.01 737.705 2785.44 740.279C2782.86 742.853 2779.67 744.14 2775.87 744.14ZM2816.16 844.866C2814.37 844.866 2812.8 844.194 2811.46 842.851C2810.12 841.508 2809.44 839.941 2809.44 838.151C2809.44 836.36 2810.12 834.793 2811.46 833.45C2812.8 832.107 2814.37 831.436 2816.16 831.436C2817.95 831.436 2819.52 832.107 2820.86 833.45C2822.2 834.793 2822.87 836.36 2822.87 838.151C2822.87 839.941 2822.2 841.508 2820.86 842.851C2819.52 844.194 2817.95 844.866 2816.16 844.866ZM2816.16 791.145C2814.37 791.145 2812.8 790.474 2811.46 789.131C2810.12 787.788 2809.44 786.221 2809.44 784.43C2809.44 782.64 2810.12 781.073 2811.46 779.73C2812.8 778.387 2814.37 777.715 2816.16 777.715C2817.95 777.715 2819.52 778.387 2820.86 779.73C2822.2 781.073 2822.87 782.64 2822.87 784.43C2822.87 786.221 2822.2 787.788 2820.86 789.131C2819.52 790.474 2817.95 791.145 2816.16 791.145Z"
              fill="black"
            />
            <path
              d="M2737.8 853.797C2714.65 876.938 2677.13 876.938 2653.99 853.797C2630.85 830.655 2630.85 793.135 2653.99 769.993C2677.13 746.852 2714.65 746.852 2737.8 769.993C2760.94 793.135 2760.94 830.655 2737.8 853.797Z"
              fill="black"
            />
            <path
              d="M2660.23 810.775C2656.59 807.133 2656.59 801.228 2660.23 797.587V797.587C2663.87 793.945 2669.78 793.945 2673.42 797.587L2679.53 803.698C2679.8 803.965 2679.8 804.397 2679.53 804.663L2667.31 816.886C2667.04 817.153 2666.61 817.153 2666.34 816.886L2660.23 810.775Z"
              fill="white"
            />
            <rect
              x="2668.16"
              y="818.705"
              width="18.6509"
              height="18.6509"
              transform="rotate(-45 2668.16 818.705)"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2751.32 790.917L2695.84 846.392L2682.66 833.203L2741.56 774.298L2742.25 774.99C2746.17 779.894 2749.19 785.276 2751.32 790.917Z"
              fill="white"
            />
            <rect
              x="41"
              y="33"
              width="1272"
              height="1554"
              rx="60"
              fill="white"
              stroke="#E2E8F0"
              stroke-width="8"
            />
            <path
              d="M162.149 1478V1455.28H169.989C177.349 1455.28 181.477 1459.38 181.477 1466.67C181.477 1473.94 177.413 1478 170.181 1478H162.149ZM169.989 1473.9C174.373 1473.9 176.453 1471.57 176.453 1466.64C176.453 1461.71 174.373 1459.38 169.989 1459.38H167.013V1473.9H169.989ZM192.638 1478.38C187.39 1478.38 183.998 1474.83 183.998 1469.42C183.998 1464.02 187.39 1460.46 192.606 1460.46C197.694 1460.46 200.99 1463.98 200.99 1469.74V1470.7H188.958C189.054 1473.42 190.494 1474.74 192.734 1474.74C194.334 1474.74 195.454 1474.06 195.934 1472.66L200.766 1472.94C199.838 1476.37 196.766 1478.38 192.638 1478.38ZM196.094 1467.76C195.966 1465.26 194.59 1464.02 192.606 1464.02C190.19 1464.02 189.214 1465.39 188.958 1467.76H196.094ZM208.686 1478C205.902 1478 204.206 1476.69 204.206 1473.52V1455.28H209.006V1473.01C209.006 1474.03 209.486 1474.42 210.382 1474.42H211.534V1478H208.686ZM222.232 1478.38C216.984 1478.38 213.592 1474.83 213.592 1469.42C213.592 1464.02 216.984 1460.46 222.2 1460.46C227.288 1460.46 230.184 1463.98 230.184 1469.74V1470.7H218.552C218.648 1473.42 220.088 1474.74 222.328 1474.74C223.928 1474.74 225.048 1474.06 225.528 1472.66L230.36 1472.94C229.432 1476.37 226.36 1478.38 222.232 1478.38ZM225.688 1467.76C225.56 1465.26 224.184 1464.02 222.2 1464.02C220.184 1464.02 218.808 1465.39 218.552 1467.76H225.688ZM240.216 1478C236.664 1478 235.064 1476.43 235.064 1472.85V1464.43H232.312V1460.85H235.064V1456.82H239.864V1460.85H244.376V1464.43H239.864V1472.27C239.864 1473.94 240.168 1474.42 241.976 1474.42H244.376V1478H240.216ZM254.857 1478.38C249.609 1478.38 246.217 1474.83 246.217 1469.42C246.217 1464.02 249.609 1460.46 254.825 1460.46C259.913 1460.46 263.209 1463.98 263.209 1469.74V1470.7H251.177C251.273 1473.42 252.713 1474.74 254.953 1474.74C256.553 1474.74 257.673 1474.06 258.153 1472.66L262.985 1472.94C262.057 1476.37 258.985 1478.38 254.857 1478.38ZM258.313 1467.76C258.185 1465.26 256.809 1464.02 254.825 1464.02C252.809 1464.02 251.433 1465.39 251.177 1467.76H258.313ZM280.966 1478C277.414 1478 275.814 1476.43 275.814 1472.85V1464.43H273.062V1460.85H275.814V1456.82H280.614V1460.85H285.126V1464.43H280.614V1472.27C280.614 1473.94 281.318 1474.42 282.726 1474.42H285.126V1478H280.966ZM293.327 1478.38C289.743 1478.38 287.311 1476.66 287.311 1473.71C287.311 1470.7 289.199 1469.17 292.943 1468.4L298.479 1467.31C298.479 1465.07 297.455 1463.95 295.535 1463.95C293.743 1463.95 292.719 1464.82 292.399 1466.42L287.599 1466.19C288.239 1462.42 291.087 1460.46 295.535 1460.46C300.655 1460.46 303.279 1462.96 303.279 1467.63V1473.49C303.279 1474.45 303.599 1474.7 304.239 1474.7H304.719V1478C304.399 1478.1 303.663 1478.19 302.991 1478.19C301.231 1478.19 299.663 1477.58 299.247 1475.41C298.351 1477.23 296.239 1478.38 293.327 1478.38ZM294.479 1475.09C296.879 1475.09 298.479 1473.62 298.479 1471.15V1470.32L294.575 1471.15C293.007 1471.47 292.239 1472.14 292.239 1473.26C292.239 1474.42 293.007 1475.09 294.479 1475.09ZM314.847 1478.38C309.535 1478.38 306.879 1475.95 306.623 1472.59L311.487 1472.43C311.775 1474.06 312.799 1474.99 314.879 1474.99C316.575 1474.99 317.599 1474.45 317.599 1473.3C317.599 1472.24 317.023 1471.73 314.111 1471.25C308.671 1470.35 307.039 1468.94 307.039 1465.97C307.039 1462.67 309.567 1460.46 314.655 1460.46C319.487 1460.46 321.983 1462.93 322.399 1466.35L317.599 1466.54C317.375 1464.88 316.319 1463.86 314.591 1463.86C312.895 1463.86 311.967 1464.62 311.967 1465.78C311.967 1467.02 312.799 1467.54 315.167 1467.89C320.671 1468.69 322.527 1470.22 322.527 1473.2C322.527 1476.53 319.551 1478.38 314.847 1478.38ZM325.612 1478V1455.28H330.412V1467.89L336.78 1460.85H342.54L335.884 1467.92L342.732 1478H337.484L332.78 1470.64L330.412 1473.17V1478H325.612Z"
              fill="#F8FAFC"
            />
            <rect
              x="263"
              y="1306"
              width="195"
              height="49"
              rx="24.5"
              fill="#CFD9F1"
              stroke="#BAC5DD"
              stroke-width="2"
            />
            <rect
              x="110"
              y="1306"
              width="115"
              height="51"
              rx="25.5"
              fill="#FEE2E1"
            />
            <rect
              x="109"
              y="1099"
              width="522"
              height="107"
              rx="17"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <rect
              x="112"
              y="810"
              width="98"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="110"
              y="1046"
              width="501"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="112"
              y="557"
              width="267"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="112"
              y="311"
              width="173"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="110"
              y="128"
              width="173"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="528"
              y="810"
              width="114"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="852"
              y="810"
              width="137"
              height="29"
              rx="8"
              fill="#DDE4F5"
            />
            <rect
              x="853"
              y="861"
              width="384"
              height="106"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1178.67 897V898.548V900.097H1189.33V898.548V897H1192.53V898.548V900.097H1196.8H1200V903.194V923.839C1200 926.689 1197.61 929 1194.67 929H1173.33C1170.39 929 1168 926.689 1168 923.839V903.194V900.097H1171.2H1175.47V898.548V897H1178.67ZM1171.2 903.194H1196.8V908.355H1171.2V903.194ZM1171.2 911.452V923.839C1171.2 924.979 1172.16 925.903 1173.33 925.903H1194.67C1195.84 925.903 1196.8 924.979 1196.8 923.839V911.452H1171.2Z"
              fill="#020817"
            />
            <rect
              x="529"
              y="861"
              width="246"
              height="106"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <path
              d="M736 909L745.5 918.5L755 909"
              stroke="black"
              stroke-width="3"
            />
            <rect
              x="111"
              y="861"
              width="340"
              height="106"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <path
              d="M408 909L417.5 918.5L427 909"
              stroke="black"
              stroke-width="3"
            />
            <rect
              x="113"
              y="609"
              width="150"
              height="81"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <rect
              x="113"
              y="362"
              width="1143"
              height="126"
              rx="15"
              fill="#E2E8F0"
              stroke="#D4D4D4"
              stroke-width="2"
            />
            <rect
              x="112"
              y="178"
              width="1128"
              height="65"
              rx="8"
              fill="#E2E8F0"
            />
            <rect
              x="112"
              y="1423"
              width="365"
              height="87"
              rx="8"
              fill="#2463EB"
            />
            <path
              d="M235 645L244.5 654.5L254 645"
              stroke="black"
              stroke-width="3"
            />
            <path
              d="M1222 80L1253 111M1253 80L1222 111"
              stroke="black"
              stroke-width="4"
            />
          </svg>
        </>
      )}
    </>
  );
};
export const LearnMoreTaskSummary = ({
  className = "",
}: {
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();

  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <g opacity="0.75" filter="url(#filter0_f_96_3339)">
              <rect
                x="764.625"
                y="229"
                width="1517.2"
                height="477.154"
                rx="64"
                fill="#020817"
              />
              <rect
                x="767.125"
                y="231.5"
                width="1512.2"
                height="472.154"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.88"
                stroke-width="5"
              />
              <rect
                x="836.656"
                y="570.008"
                width="306.949"
                height="90.7387"
                rx="45.3693"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="1187.11"
                y="570.008"
                width="523.16"
                height="90.7387"
                rx="45.3693"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="839.039"
                y="386.648"
                width="1190.14"
                height="67.2619"
                rx="33.6309"
                fill="#454F61"
              />
              <rect
                x="586.555"
                y="288.16"
                width="1873.47"
                height="589.199"
                rx="64"
                fill="#020817"
              />
              <rect
                x="589.055"
                y="290.66"
                width="1868.47"
                height="584.199"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.91"
                stroke-width="5"
              />
              <rect
                x="676.211"
                y="708.598"
                width="377.852"
                height="110.872"
                rx="55.4358"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="1108.79"
                y="708.598"
                width="644.833"
                height="110.872"
                rx="55.4358"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="678.445"
                y="481.598"
                width="1470.09"
                height="83.0562"
                rx="41.5281"
                fill="#454F61"
              />
              <rect
                x="451.391"
                y="356.551"
                width="2143.74"
                height="674.198"
                rx="64"
                fill="#020817"
              />
              <rect
                x="453.891"
                y="359.051"
                width="2138.74"
                height="669.198"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.94"
                stroke-width="5"
              />
              <rect
                x="554.297"
                y="810.992"
                width="431.641"
                height="126.145"
                rx="63.0724"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="1049.31"
                y="810.992"
                width="737.137"
                height="126.145"
                rx="63.0724"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="556.562"
                y="550.875"
                width="1682.17"
                height="95.0381"
                rx="47.519"
                fill="#454F61"
              />
              <rect
                x="303.969"
                y="439.605"
                width="2432.44"
                height="764.992"
                rx="64"
                fill="#020817"
              />
              <rect
                x="306.469"
                y="442.105"
                width="2427.44"
                height="759.992"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.97"
                stroke-width="5"
              />
              <rect
                x="421.055"
                y="924.012"
                width="489.097"
                height="142.46"
                rx="66.5"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="982.82"
                y="924.012"
                width="835.734"
                height="142.46"
                rx="66.5"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="423.242"
                y="628.508"
                width="1908.71"
                height="107.837"
                rx="53.9184"
                fill="#454F61"
              />
              <rect
                x="131.258"
                y="533.309"
                width="2781.01"
                height="871.188"
                rx="61.5"
                fill="#020817"
                stroke="#E2E8F0"
                stroke-width="5"
              />
              <rect
                x="263.195"
                y="1055.37"
                width="559.463"
                height="162.44"
                rx="81.22"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="906.656"
                y="1055.37"
                width="956.486"
                height="162.44"
                rx="81.22"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="265.383"
                y="716.613"
                width="2186.16"
                height="123.512"
                rx="8"
                fill="#454F61"
              />
            </g>
            <g filter="url(#filter1_dddd_96_3339)">
              <mask id="path-25-inside-1_96_3339" fill="white">
                <path d="M2162.64 164.488C2059.59 164.488 1975.47 248.605 1975.47 351.649C1975.47 400.016 1994.4 442.075 2021.74 475.722L1786.21 852.146C1769.39 847.94 1752.56 845.837 1733.64 845.837C1699.99 845.837 1668.45 854.249 1641.11 871.072L1458.15 694.426C1472.88 669.191 1479.18 637.647 1479.18 606.103C1479.18 503.06 1395.07 418.943 1292.02 418.943C1188.98 418.943 1104.86 503.06 1104.86 606.103C1104.86 654.47 1121.69 696.529 1151.13 730.176L928.217 1091.88C911.393 1087.67 894.57 1085.57 877.747 1085.57C774.703 1085.57 690.186 1169.69 690.186 1272.73C690.186 1375.77 774.703 1459.89 877.747 1459.89C980.79 1459.89 1064.91 1375.77 1064.91 1272.73C1064.91 1224.36 1048.08 1182.31 1018.64 1148.66L1245.76 789.058C1262.58 793.264 1279.41 795.367 1296.23 795.367C1329.88 795.367 1361.42 786.955 1388.76 770.132L1571.71 946.778C1556.99 972.013 1550.68 1001.45 1550.68 1033C1550.68 1136.04 1634.8 1220.16 1737.84 1220.16C1840.89 1220.16 1925 1136.04 1925 1033C1925 984.63 1908.18 942.572 1878.74 908.925L2116.37 532.501C2133.19 536.707 2150.02 538.809 2166.84 538.809C2269.88 538.809 2354 454.692 2354 351.649C2351.9 248.605 2267.78 164.488 2162.64 164.488ZM875.644 1354.75C829.379 1354.75 793.629 1316.89 793.629 1272.73C793.629 1226.47 831.482 1190.72 875.644 1190.72C890.364 1190.72 902.982 1194.92 915.599 1201.23C915.599 1201.23 917.702 1201.23 917.702 1203.33C919.805 1203.33 919.805 1205.44 921.908 1205.44C942.937 1220.16 957.658 1245.39 957.658 1272.73C957.658 1316.89 921.908 1354.75 875.644 1354.75ZM1212.11 606.103C1212.11 561.942 1249.96 524.089 1294.13 524.089C1338.29 524.089 1376.14 561.942 1376.14 606.103C1376.14 629.235 1367.73 648.162 1353.01 662.882C1338.29 677.603 1317.26 688.117 1294.13 688.117C1247.86 688.117 1212.11 652.368 1212.11 606.103ZM1735.74 1115.01C1689.48 1115.01 1653.73 1077.16 1653.73 1033C1653.73 1011.97 1662.14 990.939 1676.86 976.218C1676.86 976.218 1676.86 976.218 1678.96 974.116C1693.68 959.395 1714.71 950.983 1735.74 950.983C1782.01 950.983 1817.76 988.836 1817.76 1033C1817.76 1077.16 1779.9 1115.01 1735.74 1115.01ZM2162.64 433.663C2116.37 433.663 2080.62 395.81 2080.62 351.649C2080.62 305.384 2118.47 269.635 2162.64 269.635C2208.9 269.635 2244.65 307.487 2244.65 351.649C2246.75 395.81 2208.9 433.663 2162.64 433.663Z" />
              </mask>
              <path
                d="M2162.64 164.488C2059.59 164.488 1975.47 248.605 1975.47 351.649C1975.47 400.016 1994.4 442.075 2021.74 475.722L1786.21 852.146C1769.39 847.94 1752.56 845.837 1733.64 845.837C1699.99 845.837 1668.45 854.249 1641.11 871.072L1458.15 694.426C1472.88 669.191 1479.18 637.647 1479.18 606.103C1479.18 503.06 1395.07 418.943 1292.02 418.943C1188.98 418.943 1104.86 503.06 1104.86 606.103C1104.86 654.47 1121.69 696.529 1151.13 730.176L928.217 1091.88C911.393 1087.67 894.57 1085.57 877.747 1085.57C774.703 1085.57 690.186 1169.69 690.186 1272.73C690.186 1375.77 774.703 1459.89 877.747 1459.89C980.79 1459.89 1064.91 1375.77 1064.91 1272.73C1064.91 1224.36 1048.08 1182.31 1018.64 1148.66L1245.76 789.058C1262.58 793.264 1279.41 795.367 1296.23 795.367C1329.88 795.367 1361.42 786.955 1388.76 770.132L1571.71 946.778C1556.99 972.013 1550.68 1001.45 1550.68 1033C1550.68 1136.04 1634.8 1220.16 1737.84 1220.16C1840.89 1220.16 1925 1136.04 1925 1033C1925 984.63 1908.18 942.572 1878.74 908.925L2116.37 532.501C2133.19 536.707 2150.02 538.809 2166.84 538.809C2269.88 538.809 2354 454.692 2354 351.649C2351.9 248.605 2267.78 164.488 2162.64 164.488ZM875.644 1354.75C829.379 1354.75 793.629 1316.89 793.629 1272.73C793.629 1226.47 831.482 1190.72 875.644 1190.72C890.364 1190.72 902.982 1194.92 915.599 1201.23C915.599 1201.23 917.702 1201.23 917.702 1203.33C919.805 1203.33 919.805 1205.44 921.908 1205.44C942.937 1220.16 957.658 1245.39 957.658 1272.73C957.658 1316.89 921.908 1354.75 875.644 1354.75ZM1212.11 606.103C1212.11 561.942 1249.96 524.089 1294.13 524.089C1338.29 524.089 1376.14 561.942 1376.14 606.103C1376.14 629.235 1367.73 648.162 1353.01 662.882C1338.29 677.603 1317.26 688.117 1294.13 688.117C1247.86 688.117 1212.11 652.368 1212.11 606.103ZM1735.74 1115.01C1689.48 1115.01 1653.73 1077.16 1653.73 1033C1653.73 1011.97 1662.14 990.939 1676.86 976.218C1676.86 976.218 1676.86 976.218 1678.96 974.116C1693.68 959.395 1714.71 950.983 1735.74 950.983C1782.01 950.983 1817.76 988.836 1817.76 1033C1817.76 1077.16 1779.9 1115.01 1735.74 1115.01ZM2162.64 433.663C2116.37 433.663 2080.62 395.81 2080.62 351.649C2080.62 305.384 2118.47 269.635 2162.64 269.635C2208.9 269.635 2244.65 307.487 2244.65 351.649C2246.75 395.81 2208.9 433.663 2162.64 433.663Z"
                fill="#020817"
              />
              <path
                d="M2162.64 164.488C2059.59 164.488 1975.47 248.605 1975.47 351.649C1975.47 400.016 1994.4 442.075 2021.74 475.722L1786.21 852.146C1769.39 847.94 1752.56 845.837 1733.64 845.837C1699.99 845.837 1668.45 854.249 1641.11 871.072L1458.15 694.426C1472.88 669.191 1479.18 637.647 1479.18 606.103C1479.18 503.06 1395.07 418.943 1292.02 418.943C1188.98 418.943 1104.86 503.06 1104.86 606.103C1104.86 654.47 1121.69 696.529 1151.13 730.176L928.217 1091.88C911.393 1087.67 894.57 1085.57 877.747 1085.57C774.703 1085.57 690.186 1169.69 690.186 1272.73C690.186 1375.77 774.703 1459.89 877.747 1459.89C980.79 1459.89 1064.91 1375.77 1064.91 1272.73C1064.91 1224.36 1048.08 1182.31 1018.64 1148.66L1245.76 789.058C1262.58 793.264 1279.41 795.367 1296.23 795.367C1329.88 795.367 1361.42 786.955 1388.76 770.132L1571.71 946.778C1556.99 972.013 1550.68 1001.45 1550.68 1033C1550.68 1136.04 1634.8 1220.16 1737.84 1220.16C1840.89 1220.16 1925 1136.04 1925 1033C1925 984.63 1908.18 942.572 1878.74 908.925L2116.37 532.501C2133.19 536.707 2150.02 538.809 2166.84 538.809C2269.88 538.809 2354 454.692 2354 351.649C2351.9 248.605 2267.78 164.488 2162.64 164.488ZM875.644 1354.75C829.379 1354.75 793.629 1316.89 793.629 1272.73C793.629 1226.47 831.482 1190.72 875.644 1190.72C890.364 1190.72 902.982 1194.92 915.599 1201.23C915.599 1201.23 917.702 1201.23 917.702 1203.33C919.805 1203.33 919.805 1205.44 921.908 1205.44C942.937 1220.16 957.658 1245.39 957.658 1272.73C957.658 1316.89 921.908 1354.75 875.644 1354.75ZM1212.11 606.103C1212.11 561.942 1249.96 524.089 1294.13 524.089C1338.29 524.089 1376.14 561.942 1376.14 606.103C1376.14 629.235 1367.73 648.162 1353.01 662.882C1338.29 677.603 1317.26 688.117 1294.13 688.117C1247.86 688.117 1212.11 652.368 1212.11 606.103ZM1735.74 1115.01C1689.48 1115.01 1653.73 1077.16 1653.73 1033C1653.73 1011.97 1662.14 990.939 1676.86 976.218C1676.86 976.218 1676.86 976.218 1678.96 974.116C1693.68 959.395 1714.71 950.983 1735.74 950.983C1782.01 950.983 1817.76 988.836 1817.76 1033C1817.76 1077.16 1779.9 1115.01 1735.74 1115.01ZM2162.64 433.663C2116.37 433.663 2080.62 395.81 2080.62 351.649C2080.62 305.384 2118.47 269.635 2162.64 269.635C2208.9 269.635 2244.65 307.487 2244.65 351.649C2246.75 395.81 2208.9 433.663 2162.64 433.663Z"
                stroke="white"
                stroke-width="20"
                mask="url(#path-25-inside-1_96_3339)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_96_3339"
                x="113.758"
                y="214"
                width="2816.01"
                height="1208"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.5"
                  result="effect1_foregroundBlur_96_3339"
                />
              </filter>
              <filter
                id="filter1_dddd_96_3339"
                x="668.586"
                y="160.488"
                width="1707.41"
                height="1375.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="3.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_96_3339"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="14" />
                <feGaussianBlur stdDeviation="7" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_96_3339"
                  result="effect2_dropShadow_96_3339"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="31" />
                <feGaussianBlur stdDeviation="9" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_96_3339"
                  result="effect3_dropShadow_96_3339"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="54" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_96_3339"
                  result="effect4_dropShadow_96_3339"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_96_3339"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      ) : (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <g filter="url(#filter0_f_96_2949)">
              <rect
                x="764.625"
                y="229"
                width="1517.2"
                height="477.154"
                rx="64"
                fill="white"
              />
              <rect
                x="767.125"
                y="231.5"
                width="1512.2"
                height="472.154"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.88"
                stroke-width="5"
              />
              <rect
                x="839.156"
                y="572.508"
                width="301.949"
                height="85.7387"
                rx="42.8693"
                fill="#E2E8F0"
              />
              <rect
                x="836.656"
                y="570.008"
                width="306.949"
                height="90.7387"
                rx="45.3693"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="1189.61"
                y="572.508"
                width="518.16"
                height="85.7387"
                rx="42.8693"
                fill="#E2E8F0"
              />
              <rect
                x="1187.11"
                y="570.008"
                width="523.16"
                height="90.7387"
                rx="45.3693"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="839.039"
                y="386.648"
                width="1190.14"
                height="67.2619"
                rx="33.6309"
                fill="#E2E8F0"
              />
              <rect
                x="586.555"
                y="288.16"
                width="1873.47"
                height="589.199"
                rx="64"
                fill="white"
              />
              <rect
                x="589.055"
                y="290.66"
                width="1868.47"
                height="584.199"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.91"
                stroke-width="5"
              />
              <rect
                x="678.711"
                y="711.098"
                width="372.852"
                height="105.872"
                rx="52.9358"
                fill="#E2E8F0"
              />
              <rect
                x="676.211"
                y="708.598"
                width="377.852"
                height="110.872"
                rx="55.4358"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="1111.29"
                y="711.098"
                width="639.833"
                height="105.872"
                rx="52.9358"
                fill="#E2E8F0"
              />
              <rect
                x="1108.79"
                y="708.598"
                width="644.833"
                height="110.872"
                rx="55.4358"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="678.445"
                y="481.598"
                width="1470.09"
                height="83.0562"
                rx="41.5281"
                fill="#E2E8F0"
              />
              <rect
                x="451.391"
                y="356.551"
                width="2143.74"
                height="674.198"
                rx="64"
                fill="white"
              />
              <rect
                x="453.891"
                y="359.051"
                width="2138.74"
                height="669.198"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.94"
                stroke-width="5"
              />
              <rect
                x="556.797"
                y="813.492"
                width="426.641"
                height="121.145"
                rx="60.1724"
                fill="#E2E8F0"
              />
              <rect
                x="554.297"
                y="810.992"
                width="431.641"
                height="126.145"
                rx="63.0724"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="1051.81"
                y="813.492"
                width="732.137"
                height="121.145"
                rx="60.1724"
                fill="#E2E8F0"
              />
              <rect
                x="1049.31"
                y="810.992"
                width="737.137"
                height="126.145"
                rx="63.0724"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="556.562"
                y="550.875"
                width="1682.17"
                height="95.0381"
                rx="47.519"
                fill="#E2E8F0"
              />
              <rect
                x="303.969"
                y="439.605"
                width="2432.44"
                height="764.992"
                rx="64"
                fill="white"
              />
              <rect
                x="306.469"
                y="442.105"
                width="2427.44"
                height="759.992"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.97"
                stroke-width="5"
              />
              <rect
                x="423.555"
                y="926.512"
                width="484.097"
                height="137.46"
                rx="68.7298"
                fill="#E2E8F0"
              />
              <rect
                x="421.055"
                y="924.012"
                width="489.097"
                height="142.46"
                rx="71.2298"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="985.32"
                y="926.512"
                width="830.734"
                height="137.46"
                rx="68.7298"
                fill="#E2E8F0"
              />
              <rect
                x="982.82"
                y="924.012"
                width="835.734"
                height="142.46"
                rx="71.2298"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="423.242"
                y="628.508"
                width="1908.71"
                height="107.837"
                rx="8"
                fill="#E2E8F0"
              />
              <rect
                x="131.258"
                y="533.309"
                width="2781.01"
                height="871.188"
                rx="61.5"
                fill="white"
                stroke="#C3D0E2"
                stroke-width="5"
              />
              <rect
                x="265.695"
                y="1057.87"
                width="554.463"
                height="157.44"
                rx="78.72"
                fill="#E2E8F0"
              />
              <rect
                x="263.195"
                y="1055.37"
                width="559.463"
                height="162.44"
                rx="81.22"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="909.156"
                y="1057.87"
                width="951.486"
                height="157.44"
                rx="78.72"
                fill="#E2E8F0"
              />
              <rect
                x="906.656"
                y="1055.37"
                width="956.486"
                height="162.44"
                rx="81.22"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="265.383"
                y="716.613"
                width="2186.16"
                height="123.512"
                rx="8"
                fill="#E2E8F0"
              />
            </g>
            <g filter="url(#filter1_dddd_96_2949)">
              <path
                d="M2162.64 164.488C2059.59 164.488 1975.47 248.605 1975.47 351.649C1975.47 400.016 1994.4 442.075 2021.74 475.722L1786.21 852.146C1769.39 847.94 1752.56 845.837 1733.64 845.837C1699.99 845.837 1668.45 854.249 1641.11 871.072L1458.15 694.426C1472.88 669.191 1479.18 637.647 1479.18 606.103C1479.18 503.06 1395.07 418.943 1292.02 418.943C1188.98 418.943 1104.86 503.06 1104.86 606.103C1104.86 654.47 1121.69 696.529 1151.13 730.176L928.217 1091.88C911.393 1087.67 894.57 1085.57 877.747 1085.57C774.703 1085.57 690.186 1169.69 690.186 1272.73C690.186 1375.77 774.703 1459.89 877.747 1459.89C980.79 1459.89 1064.91 1375.77 1064.91 1272.73C1064.91 1224.36 1048.08 1182.31 1018.64 1148.66L1245.76 789.058C1262.58 793.264 1279.41 795.367 1296.23 795.367C1329.88 795.367 1361.42 786.955 1388.76 770.132L1571.71 946.778C1556.99 972.013 1550.68 1001.45 1550.68 1033C1550.68 1136.04 1634.8 1220.16 1737.84 1220.16C1840.89 1220.16 1925 1136.04 1925 1033C1925 984.63 1908.18 942.572 1878.74 908.925L2116.37 532.501C2133.19 536.707 2150.02 538.809 2166.84 538.809C2269.88 538.809 2354 454.692 2354 351.649C2351.9 248.605 2267.78 164.488 2162.64 164.488ZM875.644 1354.75C829.379 1354.75 793.629 1316.89 793.629 1272.73C793.629 1226.47 831.482 1190.72 875.644 1190.72C890.364 1190.72 902.982 1194.92 915.599 1201.23C915.599 1201.23 917.702 1201.23 917.702 1203.33C919.805 1203.33 919.805 1205.44 921.908 1205.44C942.937 1220.16 957.658 1245.39 957.658 1272.73C957.658 1316.89 921.908 1354.75 875.644 1354.75ZM1212.11 606.103C1212.11 561.942 1249.96 524.089 1294.13 524.089C1338.29 524.089 1376.14 561.942 1376.14 606.103C1376.14 629.235 1367.73 648.162 1353.01 662.882C1338.29 677.603 1317.26 688.117 1294.13 688.117C1247.86 688.117 1212.11 652.368 1212.11 606.103ZM1735.74 1115.01C1689.48 1115.01 1653.73 1077.16 1653.73 1033C1653.73 1011.97 1662.14 990.939 1676.86 976.218C1676.86 976.218 1676.86 976.218 1678.96 974.116C1693.68 959.395 1714.71 950.983 1735.74 950.983C1782.01 950.983 1817.76 988.836 1817.76 1033C1817.76 1077.16 1779.9 1115.01 1735.74 1115.01ZM2162.64 433.663C2116.37 433.663 2080.62 395.81 2080.62 351.649C2080.62 305.384 2118.47 269.635 2162.64 269.635C2208.9 269.635 2244.65 307.487 2244.65 351.649C2246.75 395.81 2208.9 433.663 2162.64 433.663Z"
                fill="white"
              />
              <path
                d="M2023.01 476.517L2023.58 475.608L2022.9 474.776C1995.74 441.34 1976.97 399.605 1976.97 351.649C1976.97 249.434 2060.42 165.988 2162.64 165.988C2266.95 165.988 2350.41 249.436 2352.5 351.662C2352.49 453.871 2269.05 537.309 2166.84 537.309C2150.14 537.309 2133.44 535.222 2116.73 531.045L2115.68 530.782L2115.1 531.7L1877.47 908.124L1876.87 909.07L1877.61 909.912C1906.82 943.292 1923.5 985.001 1923.5 1033C1923.5 1135.21 1840.06 1218.66 1737.84 1218.66C1635.63 1218.66 1552.18 1135.21 1552.18 1033C1552.18 1001.65 1558.45 972.485 1573.01 947.533L1573.6 946.516L1572.75 945.698L1389.8 769.052L1388.96 768.244L1387.97 768.854C1360.89 785.52 1329.62 793.867 1296.23 793.867C1279.53 793.867 1262.83 791.78 1246.12 787.603L1245.07 787.34L1244.49 788.257L1017.37 1147.86L1016.78 1148.8L1017.51 1149.65C1046.72 1183.03 1063.41 1224.73 1063.41 1272.73C1063.41 1374.95 979.962 1458.39 877.747 1458.39C775.531 1458.39 692.086 1374.95 692.086 1272.73C692.086 1170.12 775.531 1087.07 877.747 1087.07C894.444 1087.07 911.145 1089.16 927.853 1093.33L928.918 1093.6L929.494 1092.67L1152.4 730.963L1152.98 730.021L1152.26 729.188C1123.05 695.809 1106.36 654.1 1106.36 606.103C1106.36 503.888 1189.81 420.443 1292.02 420.443C1394.24 420.443 1477.68 503.888 1477.68 606.103C1477.68 637.47 1471.41 668.731 1456.86 693.67L1456.27 694.687L1457.11 695.505L1640.07 872.151L1640.9 872.959L1641.9 872.349C1668.98 855.683 1700.25 847.337 1733.64 847.337C1752.45 847.337 1769.15 849.426 1785.85 853.601L1786.9 853.865L1787.48 852.941L2023.01 476.517ZM916.174 1199.79C916.117 1199.78 916.062 1199.77 916.011 1199.76C903.353 1193.46 890.173 1189.22 875.644 1189.22C830.679 1189.22 792.129 1225.61 792.129 1272.73C792.129 1317.7 828.526 1356.25 875.644 1356.25C922.761 1356.25 959.158 1317.7 959.158 1272.73C959.158 1244.86 944.162 1219.18 922.768 1204.21L922.381 1203.94H921.908C921.516 1203.94 921.376 1203.84 920.866 1203.33L920.831 1203.29C920.446 1202.91 919.881 1202.34 918.994 1202.04C918.901 1201.77 918.776 1201.52 918.622 1201.29C918.249 1200.73 917.762 1200.37 917.321 1200.15C916.886 1199.94 916.47 1199.83 916.174 1199.79ZM1294.13 522.589C1249.14 522.589 1210.61 561.113 1210.61 606.103C1210.61 653.196 1247.03 689.617 1294.13 689.617C1317.71 689.617 1339.11 678.9 1354.07 663.943C1369.07 648.944 1377.64 629.638 1377.64 606.103C1377.64 561.113 1339.12 522.589 1294.13 522.589ZM1652.23 1033C1652.23 1077.96 1688.62 1116.51 1735.74 1116.51C1780.73 1116.51 1819.26 1077.99 1819.26 1033C1819.26 988.033 1782.86 949.483 1735.74 949.483C1714.33 949.483 1692.91 958.042 1677.9 973.055L1677.89 973.067L1677.88 973.079L1677.86 973.092L1677.85 973.104L1677.84 973.116L1677.83 973.128L1677.82 973.14L1677.8 973.152L1677.79 973.164L1677.78 973.176L1677.77 973.188L1677.76 973.199L1677.75 973.211L1677.73 973.223L1677.72 973.234L1677.71 973.246L1677.7 973.257L1677.69 973.269L1677.68 973.28L1677.66 973.292L1677.65 973.303L1677.64 973.314L1677.63 973.326L1677.62 973.337L1677.61 973.348L1677.6 973.359L1677.59 973.37L1677.57 973.381L1677.56 973.392L1677.55 973.403L1677.54 973.414L1677.53 973.425L1677.52 973.436L1677.51 973.447L1677.5 973.457L1677.49 973.468L1677.48 973.479L1677.47 973.489L1677.46 973.5L1677.45 973.51L1677.44 973.521L1677.43 973.531L1677.41 973.541L1677.4 973.552L1677.39 973.562L1677.38 973.572L1677.37 973.582L1677.36 973.593L1677.35 973.603L1677.34 973.613L1677.33 973.623L1677.32 973.633L1677.31 973.643L1677.3 973.653L1677.29 973.662L1677.28 973.672L1677.27 973.682L1677.26 973.692L1677.26 973.701L1677.25 973.711L1677.24 973.721L1677.23 973.73L1677.22 973.74L1677.21 973.749L1677.2 973.758L1677.19 973.768L1677.18 973.777L1677.17 973.786L1677.16 973.796L1677.15 973.805L1677.14 973.814L1677.13 973.823L1677.12 973.832L1677.12 973.841L1677.11 973.85L1677.1 973.859L1677.09 973.868L1677.08 973.877L1677.07 973.886L1677.06 973.895L1677.05 973.903L1677.04 973.912L1677.04 973.921L1677.03 973.929L1677.02 973.938L1677.01 973.947L1677 973.955L1676.99 973.964L1676.98 973.972L1676.98 973.98L1676.97 973.989L1676.96 973.997L1676.95 974.005L1676.94 974.013L1676.93 974.022L1676.93 974.03L1676.92 974.038L1676.91 974.046L1676.9 974.054L1676.89 974.062L1676.89 974.07L1676.88 974.078L1676.87 974.086L1676.86 974.094L1676.85 974.102L1676.85 974.109L1676.84 974.117L1676.83 974.125L1676.82 974.132L1676.82 974.14L1676.81 974.148L1676.8 974.155L1676.79 974.163L1676.79 974.17L1676.78 974.177L1676.77 974.185L1676.76 974.192L1676.76 974.2L1676.75 974.207L1676.74 974.214L1676.74 974.221L1676.73 974.228L1676.72 974.236L1676.71 974.243L1676.71 974.25L1676.7 974.257L1676.69 974.264L1676.69 974.271L1676.68 974.278L1676.67 974.284L1676.67 974.291L1676.66 974.298L1676.65 974.305L1676.64 974.312L1676.64 974.318L1676.63 974.325L1676.62 974.332L1676.62 974.338L1676.61 974.345L1676.61 974.351L1676.6 974.358L1676.59 974.364L1676.59 974.371L1676.58 974.377L1676.57 974.383L1676.57 974.39L1676.56 974.396L1676.55 974.402L1676.55 974.408L1676.54 974.415L1676.54 974.421L1676.53 974.427L1676.52 974.433L1676.52 974.439L1676.51 974.445L1676.51 974.451L1676.5 974.457L1676.49 974.463L1676.49 974.469L1676.48 974.474L1676.48 974.48L1676.47 974.486L1676.46 974.492L1676.46 974.497L1676.45 974.503L1676.45 974.509L1676.44 974.514L1676.44 974.52L1676.43 974.526L1676.43 974.531L1676.42 974.537L1676.41 974.542L1676.41 974.547L1676.4 974.553L1676.4 974.558L1676.39 974.563L1676.39 974.569L1676.38 974.574L1676.38 974.579L1676.37 974.584L1676.37 974.59L1676.36 974.595L1676.36 974.6L1676.35 974.605L1676.35 974.61L1676.34 974.615L1676.34 974.62L1676.33 974.625L1676.33 974.63L1676.32 974.635L1676.32 974.64L1676.31 974.644L1676.31 974.649L1676.3 974.654L1676.3 974.659L1676.29 974.663L1676.29 974.668L1676.28 974.673L1676.28 974.677L1676.27 974.682L1676.27 974.687L1676.27 974.691L1676.26 974.696L1676.26 974.7L1676.25 974.704L1676.25 974.709L1676.24 974.713L1676.24 974.718L1676.23 974.722L1676.23 974.726L1676.23 974.731L1676.22 974.735L1676.22 974.739L1676.21 974.743L1676.21 974.747L1676.2 974.751L1676.2 974.756L1676.2 974.76L1676.19 974.764L1676.19 974.768L1676.18 974.772L1676.18 974.776L1676.18 974.78L1676.17 974.784L1676.17 974.787L1676.17 974.791L1676.16 974.795L1676.16 974.799L1676.15 974.803L1676.15 974.806L1676.15 974.81L1676.14 974.814L1676.14 974.818L1676.14 974.821L1676.13 974.825L1676.13 974.828L1676.12 974.832L1676.12 974.836L1676.12 974.839L1676.11 974.843L1676.11 974.846L1676.11 974.849L1676.1 974.853L1676.1 974.856L1676.1 974.86L1676.09 974.863L1676.09 974.866L1676.09 974.87L1676.08 974.873L1676.08 974.876L1676.08 974.879L1676.07 974.882L1676.07 974.886L1676.07 974.889L1676.06 974.892L1676.06 974.895L1676.06 974.898L1676.06 974.901L1676.05 974.904L1676.05 974.907L1676.05 974.91L1676.04 974.913L1676.04 974.916L1676.04 974.919L1676.03 974.922L1676.03 974.925L1676.03 974.927L1676.03 974.93L1676.02 974.933L1676.02 974.936L1676.02 974.938L1676.02 974.941L1676.01 974.944L1676.01 974.947L1676.01 974.949L1676 974.952L1676 974.954L1676 974.957L1676 974.96L1675.99 974.962L1675.99 974.965L1675.99 974.967L1675.99 974.97L1675.98 974.972L1675.98 974.975L1675.98 974.977L1675.98 974.979L1675.97 974.982L1675.97 974.984L1675.97 974.986L1675.97 974.989L1675.97 974.991L1675.96 974.993L1675.96 974.995L1675.96 974.998L1675.96 975L1675.95 975.002L1675.95 975.004L1675.95 975.006L1675.95 975.008L1675.95 975.011L1675.94 975.013L1675.94 975.015L1675.94 975.017L1675.94 975.019L1675.94 975.021L1675.93 975.023L1675.93 975.025L1675.93 975.027L1675.93 975.029L1675.93 975.031L1675.92 975.032L1675.92 975.034L1675.92 975.036L1675.92 975.038L1675.92 975.04L1675.91 975.042L1675.91 975.043L1675.91 975.045L1675.91 975.047L1675.91 975.049L1675.91 975.05L1675.9 975.052L1675.9 975.054L1675.9 975.055L1675.9 975.057L1675.9 975.059L1675.9 975.06L1675.89 975.062L1675.89 975.063L1675.89 975.065L1675.89 975.066L1675.89 975.068L1675.89 975.069L1675.89 975.071L1675.88 975.072L1675.88 975.074L1675.88 975.075L1675.88 975.077L1675.88 975.078L1675.88 975.079L1675.88 975.081L1675.87 975.082L1675.87 975.083L1675.87 975.085L1675.87 975.086L1675.87 975.087L1675.87 975.089L1675.87 975.09L1675.87 975.091L1675.86 975.092L1675.86 975.094L1675.86 975.095L1675.86 975.096L1675.86 975.097L1675.86 975.098L1675.86 975.099L1675.86 975.101L1675.85 975.102L1675.85 975.103L1675.85 975.104L1675.85 975.105L1675.85 975.106L1675.85 975.107L1675.85 975.108L1675.85 975.109L1675.85 975.11L1675.85 975.111L1675.84 975.112L1675.84 975.113L1675.84 975.114L1675.84 975.115L1675.84 975.116L1675.84 975.117L1675.84 975.117L1675.84 975.118L1675.84 975.119L1675.84 975.12L1675.84 975.121L1675.83 975.122L1675.83 975.123L1675.83 975.123L1675.83 975.124L1675.83 975.125L1675.83 975.126L1675.83 975.126L1675.83 975.127L1675.83 975.128L1675.83 975.129L1675.83 975.129L1675.83 975.13L1675.83 975.131L1675.82 975.131L1675.82 975.132L1675.82 975.133L1675.82 975.133L1675.82 975.134L1675.82 975.135L1675.82 975.135L1675.82 975.136L1675.82 975.136L1675.82 975.137L1675.82 975.138L1675.82 975.138L1675.82 975.139L1675.82 975.139L1675.82 975.14L1675.82 975.14L1675.82 975.141L1675.82 975.141L1675.81 975.142L1675.81 975.142L1675.81 975.143L1675.81 975.143L1675.81 975.143L1675.81 975.144L1675.81 975.144L1675.81 975.145L1675.81 975.145L1675.81 975.146L1675.81 975.146L1675.81 975.146L1675.81 975.147L1675.81 975.147L1675.81 975.147L1675.81 975.148L1675.81 975.148L1675.81 975.148L1675.81 975.149L1675.81 975.15L1675.81 975.15L1675.81 975.151L1675.8 975.151L1675.8 975.152L1675.8 975.152L1675.8 975.153L1675.8 975.153L1675.8 975.154L1675.8 975.154L1675.8 975.154L1675.8 975.155L1675.8 975.155L1675.8 975.156L1675.8 975.156L1675.8 975.156L1675.8 975.157L1675.8 975.157L1675.8 975.157L1675.8 975.158C1660.79 990.171 1652.23 1011.59 1652.23 1033ZM2079.12 351.649C2079.12 396.614 2115.52 435.163 2162.64 435.163C2209.67 435.163 2248.27 396.683 2246.15 351.613C2246.13 306.664 2209.74 268.135 2162.64 268.135C2117.67 268.135 2079.12 304.531 2079.12 351.649Z"
                stroke="black"
                stroke-width="3"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_96_2949"
                x="113.758"
                y="214"
                width="2816.01"
                height="1208"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.5"
                  result="effect1_foregroundBlur_96_2949"
                />
              </filter>
              <filter
                id="filter1_dddd_96_2949"
                x="668.586"
                y="160.488"
                width="1707.41"
                height="1375.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="3.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_96_2949"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="14" />
                <feGaussianBlur stdDeviation="7" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_96_2949"
                  result="effect2_dropShadow_96_2949"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="31" />
                <feGaussianBlur stdDeviation="9" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_96_2949"
                  result="effect3_dropShadow_96_2949"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="54" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_96_2949"
                  result="effect4_dropShadow_96_2949"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_96_2949"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}
    </>
  );
};
export const LearnMoreDeadlinesTracking = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <>
      <div className={styles.deadlines}>
        <ul className={styles.deadlinesList}>
          <li
            className={styles.deadlinesItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",

                transform: `skewY(-4deg) rotateX(-14deg) rotateY(20deg) translateZ(-120px) translateX(3%) translateY(var(--top))`,
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>Due today</h4>
            <p className={styles.deadlinesDescription}>1</p>
          </li>
          <li
            className={styles.deadlinesItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",

                transform:
                  "skewY(-4deg) rotateX(-14deg) rotateY(20deg) translateZ(0) translateX(0%) translateY(var(--top))",
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>Due Tomorrow</h4>
            <p className={styles.deadlinesDescription}>7</p>
          </li>
          <li
            className={styles.deadlinesItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",
                transform:
                  "skewY(-4deg) rotateX(-14deg) rotateY(20deg) translateZ(120px) translateX(-3%) translateY(var(--top))",
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>Due in 2 days</h4>
            <p className={styles.deadlinesDescription}>5</p>
          </li>
        </ul>
      </div>
    </>
  );
};
export const LearnMoreSummary = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <>
      <div className={styles.deadlines}>
        <ul className={styles.deadlinesList}>
          <li
            className={styles.summaryItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",

                transform: `skewY(4deg) rotateX(-14deg) rotateY(-20deg) translateZ(120px) translateX(-10%) translateY(var(--top))`,
                zIndex: 100,
                background: "hsl(var(--primary) / var(--opacity))",
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>Created</h4>
            <p className={styles.deadlinesDescription}>1</p>
          </li>
          <li
            className={styles.summaryItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",

                transform:
                  "skewY(4deg) rotateX(-14deg) rotateY(-20deg) translateZ(0px) translateX(-7%) translateY(var(--top))",
                zIndex: 90,
                background: "hsl(var(--warning) / var(--opacity))",
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>In Progress</h4>
            <p className={styles.deadlinesDescription}>7</p>
          </li>
          <li
            className={styles.summaryItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",
                transform:
                  "skewY(4deg) rotateX(-14deg) rotateY(-20deg) translateZ(-120px) translateX(-4%) translateY(var(--top))",
                zIndex: 80,
                background: "hsl(var(--destructive) / var(--opacity))",
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>Deleted</h4>
            <p className={styles.deadlinesDescription}>5</p>
          </li>

          <li
            className={styles.summaryItem}
            style={
              {
                "--top": "0%",
                "--opacity": "0.2",
                transform:
                  "skewY(4deg) rotateX(-14deg) rotateY(-20deg) translateZ(-240px) translateX(-1%) translateY(var(--top))",
                zIndex: 70,
                backgroundColor: "hsl(var(--success) / var(--opacity))",
              } as CSSProperties
            }
          >
            <h4 className={styles.deadlinesTitle}>Completed</h4>
            <p className={styles.deadlinesDescription}>5</p>
          </li>
        </ul>
      </div>
    </>
  );
};
export const LearnMoreDeadlineTracking2 = ({
  className = "",
}: {
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();

  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <rect width="3043" height="1623" fill="#020817" />
            <g opacity="0.7">
              <g filter="url(#filter0_f_100_3763)">
                <path
                  d="M2936.18 538.393C2994.2 535.253 3052.23 530.142 3119.92 527.402C3168.27 524.262 3197.28 514.841 3177.94 506.991C3168.27 500.71 3129.59 496 3090.91 496C3081.24 496 3071.57 496 3061.9 497.57C3003.87 500.71 2936.18 505.421 2878.16 508.561C2829.81 511.701 2800.8 521.122 2820.14 528.972C2829.81 538.393 2887.83 541.533 2936.18 538.393Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter1_f_100_3763)">
                <path
                  d="M2558.55 530.158C2548.88 530.158 2529.53 530.158 2519.86 532.128C2403.82 539.978 2287.77 547.829 2171.73 555.679C2123.38 558.82 2104.04 568.24 2123.38 576.091C2142.72 583.941 2200.74 587.081 2249.09 583.941C2355.47 576.091 2471.51 568.24 2587.56 560.39C2635.91 557.25 2664.92 547.829 2635.91 539.978C2635.91 533.698 2597.23 530.158 2558.55 530.158Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter2_f_100_3763)">
                <path
                  d="M827.91 982.718C866.591 987.429 934.284 985.858 963.296 979.578C992.307 973.298 982.636 962.307 943.955 957.597C827.91 943.466 740.876 930.905 663.513 919.914C644.172 916.774 624.832 915.204 595.82 915.204C566.809 915.204 547.468 916.774 528.127 919.914C489.446 926.195 489.446 935.615 528.127 941.896C615.161 954.457 702.195 967.017 827.91 982.718Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter3_f_100_3763)">
                <path
                  d="M1533.69 1056.5C1572.37 1050.22 1572.37 1040.8 1533.69 1034.52C1466 1021.96 1369.3 1009.4 1233.91 993.699C1214.57 992.129 1195.23 990.158 1175.89 990.158C1146.88 990.158 1117.86 992.129 1098.52 996.839C1069.51 1003.12 1079.18 1014.11 1117.86 1018.82C1243.58 1034.52 1320.94 1045.51 1388.64 1056.5C1436.99 1061.21 1495.01 1061.21 1533.69 1056.5Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter4_f_100_3763)">
                <path
                  d="M1872.29 579.193C1862.62 579.193 1843.28 579.193 1833.61 580.763C1717.56 590.184 1601.52 599.604 1495.14 607.455C1446.79 612.165 1427.45 621.586 1456.46 627.866C1485.47 635.716 1543.5 638.857 1582.18 634.146C1688.55 624.726 1794.93 616.875 1910.97 607.455C1959.32 604.314 1978.66 594.894 1959.32 587.043C1939.98 582.333 1910.97 579.193 1872.29 579.193Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter5_f_100_3763)">
                <path
                  d="M276.236 811.558C266.565 811.558 266.565 811.558 276.236 811.558C218.213 811.558 179.532 817.839 179.532 827.259L179.532 831.97L179.532 836.68C189.202 855.521 218.213 874.362 285.906 893.203C314.917 901.054 372.94 902.624 421.292 899.484C469.644 894.773 479.314 885.353 459.973 877.502C411.621 863.371 382.61 849.241 382.61 835.11L382.61 831.97L382.61 828.829C363.269 819.409 324.588 811.558 276.236 811.558Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter6_f_100_3763)">
                <path
                  d="M1301.69 643.577C1282.35 638.867 1253.34 635.727 1214.66 635.727C1195.32 635.727 1175.98 635.727 1166.31 637.297C1050.26 648.288 943.887 660.848 847.183 671.839C808.501 676.549 798.831 685.97 827.842 693.82C856.853 700.101 914.876 701.671 963.228 696.96C1050.26 685.97 1156.64 674.979 1263.01 663.988C1311.36 660.848 1321.03 651.428 1301.69 643.577Z"
                  fill="#2D3441"
                />
              </g>
              <g filter="url(#filter7_f_100_3763)">
                <path
                  d="M683.004 734.661C721.686 728.38 721.686 718.96 683.004 712.679C663.664 709.539 634.652 707.969 615.312 707.969C595.971 707.969 566.96 709.539 547.619 712.679C441.245 729.951 354.211 745.652 296.188 762.923C267.177 770.773 286.518 780.194 325.199 784.904C373.551 789.614 431.574 786.474 460.185 780.194C518.608 764.493 595.971 748.792 683.004 734.661Z"
                  fill="#2D3441"
                />
              </g>
            </g>
            <g opacity="0.7">
              <path
                d="M247.818 1581.61C189.796 1584.75 131.773 1589.46 64.0806 1592.6C15.7286 1595.74 -13.2827 1605.16 6.05814 1613.01C15.7285 1619.29 54.4101 1624 93.0918 1624C102.762 1624 112.433 1624 122.103 1622.43C180.126 1619.29 247.818 1614.58 305.841 1611.44C354.193 1608.3 383.204 1598.88 363.863 1591.03C354.193 1581.61 296.17 1578.47 247.818 1581.61Z"
                fill="#2D3441"
              />
              <path
                d="M625.454 1589.44C635.124 1589.44 654.465 1589.44 664.135 1587.87C780.18 1580.02 896.225 1572.17 1012.27 1564.32C1060.62 1561.18 1079.96 1551.76 1060.62 1543.91C1041.28 1536.06 983.259 1532.92 934.907 1536.06C828.532 1543.91 712.487 1551.76 596.443 1559.61C548.091 1562.75 519.079 1572.17 548.091 1580.02C548.091 1586.3 586.772 1589.44 625.454 1589.44Z"
                fill="#2D3441"
              />
              <path
                d="M2356.09 1137.28C2317.41 1132.57 2249.72 1134.14 2220.7 1140.42C2191.69 1146.7 2201.36 1157.69 2240.05 1162.4C2356.09 1176.53 2443.12 1189.09 2520.49 1200.09C2539.83 1203.23 2559.17 1204.8 2588.18 1204.8C2617.19 1204.8 2636.53 1203.23 2655.87 1200.09C2694.55 1193.81 2694.55 1184.38 2655.87 1178.1C2568.84 1165.54 2481.81 1152.98 2356.09 1137.28Z"
                fill="#2D3441"
              />
              <g filter="url(#filter8_f_100_3763)">
                <path
                  d="M1650.31 1063.5C1611.63 1069.78 1611.63 1079.2 1650.31 1085.48C1718 1098.04 1814.7 1110.6 1950.09 1126.3C1969.43 1127.87 1988.77 1129.44 2008.11 1129.44C2037.12 1129.44 2066.14 1127.87 2085.48 1123.16C2114.49 1116.88 2104.82 1105.89 2066.14 1101.18C1940.42 1085.48 1863.06 1074.49 1795.36 1063.5C1747.01 1058.79 1688.99 1058.79 1650.31 1063.5Z"
                  fill="#2D3441"
                />
              </g>
              <path
                d="M1311.71 1540.81C1321.38 1540.81 1340.72 1540.81 1350.39 1539.24C1466.44 1529.82 1582.48 1520.4 1688.86 1512.55C1737.21 1507.84 1756.55 1498.41 1727.54 1492.13C1698.53 1484.28 1640.1 1481.14 1601.82 1485.85C1495.45 1495.27 1389.07 1503.12 1273.03 1512.55C1224.68 1515.69 1205.34 1525.11 1224.68 1532.96C1244.02 1537.67 1273.03 1540.81 1311.71 1540.81Z"
                fill="#2D3441"
              />
              <path
                d="M2907.76 1308.44C2917.43 1308.44 2917.43 1308.44 2907.76 1308.44C2965.79 1308.44 3004.47 1302.16 3004.47 1292.74V1288.03V1283.32C2994.8 1264.48 2965.79 1245.64 2898.09 1226.8C2869.08 1218.95 2811.06 1217.38 2762.71 1220.12C2714.36 1225.23 2704.69 1234.65 2724.03 1242.5C2772.38 1256.63 2801.39 1270.76 2801.39 1284.89V1288.03V1291.17C2820.73 1300.19 2859.41 1308.44 2907.76 1308.44Z"
                fill="#2D3441"
              />
              <path
                d="M1882.31 1476.42C1901.65 1481.13 1930.66 1484.27 1969.34 1484.27C1988.68 1484.27 2008.02 1484.27 2017.69 1482.7C2133.74 1471.71 2240.11 1459.15 2336.82 1448.16C2375.5 1443.45 2385.17 1434.03 2356.16 1426.18C2327.15 1419.9 2269.12 1418.33 2220.77 1423.04C2133.74 1434.03 2027.36 1445.02 1920.99 1456.01C1872.64 1459.15 1862.97 1468.57 1882.31 1476.42Z"
                fill="#2D3441"
              />
              <path
                d="M2500 1386.34C2461.31 1392.62 2461.31 1402.04 2500 1408.32C2519.34 1411.46 2548.35 1413.03 2567.69 1413.03C2587.03 1413.03 2616.04 1411.46 2635.38 1408.32C2741.76 1391.05 2828.79 1375.35 2886.81 1358.08C2915.82 1350.23 2896.48 1340.81 2857.8 1336.1C2809.45 1331.39 2751.43 1334.53 2722.41 1340.81C2664.39 1356.51 2587.03 1372.21 2500 1386.34Z"
                fill="#2D3441"
              />
            </g>
            <g filter="url(#filter9_dddd_100_3763)">
              <mask id="path-17-inside-1_100_3763" fill="white">
                <path d="M2127.16 279.995H2094.09V225.652C2095.93 209.999 2091.06 194.346 2080.18 182.533C2070.18 170.719 2055.12 164 2039.4 164C2023.6 164 2008.62 170.719 1998.14 182.533C1987.66 194.346 1982.79 209.999 1984.63 225.652V279.995H1439.85V225.652C1441.7 209.999 1436.83 194.346 1426.35 182.533C1415.94 170.719 1400.88 164 1385.16 164C1369.37 164 1354.38 170.719 1343.9 182.533C1333.42 194.346 1328.55 209.999 1330.4 225.652V279.995H1297.33C1195.48 279.995 1112.81 362.396 1112.37 464.288V794.335C1112.37 824.756 1137.02 849.417 1167.43 849.417C1197.91 849.417 1222.56 824.756 1222.56 794.335V607.678H2201.92V1076.31V1076.24C2201.92 1097.14 2193.66 1117.22 2178.89 1131.99C2164.13 1146.75 2144.13 1155.02 2123.24 1155.02H1745.35C1729.7 1153.18 1713.98 1158.05 1702.17 1168.53C1690.36 1178.95 1683.64 1194.01 1683.64 1209.74C1683.64 1225.54 1690.36 1240.12 1702.17 1251.01C1713.98 1261.49 1729.7 1266.37 1745.35 1264.52H2123.24C2173.51 1265.56 2222.07 1246.14 2257.72 1210.62C2293.37 1175.11 2313 1126.6 2312.19 1076.24V464.29C2311.75 362.397 2229.01 279.995 2127.16 279.995ZM1222.56 497.367V464.288C1222.49 422.275 1255.41 387.647 1297.33 385.579H2127.16C2148.04 385.579 2168.05 393.849 2182.81 408.617C2197.57 423.385 2205.91 443.392 2205.91 464.288V497.367H1222.56ZM1376.08 1245.54L1183.96 1442.46C1173.33 1452.5 1159.23 1458.12 1144.62 1458.26C1130.23 1458.19 1116.43 1452.5 1106.02 1442.46C1084.39 1420.68 1084.39 1385.54 1106.02 1363.75L1205.22 1261.34H792.704C777.057 1263.19 761.335 1258.32 749.526 1247.83C737.79 1237.42 731 1222.36 731 1206.63C731 1190.83 737.79 1175.84 749.526 1165.36C761.335 1154.87 777.056 1150 792.704 1151.84H1205.22L1106.02 1052.61C1084.32 1030.9 1084.32 995.608 1106.02 973.9C1127.79 952.119 1163 952.119 1184.77 973.9L1376.9 1166.09V1166.02C1382.21 1171.04 1386.27 1177.24 1388.71 1184.18C1394.17 1197.55 1394.17 1212.54 1388.71 1225.9C1386.49 1233.58 1382.14 1240.45 1376.08 1245.62L1376.08 1245.54ZM1580.75 1166.76V1166.83C1602.38 1188.61 1602.38 1223.76 1580.75 1245.62L1387.89 1442.46C1377.56 1453.09 1363.31 1459 1348.55 1459C1333.72 1459 1319.55 1453.09 1309.14 1442.46C1298.37 1432.2 1292.31 1418.02 1292.31 1403.11C1292.31 1388.19 1298.37 1374.02 1309.14 1363.75L1466.57 1210.18L1309.14 1052.68V1052.61C1287.44 1030.9 1287.44 995.61 1309.14 973.901C1330.91 952.12 1366.12 952.12 1387.89 973.901L1580.75 1166.76Z" />
              </mask>
              <path
                d="M2127.16 279.995H2094.09V225.652C2095.93 209.999 2091.06 194.346 2080.18 182.533C2070.18 170.719 2055.12 164 2039.4 164C2023.6 164 2008.62 170.719 1998.14 182.533C1987.66 194.346 1982.79 209.999 1984.63 225.652V279.995H1439.85V225.652C1441.7 209.999 1436.83 194.346 1426.35 182.533C1415.94 170.719 1400.88 164 1385.16 164C1369.37 164 1354.38 170.719 1343.9 182.533C1333.42 194.346 1328.55 209.999 1330.4 225.652V279.995H1297.33C1195.48 279.995 1112.81 362.396 1112.37 464.288V794.335C1112.37 824.756 1137.02 849.417 1167.43 849.417C1197.91 849.417 1222.56 824.756 1222.56 794.335V607.678H2201.92V1076.31V1076.24C2201.92 1097.14 2193.66 1117.22 2178.89 1131.99C2164.13 1146.75 2144.13 1155.02 2123.24 1155.02H1745.35C1729.7 1153.18 1713.98 1158.05 1702.17 1168.53C1690.36 1178.95 1683.64 1194.01 1683.64 1209.74C1683.64 1225.54 1690.36 1240.12 1702.17 1251.01C1713.98 1261.49 1729.7 1266.37 1745.35 1264.52H2123.24C2173.51 1265.56 2222.07 1246.14 2257.72 1210.62C2293.37 1175.11 2313 1126.6 2312.19 1076.24V464.29C2311.75 362.397 2229.01 279.995 2127.16 279.995ZM1222.56 497.367V464.288C1222.49 422.275 1255.41 387.647 1297.33 385.579H2127.16C2148.04 385.579 2168.05 393.849 2182.81 408.617C2197.57 423.385 2205.91 443.392 2205.91 464.288V497.367H1222.56ZM1376.08 1245.54L1183.96 1442.46C1173.33 1452.5 1159.23 1458.12 1144.62 1458.26C1130.23 1458.19 1116.43 1452.5 1106.02 1442.46C1084.39 1420.68 1084.39 1385.54 1106.02 1363.75L1205.22 1261.34H792.704C777.057 1263.19 761.335 1258.32 749.526 1247.83C737.79 1237.42 731 1222.36 731 1206.63C731 1190.83 737.79 1175.84 749.526 1165.36C761.335 1154.87 777.056 1150 792.704 1151.84H1205.22L1106.02 1052.61C1084.32 1030.9 1084.32 995.608 1106.02 973.9C1127.79 952.119 1163 952.119 1184.77 973.9L1376.9 1166.09V1166.02C1382.21 1171.04 1386.27 1177.24 1388.71 1184.18C1394.17 1197.55 1394.17 1212.54 1388.71 1225.9C1386.49 1233.58 1382.14 1240.45 1376.08 1245.62L1376.08 1245.54ZM1580.75 1166.76V1166.83C1602.38 1188.61 1602.38 1223.76 1580.75 1245.62L1387.89 1442.46C1377.56 1453.09 1363.31 1459 1348.55 1459C1333.72 1459 1319.55 1453.09 1309.14 1442.46C1298.37 1432.2 1292.31 1418.02 1292.31 1403.11C1292.31 1388.19 1298.37 1374.02 1309.14 1363.75L1466.57 1210.18L1309.14 1052.68V1052.61C1287.44 1030.9 1287.44 995.61 1309.14 973.901C1330.91 952.12 1366.12 952.12 1387.89 973.901L1580.75 1166.76Z"
                fill="black"
              />
              <path
                d="M2127.16 279.995H2094.09V225.652C2095.93 209.999 2091.06 194.346 2080.18 182.533C2070.18 170.719 2055.12 164 2039.4 164C2023.6 164 2008.62 170.719 1998.14 182.533C1987.66 194.346 1982.79 209.999 1984.63 225.652V279.995H1439.85V225.652C1441.7 209.999 1436.83 194.346 1426.35 182.533C1415.94 170.719 1400.88 164 1385.16 164C1369.37 164 1354.38 170.719 1343.9 182.533C1333.42 194.346 1328.55 209.999 1330.4 225.652V279.995H1297.33C1195.48 279.995 1112.81 362.396 1112.37 464.288V794.335C1112.37 824.756 1137.02 849.417 1167.43 849.417C1197.91 849.417 1222.56 824.756 1222.56 794.335V607.678H2201.92V1076.31V1076.24C2201.92 1097.14 2193.66 1117.22 2178.89 1131.99C2164.13 1146.75 2144.13 1155.02 2123.24 1155.02H1745.35C1729.7 1153.18 1713.98 1158.05 1702.17 1168.53C1690.36 1178.95 1683.64 1194.01 1683.64 1209.74C1683.64 1225.54 1690.36 1240.12 1702.17 1251.01C1713.98 1261.49 1729.7 1266.37 1745.35 1264.52H2123.24C2173.51 1265.56 2222.07 1246.14 2257.72 1210.62C2293.37 1175.11 2313 1126.6 2312.19 1076.24V464.29C2311.75 362.397 2229.01 279.995 2127.16 279.995ZM1222.56 497.367V464.288C1222.49 422.275 1255.41 387.647 1297.33 385.579H2127.16C2148.04 385.579 2168.05 393.849 2182.81 408.617C2197.57 423.385 2205.91 443.392 2205.91 464.288V497.367H1222.56ZM1376.08 1245.54L1183.96 1442.46C1173.33 1452.5 1159.23 1458.12 1144.62 1458.26C1130.23 1458.19 1116.43 1452.5 1106.02 1442.46C1084.39 1420.68 1084.39 1385.54 1106.02 1363.75L1205.22 1261.34H792.704C777.057 1263.19 761.335 1258.32 749.526 1247.83C737.79 1237.42 731 1222.36 731 1206.63C731 1190.83 737.79 1175.84 749.526 1165.36C761.335 1154.87 777.056 1150 792.704 1151.84H1205.22L1106.02 1052.61C1084.32 1030.9 1084.32 995.608 1106.02 973.9C1127.79 952.119 1163 952.119 1184.77 973.9L1376.9 1166.09V1166.02C1382.21 1171.04 1386.27 1177.24 1388.71 1184.18C1394.17 1197.55 1394.17 1212.54 1388.71 1225.9C1386.49 1233.58 1382.14 1240.45 1376.08 1245.62L1376.08 1245.54ZM1580.75 1166.76V1166.83C1602.38 1188.61 1602.38 1223.76 1580.75 1245.62L1387.89 1442.46C1377.56 1453.09 1363.31 1459 1348.55 1459C1333.72 1459 1319.55 1453.09 1309.14 1442.46C1298.37 1432.2 1292.31 1418.02 1292.31 1403.11C1292.31 1388.19 1298.37 1374.02 1309.14 1363.75L1466.57 1210.18L1309.14 1052.68V1052.61C1287.44 1030.9 1287.44 995.61 1309.14 973.901C1330.91 952.12 1366.12 952.12 1387.89 973.901L1580.75 1166.76Z"
                stroke="white"
                stroke-width="20"
                mask="url(#path-17-inside-1_100_3763)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_100_3763"
                x="2734.08"
                y="416"
                width="529.922"
                height="203.57"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="40"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter1_f_100_3763"
                x="2045.97"
                y="460.159"
                width="671.516"
                height="194.586"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="35"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter2_f_100_3763"
                x="483.117"
                y="899.203"
                width="513.047"
                height="102.254"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="8"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter3_f_100_3763"
                x="1073.66"
                y="982.559"
                width="497.047"
                height="85.4766"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="4"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter4_f_100_3763"
                x="1378.83"
                y="515.191"
                width="651.906"
                height="185.168"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="32"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter5_f_100_3763"
                x="147.531"
                y="779.559"
                width="353.781"
                height="153.441"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="16"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter6_f_100_3763"
                x="755.977"
                y="580.727"
                width="610.055"
                height="173.973"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="27.5"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter7_f_100_3763"
                x="237.219"
                y="662.969"
                width="519.797"
                height="169.203"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="22.5"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter8_f_100_3763"
                x="1619.3"
                y="1057.96"
                width="485.047"
                height="73.4766"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1"
                  result="effect1_foregroundBlur_100_3763"
                />
              </filter>
              <filter
                id="filter9_dddd_100_3763"
                x="698"
                y="158"
                width="1647.22"
                height="1417"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="5.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_100_3763"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="21" />
                <feGaussianBlur stdDeviation="10.1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_100_3763"
                  result="effect2_dropShadow_100_3763"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="47" />
                <feGaussianBlur stdDeviation="14" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_100_3763"
                  result="effect3_dropShadow_100_3763"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="83" />
                <feGaussianBlur stdDeviation="16.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_100_3763"
                  result="effect4_dropShadow_100_3763"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_100_3763"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      ) : (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <g filter="url(#filter0_f_98_3403)">
              <path
                d="M1932.77 1196.47C1949.68 1199.77 1966.59 1204.71 1986.32 1208.01C2000.42 1211.31 2008.87 1221.21 2003.23 1229.46C2000.42 1236.05 1989.14 1241 1977.87 1241C1975.05 1241 1972.23 1241 1969.41 1239.35C1952.5 1236.05 1932.77 1231.1 1915.85 1227.81C1901.76 1224.51 1893.3 1214.61 1898.94 1206.36C1901.76 1196.47 1918.67 1193.17 1932.77 1196.47Z"
                fill="#E2E8F0"
              />
              <path
                d="M1822.69 1204.7C1819.88 1204.7 1814.24 1204.7 1811.42 1203.05C1777.59 1194.8 1743.77 1186.56 1709.95 1178.31C1695.85 1175.01 1690.21 1165.11 1695.85 1156.87C1701.49 1148.62 1718.4 1145.32 1732.5 1148.62C1763.5 1156.87 1797.33 1165.11 1831.15 1173.36C1845.24 1176.66 1853.7 1186.56 1845.24 1194.8C1845.24 1201.4 1833.97 1204.7 1822.69 1204.7Z"
                fill="#E2E8F0"
              />
              <path
                d="M1436.71 530.118C1431.08 530.118 1428.26 530.118 1422.62 528.469C1397.25 520.222 1363.43 510.325 1326.78 502.078C1312.69 498.78 1304.24 488.883 1309.87 480.637C1315.51 472.39 1332.42 467.442 1346.52 470.74C1388.8 480.637 1422.62 488.883 1450.81 498.78C1464.9 503.728 1467.72 513.624 1462.08 521.871C1456.45 526.819 1447.99 530.118 1436.71 530.118Z"
                fill="#E2E8F0"
              />
              <path
                d="M1318.25 729.709C1329.53 724.761 1349.26 726.41 1357.72 733.008C1366.17 739.605 1363.35 751.151 1352.08 756.099C1318.25 770.944 1292.89 784.139 1270.34 795.684C1264.7 798.983 1259.06 800.632 1250.61 800.632C1242.15 800.632 1236.51 798.983 1230.87 795.684C1219.6 789.087 1219.6 779.19 1230.87 772.593C1256.24 759.398 1281.61 746.203 1318.25 729.709Z"
                fill="#E2E8F0"
              />
              <path
                d="M1557.74 625.801H1554.93C1540.83 624.151 1529.56 615.904 1532.38 607.657C1532.38 606.008 1532.38 604.359 1532.38 601.06C1532.38 599.411 1532.38 597.761 1532.38 596.112C1529.56 584.566 1521.1 573.021 1504.19 561.475C1492.91 554.877 1495.73 544.981 1507.01 538.384C1518.28 531.786 1535.19 533.435 1546.47 540.033C1571.84 556.527 1585.93 574.67 1588.75 592.813C1588.75 596.112 1588.75 597.761 1588.75 601.06C1588.75 604.359 1588.75 607.657 1588.75 612.606C1583.11 620.853 1571.84 625.801 1557.74 625.801Z"
                fill="#E2E8F0"
              />
              <path
                d="M1523.97 652.195C1535.25 658.793 1535.25 668.689 1523.97 675.287C1504.24 688.482 1476.06 701.677 1436.59 718.171C1430.96 719.82 1425.32 721.469 1419.68 721.469C1411.23 721.469 1402.77 719.82 1397.13 714.872C1388.68 708.274 1391.49 696.729 1402.77 691.781C1439.41 675.287 1461.96 663.741 1481.69 652.195C1495.79 647.247 1512.7 647.247 1523.97 652.195Z"
                fill="#E2E8F0"
              />
              <path
                d="M1236.54 482.321C1233.72 482.321 1230.9 482.321 1228.08 482.321C1197.08 477.372 1163.25 470.775 1123.79 465.827C1109.7 464.177 1098.42 454.281 1104.06 446.034C1106.88 437.787 1123.79 431.19 1137.88 434.489C1177.35 441.086 1211.17 446.034 1244.99 452.632C1259.09 455.93 1267.54 464.177 1264.73 472.424C1259.09 477.372 1247.81 482.321 1236.54 482.321Z"
                fill="#E2E8F0"
              />
              <path
                d="M1622.67 1153.61C1619.85 1153.61 1614.21 1153.61 1611.39 1151.96C1577.57 1142.06 1543.74 1132.17 1512.74 1123.92C1498.64 1118.97 1493.01 1109.07 1501.46 1102.48C1509.92 1094.23 1526.83 1090.93 1538.11 1095.88C1569.11 1105.78 1600.12 1114.02 1633.94 1123.92C1648.04 1127.22 1653.67 1137.11 1648.04 1145.36C1642.4 1150.31 1633.94 1153.61 1622.67 1153.61Z"
                fill="#E2E8F0"
              />
              <path
                d="M1157.46 909.509C1154.64 909.509 1154.64 909.509 1157.46 909.509C1140.14 909.509 1129.27 902.911 1129.27 893.015V888.067V883.119C1132.09 863.326 1140.14 843.534 1160.28 823.741C1168.73 815.494 1185.64 813.845 1199.74 817.144C1213.83 822.092 1216.65 831.988 1211.01 840.235C1196.92 855.079 1188.46 869.924 1188.46 884.768V888.067V891.366C1182.83 901.262 1171.55 909.509 1157.46 909.509Z"
                fill="#E2E8F0"
              />
              <path
                d="M1027.93 449.332C1025.11 449.332 1025.11 449.332 1022.3 449.332C988.471 444.383 954.647 441.085 915.185 436.137C901.091 434.487 889.816 426.24 892.635 416.344C895.454 408.097 909.548 401.5 926.46 403.149C963.103 408.097 999.746 411.396 1033.57 416.344C1047.66 417.993 1058.94 426.24 1056.12 436.137C1050.48 444.383 1039.21 449.332 1027.93 449.332Z"
                fill="#E2E8F0"
              />
              <path
                d="M1456.35 1085.97C1450.71 1090.92 1442.25 1094.22 1430.98 1094.22C1425.34 1094.22 1419.71 1094.22 1416.89 1092.57C1383.06 1081.02 1352.06 1067.83 1323.87 1056.28C1312.59 1051.33 1309.78 1041.44 1318.23 1033.19C1326.69 1026.59 1343.6 1024.94 1357.69 1029.89C1383.06 1041.44 1414.07 1052.98 1445.07 1064.53C1459.17 1067.83 1461.99 1077.72 1456.35 1085.97Z"
                fill="#E2E8F0"
              />
              <path
                d="M1276.02 990.288C1287.3 996.885 1287.3 1006.78 1276.02 1013.38C1270.38 1016.68 1261.93 1018.33 1256.29 1018.33C1250.65 1018.33 1242.2 1016.68 1236.56 1013.38C1205.55 995.236 1180.18 978.742 1163.27 960.199C1154.82 952.352 1160.45 942.456 1171.73 937.507C1185.82 932.559 1202.73 935.858 1211.19 942.456C1228.1 958.949 1250.65 975.443 1276.02 990.288Z"
                fill="#E2E8F0"
              />
              <path
                d="M810.994 424.541C808.175 424.541 808.175 424.541 805.356 424.541C788.444 422.891 768.713 421.242 748.982 419.593C734.889 417.943 723.614 409.696 726.433 401.449C729.252 393.203 743.345 386.605 757.439 388.254C777.169 389.904 794.082 391.553 813.813 393.203C827.906 394.852 839.181 403.099 836.362 411.346C836.362 419.593 825.087 424.541 810.994 424.541Z"
                fill="#E2E8F0"
              />
              <path
                d="M2799.99 1388.99C2643.97 1545 2391.03 1545 2235.01 1388.99C2079 1232.97 2079 980.025 2235.01 824.011C2391.03 667.996 2643.97 667.996 2799.99 824.011C2956 980.025 2956 1232.97 2799.99 1388.99Z"
                fill="#E2E8F0"
              />
              <path
                d="M2277.12 1098.94C2252.57 1074.39 2252.57 1034.58 2277.12 1010.03V1010.03C2301.67 985.477 2341.48 985.477 2366.03 1010.03L2408.36 1052.36C2409.54 1053.53 2409.54 1055.43 2408.36 1056.61L2323.7 1141.27C2322.52 1142.45 2320.63 1142.45 2319.45 1141.27L2277.12 1098.94Z"
                fill="white"
              />
              <rect
                x="2330.18"
                y="1152.41"
                width="125.739"
                height="125.739"
                transform="rotate(-45 2330.18 1152.41)"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2891.23 965.05L2517.22 1339.06L2428.31 1250.14L2825.43 853.023L2830.17 857.762C2856.52 890.802 2876.87 927.051 2891.23 965.05Z"
                fill="white"
              />
              <path
                d="M242.856 111.182C128.535 135.482 73.8942 242.721 121.432 349.492C168.969 456.262 301.398 523.739 415.719 499.439C530.04 475.139 584.682 367.9 537.144 261.129C489.607 154.359 357.177 86.8824 242.856 111.182ZM441.859 302.633L358.717 320.305L393.289 397.957C404.525 423.193 362.954 432.029 351.718 406.793L317.145 329.141L234.003 346.814C206.982 352.557 189.695 313.732 216.717 307.988L299.859 290.316L265.287 212.664C254.051 187.428 295.622 178.592 306.858 203.828L341.43 281.479L424.573 263.807C451.594 258.063 468.88 296.889 441.859 302.633Z"
                fill="#E2E8F0"
              />
              <circle
                cx="145.857"
                cy="145.857"
                r="145.857"
                transform="matrix(0.996195 0.0871557 -0.258819 0.965926 1817.02 282.562)"
                fill="white"
              />
              <path
                d="M1934.26 402.407L1930.81 402.105L1906.78 491.812L1910.23 492.114L1934.26 402.407Z"
                fill="black"
              />
              <path
                d="M1902.58 399.638L1899.13 399.336L1875.1 489.043L1878.55 489.345L1902.58 399.638Z"
                fill="black"
              />
              <path
                d="M1965.95 405.181L1962.5 404.879L1938.46 494.586L1941.91 494.888L1965.95 405.181Z"
                fill="black"
              />
              <path
                opacity="0.1"
                d="M1964.19 288.316C1879.2 280.88 1792.67 341.467 1770.19 423.876C1748.51 506.284 1799.35 578.889 1884.34 586.325C1969.33 593.761 2055.86 533.174 2077.94 450.765C2100.02 368.356 2049.18 295.752 1964.19 288.316ZM1962.15 494.787C1957.75 511.208 1940.36 523.38 1923.43 521.899L1878.58 517.975C1861.64 516.493 1851.43 501.906 1855.83 485.485L1883.7 381.486L1990.01 390.788L1962.15 494.787ZM2001.98 386.855L1875.28 375.77L1877.89 366.039L1912.38 369.058C1915.85 359.713 1925.96 353.128 1935.68 353.979L1955.75 355.735C1965.79 356.613 1971.99 364.624 1970.09 374.106L2004.59 377.124L2001.98 386.855Z"
                fill="#E2E8F0"
              />
              <circle
                cx="88.6268"
                cy="88.6268"
                r="88.6268"
                transform="matrix(0.866025 -0.1 0.866025 0.1 811.211 838.371)"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M1046.53 885.601C1001.69 911.486 929.01 911.486 884.175 885.601C839.341 859.716 839.341 817.753 884.175 791.868C929.01 765.983 1001.69 765.983 1046.53 791.868C1091.34 817.764 1091.34 859.726 1046.53 885.601ZM914.095 804.207L905.528 809.153L964.422 843.155L964.786 843.974L1046.49 831.331L1043.36 824.589L969.261 836.057L914.095 804.207Z"
                fill="#E2E8F0"
              />
              <circle
                cx="134.896"
                cy="134.896"
                r="134.896"
                transform="matrix(0.970296 0.241922 -0.743145 0.669131 1691.64 811.336)"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M1827.48 839.514C1790.77 830.362 1744.37 831.641 1698.54 843.067C1652.7 854.495 1611.14 875.146 1583.02 900.463C1554.91 925.781 1542.52 953.704 1548.6 978.076C1554.67 1002.45 1578.72 1021.29 1615.43 1030.44C1652.14 1039.59 1698.53 1038.31 1744.37 1026.89C1790.2 1015.46 1831.77 994.81 1859.88 969.492C1887.95 944.174 1900.32 916.268 1894.24 891.897C1888.16 867.526 1864.14 848.693 1827.48 839.514ZM1744.71 971.66C1745.68 975.559 1740.12 980.204 1733.19 982.033C1725.85 983.861 1719.12 982.182 1718.14 978.282L1709.92 945.36L1648 960.793C1640.66 962.621 1633.93 960.942 1632.96 957.043C1631.98 953.143 1637.14 948.499 1644.48 946.67L1706.4 931.224L1698.2 898.296C1697.5 894.428 1702.62 889.951 1709.78 888.161C1716.94 886.382 1723.57 887.929 1724.76 891.673L1732.98 924.596L1794.92 909.154L1794.91 909.163C1802.1 907.51 1808.54 909.221 1809.5 913.024C1810.44 916.833 1805.56 921.37 1798.43 923.285L1736.51 938.731L1744.71 971.66Z"
                fill="#E2E8F0"
              />
            </g>
            <g filter="url(#filter1_ddddd_98_3403)">
              <mask id="path-28-inside-1_98_3403" fill="white">
                <path d="M2127.16 279.995H2094.09V225.652C2095.93 209.999 2091.06 194.346 2080.18 182.533C2070.18 170.719 2055.12 164 2039.4 164C2023.6 164 2008.62 170.719 1998.14 182.533C1987.66 194.346 1982.79 209.999 1984.63 225.652V279.995H1439.85V225.652C1441.7 209.999 1436.83 194.346 1426.35 182.533C1415.94 170.719 1400.88 164 1385.16 164C1369.37 164 1354.38 170.719 1343.9 182.533C1333.42 194.346 1328.55 209.999 1330.4 225.652V279.995H1297.33C1195.48 279.995 1112.81 362.396 1112.37 464.288V794.335C1112.37 824.756 1137.02 849.417 1167.43 849.417C1197.91 849.417 1222.56 824.756 1222.56 794.335V607.678H2201.92V1076.31V1076.24C2201.92 1097.14 2193.66 1117.22 2178.89 1131.99C2164.13 1146.75 2144.13 1155.02 2123.24 1155.02H1745.35C1729.7 1153.18 1713.98 1158.05 1702.17 1168.53C1690.36 1178.95 1683.64 1194.01 1683.64 1209.74C1683.64 1225.54 1690.36 1240.12 1702.17 1251.01C1713.98 1261.49 1729.7 1266.37 1745.35 1264.52H2123.24C2173.51 1265.56 2222.07 1246.14 2257.72 1210.62C2293.37 1175.11 2313 1126.6 2312.19 1076.24V464.29C2311.75 362.397 2229.01 279.995 2127.16 279.995ZM1222.56 497.367V464.288C1222.49 422.275 1255.41 387.647 1297.33 385.579H2127.16C2148.04 385.579 2168.05 393.849 2182.81 408.617C2197.57 423.385 2205.91 443.392 2205.91 464.288V497.367H1222.56ZM1376.08 1245.54L1183.96 1442.46C1173.33 1452.5 1159.23 1458.12 1144.62 1458.26C1130.23 1458.19 1116.43 1452.5 1106.02 1442.46C1084.39 1420.68 1084.39 1385.54 1106.02 1363.75L1205.22 1261.34H792.704C777.057 1263.19 761.335 1258.32 749.526 1247.83C737.79 1237.42 731 1222.36 731 1206.63C731 1190.83 737.79 1175.84 749.526 1165.36C761.335 1154.87 777.056 1150 792.704 1151.84H1205.22L1106.02 1052.61C1084.32 1030.9 1084.32 995.608 1106.02 973.9C1127.79 952.119 1163 952.119 1184.77 973.9L1376.9 1166.09V1166.02C1382.21 1171.04 1386.27 1177.24 1388.71 1184.18C1394.17 1197.55 1394.17 1212.54 1388.71 1225.9C1386.49 1233.58 1382.14 1240.45 1376.08 1245.62L1376.08 1245.54ZM1580.75 1166.76V1166.83C1602.38 1188.61 1602.38 1223.76 1580.75 1245.62L1387.89 1442.46C1377.56 1453.09 1363.31 1459 1348.55 1459C1333.72 1459 1319.55 1453.09 1309.14 1442.46C1298.37 1432.2 1292.31 1418.02 1292.31 1403.11C1292.31 1388.19 1298.37 1374.02 1309.14 1363.75L1466.57 1210.18L1309.14 1052.68V1052.61C1287.44 1030.9 1287.44 995.61 1309.14 973.901C1330.91 952.12 1366.12 952.12 1387.89 973.901L1580.75 1166.76Z" />
              </mask>
              <path
                d="M2127.16 279.995H2094.09V225.652C2095.93 209.999 2091.06 194.346 2080.18 182.533C2070.18 170.719 2055.12 164 2039.4 164C2023.6 164 2008.62 170.719 1998.14 182.533C1987.66 194.346 1982.79 209.999 1984.63 225.652V279.995H1439.85V225.652C1441.7 209.999 1436.83 194.346 1426.35 182.533C1415.94 170.719 1400.88 164 1385.16 164C1369.37 164 1354.38 170.719 1343.9 182.533C1333.42 194.346 1328.55 209.999 1330.4 225.652V279.995H1297.33C1195.48 279.995 1112.81 362.396 1112.37 464.288V794.335C1112.37 824.756 1137.02 849.417 1167.43 849.417C1197.91 849.417 1222.56 824.756 1222.56 794.335V607.678H2201.92V1076.31V1076.24C2201.92 1097.14 2193.66 1117.22 2178.89 1131.99C2164.13 1146.75 2144.13 1155.02 2123.24 1155.02H1745.35C1729.7 1153.18 1713.98 1158.05 1702.17 1168.53C1690.36 1178.95 1683.64 1194.01 1683.64 1209.74C1683.64 1225.54 1690.36 1240.12 1702.17 1251.01C1713.98 1261.49 1729.7 1266.37 1745.35 1264.52H2123.24C2173.51 1265.56 2222.07 1246.14 2257.72 1210.62C2293.37 1175.11 2313 1126.6 2312.19 1076.24V464.29C2311.75 362.397 2229.01 279.995 2127.16 279.995ZM1222.56 497.367V464.288C1222.49 422.275 1255.41 387.647 1297.33 385.579H2127.16C2148.04 385.579 2168.05 393.849 2182.81 408.617C2197.57 423.385 2205.91 443.392 2205.91 464.288V497.367H1222.56ZM1376.08 1245.54L1183.96 1442.46C1173.33 1452.5 1159.23 1458.12 1144.62 1458.26C1130.23 1458.19 1116.43 1452.5 1106.02 1442.46C1084.39 1420.68 1084.39 1385.54 1106.02 1363.75L1205.22 1261.34H792.704C777.057 1263.19 761.335 1258.32 749.526 1247.83C737.79 1237.42 731 1222.36 731 1206.63C731 1190.83 737.79 1175.84 749.526 1165.36C761.335 1154.87 777.056 1150 792.704 1151.84H1205.22L1106.02 1052.61C1084.32 1030.9 1084.32 995.608 1106.02 973.9C1127.79 952.119 1163 952.119 1184.77 973.9L1376.9 1166.09V1166.02C1382.21 1171.04 1386.27 1177.24 1388.71 1184.18C1394.17 1197.55 1394.17 1212.54 1388.71 1225.9C1386.49 1233.58 1382.14 1240.45 1376.08 1245.62L1376.08 1245.54ZM1580.75 1166.76V1166.83C1602.38 1188.61 1602.38 1223.76 1580.75 1245.62L1387.89 1442.46C1377.56 1453.09 1363.31 1459 1348.55 1459C1333.72 1459 1319.55 1453.09 1309.14 1442.46C1298.37 1432.2 1292.31 1418.02 1292.31 1403.11C1292.31 1388.19 1298.37 1374.02 1309.14 1363.75L1466.57 1210.18L1309.14 1052.68V1052.61C1287.44 1030.9 1287.44 995.61 1309.14 973.901C1330.91 952.12 1366.12 952.12 1387.89 973.901L1580.75 1166.76Z"
                fill="white"
              />
              <path
                d="M2127.16 279.995H2094.09V225.652C2095.93 209.999 2091.06 194.346 2080.18 182.533C2070.18 170.719 2055.12 164 2039.4 164C2023.6 164 2008.62 170.719 1998.14 182.533C1987.66 194.346 1982.79 209.999 1984.63 225.652V279.995H1439.85V225.652C1441.7 209.999 1436.83 194.346 1426.35 182.533C1415.94 170.719 1400.88 164 1385.16 164C1369.37 164 1354.38 170.719 1343.9 182.533C1333.42 194.346 1328.55 209.999 1330.4 225.652V279.995H1297.33C1195.48 279.995 1112.81 362.396 1112.37 464.288V794.335C1112.37 824.756 1137.02 849.417 1167.43 849.417C1197.91 849.417 1222.56 824.756 1222.56 794.335V607.678H2201.92V1076.31V1076.24C2201.92 1097.14 2193.66 1117.22 2178.89 1131.99C2164.13 1146.75 2144.13 1155.02 2123.24 1155.02H1745.35C1729.7 1153.18 1713.98 1158.05 1702.17 1168.53C1690.36 1178.95 1683.64 1194.01 1683.64 1209.74C1683.64 1225.54 1690.36 1240.12 1702.17 1251.01C1713.98 1261.49 1729.7 1266.37 1745.35 1264.52H2123.24C2173.51 1265.56 2222.07 1246.14 2257.72 1210.62C2293.37 1175.11 2313 1126.6 2312.19 1076.24V464.29C2311.75 362.397 2229.01 279.995 2127.16 279.995ZM1222.56 497.367V464.288C1222.49 422.275 1255.41 387.647 1297.33 385.579H2127.16C2148.04 385.579 2168.05 393.849 2182.81 408.617C2197.57 423.385 2205.91 443.392 2205.91 464.288V497.367H1222.56ZM1376.08 1245.54L1183.96 1442.46C1173.33 1452.5 1159.23 1458.12 1144.62 1458.26C1130.23 1458.19 1116.43 1452.5 1106.02 1442.46C1084.39 1420.68 1084.39 1385.54 1106.02 1363.75L1205.22 1261.34H792.704C777.057 1263.19 761.335 1258.32 749.526 1247.83C737.79 1237.42 731 1222.36 731 1206.63C731 1190.83 737.79 1175.84 749.526 1165.36C761.335 1154.87 777.056 1150 792.704 1151.84H1205.22L1106.02 1052.61C1084.32 1030.9 1084.32 995.608 1106.02 973.9C1127.79 952.119 1163 952.119 1184.77 973.9L1376.9 1166.09V1166.02C1382.21 1171.04 1386.27 1177.24 1388.71 1184.18C1394.17 1197.55 1394.17 1212.54 1388.71 1225.9C1386.49 1233.58 1382.14 1240.45 1376.08 1245.62L1376.08 1245.54ZM1580.75 1166.76V1166.83C1602.38 1188.61 1602.38 1223.76 1580.75 1245.62L1387.89 1442.46C1377.56 1453.09 1363.31 1459 1348.55 1459C1333.72 1459 1319.55 1453.09 1309.14 1442.46C1298.37 1432.2 1292.31 1418.02 1292.31 1403.11C1292.31 1388.19 1298.37 1374.02 1309.14 1363.75L1466.57 1210.18L1309.14 1052.68V1052.61C1287.44 1030.9 1287.44 995.61 1309.14 973.901C1330.91 952.12 1366.12 952.12 1387.89 973.901L1580.75 1166.76Z"
                stroke="black"
                stroke-width="6"
                mask="url(#path-28-inside-1_98_3403)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_98_3403"
                x="84.2656"
                y="86.2266"
                width="2852.73"
                height="1439.77"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10"
                  result="effect1_foregroundBlur_98_3403"
                />
              </filter>
              <filter
                id="filter1_ddddd_98_3403"
                x="708"
                y="160"
                width="1627.22"
                height="1403"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="3.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_98_3403"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="13" />
                <feGaussianBlur stdDeviation="6.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_98_3403"
                  result="effect2_dropShadow_98_3403"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="29" />
                <feGaussianBlur stdDeviation="8.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_98_3403"
                  result="effect3_dropShadow_98_3403"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="52" />
                <feGaussianBlur stdDeviation="10.1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_98_3403"
                  result="effect4_dropShadow_98_3403"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="81" />
                <feGaussianBlur stdDeviation="11.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect4_dropShadow_98_3403"
                  result="effect5_dropShadow_98_3403"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect5_dropShadow_98_3403"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}
    </>
  );
};
export const LearnMoreUpcoming = ({
  className = "",
}: {
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();

  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <g opacity="0.7" filter="url(#filter0_f_123_222)">
              <rect
                x="764.625"
                y="229"
                width="1517.2"
                height="477.154"
                rx="64"
                fill="#020817"
              />
              <rect
                x="767.125"
                y="231.5"
                width="1512.2"
                height="472.154"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.88"
                stroke-width="5"
              />
              <rect
                x="836.656"
                y="570.008"
                width="306.949"
                height="90.7387"
                rx="45.3693"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="1187.11"
                y="570.008"
                width="523.16"
                height="90.7387"
                rx="45.3693"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="839.039"
                y="386.648"
                width="1190.54"
                height="67.2619"
                rx="33.6309"
                fill="#454F61"
              />
              <rect
                x="586.555"
                y="288.164"
                width="1873.47"
                height="589.199"
                rx="64"
                fill="#020817"
              />
              <rect
                x="589.055"
                y="290.664"
                width="1868.47"
                height="584.199"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.91"
                stroke-width="5"
              />
              <rect
                x="676.211"
                y="708.602"
                width="377.852"
                height="110.872"
                rx="55.4358"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="1108.79"
                y="708.602"
                width="644.833"
                height="110.872"
                rx="55.4358"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="678.445"
                y="481.602"
                width="1470.09"
                height="83.0562"
                rx="41.5281"
                fill="#454F61"
              />
              <rect
                x="451.391"
                y="356.555"
                width="2143.74"
                height="674.198"
                rx="64"
                fill="#020817"
              />
              <rect
                x="453.891"
                y="359.055"
                width="2138.74"
                height="669.198"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.94"
                stroke-width="5"
              />
              <rect
                x="554.297"
                y="810.992"
                width="431.641"
                height="126.145"
                rx="63.0724"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="1049.31"
                y="810.992"
                width="737.137"
                height="126.145"
                rx="63.0724"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="556.562"
                y="550.883"
                width="1682.17"
                height="95.0381"
                rx="47.519"
                fill="#454F61"
              />
              <rect
                x="303.969"
                y="439.602"
                width="2432.44"
                height="764.992"
                rx="64"
                fill="#020817"
              />
              <rect
                x="306.469"
                y="442.102"
                width="2427.44"
                height="759.992"
                rx="61.5"
                stroke="#E2E8F0"
                stroke-opacity="0.97"
                stroke-width="5"
              />
              <rect
                x="421.055"
                y="924.008"
                width="489.097"
                height="142.46"
                rx="66.5"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="982.82"
                y="924.008"
                width="835.734"
                height="142.46"
                rx="66.5"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="423.242"
                y="628.508"
                width="1908.71"
                height="107.837"
                rx="53.9184"
                fill="#454F61"
              />
              <rect
                x="131.258"
                y="533.312"
                width="2781.01"
                height="871.188"
                rx="61.5"
                fill="#020817"
                stroke="#E2E8F0"
                stroke-width="5"
              />
              <rect
                x="263.195"
                y="1055.37"
                width="559.463"
                height="162.44"
                rx="81.22"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="906.656"
                y="1055.37"
                width="956.486"
                height="162.44"
                rx="81.22"
                fill="#454F61"
                stroke="#1E293B"
                stroke-width="5"
              />
              <rect
                x="265.383"
                y="716.617"
                width="2186.16"
                height="123.512"
                rx="8"
                fill="#454F61"
              />
            </g>
            <g filter="url(#filter1_dddd_123_222)">
              <circle cx="1519.5" cy="811.5" r="278.5" fill="#BC2626" />
              <path
                d="M1519.5 958.297C1498.67 958.297 1480.83 954.911 1465.98 948.141C1451.27 941.24 1440.01 931.604 1432.2 919.234C1424.38 906.865 1420.48 892.411 1420.48 875.875V875.484C1420.48 862.724 1422.89 851.591 1427.7 842.086C1432.52 832.451 1439.03 824.703 1447.23 818.844C1455.57 812.854 1464.81 808.948 1474.97 807.125V805.562C1461.56 802.307 1450.23 795.276 1440.98 784.469C1431.87 773.531 1427.31 759.99 1427.31 743.844V743.453C1427.31 728.219 1431.02 714.938 1438.45 703.609C1446 692.281 1456.67 683.492 1470.48 677.242C1484.28 670.992 1500.62 667.867 1519.5 667.867C1538.38 667.867 1554.72 670.992 1568.52 677.242C1582.33 683.492 1592.94 692.281 1600.36 703.609C1607.91 714.938 1611.69 728.219 1611.69 743.453V743.844C1611.69 759.99 1607.07 773.531 1597.82 784.469C1588.71 795.276 1577.44 802.307 1564.03 805.562V807.125C1574.19 808.948 1583.37 812.854 1591.57 818.844C1599.9 824.703 1606.48 832.451 1611.3 842.086C1616.11 851.591 1618.52 862.724 1618.52 875.484V875.875C1618.52 892.411 1614.62 906.865 1606.8 919.234C1598.99 931.604 1587.66 941.24 1572.82 948.141C1558.11 954.911 1540.33 958.297 1519.5 958.297ZM1519.5 906.148C1524.06 906.148 1527.9 904.846 1531.02 902.242C1534.28 899.638 1536.69 895.797 1538.25 890.719C1539.94 885.641 1540.79 879.326 1540.79 871.773V871.383C1540.79 863.701 1539.94 857.32 1538.25 852.242C1536.69 847.034 1534.28 843.128 1531.02 840.523C1527.9 837.789 1524.06 836.422 1519.5 836.422C1514.94 836.422 1511.04 837.789 1507.78 840.523C1504.66 843.128 1502.25 847.034 1500.55 852.242C1498.99 857.32 1498.21 863.701 1498.21 871.383V871.773C1498.21 879.326 1498.99 885.641 1500.55 890.719C1502.25 895.797 1504.66 899.638 1507.78 902.242C1511.04 904.846 1514.94 906.148 1519.5 906.148ZM1519.5 784.859C1523.54 784.859 1526.99 783.622 1529.85 781.148C1532.72 778.674 1534.86 775.094 1536.3 770.406C1537.86 765.589 1538.64 759.599 1538.64 752.438V752.047C1538.64 745.016 1537.86 739.091 1536.3 734.273C1534.86 729.456 1532.72 725.875 1529.85 723.531C1526.99 721.057 1523.54 719.82 1519.5 719.82C1515.46 719.82 1512.01 721.057 1509.15 723.531C1506.28 725.875 1504.07 729.456 1502.51 734.273C1501.08 739.091 1500.36 745.016 1500.36 752.047V752.438C1500.36 759.599 1501.08 765.589 1502.51 770.406C1504.07 775.094 1506.28 778.674 1509.15 781.148C1512.01 783.622 1515.46 784.859 1519.5 784.859Z"
                fill="#F4F4F4"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_123_222"
                x="113.758"
                y="214"
                width="2816.01"
                height="1208"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.5"
                  result="effect1_foregroundBlur_123_222"
                />
              </filter>
              <filter
                id="filter1_dddd_123_222"
                x="1194"
                y="524"
                width="651"
                height="730"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_123_222"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="29" />
                <feGaussianBlur stdDeviation="14.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_123_222"
                  result="effect2_dropShadow_123_222"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="66" />
                <feGaussianBlur stdDeviation="20" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_123_222"
                  result="effect3_dropShadow_123_222"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="117" />
                <feGaussianBlur stdDeviation="23.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_123_222"
                  result="effect4_dropShadow_123_222"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_123_222"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      ) : (
        <>
          <svg
            width="3043"
            height="1623"
            viewBox="0 0 3043 1623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <g opacity="0.7" filter="url(#filter0_f_123_178)">
              <rect
                x="764.625"
                y="229"
                width="1517.2"
                height="477.154"
                rx="64"
                fill="white"
              />
              <rect
                x="767.125"
                y="231.5"
                width="1512.2"
                height="472.154"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.88"
                stroke-width="5"
              />
              <rect
                x="839.156"
                y="572.508"
                width="301.949"
                height="85.7387"
                rx="42.8693"
                fill="#E2E8F0"
              />
              <rect
                x="836.656"
                y="570.008"
                width="306.949"
                height="90.7387"
                rx="45.3693"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="1189.61"
                y="572.508"
                width="518.16"
                height="85.7387"
                rx="42.8693"
                fill="#E2E8F0"
              />
              <rect
                x="1187.11"
                y="570.008"
                width="523.16"
                height="90.7387"
                rx="45.3693"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="839.039"
                y="386.648"
                width="1190.54"
                height="67.2619"
                rx="33.6309"
                fill="#E2E8F0"
              />
              <rect
                x="586.555"
                y="288.164"
                width="1873.47"
                height="589.199"
                rx="64"
                fill="white"
              />
              <rect
                x="589.055"
                y="290.664"
                width="1868.47"
                height="584.199"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.91"
                stroke-width="5"
              />
              <rect
                x="678.711"
                y="711.102"
                width="372.852"
                height="105.872"
                rx="52.9358"
                fill="#E2E8F0"
              />
              <rect
                x="676.211"
                y="708.602"
                width="377.852"
                height="110.872"
                rx="55.4358"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="1111.29"
                y="711.102"
                width="639.833"
                height="105.872"
                rx="52.9358"
                fill="#E2E8F0"
              />
              <rect
                x="1108.79"
                y="708.602"
                width="644.833"
                height="110.872"
                rx="55.4358"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="678.445"
                y="481.602"
                width="1470.09"
                height="83.0562"
                rx="41.5281"
                fill="#E2E8F0"
              />
              <rect
                x="451.391"
                y="356.555"
                width="2143.74"
                height="674.198"
                rx="64"
                fill="white"
              />
              <rect
                x="453.891"
                y="359.055"
                width="2138.74"
                height="669.198"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.94"
                stroke-width="5"
              />
              <rect
                x="556.797"
                y="813.492"
                width="426.641"
                height="121.145"
                rx="60.5724"
                fill="#E2E8F0"
              />
              <rect
                x="554.297"
                y="810.992"
                width="431.641"
                height="126.145"
                rx="63.0724"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="1051.81"
                y="813.492"
                width="732.137"
                height="121.145"
                rx="60.5724"
                fill="#E2E8F0"
              />
              <rect
                x="1049.31"
                y="810.992"
                width="737.137"
                height="126.145"
                rx="63.0724"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="556.562"
                y="550.883"
                width="1682.17"
                height="95.0381"
                rx="47.519"
                fill="#E2E8F0"
              />
              <rect
                x="303.969"
                y="439.602"
                width="2432.44"
                height="764.992"
                rx="64"
                fill="white"
              />
              <rect
                x="306.469"
                y="442.102"
                width="2427.44"
                height="759.992"
                rx="61.5"
                stroke="#C3D0E2"
                stroke-opacity="0.97"
                stroke-width="5"
              />
              <rect
                x="423.555"
                y="926.508"
                width="484.097"
                height="137.46"
                rx="68.7298"
                fill="#E2E8F0"
              />
              <rect
                x="421.055"
                y="924.008"
                width="489.097"
                height="142.46"
                rx="71.2298"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="985.32"
                y="926.508"
                width="830.734"
                height="137.46"
                rx="68.7298"
                fill="#E2E8F0"
              />
              <rect
                x="982.82"
                y="924.008"
                width="835.734"
                height="142.46"
                rx="71.2298"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="423.242"
                y="628.508"
                width="1908.71"
                height="107.837"
                rx="8"
                fill="#E2E8F0"
              />
              <rect
                x="131.258"
                y="533.312"
                width="2781.01"
                height="871.188"
                rx="61.5"
                fill="white"
                stroke="#C3D0E2"
                stroke-width="5"
              />
              <rect
                x="265.695"
                y="1057.87"
                width="554.463"
                height="157.44"
                rx="78.72"
                fill="#E2E8F0"
              />
              <rect
                x="263.195"
                y="1055.37"
                width="559.463"
                height="162.44"
                rx="81.22"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="909.156"
                y="1057.87"
                width="951.486"
                height="157.44"
                rx="78.72"
                fill="#E2E8F0"
              />
              <rect
                x="906.656"
                y="1055.37"
                width="956.486"
                height="162.44"
                rx="81.22"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
                stroke-width="5"
              />
              <rect
                x="265.383"
                y="716.617"
                width="2186.16"
                height="123.512"
                rx="8"
                fill="#E2E8F0"
              />
            </g>
            <g filter="url(#filter1_dddd_123_178)">
              <circle cx="1521.5" cy="811.5" r="278.5" fill="#E80F0F" />
              <path
                d="M1521.5 958.297C1500.67 958.297 1482.83 954.911 1467.98 948.141C1453.27 941.24 1442.01 931.604 1434.2 919.234C1426.38 906.865 1422.48 892.411 1422.48 875.875V875.484C1422.48 862.724 1424.89 851.591 1429.7 842.086C1434.52 832.451 1441.03 824.703 1449.23 818.844C1457.57 812.854 1466.81 808.948 1476.97 807.125V805.562C1463.56 802.307 1452.23 795.276 1442.98 784.469C1433.87 773.531 1429.31 759.99 1429.31 743.844V743.453C1429.31 728.219 1433.02 714.938 1440.45 703.609C1448 692.281 1458.67 683.492 1472.48 677.242C1486.28 670.992 1502.62 667.867 1521.5 667.867C1540.38 667.867 1556.72 670.992 1570.52 677.242C1584.33 683.492 1594.94 692.281 1602.36 703.609C1609.91 714.938 1613.69 728.219 1613.69 743.453V743.844C1613.69 759.99 1609.07 773.531 1599.82 784.469C1590.71 795.276 1579.44 802.307 1566.03 805.562V807.125C1576.19 808.948 1585.37 812.854 1593.57 818.844C1601.9 824.703 1608.48 832.451 1613.3 842.086C1618.11 851.591 1620.52 862.724 1620.52 875.484V875.875C1620.52 892.411 1616.62 906.865 1608.8 919.234C1600.99 931.604 1589.66 941.24 1574.82 948.141C1560.11 954.911 1542.33 958.297 1521.5 958.297ZM1521.5 906.148C1526.06 906.148 1529.9 904.846 1533.02 902.242C1536.28 899.638 1538.69 895.797 1540.25 890.719C1541.94 885.641 1542.79 879.326 1542.79 871.773V871.383C1542.79 863.701 1541.94 857.32 1540.25 852.242C1538.69 847.034 1536.28 843.128 1533.02 840.523C1529.9 837.789 1526.06 836.422 1521.5 836.422C1516.94 836.422 1513.04 837.789 1509.78 840.523C1506.66 843.128 1504.25 847.034 1502.55 852.242C1500.99 857.32 1500.21 863.701 1500.21 871.383V871.773C1500.21 879.326 1500.99 885.641 1502.55 890.719C1504.25 895.797 1506.66 899.638 1509.78 902.242C1513.04 904.846 1516.94 906.148 1521.5 906.148ZM1521.5 784.859C1525.54 784.859 1528.99 783.622 1531.85 781.148C1534.72 778.674 1536.86 775.094 1538.3 770.406C1539.86 765.589 1540.64 759.599 1540.64 752.438V752.047C1540.64 745.016 1539.86 739.091 1538.3 734.273C1536.86 729.456 1534.72 725.875 1531.85 723.531C1528.99 721.057 1525.54 719.82 1521.5 719.82C1517.46 719.82 1514.01 721.057 1511.15 723.531C1508.28 725.875 1506.07 729.456 1504.51 734.273C1503.08 739.091 1502.36 745.016 1502.36 752.047V752.438C1502.36 759.599 1503.08 765.589 1504.51 770.406C1506.07 775.094 1508.28 778.674 1511.15 781.148C1514.01 783.622 1517.46 784.859 1521.5 784.859Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_123_178"
                x="113.758"
                y="214"
                width="2816.01"
                height="1208"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.5"
                  result="effect1_foregroundBlur_123_178"
                />
              </filter>
              <filter
                id="filter1_dddd_123_178"
                x="1196"
                y="524"
                width="651"
                height="730"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_123_178"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="29" />
                <feGaussianBlur stdDeviation="14.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_123_178"
                  result="effect2_dropShadow_123_178"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="66" />
                <feGaussianBlur stdDeviation="20" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_123_178"
                  result="effect3_dropShadow_123_178"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="117" />
                <feGaussianBlur stdDeviation="23.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_123_178"
                  result="effect4_dropShadow_123_178"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_123_178"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}
    </>
  );
};
