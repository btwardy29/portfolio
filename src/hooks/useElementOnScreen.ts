import { useEffect, useMemo, useState } from "react"

interface optionsInterface {
    root: null;
    rootMargin: string;
    threshold: number
}


const useElementOnScreen = (options:optionsInterface, targetRef: any) => {
  const [isVisible, setIsVisible] = useState(false)

  

  const optionsMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(function(entries:any) {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
      if(entry.isIntersecting) observer.unobserve(entry.target)
    }, optionsMemo)
    const currentTarget = targetRef.current
    if(currentTarget) observer.observe(currentTarget)
    
    return () => {
      if(!currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, optionsMemo])

  return isVisible
}

export default useElementOnScreen
