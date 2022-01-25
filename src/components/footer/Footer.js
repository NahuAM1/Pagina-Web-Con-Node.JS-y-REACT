import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
      <footer class = "footer">
          <div class = "footer-info">
              <h1>Nahuel Manero</h1>
              <p>Estudiante de ingenieria en sistemas de informacion.</p>
          </div>
          <div class = "footer-contact">
              <h3>Contáctame</h3>
          </div>
          <div class = "footer-sns">
              <div class = "desing-by">Haciendo la diferencia</div>
              <div class = "sns-links">
                  <a href= "https://www.linkedin.com/in/nahuel-manero-776779209/" target  = "_blank">
                        <img class = "transition-bar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAtRJREFUSEudV9F12zAMvOME9QbeoOkEtSfoCE0n6AixN8gGdSdxNmg3iLOBJxD6CEIiSIqSXH04jiTycIcDCBPxIgDRbw9deVm5gf6XP2x/e2f845971C2xPPpOHUvJsgxsUYFe0Ftki2uLS0Q+Afgclad+2OPmRspOsUFzY1r7wRBuhEwZpZdLRPYA3ustG3zdr7wrYBlES3tH8j76KQVsmokMBwDXVamM/TpYIcGR5Nu4t1OKyMC2YEZLBZt53FPZkXDARC11zfgHycsgsqfgAuJr3ijmK8vrLZCD8O/IkQyZcZXjCViAj0DGnGsmBpFnAL9mPFbb0wVUSh3It9QuKj+ISM14R4Z7NJKIvAL42TDeoHFaI8fAYMBVNQwiBwqukaLtF6W5AHgCEBnHUpu95p1feP9YMO5J7ZlV8W0zfVv+PVcjyllLfZxQBM8gvgP4nVRQjqMSzyT/qlKD9oKYlm9VtW8BTm4MjKZPmojICcCLAOcQeIqngMgQQe7aGNoOGNPkqgBJateSp9OpZkwFNmsYMIAzyZM/0mKbzeBToFoFTR1bs3Kdy6Q2c6npPeNBTiBeFFgZW0CDvILq9sj6CxluptABkGuudV/HVQNRV7uWucx4UsKf5KZG9SwV/7YGoowD44GSqrCRWpvKEwV/3DG2AIwZc1nCeznWzuWlthwPMphCU2s8k+Gkjk8O92qUwAst01w95TLn2ICb00ws/9mQCTh1l/9k7MtJgVXqwhOj40cyIiXj3LnGlmRv5o1SiN0cm6t9aqxlPpjjLE3RudZcnYGnTj2f467UBuwPifWjYOW4aOe1VE5FA+kwbrfuT3PVVDgX1aKr9xC8bxsdVw+pbOgU7y6Q97G+0ujjasrG23jqjDrUQ2wfsTeqATeSt+WBfmbbZnDv/YRo7vsbcdxxc/U2webeKlFycCWArpwJtPkl0Q2koV3+FsvrenL494l/4+TPNYgqzk4AAAAASUVORK5CYII="/>
                  </a>
                  <a href= "https://github.com/NahuAM1" target  = "_blank">
                        <img class = "transition-bar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA2JJREFUSEuNVu1VGzEQnFEDOBVgKgAqAHcAFcSuIKQCSAVABZgKQgc4FWAqwKkg0IAmbyXdnXSnO1s/wE+W92N2ZiRiahGAKgfS/p6v94ZOB/IwZcixBJOR93xpMcs1mYWQ/CWEIxBn4YfCFtQn6f40gfYXSrA7NH5c0hzCLYgrALOiUhsFw59PAC+AHkm3HTY8RBEYQVnSDNA9wGUMFBKUMfOt7vMawk+6UEy7+mmq05BkUD4B9n84kWoRKVLKvwNwTbLSfS0iAXlvyV4jrJUuywQBCYG18qzjRS15NuNYhY/wvgKM5AH+ArDqLw4s4j31c5oK2lE4b2HPpFhyRVoD+t6BoQXpNoFgwDqRawtol87M0zisuyXJXRrTW1boM5l4UkvspTmBj15nJxasRoQpA/FS33rOc8gL1kh6APCjl9hmtDkocaqk6zj/lZ4d3VK1jiWDD8fZcZvvGdnIIvfKSd2b1o3Nxxk1P0l+y00mjEo+yOctkrg9viJpc92zjNFC001QvNcSNDkW8l/QcWM5WqglXQIwCeUni7nYN4c4XYgQ1IF/vYpN1y9NnJhK/gbgfd4xGdQ2sip219uSTwTr8P5F8i4kbs5aYoH3DcoJ8QhNu/bbf4NJkt9Hz366xE3McOtEt8rXinSm63J3wLFhQfK6AvG74DWwcokzecdzgB9FBmFDx0W+N0gxAoK81mBuRCFKy5m+js19jlrvjXjHrkOC4dVWbHU6XkJ4aqkb8f4i2V6pRWIvPTAYSFim4UbTRohH03O9wbibmGy/DwQKpO3U2dlmTq4kAfPjBu5rAOlyNxTCMqJZAa0kLHByKlPE5cQNWrHMDEZJd4Buo6tgAWIu4CmDJnl3Mo1cs4nClbeBFXvT50rxAklwWWen1iHpFl7+jLBnj7akC932FSYp8aOnC+AdwGVru0Ov7qaXNGheaxCvHblqBDU2Yy+/oXBRQq0vgJY0vEJyfhbkyu1Q8jZve7ydJtjtNTlzdCe1p3alY+vU7uf26ZPHL14gfZDkNQNlVnrbvIByG827V3v/hgk/GrPHVVC8ucbsMLylrfsbQHPS2RN3sBReLkEFD93DoRJzOOOSMd01l/vjpIfV6ol7lRATt089zpSBDNhTY2RiWJZ4z81zyMWUt5fqHvP2/zN4qDHaRkaQAAAAAElFTkSuQmCC"/>
                  </a>
                  <a href= "https://www.instagram.com/maneronahu/" target  = "_blank">
                        <img class = "transition-bar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA5BJREFUSEuNV9tRG0EQ7N4EpAws/l0FfPgbFAE4AcARGEeAlAFOwKhMAiICpAgsR4CIwFIC167Zm7vbeyzSfkjUandnpqenZyCSRQBKN/zvuO8fhPxMerp98/A7gJ0pPyuLuVsDDh291Xufbrj3woc+5zCp9w/fJtjAmPdf0hjAaQkL/cv/7l/7S3LX2k6N1CnL2HNjDwCuAUw+hrXnxBbCEtScDLUTXcTbb1pAhS4BPEGYeDL2ADZd45mYzwCM/OwWwFeSmzaR4FAnDPNI/8QohTWIO5L2QGflGSnJ7j6CuAJgd89r+Iegtr2ikF34DmDNwEsVuonVFPhsNdWUUw78xiGpWAK8gvCTgffNjQ6r3fAOjFCdAzDYnvzCDcnnXOCNucY5qZgIfKOwZeBJSzNSwBzmf7G0SUr6BuCXX7gl+VuSOWMQ2rcty/1Lmce+KBQqNgROyVCWQwtqty5FUr0CsJI4U6EvID5HqMmFpJmAh1J1emtGcl7vNm+uAFwAmAZylepUfTYxvCZpTqS/zQA8CNgTeARgD9qyc/cCRhTmDGGWCm8hreiGSVZ3UuUipKKKuDTceG11/AZgL2ASAncu3tGyVIyByHzjxklaBZLqiBvDlXK568MRE4WKGQETkzlJi7y3LA2GCBBFoz7TRKxpYHCoO6zOQV1IS0ZCaUqGGq7GeoqWXgLDdZXLI6A2yGpyrQN5WbbCuL8smdw23KmIKk3GcJPZuNKIG6ePijhG4zA61APtp4G6fSbNcYvVGa8TckXDTi7tABp57Ltu4l7/bxDGYEqueHeAXNUgkJJLeAVRQj1QTgCs2zTlJBj7TQ6tdUbypSoWDQsXYLaOnSCl4Q3J89ZkEsumYm7qkU8wg4z/IOKPJLNr2ABy2O9MMr0tmlQumtptN5JC2hL4ZBKc1mBv5pIsj1EIpgw0mDLr8HAW26MJj/DOwNYw0ZNdSQsAtwJWgZx2G3jOjWFR8bYI/CR5352AWm87Q7dRe0s9/hHITVXTx8TvkVo7tdp+t7SUI1DTInq4208uJCYaI5/sdhA2tbIPzDzJluV+7A+/C7g2x7sO93JcHfDIrWxMhUbVgFl2hWTYrEqxJnfc2ENYgLBW6cNee1TKGk499OZvdTpkvxOMtoHBUhVXj4K+MQh1/VKOuIcJPWgxzmutCeQYxgwYa4NX/X9VTzfD/4g5DpkpZgCntBZyMB6otVRK/wMhAOw8c6IB0AAAAABJRU5ErkJggg=="/>
                  </a>
                  <a href= "https://twitter.com/NahuManero" target  = "_blank">
                        <img class = "transition-bar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAt1JREFUSEu1V9l1E0EQrNoE7AxwBkAEEhFgRwBEgB2BTQRABJgILCKwnIHIQCHICWzxeo7dmZ1j7Q/mPUm7c/RRXd09IgHIfeE/jIrgMMV0KTVifm5bVTe6kFh1yHYBLdltg2dhxZ6XHPIqp7GOeMRpGZrWfDt6L1LcBWTF2jogTD1+vdXmj6RzAF8BbMPnKOCewE+Sp7DnAsApvsfoTngEIQ8Argby5Nme25xOSTKBjwDs12fGjOERwD2ASwDPJM2wLKzhhZDGSwgPIHYkrzzp2kBL4x7AxjQKGXypjr9B+QVJ2++s8+kUvqTxDsBtMH0P4YbDcKATnA9J5oF5uzYMbtOwJXmIm5N0ch7XhJkxU7ziQUnXAr5n7MyhjlufvdLhkFapgtWjtHDOSTOrd4B2AJ+MJJI8OqmyQrGb+EbS9kaUnf5EsY+lpM8AfnXxc/J0BOhJ1R+54kT/dMzgg/AGxLuQGh2RLVeL+S8kjd3ZyKAepS2Fx7yeLbOkbks9vG7v+5RUE+JpsozSOQHLv7M1/F64bvlrBaYYmce2GmM8exCeVpD1Yc8KiIn7M5CXGVuTAjl1p+i9JIuxMfFj1bNUSwdjQB/IIRSNTozjkiOZV7pdRriLRC77iRzC+ZJaSQEJjhPQ6GqwVRkX6zrK3TLZJNVELveQMiw8O7iFPaizRdsOZyuxnx274cAfyzq7VDNtXy4YywErKDQjPi3TzB0M8Z6bhH6TgxWhztWmUrnSaIQ2eQvAYl70vQrxgtK1m2PsZD6u5wLeErC8M1abl1vQ5jmlSoPE1giufYVqX0nmlUULDa3O0miTwpgCs1BsCq0c3rnbRdq/i16eB7IoIKGIGKstTua5IbAJ1Lambp3qaJ2KHHYpS2sAt+4S2b26y4c2gtVyuPYnobzQVxjTvvzE1m4xK28p1aoXJkuoAzbrgirKXoNKsbcVlJb5FWVdXjU9ThVUKloPvrW1VNw/KRs7NFk9OTYAAAAASUVORK5CYII="/>
                  </a>
              </div>
          </div>
      </footer>
  )
};

export default Footer;
