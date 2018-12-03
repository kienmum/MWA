//Book collection
{
    _id: ObjectId(),
    isbn: '1234', // use it as ID
    author: 'ABC',
    tag: ['keyword1','keyword2'],
    borrowedBy:[{student:'A', borrowedDate: '', returnDate: ''},
    {student:'B', borrowedDate: '', returnDate: ''}]
}

//Author Collection
{
    author:''
}

// Student Collection
{
    student:''
}