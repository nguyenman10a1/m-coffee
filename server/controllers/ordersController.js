const { ApplicationError } = require("@util/customErrors");
const connection = require("@util/database");

const getAll = async (req, res) => {
    const sql = `SELECT * FROM orders WHERE deleted_at IS NULL`;

    connection.query(sql, (err, result, fields) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log(fields);
        res.send(result);
    });
};

const create = async (req, res) => {
    const { book } = req.body;

    if (!book || Object.keys(book).length === 0) throw new ApplicationError("book is required", 400);

    const sql = `
    INSERT INTO books (user_id, title, author, isbn_code, plot, times_read) 
    VALUES (${book.userId},'${book.title}','${book.author}','${book.isbn_code}',"${book.plot}",${book.times_read ?? 0})
  `;

    connection.query(sql, (err, result, fields) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log(result);
        console.log(fields);
        res.sendStatus(200);
    });
};

const destroy = async (req, res) => {
    const sql = `
    UPDATE orders SET deleted_at=now() 
    WHERE id=?
  `;

    connection.query(sql, [req.params.id], (err, result, fields) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log(result);
        console.log(fields);
        res.sendStatus(200);
    });
};

const read = async (req, res) => {
    const sql = `UPDATE orders SET times_read = times_read + 1 WHERE id=?`;

    connection.query(sql, [req.params.id], (err, result, fields) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log(result);
        console.log(fields);

        res.sendStatus(200);
    });
};

const getOne = async (req, res) => {
    const sql = `SELECT * FROM orders WHERE id=? AND deleted_at IS NULL LIMIT 1`;

    connection.query(sql, [req.params.id], (err, result, fields) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log(fields);
        res.send(result[0]);
    });
};

const update = async (req, res) => {
    const { id } = req.params;

    const request = (({ title, author, isbn_code, plot, times_read }) => ({
        title,
        author,
        isbn_code,
        plot,
        times_read,
    }))(req.body.book);

    const sql = `UPDATE orders SET ? WHERE id=?`;

    connection.query(sql, [request, id], (err, result, fields) => {
        if (err) {
            throw new ApplicationError(`error: ${err.message}`, 400);
        }
        console.log(result);
        console.log(fields);
        res.sendStatus(200);
    });
};

module.exports = {
    getAll,
    create,
    destroy,
    read,
    getOne,
    update,
};
