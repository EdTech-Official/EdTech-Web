import React, { useEffect, useState, createContext } from "react";
import { firebaseApp, db, auth } from "./firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [getFireAuthUser, setGetFireAuthUser] = useState(false);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const [collegeOptions, setCollegeOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  function checkData() {
    var docRef = db.collection("userPreference").doc(auth.currentUser.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        setCurrentUserData([
          {
            label: `${doc.data().college.label}`,
            value: `${doc.data().college.value}`,
          },
          {
            label: `${doc.data().branch.label}`,
            value: `${doc.data().branch.value}`,
          },
          {
            label: `${doc.data().year.label}`,
            value: `${doc.data().year.value}`,
          },
        ]);
        if (
          currentUserData !== [] ||
          currentUserData.length !== 0 ||
          currentUserData !== undefined ||
          currentUserData !== null
        ) {
          setSelectedCollege(currentUserData[0]);
          setSelectedBranch(currentUserData[1]);
          setSelectedYear(currentUserData[2]);
          if (
            selectedCollege !== null ||
            selectedCollege !== [] ||
            selectedCollege !== undefined ||
            selectedBranch !== null ||
            selectedBranch !== [] ||
            selectedBranch !== undefined ||
            selectedYear !== null ||
            selectedYear !== [] ||
            selectedYear !== undefined
          ) {
            setGetFireAuthUser(true);
            setDataFetched(true);
          }
        }
      } else {
        db.collection("colleges")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              collegeOptions.push(doc.data());
            });
          })
          .then(() => {
            setGetFireAuthUser(true);
          });

      }
    });
  }

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (currentUser != null) {
        checkData();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentUserData,
        setCurrentUserData,
        dataFetched,
        setDataFetched,
        setGetFireAuthUser,
        getFireAuthUser,
        collegeOptions,
        branchOptions,
        setSelectedCollege,
        selectedCollege,
        setSelectedBranch,
        selectedBranch,
        setSelectedYear,
        selectedYear,
        setCollegeOptions,
        setBranchOptions,
        yearOptions,
        setYearOptions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
