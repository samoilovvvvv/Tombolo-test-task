const FolderIcon = ({modal = false}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94989C4.36289 21.4191 2.24989 19.3101 2.24989 15.7321V7.93211C2.24989 4.35911 3.56389 2.25011 7.14289 2.25011H9.14289C9.86089 2.25111 10.5369 2.58811 10.9669 3.16311L11.8799 4.37711C12.3119 4.95111 12.9879 5.28911 13.7059 5.29011H16.5359C20.1229 5.29011 21.4469 7.11611 21.4469 10.7671L21.4189 15.7321Z" stroke={modal ? '#130F26' : '#898793'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.48099 14.463H16.216" stroke={modal ? '#130F26' : '#898793'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default FolderIcon