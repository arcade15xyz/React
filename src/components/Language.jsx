
export default function Language({language}){
    console.log(language)

    return(
        <>
            <div className=" w-full h-[100vh] bg-amber-200 mt-5 flex justify-center items-center flex-col gap-10 ">
                <h1 className=" text-6xl font-bold underline text-red-800 ">{language.id === null?"Hello Languages":language.country}</h1>
                <p className="whitespace-pre-wrap text-4xl opacity-50">{language.id=== null? "Choose the languages from the sidebar": language.paragraph}</p>
            </div>
        </>
    )
    
} 