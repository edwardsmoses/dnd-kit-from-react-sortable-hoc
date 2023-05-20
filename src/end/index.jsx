import React from 'react';

import {
    DndContext,
    useSensors,
    useSensor,
    PointerSensor,
    closestCenter,
} from "@dnd-kit/core";

import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, value }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li ref={setNodeRef} {...attributes} {...listeners} style={style}>
            Item {value}
        </li>
    );
};

export const DndKitEnd = () => {

    const [collections, setCollections] = React.useState([0, 1, 2, 3, 4]);

    const sensors = useSensors(
        useSensor(PointerSensor),
    );

    const onSortEnd = (event) => {
        const { active, over } = event;
        if (active?.id !== over?.id) {
            setCollections((prev) => {
                const activeIndex = prev.findIndex((item) => item === active?.id);
                const overIndex = prev.findIndex((item) => item === over?.id);
                return arrayMove(prev, activeIndex, overIndex);
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={onSortEnd}
        >
            <SortableContext items={collections} strategy={verticalListSortingStrategy}>
                <ul>
                    {collections.map((item) => (
                        <SortableItem id={item} key={item} value={item} />
                    ))}
                </ul>
            </SortableContext>
        </DndContext>
    )
}


