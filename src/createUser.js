import React from 'react';
import './createUser.css';
import 'antd/dist/antd.css';
import { Upload, message, Button, Avatar, Form, Input, Checkbox, Radio, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Typography } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 10,
  },
};



class CreateUser extends React.Component {
  state = {
    OSSData: {},
  };

  async componentDidMount() {
    await this.init();
  }

  init = async () => {
    try {
      const OSSData = await this.mockGetOSSData();

      this.setState({
        OSSData,
      });
    } catch (error) {
      message.error(error);
    }
  };

  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  mockGetOSSData = () => {
    return {
      dir: 'user-dir/',
      expire: '1577811661',
      host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
      accessId: 'c2hhb2RhaG9uZw==',
      policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
      signature: 'ZGFob25nc2hhbw==',
    };
  };

  onChange = ({ fileList }) => {
    const { onChange } = this.props;
    console.log('Aliyun OSS:', fileList);
    if (onChange) {
      onChange([...fileList]);
    }
  };

  onRemove = file => {
    const { value, onChange } = this.props;

    const files = value.filter(v => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };

  transformFile = file => {
    const { OSSData } = this.state;

    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.url = OSSData.dir + filename;

    return file;
  };

  getExtraData = file => {
    const { OSSData } = this.state;

    return {
      key: file.url,
      OSSAccessKeyId: OSSData.accessId,
      policy: OSSData.policy,
      Signature: OSSData.signature,
    };
  };

  beforeUpload = async () => {
    const { OSSData } = this.state;
    const expire = OSSData.expire * 1000;

    if (expire < Date.now()) {
      await this.init();
    }
    return true;
  };
  

  render() {
    const { value } = this.props;
    const props = {
      name: 'file',
      fileList: value,
      action: this.state.OSSData.host,
      onChange: this.onChange,
      onRemove: this.onRemove,
      transformFile: this.transformFile,
      data: this.getExtraData,
      beforeUpload: this.beforeUpload,
    };
    return (
      <div>
        <Title>XUPT广告系统</Title>
         <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
         <p/>
         <Upload {...props}>
          <Button>
            <UploadOutlined /> 上传头像
          </Button>
         </Upload>
         <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }} 
    >
      <Form.Item
        label="用户名id"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="性别"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>男</Radio>
        <Radio value={2}>女</Radio>
        </Radio.Group>      
      </Form.Item>

      <Form.Item
        label="出生日期"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} format={'YYYY/MM/DD'} />
    <br />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          创建用户  
        </Button>
      </Form.Item>
    </Form>
      </div>
    );
  }
}

export default CreateUser;