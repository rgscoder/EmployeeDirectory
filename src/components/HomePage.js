import React from 'react'
import MainHeader from './MainHeader'
import Search from './Search'
import EmployeesList from './EmployeesList'

function HomePage() {
  return (
    <div className="homepage">
        <MainHeader/>
        <Search/>
        <EmployeesList/>
    </div>
  );
}

export default HomePage

