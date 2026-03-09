import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function MediaCard({city, temp, humidity, tempMax, tempMin, weather, feelslike}) {
    const Init_Url = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  return (
    <div className="cardContainer">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Init_Url}
        title="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {city}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {temp}&deg;C</div>
            <div>Humidity = {humidity}</div>
            <div>Max Temp = {tempMax}</div>
            <div>Min Temp = {tempMin}</div>
            <div>The Weather can be described as <b><i>{weather}</i></b> and it feels like {feelslike}</div>
        </Typography>

      </CardContent>
    </Card>
    </div>
    );
}
