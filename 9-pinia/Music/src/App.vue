<template>
    <!-- Header -->
    <header id="header" class="bg-gray-700">
      <nav class="container mx-auto flex justify-start items-center py-5 px-4">
        <!-- App Name -->
        <a class="text-white font-bold uppercase text-2xl mr-4" href="#"
          >Music</a
        >

        <div class="flex flex-grow items-center">
          <!-- Primary Navigation -->
          <ul class="flex flex-row mt-1">
            <!-- Navigation Links -->
            <li>
              <a class="px-2 text-white" href="#">Login / Register</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
            suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
            pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="../src/assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <i
            class="fa fa-headphones-alt float-right text-green-400 text-xl"
          ></i>
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block text-gray-600">Song Title</a>
              <span class="text-gray-500 text-sm">Artist Name</span>
            </div>

            <div class="text-gray-600 text-lg">
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
              </span>
            </div>
          </li>
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>

    <!-- Player -->
    <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
      <!-- Track Info -->
      <div class="text-center">
        <span class="song-title font-bold">Song Title</span> by
        <span class="song-artist">Artist</span>
      </div>
      <div class="flex flex-nowrap gap-4 items-center">
        <!-- Play/Pause Button -->
        <button type="button">
          <i class="fa fa-play text-gray-500 text-xl"></i>
        </button>
        <!-- Current Position -->
        <div class="player-currenttime">00:00</div>
        <!-- Scrub Container  -->
        <div class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
          <!-- Player Ball -->
          <span
            class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
            style="left: 50%"
          >
            <i class="fas fa-circle"></i>
          </span>
          <!-- Player Progress Bar-->
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            style="width: 50%"
          ></span>
        </div>
        <!-- Duration -->
        <div class="player-duration">03:06</div>
      </div>
    </div>

    <!-- Auth Modal -->
    <div class="fixed z-10 inset-0 overflow-y-auto hidden" id="modal">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <!-- Add margin if you want to see some of the overlay behind the modal-->
          <div class="py-4 text-left px-6">
            <!--Title-->
            <div class="flex justify-between items-center pb-4">
              <p class="text-2xl font-bold">Your Account</p>
              <!-- Modal Close Button -->
              <div class="modal-close cursor-pointer z-50">
                <i class="fas fa-times"></i>
              </div>
            </div>

            <!-- Tabs -->
            <ul class="flex flex-wrap mb-4">
              <li class="flex-auto text-center">
                <a
                  class="block rounded py-3 px-4 transition hover:text-white text-white bg-blue-600"
                  href="#"
                  >Login</a
                >
              </li>
              <li class="flex-auto text-center">
                <a class="block rounded py-3 px-4 transition" href="#"
                  >Register</a
                >
              </li>
            </ul>

            <!-- Login Form -->
            <form>
              <!-- Email -->
              <div class="mb-3">
                <label class="inline-block mb-2">Email</label>
                <input
                  type="email"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Enter Email"
                />
              </div>
              <!-- Password -->
              <div class="mb-3">
                <label class="inline-block mb-2">Password</label>
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              >
                Submit
              </button>
            </form>
            <!-- Registration Form -->
            <form>
              <!-- Name -->
              <div class="mb-3">
                <label class="inline-block mb-2">Name</label>
                <input
                  type="text"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Enter Name"
                />
              </div>
              <!-- Email -->
              <div class="mb-3">
                <label class="inline-block mb-2">Email</label>
                <input
                  type="email"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Enter Email"
                />
              </div>
              <!-- Age -->
              <div class="mb-3">
                <label class="inline-block mb-2">Age</label>
                <input
                  type="number"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                />
              </div>
              <!-- Password -->
              <div class="mb-3">
                <label class="inline-block mb-2">Password</label>
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Password"
                />
              </div>
              <!-- Confirm Password -->
              <div class="mb-3">
                <label class="inline-block mb-2">Confirm Password</label>
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Confirm Password"
                />
              </div>
              <!-- Country -->
              <div class="mb-3">
                <label class="inline-block mb-2">Country</label>
                <select
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                >
                  <option value="USA">USA</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <!-- TOS -->
              <div class="mb-3 pl-6">
                <input
                  type="checkbox"
                  class="w-4 h-4 float-left -ml-6 mt-1 rounded"
                />
                <label class="inline-block">Accept terms of service</label>
              </div>
              <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>