
function Footer() {
    return (
        <div className="flex h-fit lg:flex-row flex-col bg-black lg:h-16 py-4 px-5  lg:pl-36 lg:pr-36">
            <div className="flex flex-row">

                <div className="text-white font-semibold mb-4">
                    Follow Us:
                </div>

                <div className="text-white flex gap-2 ml-3">
                    <div><img src="/images/icon-facebook.svg" alt="" /></div>
                    resto Name
                </div>

                <div className="text-white flex gap-2  ml-3">
                    <div><img src="/images/icon-instagram.svg" alt="" /></div>
                    @resto_Name
                </div>
            </div>
            <div className="text-white ml-auto lg:mr-0 mr-auto "> Made with {"<3"} by <a href="https://benazouzyassine.netlify.app/" className="hover:border-b-[1px]  border-b-white">yassine ben azouz</a></div>
        </div>
    )
}

export default Footer