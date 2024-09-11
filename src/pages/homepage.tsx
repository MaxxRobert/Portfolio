import { useEffect, useState } from "react"

export default function Homepage(){

  const [text, setText] = useState<string | null>("");

    return (
        <>
        <section className="flex items-center justify-center w-full h-full bg-base-100">
        <div className="carousel rounded-box w-1/2">
          <div id="slide1" className="carousel-item relative w-full">
            <label className="swap swap-flip text-9xl w-full h-full">
              <input type="checkbox" />
              <div className="card bg-base-100 shadow-xl swap-off rounded-box">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
              </div>
              <div className="card bg-base-100 image-full shadow-xl swap-on">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body w-full">
                  <h2 className="card-title">Shoes!</h2>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </label>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <label className="swap swap-flip text-9xl w-full h-full">
              <input type="checkbox" />
              <div className="card bg-base-100 shadow-xl swap-off rounded-box">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
              </div>
              <div className="card bg-base-100 image-full shadow-xl swap-on">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body w-full">
                  <h2 className="card-title">Shoes!</h2>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </label>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <label className="swap swap-flip text-9xl w-full h-full">
              <input type="checkbox" />
              <div className="card bg-base-100 shadow-xl swap-off rounded-box">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
              </div>
              <div className="card bg-base-100 image-full shadow-xl swap-on">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body w-full">
                  <h2 className="card-title">Shoes!</h2>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </label>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
          <label className="swap swap-flip text-9xl w-full h-full">
              <input type="checkbox" />
              <div className="card bg-base-100 shadow-xl swap-off rounded-box">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
              </div>
              <div className="card bg-base-100 image-full shadow-xl swap-on">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body w-full">
                  <h2 className="card-title">Shoes!</h2>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </label>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        </section>
        </>
    )
}