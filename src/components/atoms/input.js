import { Form, Input } from 'antd';

const InputComponent = ({label, name}) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}>
            <Input />
        </Form.Item>
    );
};

export default InputComponent;