/**
 * @file    src/extension.ts
 * @brief   Provides the main entry point for the G10 Assembly Language extension,
 *          wiring up the language features into VSCode's editor lifecycle.
 */

// Imports *********************************************************************

import * as VSC from 'vscode';
import { AssemblyCompletionProvider } from './providers/completion';
import { AssemblyHoverProvider } from './providers/hover';

// Functions *******************************************************************

/**
 * Activates this extension, wiring up its features into VSCode's editor
 * lifecycle.
 * 
 * @param context   The VSCode extension context to activate this extension 
 *                  within.
 */
function activate (context: VSC.ExtensionContext) : void
{
    const selector: VSC.DocumentSelector = {
        language: 'g10-assembly',
        scheme: 'file'
    };

    context.subscriptions.push(
        VSC.languages.registerCompletionItemProvider(
            selector,
            new AssemblyCompletionProvider(),
            '.', '@'
        )
    );

    context.subscriptions.push(
        VSC.languages.registerHoverProvider(
            selector,
            new AssemblyHoverProvider()
        )
    );
}

/**
 * Deactivates this extenion.
 */
function deactivate () : void
{

}

// Exports *********************************************************************

export {
    activate,
    deactivate
};
