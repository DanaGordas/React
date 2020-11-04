import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Facts() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://official-joke-api.appspot.com/jokes/ten');

        const items = await data.json()
        setItems(items);
    };

    return (
        <div>
            {items.map(item => (
                <p>
                    <Link to={`/facts/${item.id}`}> {item.setup} </Link>
                </p>
            ))}
        </div>
    );
}

export default Facts;
