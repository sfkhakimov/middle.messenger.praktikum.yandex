import Block from "../../Block";
import compile from "../../../utils/compile";

import {template} from "./template";

export default class AddPhotoIcon extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        return compile(template, {})
    }

}