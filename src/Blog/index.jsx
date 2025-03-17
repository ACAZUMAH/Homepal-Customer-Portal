import React from 'react'
import { Trends } from './components/trends'
import { OtherTrends } from './components/otherTrends'


export const Blog = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
        main blog
        <Trends />
        <OtherTrends />
    </div>
  );
};
