const navBar = document.getElementById("navBar");

navBar.innerHTML = `


<!-- ====== Navbar Section Start -->

<div class="navBarContainer  z-40 flex items-center w-full bg-transparent sticky">

  <div class=" flex items-center justify-between w-full -mx-4">

    <div class=" w-60 max-w-full ">
      <a href="index.html" class="navbar-logo block w-full py-5">
      <img src="assets/images/logo/logo_dba.png" alt="logo" class="header-logo w-full" />
      </a>
    </div>

    <div class="flex items-center justify-center w-full px-4">
      <div>
        <button id="navbarToggler"
          class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
          <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
          <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
          <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
        </button>

        <nav id="navbarCollapse"
          class="absolute  items-center right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white dark:bg-dark-2 py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent dark:lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
          <ul class="block lg:flex 2xl:ml-20">
            <li class="group relative">
              <a href="index.html"
                class="ud-menu-scroll mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                Inicio
              </a>
            </li>

            <li class="group relative">
              <a href="estudios.html"
                class="ud-menu-scroll mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Estudios
              </a>
            </li>

            <li class="group relative">
              <a href="laboratorio.html"
                class="ud-menu-scroll mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Laboratorio
              </a>
            </li>
            <li class="group relative">
              <a href="kinesiologia.html"
                class="ud-menu-scroll mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Kinesiología
              </a>
            </li>
            <li class="group relative">
              <a href="consultorios.html"
                class="ud-menu-scroll text-center mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Consultorios Médicos
              </a>
            </li>
            <li class="group relative">
              <a href="quirofano.html"
                class="ud-menu-scroll  mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Quirófano
              </a>
            </li>
            <li class="group relative">
              <a href="institucional.html"
                class="ud-menu-scroll mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Institucional
              </a>
            </li>
            <li class="group relative">
              <a href="contacto.html"
                class="ud-menu-scroll mx-8 flex py-2  font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                Contacto
              </a>
            </li>

          </ul>
        </nav>
      </div>

    </div>

   
  </div>

</div>
<!-- ====== NavBar END -->

<div style="height: 10.5vh;"></div>


`