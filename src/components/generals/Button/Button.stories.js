import { Button } from "./index";

export default {
    title: 'Components/Generals/Button/Button',
    component: Button,
    argTypes: {
        color: {
            options: [
                'grey', 'cyan', 'magenta'
            ],
            control: {
                type: 'inline-radio'
            }
        }
    }
}

export const Default = {
    args: {
        children: 'Button'
    }
}

export const Grey = {
    args: {
        color: 'grey',
        children: 'Button'
    }
}

export const Cyan = {
    args: {
        color: 'cyan',
        children: 'Button'
    }
}

export const Magenta = {
    args: {
        color: 'magenta',
        children: 'Button',
    }
}