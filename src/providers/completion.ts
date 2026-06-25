/**
 * @file    src/providers/completion.ts
 * @brief   Provides code completion functionality for the G10 Assembly Language
 *          to be used by VSCode's IntelliSense.
 */

// Imports *********************************************************************

import * as VSC from 'vscode';

// Classes *********************************************************************

class AssemblyCompletionProvider
    implements VSC.CompletionItemProvider
{
// Public Methods **************************************************************

    provideCompletionItems (
        document:   VSC.TextDocument,
        position:   VSC.Position,
        token:      VSC.CancellationToken,
        context:    VSC.CompletionContext
    ) :
        VSC.ProviderResult<
            VSC.CompletionItem[] |
            VSC.CompletionList
        >
    {
        const completionItems : VSC.CompletionItem[] = [];        

        return completionItems;
    }

};

// Exports *********************************************************************

export { AssemblyCompletionProvider };
