export interface DecisionTreeStep {
    prompt: string;
    yes: string;
    /** When true, another step follows on the No path. */
    continuesOnNo: boolean;
}

export interface DecisionTree {
    steps: DecisionTreeStep[];
    /** Shown after the final No branch when the flow ends in guidance, not another question. */
    closing?: string;
}

export const baseStylesQuickRules: DecisionTree = {
    steps: [
        {
            prompt: 'Should this apply across the whole site by default?',
            yes: 'Base layer',
            continuesOnNo: true
        },
        {
            prompt: 'Is this specific to one component?',
            yes: 'Component',
            continuesOnNo: true
        },
        {
            prompt: 'Is this visual branding only?',
            yes: 'Theme, not base',
            continuesOnNo: false
        }
    ],
    closing: 'If a global rule feels surprising, it probably belongs somewhere else.'
};

export const utilitiesQuickRules: DecisionTree = {
    steps: [
        {
            prompt: 'Does this solve a universal accessibility problem?',
            yes: 'Utility',
            continuesOnNo: true
        },
        {
            prompt: 'Does this keep repeating as a UI pattern?',
            yes: 'Component',
            continuesOnNo: true
        },
        {
            prompt: 'Is this only visual presentation?',
            yes: 'Theme or component, not utility',
            continuesOnNo: false
        }
    ],
    closing: 'A utility should have to justify its existence.'
};

export const utilityOrComponent: DecisionTree = {
    steps: [
        {
            prompt: 'Does this solve a universal accessibility problem?',
            yes: 'Utility',
            continuesOnNo: true
        },
        {
            prompt: 'Does this same pattern repeat together often?',
            yes: 'Component',
            continuesOnNo: true
        },
        {
            prompt: 'Is it only a small one-off visual adjustment?',
            yes: 'Theme',
            continuesOnNo: false
        }
    ],
    closing: 'If you need to explain it twice, it probably needs a component'
};

export const modifiersAndStateQuickRules: DecisionTree = {
    steps: [
        {
            prompt: 'Can this exist as a documented reusable version?',
            yes: 'Modifier',
            continuesOnNo: true
        },
        {
            prompt: 'Is this temporary UI behaviour?',
            yes: '.is_* state class',
            continuesOnNo: true
        },
        {
            prompt: 'Is this describing present content or condition?',
            yes: '.has_* condition class',
            continuesOnNo: false
        }
    ],
    closing:
        'If none of these fit, check ownership first — variant, behaviour, and content are different problems.'
};

export const modifierOrState: DecisionTree = {
    steps: [
        {
            prompt: 'Is this a permanent reusable variation?',
            yes: 'Modifier',
            continuesOnNo: true
        },
        {
            prompt: 'Is this temporary, conditional, or JS-driven?',
            yes: 'State class',
            continuesOnNo: false
        }
    ],
    closing: 'If it disappears when the user leaves, it is probably state'
};

export const themeLayerQuickRules: DecisionTree = {
    steps: [
        {
            prompt: 'Is this changing presentation only?',
            yes: 'Theme',
            continuesOnNo: true
        },
        {
            prompt: 'Is this changing structure or behaviour?',
            yes: 'Component',
            continuesOnNo: true
        },
        {
            prompt: 'Is this temporary or urgent?',
            yes: 'Hacks, not theme',
            continuesOnNo: false
        }
    ],
    closing: 'If a visual change needs detective work to explain, the architecture is already drifting.'
};

export const baseThemeComponent: DecisionTree = {
    steps: [
        {
            prompt: 'Should this apply globally across the whole site?',
            yes: 'Base',
            continuesOnNo: true
        },
        {
            prompt: 'Is this only visual presentation?',
            yes: 'Theme',
            continuesOnNo: true
        },
        {
            prompt: 'Is this specific to one UI pattern?',
            yes: 'Component',
            continuesOnNo: false
        }
    ],
    closing: 'You are probably writing a hack'
};

export const hacksQuickRules: DecisionTree = {
    steps: [
        {
            prompt: 'Is this temporary and urgent?',
            yes: 'Hacks',
            continuesOnNo: true
        },
        {
            prompt: 'Is this a real structural fix?',
            yes: 'Component or layout',
            continuesOnNo: true
        },
        {
            prompt: 'Is this only visual presentation?',
            yes: 'Theme, not hacks',
            continuesOnNo: false
        }
    ],
    closing: 'A hack should be obvious, justified, and easier to remove than it was to add.'
};

export const hackOrFix: DecisionTree = {
    steps: [
        {
            prompt: 'Is this urgent and temporary?',
            yes: 'Hacks layer',
            continuesOnNo: true
        },
        {
            prompt: 'Will this still exist in 6 months?',
            yes: 'Real fix',
            continuesOnNo: false
        }
    ],
    closing: 'If it feels permanent, stop calling it temporary'
};

export const layoutOrComponent: DecisionTree = {
    steps: [
        {
            prompt: 'Is the issue about page structure and positioning?',
            yes: 'Layout',
            continuesOnNo: true
        },
        {
            prompt: 'Is it specific to one reusable UI pattern?',
            yes: 'Component',
            continuesOnNo: false
        }
    ],
    closing: 'If three components share it, it is probably layout'
};

export const scopeBemNeither: DecisionTree = {
    steps: [
        {
            prompt: 'Do you need native selector boundaries?',
            yes: '@scope',
            continuesOnNo: true
        },
        {
            prompt: 'Do you need explicit naming for legacy teams?',
            yes: 'BEM may help',
            continuesOnNo: false
        }
    ],
    closing: 'Use semantic ownership and shallow selectors'
};
