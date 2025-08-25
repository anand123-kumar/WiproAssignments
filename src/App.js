import React from "react";
import GroceryList from "./REACTPROGRAMS/GroceryList";
import Car from "./REACTPROGRAMS/Car";
import Phone from "./REACTPROGRAMS/Phone";
import SweetList from "./REACTPROGRAMS/SweetList";
import Electronics from "./REACTPROGRAMS/Electronics";
import CanteenMenu from "./REACTPROGRAMS/CanteenMenu";
import JuiceList from "./REACTPROGRAMS/JuiceList";
import Restaurant from "./REACTPROGRAMS/Restaurant";
import TempleList from "./REACTPROGRAMS/TempleList";
import TailoringShop from './REACTPROGRAMS/TailoringShop';
import Fruits from "./REACTPROGRAMS/Fruits";
import TelivisionManager from "./REACTPROGRAMS/TelivisionManager";
import MarriageForm from "./REACTPROGRAMS/MarriageForm";
import AccessoriesForm from "./REACTPROGRAMS/AccessoriesForm";
import BankingItemsForm from "./REACTPROGRAMS/BankingItemsForm";
import FlightBookingControlled from "./REACTPROGRAMS/FlightBookingControlled";
import FlightBookingUncontrolled from "./REACTPROGRAMS/FlightBookingUncontrolled";
import MovieForm from "./REACTPROGRAMS/MovieForm";
import Furniture from "./REACTPROGRAMS/FurnitureComponents";
import FestivalApp from "./REACTPROGRAMS/FestivalApp";
import RestaurantForm from "./REACTPROGRAMS/RestaurantForm";
import FruitCommunication from "./REACTPROGRAMS/FruitCommunication";
import ChessTournamentForm from "./REACTPROGRAMS/ChessTournamentForm";
import HockeyTournament from "./REACTPROGRAMS/HockeyTournament";
import TailoringInventory from "./REACTPROGRAMS/TailoringInventory";
import FootballPlayerManagement from "./REACTPROGRAMS/FootballPlayerManagement";
import { PowerCutProvider } from "./REACTPROGRAMS/PowerCutContext";
import SendAnnouncement from "./REACTPROGRAMS/SendAnnouncement";
import AnnouncementList from "./REACTPROGRAMS/AnnouncementList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./REACTPROGRAMS/Navbar";
import Home from "./REACTPROGRAMS/Home";
import AddTaxpayer from "./REACTPROGRAMS/AddTaxpayer";
import TaxpayerList from "./REACTPROGRAMS/TaxpayerList";
import CalculateTax from "./REACTPROGRAMS/CalculateTax";
import TaxRates from "./REACTPROGRAMS/TaxRates";
import Contact from "./REACTPROGRAMS/Contact";
import About from "./REACTPROGRAMS/About";
import FAQ from "./REACTPROGRAMS/FAQ";
import NotFound from "./REACTPROGRAMS/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const groceries = ["Rice", "Wheat", "Sugar", "Milk", "Oil"];
  return (
    <div>
      
      <GroceryList items={groceries} />
      <hr style={{ margin: "40px 0" }} />
      <Car brand="Tata" model="Punch" color="Black" year="2025" />
      <Phone />
      <SweetList />
      <Electronics />
      <CanteenMenu />
      <JuiceList />
      <hr style={{ margin: "40px 0" }} />
      <Restaurant />
      <hr style={{ margin: "40px 0" }} />
      <TempleList />
      <TailoringShop />
      <Fruits />
      <TelivisionManager />
      <MarriageForm />
      <AccessoriesForm />
      <BankingItemsForm />
      <FlightBookingControlled />
      <FlightBookingUncontrolled />
      <MovieForm />
      <Furniture />
      <FestivalApp />
      <RestaurantForm />
      < FruitCommunication />
      <ChessTournamentForm />
      <HockeyTournament />
      <TailoringInventory />
      <FootballPlayerManagement />
       <PowerCutProvider>
      <div className="container mt-4">
        <SendAnnouncement />
        <AnnouncementList />
      </div>
    </PowerCutProvider>
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-taxpayer" element={<AddTaxpayer />} />
          <Route path="/taxpayer-list" element={<TaxpayerList />} />
          <Route path="/calculate-tax" element={<CalculateTax />} />
          <Route path="/tax-rates" element={<TaxRates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
     
  


    </div>
  );
}
export default App; 