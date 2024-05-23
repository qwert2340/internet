/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/kHU0wHjUPxs
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Calender() {
  return (
    <div className="bg-white rounded-lg shadow-lg dark:bg-gray-950">
      <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-800">
        <div className="text-gray-900 font-medium dark:text-gray-50">May 2023</div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-100 dark:bg-gray-800">
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Sun
        </div>
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Mon
        </div>
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Tue
        </div>
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Wed
        </div>
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Thu
        </div>
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Fri
        </div>
        <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">
          Sat
        </div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">1</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">2</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">3</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">4</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">5</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">6</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">7</div>
        <div className="px-3 py-2 text-xs text-gray-900 font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
          8
        </div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">9</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">10</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">11</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">12</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">13</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">14</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">15</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">16</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">17</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">18</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">19</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">20</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">21</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">22</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">23</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">24</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">25</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">26</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">27</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">28</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">29</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">30</div>
        <div className="px-3 py-2 text-xs text-gray-500 bg-white dark:bg-gray-950 dark:text-gray-400">31</div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
