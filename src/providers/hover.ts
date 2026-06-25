/**
 * @file    src/providers/hover.ts
 * @brief   Provides hover functionality for the G10 Assembly Language
 *          to be used by VSCode's IntelliSense.
 */

// Imports *********************************************************************

import * as VSC from 'vscode';

// Classes *********************************************************************

class AssemblyHoverProvider
    implements VSC.HoverProvider
{
// Public Methods **************************************************************

    provideHover (
        document:   VSC.TextDocument,
        position:   VSC.Position,
        token:      VSC.CancellationToken
    ) :
        VSC.ProviderResult<VSC.Hover>
    {
        return null;
    }

};

// Exports *********************************************************************

export { AssemblyHoverProvider };
