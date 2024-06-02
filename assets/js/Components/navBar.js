



const navBar = document.getElementById('navBar');


navBar.innerHTML = `

<div class="absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ud-header">
  <div class="container">
    <div class="relative flex items-center justify-between -mx-4">

      <div class="w-60 max-w-full ">
        <a href="index.html" class="navbar-logo block w-full py-5">
          <img src="assets/images/logo/logo_dba_blanco.png" alt="logo" class="header-logo w-full" />
        </a>
      </div>

      <div class="flex items-center justify-between w-full px-4">
        <div>
          <button id="navbarToggler"
            class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
            <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
            <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
            <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
          </button>

          <nav id="navbarCollapse"
            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white dark:bg-dark-2 py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent dark:lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
            <ul class="block lg:flex 2xl:ml-20">
              <li class="group relative">
                <a href="#home"
                  class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                  Inicio
                </a>
              </li>

              <li class="submenu-item group relative">
                <a href="javascript:void(0)"
                  class="relative mx-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Estudios

                  <svg id="dropdown" class="ml-2 fill-dropdown" width="16" height="20" viewBox="0 0 16 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                  </svg>
                </a>
                <div
                  class="submenu relative left-0 top-full hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                  <a href="#nuclear"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Resonancia Nuclear Magnética de Alto campo
                  </a>
                  <a href="#tomografia"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Tomografía Multislice Helicoidal
                  </a>
                  <a href="#radio"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Radiología
                  </a>
                  <a href="#eco"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Ecografía
                  </a>
                  <a href="#mamo"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Mamografía
                  </a>
                  <a href="#densi"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Densitometría
                  </a>
                  <a href="#ecoDop"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Ecodopleer
                  </a>
                  <a href="#medLab"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Departamento de Medicina Laboral

                  </a>
                  <a href="#medDol"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Departamento de medicina del dolor

                  </a>
                  <a href="#medCel"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Departamento de medicina celular

                  </a>
                  <a href="#medTrans"
                    class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                    Departamento de medicina transfusional

                  </a>
                </div>
              </li>

              <li class="group relative">
                <a href="#lab"
                  class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Laboratorio
                </a>
              </li>
              <li class="group relative">
                <a href="#kine"
                  class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Kinesiología
                </a>
              </li>
              <li class="group relative">
                <a href="#quirofano"
                  class="ud-menu-scroll  mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Quirófano
                </a>
              </li>
              <li class="group relative">
                <a href="#institucional"
                  class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Institucional
                </a>
              </li>
              <li class="group relative">
                <a href="#consultorio"
                  class="ud-menu-scroll text-center mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Consultorios médicos
                </a>
              </li>
              <li class="group relative">
                <a href="#contact"
                  class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                  Contacto
                </a>
              </li>

            </ul>
          </nav>
        </div>

      </div>
    </div>
  </div>
</div>

`;