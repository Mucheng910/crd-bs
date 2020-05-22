import {Table, Tag, Space} from 'antd';
import React from "react";



class SearchAd extends React.Component{

    render() {
        const columns = [
            {
                title: '广告名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '图片',
                dataIndex: 'age',
                key: 'age',
                render: age => {
                    return(
                        <img style={{width:'300px'}} src="data:image/jpeg;base64,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"  alt={'123'}/>
                    )
                }
            },
            {
                title: '简介',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        {/*<a>修改 {record.name}</a>*/}
                        <a>详情</a>
                        <a>修改</a>
                        <a>删除</a>
                    </Space>
                ),
            },
        ];
        const data = [
            {
                key: '1',
                name: '哈哈哈',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['商业', '生活'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        return(
            <div>
                <div>

                </div>
                <p/>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default SearchAd;