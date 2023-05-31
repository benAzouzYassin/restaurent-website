
function Footer() {
    return (
        <div className="flex flex-row bg-black h-16 py-4 mt-16 lg:pl-36 lg:pr-36">
            <div className="text-white font-semibold mb-4">
                Follow Us:
            </div>

            <div className="text-white flex gap-2 ml-3">
                <div><img src="/images/icon-facebook.svg" alt="" /></div>
                resto karoui
            </div>

            <div className="text-white flex gap-2  ml-3">
                <div><img src="/images/icon-instagram.svg" alt="" /></div>
                @resto_karoui
            </div>
            <div className="text-white ml-auto"> Made with {"<3"} by <a href="https://benazouzyassine.netlify.app/" className="hover:border-b-[1px]  border-b-white">yassine ben azouz</a></div>
        </div>
    )
}

export default Footer