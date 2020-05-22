import { Form, Input, InputNumber, Button } from 'antd';
import React from "react";


class ProAd extends React.Component{
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        // const Demo = () => {
        //     const onFinish = values => {
        //         console.log(values);
        //     };
        // }

        return(
            <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="推广计划"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="推广单元"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="推广关键词和地域兴趣"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name={['user', 'website']}
                    label="推广创意"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="推广创意与推广单元关联"
                           rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        推广
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default ProAd;