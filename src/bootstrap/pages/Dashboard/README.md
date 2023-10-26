The Dashboard/index.jsx component is concerned about the page overall layout.

Each folder also includes an index.jsx with concrete implementations.
They'll fetch from the store and display their respective cards only if the data is present.

The cards and tables are only responsible for the data presentation. Therefore they don't acknowledge the source of any
data.