import React from "react"
import Styled from "styled-components"
import Arteriwoman2 from '../Images/Arteriwoman2.png'
import Arteriwelcome from '../Images/Arteriwelcome.png'
import Applyicon from '../Images/Applyicon.png'
import Ateridocs from '../Images/Ateridocs.jpg'
import Ateriguy from '../Images/Ateriguy.jpg'
import Easeicon from '../Images/Easeicon.png'
import Repayicon from '../Images/Repayicon.png'
// import IoIosCheckmark from 'react-icons'
import {IoIosCheckmark} from "react-icons/io";
function Header () {
    return (
        <>
        <Maincontain>
           <Headhold>
                <div className="Leftimg">
                   <img src={Arteriwoman2} className="Arteriwoman2"/>
                </div>
                <div className="Rightimg">
                    <img src={Arteriwelcome} className="Arteriwelcome"/>
                </div>
            </Headhold>
        </Maincontain>

        <Ftaghold>
            <Ftagwrap>
                <Fea>
                    <Baby>FEATURES</Baby>
                    <Son>Individuals & Households</Son>
                </Fea>

                <Indi>
                    <Dad>
                        <Boy src={Applyicon}></Boy>
                        <Girl>Apply</Girl>
                        <Both>Apply and Pre-qualify for health insurance plan<br/>
                         and out-of pocket advances for any procedure</Both>
                    </Dad>

                    <Mom>
                    <Boy src={Easeicon}></Boy>
                        <Girl>Ease</Girl>
                        <Both> Seamless experience with your care provider, immediate onboarding with top-tier HMOs</Both>
                    </Mom>

                    <Child><Boy src={Repayicon}></Boy>
                        <Girl>Repayment</Girl>
                        <Both> Get the care you need now, pay back in up to 24 months, 0% interest plans available</Both>
                    </Child>
                </Indi>

                <Com>
                    <But>Submit</But>
                </Com>

            {/* <div className="Ftag">
                <h4><b>FEATURES</b></h4>
                <h4><b>Individuals & Households</b></h4>
             </div>

        <Iconhold>
            <Iconwrap>
            <div>
                <img src={Applyicon} />
            </div>
            </Iconwrap>
        </Iconhold> */}

            </Ftagwrap>
        </Ftaghold>

        <Ofcontain>
           
            <Getcon>  
                
                    <Ofmom>
                <Off>Offer financing to your users at up to 24 months repayment <br/>window
                    You get paid <br/>immediately by us, we collect the<br/> payment from your customers<br/> over time.
                </Off>
                    <But1>GET ONBOARDED</But1>
                    </Ofmom>
                

                <Dr><Docs src={Ateridocs}></Docs></Dr>
            

              <Tola>
              <Type>Operational and Equipment Financing<br/>
              At comfortable interest rates and repayment length</Type>
                <Brakeme></Brakeme>
                <Type1>
                Plug Revenue Leakages, Grow Faster<br/>
                We will be your reliable growth partner</Type1>
            </Tola> 

            </Getcon>
        </Ofcontain>

        <Bad>
            <Baddo>
                <Baddo1>
                    <Wrapme>
                        <Manbaba>
                            <Howfar>
                               <Them1> Kova is Now Live!</Them1>
                                <Them2>Financing for Health Coverage Plans</Them2>
                                <Them3><Fan><IoIosCheckmark/></Fan>Health Plans like Insurance, at Zero Upfront Cost</Them3>
                                <Them4><Fan><IoIosCheckmark/></Fan>Alternative Payment IoIosCheckmarkOptions for Bottom of the Pyramid – Pay With Waste</Them4>
                                <Them5><Fan><IoIosCheckmark/></Fan>Compare Plans Across 40+ Coverage Providers</Them5>
                                <Them6><Fan><IoIosCheckmark/></Fan>Special features for the African Diaspora</Them6>
                                <Them7><Fan><IoIosCheckmark/></Fan>Dependable Healthcare Advisor</Them7>
                                <Them8><Fan><IoIosCheckmark/></Fan>AI Recommendation Engine</Them8>
                            </Howfar>
                        </Manbaba>

                        <Lady>
                            <Butboss>Get Kova</Butboss>
                        </Lady>
                 </Wrapme>
                </Baddo1>
                <Baddo2>
                    <Myboy src={Ateriguy}></Myboy>
                </Baddo2>
            </Baddo>
        </Bad>
        </>
    )
}

export default Header

const Maincontain = Styled.div`
height: 100vh;
width: 100%;
`
const Headhold = Styled.div`
height: 90%;
width: 100%;
font-size: 40px;
display: flex;
align-items: center;
justify-content: center;
`

const Ftaghold = Styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Ftagwrap = Styled.div`
height: 90vh;
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

// const Ftag = Styled.div`
// font-size: 40px;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: row;
// `


const Fea = Styled.div`
height: 15vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: justify;
flex-direction: column;
`
const Indi = Styled.div`
height: 55vh;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px;
padding: 5px;
`
const Com = Styled.div`
height: 20vh;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`
const Baby = Styled.h2`
height: 10px;
color: black;
`
const Son = Styled.h1`
height: 20px;
color: black;
`
const Dad = Styled.div`
height: 50vh;
width: 50%;
border-radius: 5%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`
const Mom = Styled.div`
height: 50vh;
width: 50%;
border-radius: 5%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-left: 10px;
`
const Child = Styled.div`
height: 50vh;
width: 50%;
border-radius: 5%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-left: 10px;
`
const Boy = Styled.img`
height: 150px;
`
const Girl = Styled.h2`

`
const Both = Styled.h3`

`
const But = Styled.button`
height: 90px;
width: 20%;
background-color: green;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: center;
`

const Ofcontain = Styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #010e29;
`

const Getcon = Styled.div`
height: 80vh;
width: 90%;
display: flex;
align-items: center;
justify-content: space-around;
`

const Ofmom = Styled.div`
height: 40vh;
width: 30%;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
margin-left: 20%;

`
const Off = Styled.p`
height: 70vh;
width: 100%;
display: flex;
color: white;
align-items: center;

`

const But1 = Styled.button`
height: 90px;
width: 50%;
border-radius: 20px;
display: flex;
background: green;
justify-content: center;
align-items: center;
`
const Dr = Styled.div`
height: 50vh;
width: 70%;
border-radius: 5%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`
const Docs = Styled.img`
height: 400px;
`
const Tola = Styled.div`
height: 40vh;
width: 30%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-right: 15%;

`
const Type = Styled.p`
width:100%;
font-size: 17px;
text-align: center;
color: white;
`

const Brakeme = Styled.hr`
width: 100%;

`

const Type1 = Styled.p`
width:100%;
font-size: 17px;
text-align: center;
color: white;


`

const Bad = Styled.div`
height: 100vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
`

const Baddo = Styled.div`
height: 95vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
`
const Baddo1 = Styled.div`
height: 90vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
`

const Baddo2 = Styled.div`
height: 90vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
`

const Myboy = Styled.img`
height: 70vh;
`

const Wrapme = Styled.div`
height: 70vh;
width: 70%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between

`

const Manbaba = Styled.div`
height: 60vh;
width: 100%;
display: flex;
align-items: flex-end;

`

const Howfar = Styled.div`
height: 55vh;
width: 100%;
flex-wrap: wrap;

@media screen and (max-with: 860px){
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
}

`

const Them1 = Styled.p`

`
const Them2 = Styled.p`
height: 10px;
font-size: 20px;
`
const Them3 = Styled.h2`
font-size: 17px;
margin-top: 50px;
`
const Them4 = Styled.h2`
font-size: 17px;
margin-top: 25px;

`
const Them5 = Styled.h2`
font-size: 17px;
margin-top: 30px;

`
const Them6 = Styled.h2`
font-size: 17px;
margin-top: 30px;

`
const Them7 = Styled.h2`
font-size: 17px;
margin-top: 30px;

`
const Them8 = Styled.h2`
font-size: 17px;
margin-top: 30px;

`
const Fan = Styled.button`
height: 30px;
width: 50px;
border: none;
`
const Lady = Styled.div`
height: 10vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`
const Butboss = Styled.button`
height: 40px;
width: 30%;
border-radius: 20px;
`