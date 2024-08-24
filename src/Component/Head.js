import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_search_api } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  let searchCache = useSelector((store)=> store.search );
  console.log(searchCache);
  
  useEffect(() => {
    const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestion(searchCache[searchQuery]);
        } else {
          getSearchSuggestion();
        }
      }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);
console.log("suggestion",searchCache[searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  console.log(searchQuery);

  const getSearchSuggestion = async () => {
    const data = await fetch(Youtube_search_api + searchQuery);
    const json = await data.json();

    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          onClick={toggleMenuHandler}
          alt="Toggle Menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwD9vnKk5oPrEHIthwjMIshbnqJgQDgdAvfA&s"
        />
        {/* <Link to="/"> */}
        <img
          className="h-8 mx-2"
          alt="YouTube Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
        />
        {/* </Link> */}
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white rounded-lg shadow-lg py-2 px-1 w-[31rem]">
            <ul>
              {suggestion.map((value) => (
                <li className="px-5 py-2 shadow-sm hover:bg-gray-50">
                  🔍 {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="User Profile"
          src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
