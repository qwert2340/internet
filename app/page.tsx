import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="sticky top-0 px-4 lg:px-6 h-14 flex items-center bg-gray-950 text-white">
  <Link className="flex items-center justify-center" href="#">
    <PaletteIcon className="h-6 w-6" />
    <span className="sr-only">chan woo&apos;s Portfolio</span>
  </Link>
  <nav className="ml-auto flex gap-4 sm:gap-6">
    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
      소개글
    </Link>
    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
      작업물
    </Link>
    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#Contact">
      연락처
    </Link>
    
  </nav>
</header>

    {/*맨 위 머리부분*/}
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-white flex items-center justify-center" id="main">
  <div className="container px-4 md:px-6 text-center"> {/* text-center 클래스 추가 */}
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
        <div className="flex flex-col justify-center space-y-4 text-center">
  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    3D 게임 그래픽 디자이너
  </h1>
  <p className="max-w-[6000px] text-gray-300 md:text-xl dark:text-gray-400">
  3D 게임 그래픽 디자이너 이찬우의 포트폴리오 사이트 입니다.
  </p>
</div>

        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            // className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50 active:bg-gray-300"
            href="#"
          >
            {/* View Projects */}
          </Link>
          <Link
  // className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-300 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus-visible:ring-gray-700 dark:border-gray-800 text-black
  // // active:bg-gray-500"  // 클릭 시 배경색 회색으로 변경
  href="#"
>
  {/* Contact Me */}
</Link>
        </div>
      </div>
      <img
      
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        height="550"
        src="/3d bg.jpg"
        width="550"

      />
    </div>
  </div>
</section>
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 text-center" id="about">
  <div className="container px-4 mx-auto md:px-6"> {/* px-4를 mx-auto로 수정하여 가운데 정렬 */}
    <div className="grid items-center justify-center gap-6 lg:grid-cols-[1fr_00px] lg:gap-12 xl:grid-cols-[1fr_550px]"> {/* justify-center 추가 */}
      <div className="flex flex-col justify-center space-y-4 text-center mx-auto max-w-[600px]"> {/* mx-auto와 max-w-[600px] 추가 */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">about me</h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            저는 3D 게임 그래픽 디자이너 이찬우 입니다. <br />주로 건물이나 인게임 오브젝트 등을 주로 작업합니다.
              <br /> 만약 저와 일을 하고 싶으시다면 <br />아랫쪽에 메시지를 남겨주시기 바랍니다. <br />
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">3D 툴</h3>
            <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-600"> 
              <li>3Ds Max</li>
              <li>ZBrush</li>
              <li>Sub Stance Paint</li>
              <li>Maya 3D</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">기타 툴</h3>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>Aseprite</li>
              <li>Photoshop</li>
              <li>Clipstudio</li>
              <li>Unity</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        alt="About"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        height="346"
        src="/Untitled-4.jpg"
        width="316"
      />
    </div>
  </div>
</section>


<section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center" id="projects">
  <div className="container px-4 md:px-6">
    <div className="space-y-12 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">작업물</h2>
        <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          다음은 현재 제가 진행중인 작업물들의 사진입니다.
        </p>
      </div>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center"> {/* justify-center 추가 */}
      <Card>
        <img
          alt="Project 1"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
          height="310"
          src="/3d4.jpg"
          width="550"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">랜더 샷 1</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            
          </p>
        </CardContent>
      </Card>
      <Card>
        <img
          alt="Project 2"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
          height="310"
          src="/3d2.jpg"
          width="550"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">랜더 샷 2</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            
          </p>
        </CardContent>
      </Card>
      <Card>
        <img
          alt="Project 3"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
          height="310"
          src="/3d3.jpg"
          width="550"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">랜더 샷 3</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center" id="Contact">
  
  <div className="container px-4 md:px-6">
    <div className="grid gap-4 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">연락처</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
         저의 작업물들이 마음에 드셧다면, 아래를 통하여 <br />연락주시면 감사하겠습니다.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <form className="flex flex-col space-y-2">
          <Input className="max-w-lg" placeholder="이름" type="text" />
          <Input className="max-w-lg" placeholder="이메일" type="email" />
          <Textarea className="max-w-lg" placeholder="메시지" />
          
          <Button className="w-full" type="submit">
            메시지 보내기 
          </Button>
        </form>
      </div>
    </div>
  </div>
</section>

    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
      <p className="text-xs">© 2024 Chan Woo Lee. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          {/* Privacy */}
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          {/* Terms */}
        </Link>
      </nav>
    </footer>
  </div>
  );

  function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg id="main"
        {...props}
        // xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        // viewBox="0 0 24 24"
        // fill="none"
        // stroke="currentColor"
        // strokeWidth="2"
        // strokeLinecap="round"
        // strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  }
}


