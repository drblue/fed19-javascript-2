# Things to do

1. Create method in ShopAPI to post to CrudCrud.

2. Set up mutation in CreateProductForm.

3. Trigger mutation in CreateProductForm on form submit (and pass product-data to mutation).

4. Handle mutation result (onSuccess, onError).

4.1. onSuccess

4.1.1. invalidate products-cache.

4.1.2. implement optimistic updates (with rollback on error)

4.2. onError - display error message.
