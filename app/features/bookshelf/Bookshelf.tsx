'use client';

import React from 'react';
import { Button, Card, List, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import BookFormDialog from '@/app/components/BookFormDialog';
import { IBook, add, remove, update } from './bookshelfSlice';

const BookShelf: React.FC = (props) => {
  const books = useAppSelector((state) => state.bookshelf.books);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState<IBook | undefined>();

  const handleConfirm = (values: IBook) => {
    if (selectedBook?.id) {
      // edit
      dispatch(update(values));
    } else {
      // create
      dispatch(add({ ...values, id: Math.random().toString(36).slice(2, 9) }));
    }
    setOpen(false);
    setSelectedBook(undefined);
  };

  const handleDelete = (id: string) => {
    // Modal.confirm to confirm
    Modal.confirm({
      title: 'Are you sure to delete this book?',
      onOk: () => {
        dispatch(remove(id));
      }
    });
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Book
      </Button>
      <List
        grid={{ gutter: 16, column: 4 }}
        style={{ marginTop: 16 }}
        dataSource={books}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              extra={
                <Button
                  type="text"
                  danger
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </Button>
              }
              onClick={() => {
                setSelectedBook(item);
                setOpen(true);
              }}
              hoverable
            >
              Category: {item.category}
              <br />
              Price: ${item.price}
            </Card>
          </List.Item>
        )}
      />
      <BookFormDialog
        open={open}
        onCancel={() => {
          setOpen(false);
          setSelectedBook(undefined);
        }}
        onConfirm={handleConfirm}
        defaultValue={selectedBook}
      />
    </>
  );
};

export default BookShelf;
