import React, { useState } from 'react'
import './accordion.css'


const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
      opened : false,
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
      opened : false,
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
      opened : false,
    }
  ];

export const Accordion = () => {
    // const [isOpened, setIsOpened]= useState(false)
    const [Data, setAccodionData]= useState(accordionData)

    const accordionToggle = (item) => {
        const isOpened = !item.opened
        const updatedData = Data.map(eachItem => {
            if (eachItem.title === item.title) {
                eachItem.opened = isOpened
            }
            return eachItem
        })
        setAccodionData(updatedData)
        
    }

    

  return (
    <div className='accordion' >
        <h1 className='accordion-heading' >React Accordion Demo</h1>
        {
            Data.map(item => {
                return(
                <div className='accordion-item' key={item.title}>
                    <div className='accordion-title' onClick={() => accordionToggle(item)} >
                        <div>{item.title}</div>
                        <div>{item.opened ? "-" : "+"}</div>
                    </div>
                    {
                        item.opened &&    (<div className='p-special accordion-desc' >{item.content}</div>)
                    }
                    
                    </div>
                    )
            })
        }
           
        
    </div>
  )
}
