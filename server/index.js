/**
 * Server setup
 */
import express from "express";
import chalk from "chalk";

// import './config/database';
// import middlewaresConfig from './config/middlewares';
import constants from "./configs/constants.js";
import ApiRoutes from "./routes/index.js";

const app = express();

// Wrap all the middlewares with the server
// middlewaresConfig(app);

// Add the apiRoutes stack to the server
app.use("/api", ApiRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// We need this to make sure we don't run a second instance
if (!import.meta.main) {
    app.listen(constants.PORT, (err) => {
        if (err) {
            console.log(chalk.red("Cannot run!"));
        } else {
            console.log(
                chalk.green.bold(
                    `
        Yep this is working 🍺
        App listen on port: ${constants.PORT} 🍕
        Env: ${process.env.NODE_ENV} 🦄
      `,
                ),
            );
        }
    });
}

export default app;
