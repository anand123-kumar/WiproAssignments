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
    </div>
  );
}
export default App; 