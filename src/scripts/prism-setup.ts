import Prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';

// prism.js sets window.Prism; mirror on globalThis for bundled component side effects.
globalThis.Prism = Prism;

export default Prism;
