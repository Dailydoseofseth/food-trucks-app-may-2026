MORE_HEEAVILY_COMMENTED_CODE_FOR_STUDY (screaming_snake_case HERE ..FOR FUN)

---

# **_MY helper func_**

---

// 10. deleteOneFoodTruck(id)
// ASYNC HELPER FUNC()
// that DELETE 1 truck from DB
// ID = PARAMETER that receives food truck's PRIMARY KEY (SQL)

> async function deleteOneFoodTruck(id) {

// sends a PARAMETERIZED($1) SQL DELETE statement query to PG
// AWAIT pauses ASYNC FUNC until DB finishes executing QUERY

> const result = await db.query(

// SQL DELETE statement

> "DELETE FROM food_trucks WHERE id = $1 RETURNING \*",

// supplies VALUE for SQL PLACEHOLDER ($1)

// wrapping id in an ARRay allows PG(SQL) to safely substitute the value

> [id],
> );

// RETURNS FIRST (and only) DELETED ROW from the result

// result.rows is an ARRAY of RETURNED ROWS

// [0] ACCESSES deleted food truck OBJect

> return result.rows[0];
> }

---

# **_MY endpoint_**

---

// 10. POST /delete-one-food-truck/:id - Seth
// creates a DYNAMIC POST API endpoint that LISTENS for requests to delete ONE food truck

> app.post("/delete-one-food-truck/:id", async (req, res) => {

// grabs ID VALUE from REQ URL

// req.params stores ALL ROUTE PARAMETERS as an OBJect

> const id = req.params.id;

// calls() HELPER FUNC & AWAITs for DB to finish DELETE TRUCK

// passes ID as an ARGUMENT

> await deleteOneFoodTruck(id);

// sends SUCCESS RES BACK TO client/browser AFTER DELETE finishes

// use TEMPLATE LITERAL to INSERT deleted ID into msg

> res.send(`Success! ${id} was deleted.`);
> });

---

---

// 10. POST /delete-one-food-truck/:id - Seth
// creates a DYNAMIC POST API endpoint that LISTENS for requests to delete ONE food truck
app.post("/delete-one-food-truck/:id", async (req, res) => {
// grabs the ID VALUE from the REQuest URL
// req.params stores all ROUTE PARAMETERS (ID that is entered by USER) as an OBJect
const id = req.params.id;
// calls() HELPER FUNC & AWAITs for DB to finish DELETEing TRUCK
// passes ID as an ARGUMENT to deleteOneFoodTruck() function
await deleteOneFoodTruck(id);
// sends SUCCESS RESponse BACK TO client/browser AFTER DELETE finishes
// use TEMPLATE LITERAL to INSERT deleted ID into msg
res.send(`Success! ${id} was deleted.`);
});
