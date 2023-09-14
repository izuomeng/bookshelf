'use client';

import React from 'react';
import { Button, Card, List } from 'antd';
import { useAppSelector } from '@/app/hooks';

const BookShelf: React.FC = (props) => {
  const books = useAppSelector((state) => state.bookshelf.books);

  return (
    <>
      <Button type="primary">Add Book</Button>
      <List
        grid={{ gutter: 16, column: 4 }}
        className='mt-4'
        dataSource={books}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              extra={
                <Button type="text" danger>
                  Delete
                </Button>
              }
              onClick={() => {}}
              hoverable
            >
              ID: {item.id}
              <br />
              Category: {item.category}
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default BookShelf;
