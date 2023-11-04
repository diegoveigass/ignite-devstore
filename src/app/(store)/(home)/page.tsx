export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000))

  return <h1>hello world - dev store</h1>
}
