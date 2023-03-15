import React from 'react'
import PlusIcon from './icons/PlusIcon'
import Minus from './icons/Minus'

export default function CustomAccordion({ item, show, toggleFunc }) {
  return (
    <>
      <div>
        <div
          onClick={() => toggleFunc(item)}
          className="my-2 flex cursor-pointer items-center  justify-between rounded-md border-b-2 border-white bg-[#303030] p-4 font-semibold text-white"
        >
          {item.question}
          <div className="flex  h-[24px] w-[24px] items-center  justify-center rounded-full bg-white font-bold text-black">
            {(show === item.id && <Minus />) || <PlusIcon />}
          </div>
        </div>

        {show === item.id && (
          <div className=" my-2 p-4 font-semibold text-white">
            {item.answer}
          </div>
        )}
      </div>
    </>
  )
}
