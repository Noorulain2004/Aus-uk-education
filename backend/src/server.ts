import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { sql } from "./database/client";
import coursesRoutes from "./routes/courses";

const app = Fastify({
  logger: true,
});

async function startServer() {
  await app.register(cors, {
    origin: true,
  });
  await app.register(coursesRoutes);

  app.get("/api/health", async () => {
    return {
      success: true,
      message: "AUS UK Education API is running",
    };
  });

  app.get("/api/health/database", async (_request, reply) => {
    try {
      const result = await sql`SELECT 1 AS connected`;

      return {
        success: true,
        database: result[0]?.connected === 1,
      };
    } catch (error) {
      app.log.error(error);

      return reply.status(500).send({
        success: false,
        database: false,
      });
    }
  });

  const port = Number(process.env.PORT) || 4000;

  try {
    await app.listen({
      port,
      host: "0.0.0.0",
    });

    console.log("AUS UK Education API running on port " + port);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
  
}

startServer();