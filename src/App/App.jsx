import { MantineProvider } from "@mantine/core"
import { AppRouter } from "../router/router"

function App() {

  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  )
}

export default App
