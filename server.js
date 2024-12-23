import express from "express"
import dotenv from "dotenv"
import sequelize from "./db.js";
import { member } from "./routes/createMember.Routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dotenv.config()

app.get('/', (req, res) => {
    res.send('Server create successfully');
})


member(app)

const PORT = process.env.PORT || 8000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT , () => {
        console.log(`App is running on http://localhost:${PORT}`);
    });

  })
  .catch((err) => {
    console.error('Unable to create tables:', err);
  });
