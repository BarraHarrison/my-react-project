// Fragment tag gives back on element, the "Fragment" element
// instead of a fragment you can just use an opening and closing tag
import { Fragment, fragment } from "react";

function List() {
    return (
        <>
            <h1>Test</h1>
            <ul className="my-list">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </>
    );
}
export default List;