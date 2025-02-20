

import '/.index.css'
const AppItem = props => {
  const {appDeatils} = props
  const {appName, imgUrl} = appDeatils
  return (
    <li className="app-item">
      <img className="app-image" src={imgUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem


