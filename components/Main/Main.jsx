const Main = ({ property="main", children }) => {
  return (
    <main property={property}>
      { children }
    </main>
  )
}

export default Main;