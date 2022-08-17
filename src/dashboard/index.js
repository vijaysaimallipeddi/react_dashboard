import React from 'react'
import './index.css'
import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";
import { BsPiggyBank } from 'react-icons/bs';


const Dashboard = () => {
    const [selected, onSelect] = React.useState('na');
    return(
        <div>
            <div className='nav-container'>
                <nav className='nav'>
                    <a href='/projects' className='project project1'>Projects</a>
                    <a href='/languages' className='project'>Languages </a>
                    <a href='/engine' className='project'>Language Translation Engines</a>
                    <a href='/dashboard' className='project dashboard'>Dashboard</a>
                    <a href='/usermanagement' className='project'>UserManagement</a>
                </nav>
            </div>
            <div className='date-container'>
                <label for='date'>Date</label>
                <input type='date' id='date' className='date'/>
                <span>-</span>
                <input type='date' id='date' className='date'/>

            </div>
            <div className='maincontainer'>
                <div className='statuscontainer'>
                <div className='total'>
                    <div>
                        <h1 className='count'>525</h1>
                        <p className='count1'>Total Onboarded Projects</p>
                    </div>
                    <div className='pig-cont'>
                        <BsPiggyBank className='pig' />
                    </div>
                </div>
                </div>
                <div className='statuscontainer'>
                <div className='total1'>
                    <h1 className='count'>282</h1>
                    <p className='count1'>Translation In Progress</p>
                    <div>
                    </div>
                </div>
                </div>
                <div className='statuscontainer'>
                <div className='total2'>
                    <h1 className='count'>243</h1>
                    <p className='count1'>Translation Completed</p>
                    <div>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className='maingraphcont'>
                    <div className='graphcontainer'>
                    <p>Characters Transalted</p>
                    <h4>65,894,387</h4>
                    </div>
                    <div className='graphcontainer1'>
                        <p>Translation Memory Capacity</p>
                        <h4>5GB</h4>
                    </div>
                </div>
                <div className='maingraphcont1'>
                    <div className='graphcontainer'>
                        <p>Human In The Middle Reviews</p>
                        <h4>43,487</h4>
                    </div>
                    <div className='graphcontainer1'>
                        <p>Total Saving</p>
                        <h4>$1,376,923</h4>
                    </div>
                </div>
            </div>

            
            <div className='map-container'>
                <div className='map-table'>
                    <h6>Transaltion by Region</h6>
                    <WorldMap className='map1' />
                    <div className='table-container'>
                        <table className='table'>
                        <tr>
                            <td>USA</td>
                            <td>176,880</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>54,748</td>
                        </tr>
                        <tr>
                            <td>Austria</td>
                            <td>86,068</td>
                        </tr>
                        <tr>
                            <td>China</td>
                            <td>96,304</td>
                        </tr>
                        <tr>
                            <td>Mexico</td>
                            <td>75,969</td>
                        </tr>
                        <tr>
                            <td>Indonesia</td>
                            <td>66,870</td>
                        </tr>
                        <tr>
                            <td>Brazil</td>
                            <td>14,757</td>
                        </tr>
                        <tr>
                            <td>USA</td>
                            <td>176,390</td>
                        </tr>
                        <tr>
                            <td>Philippines</td>
                            <td>77,482</td>
                        </tr>
                        <tr>
                            <td>Cuba</td>
                            <td>18,418</td>
                        </tr>
                        <tr>
                            <td>Iran</td>
                            <td>74,834</td>
                        </tr>
                        <tr>
                            <td>UK</td>
                            <td>89,934</td>
                        </tr>
                        <tr>
                            <td>Japan</td>
                            <td>25,808</td>
                        </tr>
                        <tr>
                            <td>Africa</td>
                            <td>93,998</td>
                        </tr>
                        <tr>
                            <td>Argentinia</td>
                            <td>72,762</td>
                        </tr>
                    </table>
                    </div>
                </div>

            </div>

            <div>
                <table>
                    <tr className='main-head'>
                        <th className='langs'>Transaltions by Languages</th>
                        <th className='demo'>Demo</th>
                    </tr>
                    <tr>
                        <td rowSpan={2} colSpan={2}>Japanese</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dashboard