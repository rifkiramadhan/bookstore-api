### Standar API
  - METHOD : {root.api}/{version}/{grouping}/{endpoint}
  - POST : http://api.google.com/v1/auth/login


### Standar Status Response
  - [1] - 200 - OK                        --> Call API Success.
  - [2] - 201 - CREATED                   --> Post Success.
  - [3] - 400 - BAD REQUEST               --> Error on Client Side (Bisa input yang salah dll)
  - [4] - 401 - UNAUTHORIZED              --> User not authorized to the request.
  - [5] - 403 - FORBIDDEN                 --> User not allowed to access.
  - [6] - 404 - NOT FOUND                 --> Request Endpoint Not Found.
  - [7] - 500 - INTERNAL SERVER ERROR     --> Error on Server Side.
  - [8] - 502 - BAD GATEWAY               --> Invalid Response From Another Request.
