## For creating a React App:

```
npx create-react-app myapp
```

## For starting React Project:

- first `cd` into your app folder then:

```
npm start
```

## For installing any packages/library:

- do this in your app root folder:

```
npm install <package-name>
```

## Installing React Router:

```
npm i -D react-router-dom@latest
```

- The add following lines in your `src/AddRoutes/AddRoutes.jsx`:

```
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExampleComponent from "./path-to-example-component";

const AddRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/examplePath" element={<ExampleComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AddRoutes;
```

- Then load this file in your `src/App.js`:

- App.js:

```
import AddRoutes from "./AddRoutes/AddRoutes";

function App() {
  return (
    <>
      <AddRoutes />
    </>
  );
}

export default App;
```

## React Bootstrap installation:

- First install the package:

```
npm install react-bootstrap bootstrap
```

- then add this line in your `index.js`:

```
import 'bootstrap/dist/css/bootstrap.min.css';
```
