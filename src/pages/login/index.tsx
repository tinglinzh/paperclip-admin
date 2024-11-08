import paperclipIcon from '@/assets/images/paperclip.png'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'

export function Login() {
  const { t } = useTranslation('app')

  useEffect(() => {
    console.log(navigator.language)
  }, [])
  return (
    <div className="flex h-screen items-center justify-center bg-[url('@/assets/images/login-bg.png')] bg-contain bg-center bg-no-repeat">
      <div className="flex items-center rounded-md bg-white px-[24px] py-[20px] shadow-sm">
        <img src={paperclipIcon} className="size-16" alt="" />
        <p className="text-2xl">
          {t('systemName')}
        </p>
      </div>
    </div>
  )
}
