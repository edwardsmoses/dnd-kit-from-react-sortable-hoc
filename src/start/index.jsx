import React from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import {arrayMoveImmutable} from 'array-move';

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
    return <div>{children}</div>;
});

export const SortableExampleStart = () => {

    const [collections, setCollections] = React.useState([[0, 1, 2], [0, 1, 2, 3, 4], [0, 1, 2]]);

    const onSortEnd = ({ oldIndex, newIndex, collection }) => {
        setCollections((prev) => {
            const newCollections = [...prev];
            newCollections[collection] = arrayMoveImmutable(
                collections[collection],
                oldIndex,
                newIndex,
            );
            return newCollections;
        })
    };

    return (
        <SortableContainer onSortEnd={onSortEnd}>
            {collections.map((items, index) => (
                <React.Fragment key={index}>
                    <strong>LIST {index}</strong>
                    <ul>
                        {items.map((item, i) => (
                            <SortableItem
                                key={item}
                                value={`Item ${item}`}
                                index={i}
                                collection={index}
                            />
                        ))}
                    </ul>
                </React.Fragment>
            ))}
        </SortableContainer>
    )
}


