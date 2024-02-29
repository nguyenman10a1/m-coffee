const { ApplicationError } = require("@util/customErrors");
const connection = require("@util/database");

const getNumberOfCustomers = async (req, res) => {
    const sql = `SELECT COUNT(*) AS number_of_customers
                    FROM customers
                    WHERE deleted_at IS NULL;`;

    connection.query(sql, (err, result) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log("number of customers============================", result);
        res.send(result[0]);
    });
};

module.exports = {
    getNumberOfCustomers,
};
