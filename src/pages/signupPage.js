import { signup } from "../api/user"
import { router, useEffect } from "../lib"


const signupPage = () => {
    useEffect(() => {
        const form = document.getElementById('form')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const confirm_password = document.getElementById('confirm_password')

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const adduser = {
                email: email.value,
                password: password.value
            }


            const passwordMatch = password.value === confirm_password.value;
            if (email.value === "" || password.value === "" || !passwordMatch) {
                if (!passwordMatch) {
                    alert("Mật khẩu không khớp!");
                } else {
                    alert("Đăng kí thất bại!");
                }
            } else {
                signup(adduser).then(() => router.navigate('/signin'));
                alert("Đăng kí thành công!");
            }

        })
    }, [])
    return `
    <section class="h-screen">
  <div class="container h-full px-6 py-24">
  <div
  class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
  <div
    class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
    <img
      src="https://media.giphy.com/media/7OX5wOxr7qhXLQLRhF/giphy.gif"
      class="w-300"
      alt="Sample image" />
  </div>

      <!-- Right column container with form -->
      <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
      <h1 class="text-center py-[40px] text-2xl font-[700] text-stone-50">Đăng Kí</h1>
        <form id="form">
          <!-- Email input -->
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
            </div>

          <!-- Password input -->
             <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
             </div>
             <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                 <input type="password" name="confirm-password" id="confirm_password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
                     <div class="flex items-center justify-between">
                    <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                     </div>
                    <div class="ml-3 text-sm">
                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>

          <!-- Divider -->
          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          <!-- Social login buttons -->
          <div class="text-center lg:text-left">

          <!-- Register link -->
          <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
            Don't have an account?
            <a
              href="/signin"
              class="text-danger text-[#45d1db] transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >Login</a
            >
          </p>
        </div>
        </form>
      </div>
    </div>
  </div>
</section>
    `
}

export default signupPage