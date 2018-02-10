select row_to_json(t)
from (
  select make, model, miles, kb_price, selling_price, description,
  (
    select array_to_json(array_agg(row_to_json(d)))
    from (
      select url
      from pictures
      where car_id=1
    ) d
  ) as pics
  from cars
  where sold = false
) t
