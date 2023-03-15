import React, { useEffect, useState } from 'react'
import siteConfig from '../siteConfig'
import Chrome from './icons/Chrome'

function InstallButton() {
  const [extUrl, setExtUrl] = useState('')
  const [browser, setBrowser] = useState('')
  useEffect(() => {
    const browserType = (function () {
      const test = function (regexp) {
        return regexp.test(window.navigator.userAgent)
      }
      switch (true) {
        case window.navigator.brave != undefined &&
          window.navigator.brave.isBrave.name == 'isBrave':
          return 'Brave'
        case test(/edg/i):
          return 'Edge'
        case test(/trident/i):
          return 'Internet Explorer'
        case test(/firefox|fxios/i):
          return 'Firefox'
        case test(/opr\//i):
          return 'Opera'
        case test(/ucbrowser/i):
          return 'UC Browser'
        case test(/samsungbrowser/i):
          return 'Samsung Browser'
        case test(/chrome|chromium|crios/i):
          return 'Chrome'
        case test(/safari/i):
          return 'Safari'
        default:
          return 'other'
      }
    })()
    if (browserType === 'Firefox') {
      setExtUrl(siteConfig.extLink.firefox)
      setBrowser('Firefox')
    } else if (browserType === 'Edge') {
      setExtUrl(siteConfig.extLink.edge)
      setBrowser('Edge')
    } else {
      setExtUrl(siteConfig.extLink.chrome)
      setBrowser(browserType)
    }
  }, [])
  return (
    <div className="btn">
      <a href={extUrl} target="_blank" rel="noreferrer">
        <button className="Add-to-chrome button-box primary flex  cursor-pointer rounded-[4px] p-2.5">
          <Chrome />
          <p className="h2 secondary_text_color  pl-2.5 font-bold text-white">
            Add to {browser}{' '}
            <span
              style={{
                fontSize: '12px',
                color: 'rgb(255 255 255)',
                fontWeight: '600',
              }}
            >
              it&apos;s free
            </span>
          </p>
        </button>
      </a>
    </div>
  )
}

export default InstallButton
