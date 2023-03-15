import React, { useState } from 'react'
import siteConfig from '../siteConfig'
import CustomAccordion from './CustomAccordion'

function Textques() {
  const [show, setShow] = useState('')

  function toggleFunc(item) {
    if (item.id === show) return setShow('')
    setShow(item.id)
  }
  return (
    <>
      <div className="accordion" id="accordionExample">
        {siteConfig.section.three.accordian.map((item) => (
          <div className="accordion-item" key={item.id}>
            <CustomAccordion
              item={item}
              show={show}
              toggleFunc={toggleFunc}
              key={item.id}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Textques
