import { Breadcrumbs } from "../../components"

const Template = ({ children }) => {
  return (
    <>
      <Breadcrumbs />
      <div className="flex w-full flex-grow flex-col items-center">
        {children}
      </div>
    </>
  )
}

export default Template
