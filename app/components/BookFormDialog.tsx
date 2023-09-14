import React from 'react';
import type { IBook } from '../features/bookshelf/bookshelfSlice';
import { Form, FormInstance, Input, Modal, InputNumber, Select } from 'antd';

interface IProps {
  open: boolean;
  defaultValue?: IBook;
  onConfirm?: (value: IBook) => void;
  onCancel?: () => void;
}

const BookFormDialog: React.FC<IProps> = (props) => {
  const formRef = React.useRef<FormInstance>(null);

  const handleOk = () => {
    formRef.current?.validateFields().then((values) => {
      if (typeof props.onConfirm === 'function') {
        props.onConfirm({ ...values, id: props.defaultValue?.id });
      }
    });
  };

  return (
    <Modal
      title={props.defaultValue?.id ? 'Edit Book' : 'Add Book'}
      open={props.open}
      destroyOnClose
      onCancel={props.onCancel}
      onOk={handleOk}
    >
      <Form
        ref={formRef}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={props.defaultValue}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input book name' }]}
        >
          <Input maxLength={50} />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select
            placeholder="Select a category"
            options={[
              { label: 'Fiction', value: 'Fiction' },
              { label: 'History', value: 'History' },
              { label: 'Thriller', value: 'Thriller' }
            ]}
          />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber addonBefore="$" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookFormDialog;
