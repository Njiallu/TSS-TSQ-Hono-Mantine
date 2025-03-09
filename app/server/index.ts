import { Hono } from "hono"

const app = new Hono<{
  Bindings: { NODE_ENV: string }
  Variables: { user: string | null }
}>()
  .basePath("/api")

  .get("/helloworld", c => {
    if (c.env.NODE_ENV === "development") {
      console.log("✅", "THERE IS NO LOGGER MESSAGES BEFORE THIS ROUTE")
    }

    return c.text("Hello, world !")
  })

export type AppType = typeof app

export default app
