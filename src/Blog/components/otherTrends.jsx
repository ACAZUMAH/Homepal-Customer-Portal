import React from 'react'
import "./otherTrends.css"
import Buying1 from "./../../assets/images/Buying1.png"
import Buying2 from "./../../assets/images/Buying2.png"
import Buying3 from "./../../assets/images/Buying3.png"
import Selling1 from "./../../assets/images/Selling1.png"
import Selling2 from "./../../assets/images/Selling2.png"
import Selling3 from "./../../assets/images/Selling1.png"
import Guide1 from "./../../assets/images/Guide1.png"
import Guide2 from "./../../assets/images/Guide2.png"
import Guide3 from "./../../assets/images/Guide3.png"
import Renting1 from "./../../assets/images/Renting1.png"
import Renting2 from "./../../assets/images/Renting2.png"
import Renting3 from "./../../assets/images/Renting3.png"

export const OtherTrends = () => {
  return <div className="elements">
    {/* Buying */}
    <h1 className="h1" id="buying">Buying</h1>
    <div className="row-one">
      <div className="buying">
        <img src={Buying1} alt="First-time home buyer checklist" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Buying</div>
          <div className="ImageData"> 
            10 Essential steps for first-time home buyers in a competitive market
          </div>
          <div className="ImageAuthor">
            Sarah Thompson
          </div>
        </div>
      </div>

      <div className="buying">
        <img src={Buying2} alt="Mortgage options comparison" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Buying</div>
          <div className="ImageData"> 
            Fixed vs adjustable rates: Choosing the right mortgage for your budget
          </div>
          <div className="ImageAuthor">
            Michael Chen
          </div>
        </div>
      </div>

      <div className="buying">
        <img src={Buying3} alt="Home inspection process" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Buying</div>
          <div className="ImageData"> 
            The ultimate guide to home inspections: What buyers need to check
          </div>
          <div className="ImageAuthor">
            Emily Rodriguez
          </div>
        </div>
      </div>
    </div>

    {/* Selling */}
    <h1 className="h1" id="selling">Selling</h1>
    <div className="row-two">
      <div className="selling">
        <img src={Selling1} alt="Home staging tips" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Selling</div>
          <div className="ImageData"> 
            7 Proven staging techniques to sell your home faster and for more
          </div>
          <div className="ImageAuthor">
            David Miller
          </div>
        </div>
      </div>

      <div className="selling">
        <img src={Selling2} alt="Pricing strategy" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Selling</div>
          <div className="ImageData"> 
            How to price your home competitively in a shifting market
          </div>
          <div className="ImageAuthor">
            Jessica Park
          </div>
        </div>
      </div>

      <div className="selling">
        <img src={Selling3} alt="Closing process" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Selling</div>
          <div className="ImageData"> 
            Navigating the closing process: Seller's checklist and timeline
          </div>
          <div className="ImageAuthor">
            Brian O'Connor
          </div>
        </div>
      </div>
    </div>

    {/* Guide */}
    <h1 className="h1" id="guide">Guide</h1>
    <div className="row-three">
      <div className="Guide">
        <img src={Guide1} alt="Investment properties" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Guide</div>
          <div className="ImageData"> 
            Building wealth through real estate: A beginner's investment guide
          </div>
          <div className="ImageAuthor">
            Rachel Nguyen
          </div>
        </div>
      </div>

      <div className="Guide">
        <img src={Guide2} alt="Market trends" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Guide</div>
          <div className="ImageData"> 
            2024 Market predictions: What buyers and sellers should know
          </div>
          <div className="ImageAuthor">
            Carlos Mendez
          </div>
        </div>
      </div>

      <div className="Guide">
        <img src={Guide3} alt="Home maintenance" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Guide</div>
          <div className="ImageData"> 
            Seasonal home maintenance checklist for property owners
          </div>
          <div className="ImageAuthor">
            Olivia Peterson
          </div>
        </div>
      </div>
    </div>

    {/* Renting */}
    <h1 className="h1" id="renting">Renting</h1>
    <div className="row-four">
      <div className="Renting">
        <img src={Renting1} alt="Rental agreements" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Renting</div>
          <div className="ImageData"> 
            Understanding lease agreements: Key clauses renters should review
          </div>
          <div className="ImageAuthor">
            Tyler James
          </div>
        </div>
      </div>

      <div className="Renting">
        <img src={Renting2} alt="Tenant rights" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Renting</div>
          <div className="ImageData"> 
            Know your rights: A tenant's guide to rental laws and regulations
          </div>
          <div className="ImageAuthor">
            Samantha Lee
          </div>
        </div>
      </div>

      <div className="Renting">
        <img src={Renting3} alt="Rent negotiation" className="Image"/>
        <div className="text">
          <div className="ImageTitle">Renting</div>
          <div className="ImageData"> 
            How to negotiate rent and lease terms in competitive markets
          </div>
          <div className="ImageAuthor">
            Marcus Rivera
          </div>
        </div>
      </div>
    </div>
  </div>
}