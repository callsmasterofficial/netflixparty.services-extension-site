import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InstallButton from './InstallButton'
import siteConfig from '../siteConfig'
import { languageMap } from '../constants/languages'
import { i18n } from '../next.config'

function Footer({ installBtn, footer = {} }) {
  const router = useRouter()
  const localeChangeHandler = (e) => {
    const locale = e.target.value

    router.push(
      {
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    )
  }

  return (
    <div className="footer-container mt-[20%] w-screen md:mt-[10%]">
      <div className="footer-box -mt-14 border-t-2 border-white"></div>

      <div className=" mt-8 flex items-center  justify-center">
        <p className="primary_text_color pb-5 text-xl font-semibold">
          {footer.letUsKnow}
        </p>
      </div>
      <div className="heading flex items-center justify-center">
        <h3 className="primary_text_color text-xl font-bold md:text-3xl">
          {footer.anyQuestions}
        </h3>
      </div>

      <div className="btn-box m-10 flex w-auto items-center justify-center border-b-2 border-white">
        <div className="install_btn -mt-6 mb-5 mr-2 items-center justify-center md:mr-10 md:mt-0 ">
          <InstallButton installBtn={installBtn} />
        </div>

        <div className="flex justify-center rounded-md text-center  md:gap-14">
          <button className="mb-5 -mt-6 flex w-auto items-center justify-center rounded-[4px] border-2 border-gray-200 bg-white p-2 text-xl transition-all duration-200 hover:bg-gray-200 md:mt-0">
            <Link href={`${siteConfig.blogUrl}`}>
              <span className="px-2 text-base font-bold text-black   transition-all duration-300">
                {footer.blog}
              </span>
            </Link>
          </button>

          {/* language selecet button place here */}
          <div className="mb-5 -mt-6 flex w-auto items-center justify-center rounded-[4px]  p-2 text-xl transition-all duration-200  md:mt-0">
            <select
              onChange={localeChangeHandler}
              className="mt-2 h-8 w-[100px] rounded-md pl-3"
              value={router.locale}
            >
              {i18n.locales.map((item) => (
                <option value={item} key={item}>
                  {languageMap[item]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="popu_search_container mb-4">
        <div className="popu_search_box  -mt-6 flex items-center justify-center p-2 ">
          <span className="span  flex items-center">
            <img
              className="h-8 w-8 object-contain pr-2"
              src="https://img.icons8.com/ios-glyphs/344/ffffff/right3.png"
              alt="side_icon"
            />
            <h4 className="mr-1 text-sm font-bold text-white md:text-lg">
              {footer.popularSearches}
            </h4>
            <span className="mr-1 text-white">:</span>
            <p className="text-xs text-white md:text-base">
              {footer.footerTags.map((item, index) => {
                if (index == 0 || index == 1) {
                  return (
                    <span
                      className="pr-2"
                      href={siteConfig.url}
                      key={`tags-${index}`}
                    >
                      {item},
                    </span>
                  )
                } else {
                  return <span key={`tags-${index}`}>{item},</span>
                }
              })}
            </p>
          </span>
        </div>

        <div className="popu_search_box  flex items-center justify-center p-2">
          <span className="span  flex items-center">
            <h4 className="mr-1 text-base font-bold text-white">
              {footer.disclaimer}
            </h4>
            <span className="mr-1 text-white">:</span>
            <p className="text-base text-white">{footer.disclaimerContent}</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
