'use client'

import {
  faCircleChevronDown,
  faCircleChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from '@headlessui/react'
import { useReducer, useState } from 'react'
import { filterReducer } from '../lib/filterReducer'
import { Chip, InvertedChip } from './chip'

const TagsList = () => {
  const tags = []

  const [filter, setFilter] = useReducer(filterReducer, [])
  const [filterOpenState, setFilterOpenState] = useState(false)

  return (
    <div id="hide-js">
      <h3 className="m-0 mt-2">
        <button
          onClick={() => setFilterOpenState(!filterOpenState)}
          className="inline-flex items-center"
        >
          Tags
          <FontAwesomeIcon
            className="ml-2 h-5 text-slate-600"
            icon={filterOpenState ? faCircleChevronUp : faCircleChevronDown}
          />
        </button>
      </h3>
      <Transition
        show={filterOpenState}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-20 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-20 opacity-0"
      >
        <ul
          className={`my-0 flex w-full list-none flex-wrap justify-start p-0`}
        >
          {tags.map((tag) => (
            <li key={tag} className="my-1 mr-2 pl-0">
              <button onClick={() => setFilter(tag)}>
                {!filter.includes(tag) ? (
                  <Chip>{tag}</Chip>
                ) : (
                  <InvertedChip>{tag}</InvertedChip>
                )}
              </button>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  )
}

export { TagsList }
