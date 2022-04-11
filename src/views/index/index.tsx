import React, { useEffect } from 'react'
import { getSystemInfo } from '../../store/systemSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'


const HomeIndexPage: React.FC = function () {
  const systemInfo = useAppSelector(state => state.system.info)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSystemInfo())
  }, [])

  return (
    <div className="home-index oya">
      hello index page
    </div>
  )
}

export default HomeIndexPage
