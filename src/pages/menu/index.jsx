import React from 'react'
import Box from '../../components/Box'

const Index = () => {
  const menu = [
    {
      title: 'Field Array',
      description: 'ตัวอย่างการใช้ Field Array',
      path: '/menu/field-array',
    },
  ]

  return (
    <>
      <div className="bg-[#06122c] h-screen">
        <div className="grid grid-cols-4 gap-4 p-5">
          {menu.map((item, index) => (
            <Box title="Field Array" description="ตัวอย่างการทำ Multi Form" path={`${item.path}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Index
