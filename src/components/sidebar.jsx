import Button from "./Button"

export default function Sidebar({ active,languageToggle}){

    let newclass = " absolute right-0 bg-amber-950 h-[100vh] w-1/5 flex flex-col justify-center items-center gap-10 z-30 rounded-l-md"
    if(active){
        newclass+= " transition-all duration-75 origin-right scale-1 backdrop:bg-stone-900/90"
    }
    else{
        newclass+=" transition-all duration-75 origin-right scale-0"
    }

    return(
        <>
            <aside className={newclass}>
                <h1 className=" text-5xl font-bold text-slate-300">Languages</h1>
                <ul className="flex flex-col gap-5">
                    <li><Button  toggle={languageToggle} sid={0}>China</Button></li>
                    <li><Button  toggle={languageToggle} sid={1}>England</Button></li>
                    <li><Button  toggle={languageToggle} sid={2}>Japan</Button></li>
                </ul>
            </aside>
        </>
    )
}
// {newclass}