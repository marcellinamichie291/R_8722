SELECT CASE number % 2 
         WHEN 0 THEN 'Even'
         ELSE 'Odd'
       END is_even
  FROM numbers



select 
    case mod(number,2) 
    when 0 then 'Even' 
    else 'Odd'
    end as is_even
from numbers