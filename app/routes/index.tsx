import { Group, Stack, Text } from "@mantine/core"
import { Link, createFileRoute } from "@tanstack/react-router"
import { apiClient } from "@utils/api"

export const Route = createFileRoute("/")({
  loader: async () => {
    const welcomeText = await apiClient.api.helloworld.$get().then(res => res.text())

    return { welcomeText }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { welcomeText } = Route.useLoaderData()

  return (
    <Stack>
      <Text span>{welcomeText}</Text>
      <Group>
        <Link to="/about">About</Link>
      </Group>
      <Group>wow</Group>
    </Stack>
  )
}
