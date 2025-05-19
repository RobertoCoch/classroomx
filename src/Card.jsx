function Image () {
    return (
        <img className="rounded-xl" src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2020/06/27/733328/501013/bd1_star_wars_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_5129431.jpg"/>
    )
}

export default function Card( { title, text }) {
    return (
        <>
             <div className='w-full bg-neutral-200 shadow-gray-400 shadow-lg rounded-2xl flex justify-center aling-items text-slate-900 p-4 flex-col'>

                <Image/>
                <h1 className="text-neutral-900 text-3xl">{title}</h1>
                <p className="text-neutral-700 text-lg">{text}</p>
             </div>
        </>

    );
}
