import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Link } from 'react-router-dom';
function NotFoundPage() {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { children: [_jsx("h1", { children: "404" }), _jsx("li", { children: _jsx(Link, { to: "/", children: "GO TO HOME PAGE" }) })] }) }));
}
export default NotFoundPage;
