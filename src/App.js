import data from "./components/travelData"
import Card from "./components/travelCard"

export default function App() {
  const cardElements = data.map(card => {
    return <Card
        id = {card.id}
        image = {card.image}
        title = {card.title}
        country = {card.country}
        description = {card.description}
        startDate = {card.startDate}
        endDate = {card.endDate}
      />
  })
  return (
    <div>
      {cardElements}
    </div>
  )
}

