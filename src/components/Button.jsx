export default function Button({children ,sid,toggle}){
    return(
        <>
            <button onClick={()=>toggle(sid)} className=" text-slate-300 bg-slate-700 px-4 py-2 rounded-md w font-mono -tracking-wide text-xl active:scale-95 hover:bg-slate-600 cursor-pointer">{children}</button>
        </>
    )
}