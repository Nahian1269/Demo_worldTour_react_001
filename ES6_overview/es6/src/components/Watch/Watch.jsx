const Watch = ({watch}) => {
    const {name , price} = watch ; 
    return (
        <div>
            <h4>watches: {name}</h4>
            <h4>price: {price}</h4>
        </div>
    );
};

export default Watch;