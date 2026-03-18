const express = require("express");

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    const routes = {
      1: {
        id: 1,
        name: "Dadar Andhri Express",
        direction: "North",
      },
      2: {
        id: 2,
        name: "Bandra-Kurla Shuttle",
        direction: "East",
      },
    };

    let nextid = 3;

    // list all trains

    app.get("/routes", (req, res) => {
      res.json(Object.values(routes));
    });

    // Singe route by it's id

    app.get("/routes/:id", (req, res) => {
      const { id } = req.params;

      // const route = routes[id]
      const route = routes[req.params.id];
      if (!route) return res.status(400).json({ error: "No train on this id" });
      res.json(route);
    });

    app.post("/routes", (req, res) => {
      // Let no validation , no zod
      const newRoute = { id: nextid++, ...req.body };
      routes[newRoute.id] = newRoute;
      res.status(200).json(newRoute);
    });

    app.put("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id]) res.status(404).json({ error: "Route Not Found" });
      routes[id] = { id: Number(id), ...req.body };
    });

    app.patch("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({ error: "Route Not Found" });

      Object.assign(routes[id], req.body);
      res.status(200).json({ status: "Suceess" });
    });

    app.delete("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res
          .status(404)
          .json({ error: "Something went wrong nhi bhejna h" });
      delete routes[id];
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        //TODO
        const listRes = await fetch(`${base}/routes`);
        const listData = await listRes.json();

        const createRes = await fetch(`${base}/routes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              name: "Colaba-Worli",
              direction: "South",
            }),
          },
        });
        const created = await createRes.json();
      } catch (error) {
        console.log(error);
      }

      server.close(() => {
        console.log("Block 1 served....");
        resolve();
      });
    });
  });
}

function block_2_httpmethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/files/*filepath", (req, res) => {
      const filepath = req.params.filepath;
      res.json({ filepath, type: "wildcard" });
    });

    app
      .route("/schedule")
      .get((req, res) => {})
      .post((req, res) => {})
      .put((req, res) => {})
      .delete((req, res) => {});

    app.use("/api", (req, res) => {
      //its a prefetch match these are called Middleware i have worked in detail on them
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        //TODO
      } catch (error) {
        console.log(error);
      }

      server.close(() => {
        console.log("Block 1 served....");
        resolve();
      });
    });
  });
}

async function main() {
  await block_1_httpMethods();

  process.exit(0);
}

main(); 
