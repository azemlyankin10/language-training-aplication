import { BellIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { ProfileDropdown } from './ProfileDropdown/ProfileDropdown'
import logo from '../../img/logo.svg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Reading', href: 'reading', current: true },
  { name: 'Vocabulary', href: 'vocabulary', current: true },
]

export const Navigation = () => (
  <nav className='custom-bg-2'>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">

        <div className="flex flex-1">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-8 w-auto"
              src={logo}
              alt="Your Company"
            />
          </div>
          <div className="md:ml-10 mx-auto">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={(props) => {
                    return `${props.isActive ? 'text-red-500 underline' : ''} text-white x-5 py-2 rounded-md text-large hover:underline`
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="rounded-full p-1 text-white hover:text-red-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <ProfileDropdown />
          
        </div>
      </div>
    </div>


  </nav>
)