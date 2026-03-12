import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../InfoBox.css";


export default function MediaCard({city, temp, humidity, tempMax, tempMin, weather, feelslike}) {
    const Init_Url = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL ="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
    <div className="cardContainer">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={humidity > 80 ? RAIN_URL : temp > 15 ? HOT_URL : temp < 15 ? COLD_URL : Init_Url}
        title="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {city}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {temp}&deg;C</div>
            <div>Max Temp = {tempMax}</div>
            <div>Min Temp = {tempMin}</div>
            <div>The Weather can be described as <b><i>{weather}</i></b> and it feels like {feelslike}</div>
        </Typography>

      </CardContent>
    </Card>
    </div>
    );
}
