interface IRequestSessionPage {
  getSession: (callRequestSession: boolean) => void
}

export const RequestSessionPage = ({ getSession }: IRequestSessionPage) => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center" data-testid="request-session-page-container">
      <div className="border border-c-light-blue rounded-lg p-8 flex flex-col items-center justify-center bg-c-light-purple">
        <h1 className="text-2xl font-bold mb-2 text-c-light-blue">Oops!</h1>
        <div className="text-xl font-bold mb-8 text-c-light-blue">Sorry, you have to login first.</div>
        <button
          onClick={() => getSession(true)}
          className="px-8 py-2 rounded-lg bg-c-dark-purple text-c-light-blue hover:bg-opacity-60 font-bold">
          Login
        </button>
      </div>
    </div>
  )
}
