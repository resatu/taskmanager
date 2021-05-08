export default function Home() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white px-8 py-4 border-r">
        <div>
          <img src="/images/logo.svg" alt="logo" className="w-20 h-10" />
        </div>
        <nav className="mt-8">
          {/* Scrumboard */}
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Scrumboard</h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>
            <a href="#" className="flex justify-between bg-gradient-to-tr from-purple-700 to-blue-500 rounded-lg items-center px-3 py-2">
              <span className="text-sm font-medium text-white">Active Sprints</span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
          </div>
          {/* Tags */}
          <h3 className="mt-8 text-sm font-semibold text-gray-600 uppercase">Tags</h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">New Feature</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Marketing</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Research</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 min-w-0 ">
        {/* Header */}
        <div>
          <header className="flex flex-col px-6 border-b border-gray-500 py-3">
            <div className="flex justify-between items-center">
              {/* Search bar */}
              <div className="relative w-64 ml-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="block w-full text-sm border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400" />
              </div>
              {/* Icons */}
              <div className="flex items-center">
                <button className="h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button className="ml-6">
                  <img
                    src="https://images.unsplash.com/photo-1502031882019-24c0bccfffc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                    alt="Woman 1"
                    className="w-9 h-9 rounded-full object-cover"></img>
                </button>
              </div>
            </div>
            {/* Header Bottom */}
            {/* <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Assignees</h2>
              </div>
              <div>
                <span>
                  <img
                    src="https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                    alt="Woman 2"
                    className="w-9 h-9 rounded-full object-cover"></img>
                </span>
                <span>
                  <img
                    src="https://images.unsplash.com/photo-1563132358-83016b28815e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                    alt="Woman 3"
                    className="w-9 h-9 rounded-full object-cover"></img>
                </span>
                <span>
                  <img
                    src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                    alt="Woman 4"
                    className="w-9 h-9 rounded-full object-cover"></img>
                </span>
              </div>
            </div> */}
          </header>
        </div>
        {/* Main */}
        <div>Main</div>
      </div>
    </div >
  )
}
