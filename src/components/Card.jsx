import PropTypes from "prop-types";
const Card = ({ item }) => {
    const generateDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString('id-ID');
    }
    return (
        <div>
            <a href={item?.link} target="_blank" rel="noreferrer">
            <div className="max-h-52 overflow-hidden rounded">
                <img src={item?.thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
            </a>
        <div className="p-1 mt-3">
            <h4 className="text-lg font-semibold">{item?.title} 
                <a href={item?.link} target="_blank" rel="noreferrer">{item?.title} </a>
            </h4>
            <p className="text-sm text-slate-700 my-2">{generateDate(item?.pubDate)}</p>
            <p className="text-sm text-slate-800">{item.description}</p></div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.objectOf(PropTypes.any).isRequired
}
export default Card;