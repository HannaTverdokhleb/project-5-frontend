import css from './Loader.module.css';


const Loader = ({ absolute }) => {
    return (
        <>
        {absolute ?
        <div className={css.absolute}><div className={css.loader}><i></i></div></div>
        :
        <div className={css.loader}><i></i></div>
        }
        </>
    )
}


export default Loader;