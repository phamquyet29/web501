
const layoutPage = () => {
  return `
      <div class="flex h-screen flex-col justify-between border-e bg-white">
      <div class="px-4 py-6">
      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        
        <div>
          <p class="text-xs">
            <strong class="block font-medium">Nông Phạm Quyết</strong>
  
            <span> admin@gmail.com </span>
          </p>
        </div>
      </a>
    </div>
  
        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
          <a href="/admin"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>
  
            <span class="text-sm font-medium"> Projects </span>
          </a>
  
          <a href="/admin/introler"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M2 2h2v20H2zM21 13H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1 5H8v-3h12zM7 11h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h8v3H8z"></path></svg>
  
            <span class="text-sm font-medium"> Introler </span>
          </a>
  
          <a href="/admin/about"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
  
          <span class="text-sm font-medium"> About </span>
        </a>
  
          <form action="/">
            <button type="submit"
              class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m2 12 5 4v-3h9v-2H7V8z"></path><path d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
  
              <span class="text-sm font-medium"> Logout </span>
            </button>
          </form>
        </nav>
      </div>
  
      
    </div>
    `
}

export default layoutPage