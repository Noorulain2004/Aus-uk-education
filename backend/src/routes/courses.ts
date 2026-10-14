
import type { FastifyInstance } from "fastify";
import { sql } from "../database/client";

export default async function coursesRoutes(app: FastifyInstance) {
  // Get all published courses
  app.get("/api/courses", async (_request, reply) => {
    try {
      const courses = await sql`
        SELECT
          id,
          slug,
          title,
          qualification,
          level,
          subject,
          short_description,
          description,
          price,
          currency,
          image_url
        FROM public.courses
        WHERE status = 'published'
        ORDER BY created_at DESC
      `;

      return reply.status(200).send({
        success: true,
        count: courses.length,
        data: courses,
      });
    } catch (error) {
      app.log.error({ err: error }, "Failed to fetch published courses");

      return reply.status(500).send({
        success: false,
        message: "Unable to fetch courses right now.",
      });
    }
  });

  // Get one published course by slug
  app.get<{ Params: { slug: string } }>(
    "/api/courses/:slug",
    async (request, reply) => {
      try {
        const { slug } = request.params;

        const courses = await sql`
          SELECT
            id,
            slug,
            title,
            qualification,
            level,
            subject,
            short_description,
            description,
            price,
            currency,
            image_url
          FROM public.courses
          WHERE slug = ${slug}
            AND status = 'published'
          LIMIT 1
        `;

        if (courses.length === 0) {
          return reply.status(404).send({
            success: false,
            message: "Course not found.",
          });
        }

        return reply.status(200).send({
          success: true,
          data: courses[0],
        });
      } catch (error) {
        app.log.error({ err: error }, "Failed to fetch course");

        return reply.status(500).send({
          success: false,
          message: "Unable to fetch this course right now.",
        });
      }
    }
  );
}
