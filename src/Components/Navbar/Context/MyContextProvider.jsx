import MyContext from './MyContext'


const MyContextProvider = ({children}) => {

    // const [activestate, setActivestate] = useState('');

  return (
    <MyContext.Provider value={{activestate,setActivestate}} >
      {children}
    </MyContext.Provider>
  )

}
export default MyContextProvider