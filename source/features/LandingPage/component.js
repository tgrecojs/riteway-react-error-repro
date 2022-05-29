import Link from 'next/link'
import { string } from 'prop-types'

const LandingPage = ({ headline = 'Home page' }) =>
    <div className=''>
        <h2 className='p-4 text-lg text-center text-blue-400'> {headline}</h2>
        <div className='m-2 p-4 flex flex-wrap justify-around items-stretch min-w-full'>
        <Link shallow={true} href="/newAccount">
            <a className="m-2 w-9/12 md:m-3 md:w-1/3 group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New Lari Lending Account</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-sm">Deposit collateral and begin exploring the ecosystem.</p>
            </a>
            </Link>
            <a href="#" className="m-2 w-9/12 md:m-3 md:w-1/3 group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Existing User</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-sm">Connect to your agoric wallet to begin.</p>
            </a>
       
            <a href="#" className="m-2 w-9/12 md:m-3 md:w-1/3 group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Margin Tokens Suite</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-sm">Get access to a variety of strategies for trading with leverage!</p>
            </a>
        </div>
        </div>
LandingPage.propTypes = {
    headline: string
}

export default LandingPage