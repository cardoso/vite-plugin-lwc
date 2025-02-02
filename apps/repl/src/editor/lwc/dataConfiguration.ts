import type { languages } from "monaco-editor";

export default {
  useDefaultDataProvider: true,
  dataProviders: {
    lwc: {
      version: 1.1,
      tags: [
        {
          name: "lightning-helptext",
          description:
            "An icon with a text popover used for tooltips.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-helptext)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **content**: *STRING* Text to be shown in the popover.\n* **icon-name**: *STRING* The Lightning Design System name of the icon used as the visible element.\nNames are written in the format 'utility:info' where 'utility' is the category,\nand 'info' is the specific icon to be displayed.\nThe default is 'utility:info'.\n* **icon-variant**: *STRING* Changes the appearance of the icon.\nAccepted variants include inverse, warning, error.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "content",
              description: "Text to be shown in the popover.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon used as the visible element.\nNames are written in the format 'utility:info' where 'utility' is the category,\nand 'info' is the specific icon to be displayed.\nThe default is 'utility:info'.",
            },
            {
              name: "icon-variant",
              description:
                "Changes the appearance of the icon.\nAccepted variants include inverse, warning, error.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-textarea",
          description:
            "Represents a multiline text input field.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-textarea)\n### Attributes\n* **access-key**\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the textarea field is disabled and users cannot interact with it.\n* **field-level-help**\n* **label**: *STRING* Text that describes the textarea input field.\n* **max-length**\n* **maxlength**: *INTEGER* The maximum number of characters allowed in the textarea.\n* **message-when-bad-input**: *STRING* Error message to be displayed when a bad input is detected.\n* **message-when-too-long**: *STRING* Error message to be displayed when the value is too long.\n* **message-when-too-short**: *STRING* Error message to be displayed when the value is too short.\n* **message-when-value-missing**: *STRING* Error message to be displayed when the value is missing.\n* **min-length**\n* **minlength**: *INTEGER* The minimum number of characters allowed in the textarea.\n* **name**: *STRING* Specifies the name of an input element.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when a value attribute changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **placeholder**: *STRING* Text that is displayed when the field is empty,\nto prompt the user for a valid entry.\n* **read-only**\n* **readonly**: *BOOLEAN* Specifies that an input field is read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, the textarea field must be filled out before the form can be submitted.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **validity**: *OBJECT* Represents the validity states of the textarea input, with respect to constraint validation.\n* **value**: *STRING* The value of the textarea input, also used as the default value during init.\n* **variant**: *STRING* The variant changes the appearance of the textarea.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and textarea.\nUse label-stacked to place the label above the textarea.\n",
          attributes: [
            {
              name: "access-key",
              description: "The keyboard shortcut for input field.",
            },
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the textarea field is disabled and users cannot interact with it.",
            },
            {
              name: "field-level-help",
              description:
                "The help text that appears in a popover.\nSet field-level help to provide an informational tooltip on the textarea input field.",
            },
            {
              name: "label",
              description: "Text that describes the textarea input field.",
            },
            {
              name: "max-length",
              description:
                "The maximum number of characters allowed in the textarea.",
            },
            {
              name: "maxlength",
              description:
                "The maximum number of characters allowed in the textarea.",
            },
            {
              name: "message-when-bad-input",
              description:
                "Error message to be displayed when a bad input is detected.",
            },
            {
              name: "message-when-too-long",
              description:
                "Error message to be displayed when the value is too long.",
            },
            {
              name: "message-when-too-short",
              description:
                "Error message to be displayed when the value is too short.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Error message to be displayed when the value is missing.",
            },
            {
              name: "min-length",
              description:
                "The minimum number of characters allowed in the textarea.",
            },
            {
              name: "minlength",
              description:
                "The minimum number of characters allowed in the textarea.",
            },
            {
              name: "name",
              description: "Specifies the name of an input element.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when a value attribute changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "placeholder",
              description:
                "Text that is displayed when the field is empty,\nto prompt the user for a valid entry.",
            },
            {
              name: "read-only",
              description:
                "If present, the textarea field is read-only and cannot be edited.",
            },
            {
              name: "readonly",
              description:
                "Specifies that an input field is read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, the textarea field must be filled out before the form can be submitted.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states of the textarea input, with respect to constraint validation.",
            },
            {
              name: "value",
              description:
                "The value of the textarea input, also used as the default value during init.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the textarea.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and textarea.\nUse label-stacked to place the label above the textarea.",
            },
          ],
        },
        {
          name: "lightning-formatted-name",
          description:
            "Displays a formatted name that can include a salutation and suffix.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-name)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **first-name**: *STRING* The value for the first name.\n* **format**: *STRING* The format to use to display the name. Valid values include short, medium, and long. This value defaults to long.\n* **informal-name**: *STRING* The value for the informal name.\n* **last-name**: *STRING* The value for the last name.\n* **middle-name**: *STRING* The value for the middle name.\n* **salutation**: *STRING* The value for the salutation, such as Dr. or Mrs.\n* **suffix**: *STRING* The value for the suffix, such as Jr. or Esq.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "first-name",
              description: "The value for the first name.",
            },
            {
              name: "format",
              description:
                "The format to use to display the name. Valid values include short, medium, and long. This value defaults to long.",
            },
            {
              name: "informal-name",
              description: "The value for the informal name.",
            },
            {
              name: "last-name",
              description: "The value for the last name.",
            },
            {
              name: "middle-name",
              description: "The value for the middle name.",
            },
            {
              name: "salutation",
              description: "The value for the salutation, such as Dr. or Mrs.",
            },
            {
              name: "suffix",
              description: "The value for the suffix, such as Jr. or Esq.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-vertical-navigation-item-badge",
          description:
            'A link and badge within lightning-vertical-navigation-section or lightning-vertical-navigation-overflow.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-badge)\n### Attributes\n* **assistive-text**: *STRING* Assistive text describing the number in the badge, which enhances accessibility and is not displayed to the user.\nThe default is "New Items".\n* **badge-count**: *INTEGER* The number to show inside the badge. If this value is zero, the badge is hidden.\nThe default value is zero.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component\'s base classes.\n* **href**: *STRING* The URL of the page that the navigation item goes to.\n* **label**: *STRING* The text displayed for this navigation item.\n* **name**: *STRING* A unique identifier for this navigation item.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n',
          attributes: [
            {
              name: "assistive-text",
              description:
                'Assistive text describing the number in the badge, which enhances accessibility and is not displayed to the user.\nThe default is "New Items".',
            },
            {
              name: "badge-count",
              description:
                "The number to show inside the badge. If this value is zero, the badge is hidden.\nThe default value is zero.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "href",
              description:
                "The URL of the page that the navigation item goes to.",
            },
            {
              name: "label",
              description: "The text displayed for this navigation item.",
            },
            {
              name: "name",
              description: "A unique identifier for this navigation item.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightningsnapin-base-chat-message",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-chat-message)\n### Attributes\n* **message-content**\n* **user-type**\n",
          attributes: [
            {
              name: "message-content",
              description:
                "Message content based on the concrete type of the chat message.",
            },
            {
              name: "user-type",
              description:
                'The user type, which is either "agent" or "chasitor".',
            },
          ],
        },
        {
          name: "lightning-card",
          description:
            "Cards apply a container around a related grouping of information.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-card)\n### Attributes\n* **actions**: *AURA.COMPONENT[]* Actions are components such as button or buttonIcon. Actions are displayed in the header.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **footer**: *OBJECT* The footer can include text or another component\n* **icon-name**: *STRING* The Lightning Design System name of the icon.\nNames are written in the format 'utility:down' where 'utility' is the category,\nand 'down' is the specific icon to be displayed.\nThe icon is displayed in the header to the left of the title.\n* **title**: *OBJECT* The title can include text, and is displayed in the header.\nTo include additional markup or another component, use the title slot.\n* **variant**: *STRING* The variant changes the appearance of the card.\nAccepted variants include base or narrow.\nThis value defaults to base.\n",
          attributes: [
            {
              name: "actions",
              description:
                "Actions are components such as button or buttonIcon. Actions are displayed in the header.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "footer",
              description: "The footer can include text or another component",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon.\nNames are written in the format 'utility:down' where 'utility' is the category,\nand 'down' is the specific icon to be displayed.\nThe icon is displayed in the header to the left of the title.",
            },
            {
              name: "title",
              description:
                "The title can include text, and is displayed in the header.\nTo include additional markup or another component, use the title slot.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the card.\nAccepted variants include base or narrow.\nThis value defaults to base.",
            },
          ],
        },
        {
          name: "lightning-input-rich-text",
          description:
            "A WYSIWYG editor with a customizable toolbar for entering rich text\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-rich-text)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **aria-describedby**: *STRING* A space-separated list of element IDs that provides descriptive labels for the rich text editor.\n* **aria-label**: *STRING* Label describing the rich text editor to assistive technologies\n* **aria-labelledby**: *STRING* An element ID that provides a label for the rich text editor.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **custom-buttons**\n* **disabled**: *BOOLEAN* If present, the editor is disabled and users cannot interact with it.\n* **disabled-categories**: *LIST* A comma-separated list of button categories to remove from the toolbar.\n* **formats**: *LIST* A allowlist of formats. By default, the list is computed based on enabled categories.\nThe 'table' format is always enabled to support copying and pasting of tables if formats are not provided.\n* **label**: *STRING* The label of the rich text editor.\n* **label-visible**: *BOOLEAN* If present, the label on the rich text editor is visible.\n* **message-when-bad-input**: *STRING* Error message to be displayed when invalid input is detected.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **placeholder**: *STRING* Text that is displayed when the field is empty, to prompt the user for a valid entry.\n* **share-with-entity-id**: *STRING* Entity ID to share the image with.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **valid**: *BOOLEAN* Specifies whether the editor content is valid. If invalid, the slds-has-error class is added. This value defaults to true.\n* **value**: *STRING* The HTML content in the rich text editor.\n* **variant**: *STRING* The variant changes the appearance of the toolbar. Accepted variant is bottom-toolbar which causes\nthe toolbar to be displayed below the text box.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "aria-describedby",
              description:
                "A space-separated list of element IDs that provides descriptive labels for the rich text editor.",
            },
            {
              name: "aria-label",
              description:
                "Label describing the rich text editor to assistive technologies",
            },
            {
              name: "aria-labelledby",
              description:
                "An element ID that provides a label for the rich text editor.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "custom-buttons",
              description:
                "Reserved for internal use. Custom buttons to add to the toolbar.",
            },
            {
              name: "disabled",
              description:
                "If present, the editor is disabled and users cannot interact with it.",
            },
            {
              name: "disabled-categories",
              description:
                "A comma-separated list of button categories to remove from the toolbar.",
            },
            {
              name: "formats",
              description:
                "A allowlist of formats. By default, the list is computed based on enabled categories.\nThe 'table' format is always enabled to support copying and pasting of tables if formats are not provided.",
            },
            {
              name: "label",
              description: "The label of the rich text editor.",
            },
            {
              name: "label-visible",
              description:
                "If present, the label on the rich text editor is visible.",
            },
            {
              name: "message-when-bad-input",
              description:
                "Error message to be displayed when invalid input is detected.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "placeholder",
              description:
                "Text that is displayed when the field is empty, to prompt the user for a valid entry.",
            },
            {
              name: "share-with-entity-id",
              description: "Entity ID to share the image with.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "valid",
              description:
                "Specifies whether the editor content is valid. If invalid, the slds-has-error class is added. This value defaults to true.",
            },
            {
              name: "value",
              description: "The HTML content in the rich text editor.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the toolbar. Accepted variant is bottom-toolbar which causes\nthe toolbar to be displayed below the text box.",
            },
          ],
        },
        {
          name: "lightning-progress-bar",
          description:
            "Displays a horizontal progress bar from left to right to indicate the progress of an operation.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-bar)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **size**: *STRING* The size of the progress bar.\nValid values are x-small, small, medium, and large.\nThe default value is medium.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *INTEGER* The percentage value of the progress bar.\n* **variant**: *STRING* The variant changes the appearance of the progress bar.\nAccepted variants include base or circular.\nThis value defaults to base.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "size",
              description:
                "The size of the progress bar.\nValid values are x-small, small, medium, and large.\nThe default value is medium.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "The percentage value of the progress bar.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the progress bar.\nAccepted variants include base or circular.\nThis value defaults to base.",
            },
          ],
        },
        {
          name: "lightning-formatted-phone",
          description:
            "Displays a phone number as a hyperlink with the tel: URL scheme.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-phone)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **onclick**: *AURA.ACTION* The action triggered when the phone number is clicked.\n* **tab-index**\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *INTEGER* Sets the phone number to display.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "onclick",
              description:
                "The action triggered when the phone number is clicked.",
            },
            {
              name: "tab-index",
              description:
                "Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.\nA value of 0 means that the element is focusable and\nparticipates in sequential keyboard navigation. A value of -1 means\nthat the element is focusable but does not participate in keyboard navigation.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "Sets the phone number to display.",
            },
          ],
        },
        {
          name: "lightning-record-picker",
          description:
            "A component that provides an input search field, that can search for Salesforce records.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-picker)\n### Attributes\n* **disabled**: *BOOLEAN* If present, the component is disabled and you can't interact with it.\n* **display-info**\n* **field-level-help**: *STRING* Help text detailing the purpose and function of the record picker, displayed on hover for desktop and on click for mobile\n* **filter**\n* **label**: *STRING* The text label for the component.\n* **matching-info**\n* **message-when-bad-input**: *STRING* The error message displayed when the user enters a search term in the input but doesn't select an option.\n* **object-api-name**: *STRING* The API name of the object for the retrieved records.\n* **placeholder**: *STRING* The text displayed when the input is empty to prompt the user to enter a search term.\n* **required**: *BOOLEAN* If present, specifies that a user must select a record. If no record is selected, the record picker is in an invalid state.\n* **value**: *STRING* The ID of the record that is selected in the record picker.\n* **variant**: *STRING* The variant changes the appearance of the component. The component displays the label above the combobox by default. Specify variant=\"label-hidden\" to hide the label but make it available to assistive technology. The only variant is label-hidden.\n",
          attributes: [
            {
              name: "disabled",
              description:
                "If present, the component is disabled and you can't interact with it.",
            },
            {
              name: "display-info",
              description:
                "The display configuration used to customize the way retrieved records are presented.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the record picker, displayed on hover for desktop and on click for mobile",
            },
            {
              name: "filter",
              description: "The filter applied to the retrieved records.",
            },
            {
              name: "label",
              description: "The text label for the component.",
            },
            {
              name: "matching-info",
              description:
                "The matching configuration to customize the fields used to match the search results to the search term entered by the user.",
            },
            {
              name: "message-when-bad-input",
              description:
                "The error message displayed when the user enters a search term in the input but doesn't select an option.",
            },
            {
              name: "object-api-name",
              description:
                "The API name of the object for the retrieved records.",
            },
            {
              name: "placeholder",
              description:
                "The text displayed when the input is empty to prompt the user to enter a search term.",
            },
            {
              name: "required",
              description:
                "If present, specifies that a user must select a record. If no record is selected, the record picker is in an invalid state.",
            },
            {
              name: "value",
              description:
                "The ID of the record that is selected in the record picker.",
            },
            {
              name: "variant",
              description:
                'The variant changes the appearance of the component. The component displays the label above the combobox by default. Specify variant="label-hidden" to hide the label but make it available to assistive technology. The only variant is label-hidden.',
            },
          ],
        },
        {
          name: "lightningsnapin-base-prechat",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-prechat)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-menu-item",
          description:
            "Represents a list item in a menu.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-menu-item)\n### Attributes\n* **access-key**\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **checked**: *BOOLEAN* If present, a check mark displays on the left of the menu item if it's selected.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the menu item is disabled and users cannot interact with it.\n* **download**\n* **draft-alternative-text**: *STRING* Describes the reason for showing the draft indicator.\nThis is required when is-draft is present on the lightning-menu-item tag.\n* **href**: *STRING* URL for a link to use for the menu item.\n* **icon-name**: *STRING* The name of an icon to display after the text of the menu item.\n* **is-draft**: *BOOLEAN* If present, a draft indicator is shown on the menu item.\nA draft indicator is denoted by blue asterisk on the left of the menu item.\nWhen you use a draft indicator, include alternative text for accessibility using draft-alternative-text.\n* **label**: *STRING* Text of the menu item.\n* **onactive**: *AURA.ACTION* DEPRECATED. The action triggered when this menu item is selected.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **prefix-icon-name**: *STRING* The name of an icon to display before the text of the menu item.\n* **tab-index**\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *STRING* A value associated with the menu item.\n",
          attributes: [
            {
              name: "access-key",
              description: "The keyboard shortcut for the menu item.",
            },
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "checked",
              description:
                "If present, a check mark displays on the left of the menu item if it's selected.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the menu item is disabled and users cannot interact with it.",
            },
            {
              name: "download",
              description:
                "The name of a file that's downloaded when clicking a link in the menu item. Used with the href attribute.",
            },
            {
              name: "draft-alternative-text",
              description:
                "Describes the reason for showing the draft indicator.\nThis is required when is-draft is present on the lightning-menu-item tag.",
            },
            {
              name: "href",
              description: "URL for a link to use for the menu item.",
            },
            {
              name: "icon-name",
              description:
                "The name of an icon to display after the text of the menu item.",
            },
            {
              name: "is-draft",
              description:
                "If present, a draft indicator is shown on the menu item.\nA draft indicator is denoted by blue asterisk on the left of the menu item.\nWhen you use a draft indicator, include alternative text for accessibility using draft-alternative-text.",
            },
            {
              name: "label",
              description: "Text of the menu item.",
            },
            {
              name: "onactive",
              description:
                "DEPRECATED. The action triggered when this menu item is selected.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "prefix-icon-name",
              description:
                "The name of an icon to display before the text of the menu item.",
            },
            {
              name: "tab-index",
              description:
                "Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.\ntabindex can be set to 0 or -1.\nThe default tabindex value is 0, which means that the menu item is focusable and\nparticipates in sequential keyboard navigation. The value -1 means\nthat the menu item is focusable but does not participate in keyboard navigation.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "A value associated with the menu item.",
            },
          ],
        },
        {
          name: "lightning-ui-object-info-api",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-ui-object-info-api)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-pill",
          description:
            "A pill displays a label that can contain links and can be removed from view.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill)\n### Attributes\n* **aria-selected**\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **has-error**: *BOOLEAN* If present, the pill is shown with a red border and an error icon on the left of the label.\n* **href**: *STRING* The URL of the page that the link goes to.\n* **is-plain-link**\n* **label**: *STRING* The text label that displays in the pill.\n* **media**: *AURA.COMPONENT[]* The icon or figure that's displayed next to the textual information.\n* **name**: *STRING* The name for the pill. This value is optional and can be used to identify the pill in a callback.\n* **onclick**: *AURA.ACTION* The action triggered when the button is clicked.\n* **onremove**: *AURA.ACTION* The action triggered when the pill is removed.\n* **role**\n* **tab-index**\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **variant**\n",
          attributes: [
            {
              name: "aria-selected",
              description: "Specifies the aria-selected of an element.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "has-error",
              description:
                "If present, the pill is shown with a red border and an error icon on the left of the label.",
            },
            {
              name: "href",
              description: "The URL of the page that the link goes to.",
            },
            {
              name: "is-plain-link",
              description:
                "Reserved for internal use. Specifies whether the element variant is a plain link.",
            },
            {
              name: "label",
              description: "The text label that displays in the pill.",
            },
            {
              name: "media",
              description:
                "The icon or figure that's displayed next to the textual information.",
            },
            {
              name: "name",
              description:
                "The name for the pill. This value is optional and can be used to identify the pill in a callback.",
            },
            {
              name: "onclick",
              description: "The action triggered when the button is clicked.",
            },
            {
              name: "onremove",
              description: "The action triggered when the pill is removed.",
            },
            {
              name: "role",
              description: "Specifies the role of an element.",
            },
            {
              name: "tab-index",
              description:
                "Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.\nA value of 0 means that the pill is focusable and\nparticipates in sequential keyboard navigation. A value of -1 means\nthat the pill is focusable but does not participate in keyboard navigation.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the pill.\nAccepted variants include link, plain, and plainLink.\nThe default variant is link, which creates a link in the pill when you specify the href attribute.\nThe plain variant renders the pill without a link and ignores the href attribute.\nThe plainLink variant is reserved for internal use.",
            },
          ],
        },
        {
          name: "lightning-button-icon",
          description:
            "An icon-only HTML button.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **alternative-text**: *STRING* The alternative text used to describe the icon. This text should describe what happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.\n* **aria-atomic**: *STRING* Indicates whether assistive technologies will present all, or only parts of, the changed region. Valid values are 'true' or 'false'.\n* **aria-controls**: *STRING* A space-separated list of element IDs that this button controls the contents or presence of.\n* **aria-described-by**: *STRING* A space-separated list of element IDs that provides descriptive labels for the button.\n* **aria-expanded**: *STRING* Indicates whether an element the button controls is expanded or collapsed. Valid values are 'true' or 'false'.\n* **aria-label**: *STRING* Label describing the button to assistive technologies.\n* **aria-live**: *STRING* Indicates that the button will be updated. Valid values are 'assertive', 'polite', or 'off'.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. This value defaults to false.\n* **icon-class**: *STRING* The class to be applied to the contained icon element.\n* **icon-name**: *STRING* The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. Only utility icons can be used in this component.\n* **name**: *STRING* The name for the button element. This value is optional and can be used to identify the button in a callback.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onclick**: *AURA.ACTION* The action that will be run when the button is clicked.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **size**: *STRING* The size of the buttonIcon. For the bare variant, options include x-small, small, medium, and large. For non-bare variants, options include xx-small, x-small, small, and medium. This value defaults to medium.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **tooltip**\n* **type**: *STRING* Specifies the type of button. Valid values are button, reset, and submit. This value defaults to button.\n* **value**: *STRING* The value for the button element. This value is optional and can be used when submitting a form.\n* **variant**: *STRING* The variant changes the appearance of buttonIcon. Accepted variants include bare,\n        container, brand, border, border-filled, bare-inverse, and border-inverse. This value defaults to border.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "alternative-text",
              description:
                "The alternative text used to describe the icon. This text should describe what happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.",
            },
            {
              name: "aria-atomic",
              description:
                "Indicates whether assistive technologies will present all, or only parts of, the changed region. Valid values are 'true' or 'false'.",
            },
            {
              name: "aria-controls",
              description:
                "A space-separated list of element IDs that this button controls the contents or presence of.",
            },
            {
              name: "aria-described-by",
              description:
                "A space-separated list of element IDs that provides descriptive labels for the button.",
            },
            {
              name: "aria-expanded",
              description:
                "Indicates whether an element the button controls is expanded or collapsed. Valid values are 'true' or 'false'.",
            },
            {
              name: "aria-label",
              description:
                "Label describing the button to assistive technologies.",
            },
            {
              name: "aria-live",
              description:
                "Indicates that the button will be updated. Valid values are 'assertive', 'polite', or 'off'.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. This value defaults to false.",
            },
            {
              name: "icon-class",
              description:
                "The class to be applied to the contained icon element.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. Only utility icons can be used in this component.",
            },
            {
              name: "name",
              description:
                "The name for the button element. This value is optional and can be used to identify the button in a callback.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onclick",
              description:
                "The action that will be run when the button is clicked.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "size",
              description:
                "The size of the buttonIcon. For the bare variant, options include x-small, small, medium, and large. For non-bare variants, options include xx-small, x-small, small, and medium. This value defaults to medium.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "tooltip",
              description: "Reserved for internal use.",
            },
            {
              name: "type",
              description:
                "Specifies the type of button. Valid values are button, reset, and submit. This value defaults to button.",
            },
            {
              name: "value",
              description:
                "The value for the button element. This value is optional and can be used when submitting a form.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of buttonIcon. Accepted variants include bare,\n        container, brand, border, border-filled, bare-inverse, and border-inverse. This value defaults to border.",
            },
          ],
        },
        {
          name: "lightning-progress-ring",
          description:
            "Displays a circular progress indicator to provide feedback about an action or process.\nThis component requires API version 48.0 and later.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-ring)\n### Attributes\n* **value**\n* **variant**\n* **direction**\n* **size**\n",
          attributes: [
            {
              name: "value",
              description:
                "The percentage value of the progress ring. The value must be a number from 0 to 100.\nA value of 50 corresponds to a color fill of half the ring in a clockwise\nor counterclockwise direction, depending on the direction attribute.",
            },
            {
              name: "variant",
              description:
                "Changes the appearance of the progress ring.\nAccepted variants include base, active-step, warning, expired, base-autocomplete.",
            },
            {
              name: "direction",
              description:
                "Controls which way the color flows from the top of the ring, either clockwise or counterclockwise\nValid values include fill and drain. The fill value corresponds to a color flow in the clockwise direction.\nThe drain value indicates a color flow in the counterclockwise direction.",
            },
            {
              name: "size",
              description:
                "The size of the progress ring. Valid values include medium and large.",
            },
          ],
        },
        {
          name: "lightning-input-address",
          description:
            "Represents an address compound field.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-address)\n### Attributes\n* **address-label**: *STRING* The label of the address compound field.\n* **city**: *STRING* The city field of the address.\n* **city-label**: *STRING* The label of the city field of the address.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **country**: *STRING* The country field of the address. If country-options is provided, this country value is selected by default.\n* **country-label**: *STRING* The label of the country field of the address.\n* **country-options**: *LIST* The array of label-value pairs for the country. Displays a dropdown menu of options.\n* **disabled**: *BOOLEAN* If present, the address fields are disabled and users cannot interact with them.\n* **field-level-help**: *STRING* Help text detailing the purpose and function of the input.\n* **onblur**: *AURA.ACTION* The action triggered when the input releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when the value changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the input receives focus.\n* **postal-code**: *STRING* The postal code field of the address.\n* **postal-code-label**: *STRING* The label of the postal code field of the address.\n* **province**: *STRING* The province field of the address. If province-options is provided, this province value is selected by default.\n* **province-label**: *STRING* The label of the province field of the address.\n* **province-options**: *LIST* The array of label-value pairs for the province. Displays a dropdown menu of options.\n* **read-only**\n* **readonly**: *BOOLEAN* Specifies whether the address fields are read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, the address fields must be filled before the form is submitted.\n* **show-address-lookup**\n* **street**: *STRING* The street field of the address.\n* **street-label**: *STRING* The label of the street field of the address.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **validity**\n* **variant**: *STRING* The variant changes the appearance of an input address field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and input address field.\nUse label-stacked to place the label above the input address field.\n",
          attributes: [
            {
              name: "address-label",
              description: "The label of the address compound field.",
            },
            {
              name: "city",
              description: "The city field of the address.",
            },
            {
              name: "city-label",
              description: "The label of the city field of the address.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "country",
              description:
                "The country field of the address. If country-options is provided, this country value is selected by default.",
            },
            {
              name: "country-label",
              description: "The label of the country field of the address.",
            },
            {
              name: "country-options",
              description:
                "The array of label-value pairs for the country. Displays a dropdown menu of options.",
            },
            {
              name: "disabled",
              description:
                "If present, the address fields are disabled and users cannot interact with them.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the input.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the input releases focus.",
            },
            {
              name: "onchange",
              description: "The action triggered when the value changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the input receives focus.",
            },
            {
              name: "postal-code",
              description: "The postal code field of the address.",
            },
            {
              name: "postal-code-label",
              description: "The label of the postal code field of the address.",
            },
            {
              name: "province",
              description:
                "The province field of the address. If province-options is provided, this province value is selected by default.",
            },
            {
              name: "province-label",
              description: "The label of the province field of the address.",
            },
            {
              name: "province-options",
              description:
                "The array of label-value pairs for the province. Displays a dropdown menu of options.",
            },
            {
              name: "read-only",
              description:
                "If present, the address fields are read-only and cannot be edited.",
            },
            {
              name: "readonly",
              description:
                "Specifies whether the address fields are read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, the address fields must be filled before the form is submitted.",
            },
            {
              name: "show-address-lookup",
              description:
                "If present, address lookup using Google Maps is enabled.",
            },
            {
              name: "street",
              description: "The street field of the address.",
            },
            {
              name: "street-label",
              description: "The label of the street field of the address.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of an input address field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and input address field.\nUse label-stacked to place the label above the input address field.",
            },
          ],
        },
        {
          name: "lightning-formatted-date-time",
          description:
            "Displays formatted date and time.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-date-time)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **day**: *STRING* Allowed values are numeric or 2-digit.\n* **era**: *STRING* Allowed values are narrow, short, or long.\n* **hour**: *STRING* Allowed values are numeric or 2-digit.\n* **hour12**: *BOOLEAN* Determines whether time is displayed as 12-hour. If false, time displays as 24-hour. The default setting is determined by the user's locale.\n* **minute**: *STRING* Allowed values are numeric or 2-digit.\n* **month**: *STRING* Allowed values are 2-digit, narrow, short, or long.\n* **second**: *STRING* Allowed values are numeric or 2-digit.\n* **time-zone**: *STRING* The time zone to display. Use this attribute only if you want to override the default, which is the runtime's\ntime zone. Specify a time zone listed in the IANA time zone database (https://www.iana.org/time-zones). For example, set\nthe value to 'Pacific/Honolulu' to display Hawaii time. The short code UTC is also accepted.\n* **time-zone-name**: *STRING* Allowed values are short or long. For example, the Pacific time zone would display as 'PST'\nif you specify 'short', or 'Pacific Standard Time' if you specify 'long.'\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *OBJECT* The value to be formatted, which can be a Date object, timestamp, or an ISO8601 formatted string.\n* **weekday**: *STRING* Specifies how to display the day of the week. Allowed values are narrow, short, or long.\n* **year**: *STRING* Allowed values are numeric or 2-digit.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "day",
              description: "Allowed values are numeric or 2-digit.",
            },
            {
              name: "era",
              description: "Allowed values are narrow, short, or long.",
            },
            {
              name: "hour",
              description: "Allowed values are numeric or 2-digit.",
            },
            {
              name: "hour12",
              description:
                "Determines whether time is displayed as 12-hour. If false, time displays as 24-hour. The default setting is determined by the user's locale.",
            },
            {
              name: "minute",
              description: "Allowed values are numeric or 2-digit.",
            },
            {
              name: "month",
              description:
                "Allowed values are 2-digit, narrow, short, or long.",
            },
            {
              name: "second",
              description: "Allowed values are numeric or 2-digit.",
            },
            {
              name: "time-zone",
              description:
                "The time zone to display. Use this attribute only if you want to override the default, which is the runtime's\ntime zone. Specify a time zone listed in the IANA time zone database (https://www.iana.org/time-zones). For example, set\nthe value to 'Pacific/Honolulu' to display Hawaii time. The short code UTC is also accepted.",
            },
            {
              name: "time-zone-name",
              description:
                "Allowed values are short or long. For example, the Pacific time zone would display as 'PST'\nif you specify 'short', or 'Pacific Standard Time' if you specify 'long.'",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description:
                "The value to be formatted, which can be a Date object, timestamp, or an ISO8601 formatted string.",
            },
            {
              name: "weekday",
              description:
                "Specifies how to display the day of the week. Allowed values are narrow, short, or long.",
            },
            {
              name: "year",
              description: "Allowed values are numeric or 2-digit.",
            },
          ],
        },
        {
          name: "lightning-checkbox-group",
          description:
            "A checkbox group that enables selection of single or multiple options.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-checkbox-group)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the checkbox group is disabled.\nCheckbox selections can't be changed for a disabled checkbox group.\n* **label**: *STRING* Text label for the checkbox group.\n* **message-when-value-missing**: *STRING* Optional message to be displayed when no checkbox is selected\nand the required attribute is set.\n* **name**: *STRING* The name of the checkbox group.\n* **onblur**: *AURA.ACTION* The action triggered when the checkbox group releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when a checkbox value changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the checkbox group receives focus.\n* **options**: *LIST* Array of label-value pairs for each checkbox.\n* **required**: *BOOLEAN* If present, at least one checkbox must be selected.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **validity**\n* **value**: *STRING[]* The list of selected checkboxes.\nEach array entry contains the value of a selected checkbox.\nThe value of each checkbox is set in the options attribute.\n* **variant**\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the checkbox group is disabled.\nCheckbox selections can't be changed for a disabled checkbox group.",
            },
            {
              name: "label",
              description: "Text label for the checkbox group.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Optional message to be displayed when no checkbox is selected\nand the required attribute is set.",
            },
            {
              name: "name",
              description: "The name of the checkbox group.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the checkbox group releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when a checkbox value changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the checkbox group receives focus.",
            },
            {
              name: "options",
              description: "Array of label-value pairs for each checkbox.",
            },
            {
              name: "required",
              description:
                "If present, at least one checkbox must be selected.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "value",
              description:
                "The list of selected checkboxes.\nEach array entry contains the value of a selected checkbox.\nThe value of each checkbox is set in the options attribute.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the checkbox group.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and checkbox group.\nUse label-stacked to place the label above the checkbox group.",
            },
          ],
        },
        {
          name: "lightning-accordion-section",
          description:
            "A single section that is nested in an accordion component.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion-section)\n### Attributes\n* **actions**: *AURA.COMPONENT[]* Enables a custom menu implementation. Actions are displayed to the right of the section title.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **label**: *STRING* The text that displays as the title of the section.\n* **name**: *STRING* The unique section name to use with the active-section-name attribute in the accordion component.\n* **title**: *STRING* Displays a tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "actions",
              description:
                "Enables a custom menu implementation. Actions are displayed to the right of the section title.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "label",
              description:
                "The text that displays as the title of the section.",
            },
            {
              name: "name",
              description:
                "The unique section name to use with the active-section-name attribute in the accordion component.",
            },
            {
              name: "title",
              description:
                "Displays a tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-vertical-navigation-item-icon",
          description:
            "A link and icon within lightning-vertical-navigation-section or lightning-vertical-navigation-overflow.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-icon)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **href**: *STRING* The URL of the page that the navigation item goes to.\n* **icon-name**: *STRING* The Lightning Design System name of the icon.\nNames are written in the format 'utility:down' where 'utility' is the category,\nand 'down' is the specific icon to be displayed.\n* **label**: *STRING* The text displayed for this navigation item.\n* **name**: *STRING* A unique identifier for this navigation item.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "href",
              description:
                "The URL of the page that the navigation item goes to.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon.\nNames are written in the format 'utility:down' where 'utility' is the category,\nand 'down' is the specific icon to be displayed.",
            },
            {
              name: "label",
              description: "The text displayed for this navigation item.",
            },
            {
              name: "name",
              description: "A unique identifier for this navigation item.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-radio-group",
          description:
            "A radio button group that can have a single option selected.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-radio-group)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the radio group is disabled and users cannot interact with it.\n* **label**: *STRING* Text label for the radio group.\n* **message-when-value-missing**: *STRING* Optional message displayed when no radio button is selected and the required attribute is set to true.\n* **name**: *STRING* Specifies the name of the radio button group. Only only one button can be selected if a name is specified\nfor the group.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when a value attribute changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **options**: *LIST* Array of label-value pairs for each radio button.\n* **readonly**: *BOOLEAN* Specifies that an input field is read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, a radio button must be selected before the form can be submitted.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**: *STRING* The style of the radio group. Options are radio or button. The default is radio.\n* **validity**: *OBJECT* Represents the validity states that an element can be in, with respect to constraint validation.\n* **value**: *OBJECT* Specifies the value of the selected radio button.\n* **variant**: *STRING* The variant changes the appearance of the radio group.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and radio group.\nUse label-stacked to place the label above the radio group.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the radio group is disabled and users cannot interact with it.",
            },
            {
              name: "label",
              description: "Text label for the radio group.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Optional message displayed when no radio button is selected and the required attribute is set to true.",
            },
            {
              name: "name",
              description:
                "Specifies the name of the radio button group. Only only one button can be selected if a name is specified\nfor the group.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when a value attribute changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "options",
              description: "Array of label-value pairs for each radio button.",
            },
            {
              name: "readonly",
              description:
                "Specifies that an input field is read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, a radio button must be selected before the form can be submitted.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "The style of the radio group. Options are radio or button. The default is radio.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "value",
              description: "Specifies the value of the selected radio button.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the radio group.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and radio group.\nUse label-stacked to place the label above the radio group.",
            },
          ],
        },
        {
          name: "lightning-pill-container",
          description:
            "A list of pills grouped in a container. This component requires API version 42.0 and later.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **is-collapsible**\n* **is-expanded**\n* **items**: *LIST* An array of items to be rendered as pills in a container.\n* **label**: *STRING* Aria label for the pill container.\n* **onitemremove**: *AURA.ACTION* The action triggered when a pill is removed.\n* **single-line**: *BOOLEAN* Specifies whether to keep the pills in a single line.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **variant**\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "is-collapsible",
              description:
                "Specifies whether the pill container can be collapsed.",
            },
            {
              name: "is-expanded",
              description: "Specifies whether the pill container is expanded.",
            },
            {
              name: "items",
              description:
                "An array of items to be rendered as pills in a container.",
            },
            {
              name: "label",
              description: "Aria label for the pill container.",
            },
            {
              name: "onitemremove",
              description: "The action triggered when a pill is removed.",
            },
            {
              name: "single-line",
              description:
                "Specifies whether to keep the pills in a single line.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the pill container. Accepted variants\ninclude standard and bare. This value defaults to standard.",
            },
          ],
        },
        {
          name: "lightning-badge",
          description:
            "Represents a label which holds a small amount of information, such as the\nnumber of unread notifications.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-badge)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **label**: *STRING* The text to be displayed inside the badge.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "label",
              description: "The text to be displayed inside the badge.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-tab",
          description:
            "A single tab in a tabset component.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-tab)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **body**: *AURA.COMPONENTDEFREF[]* The body of the tab.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **end-icon-alternative-text**\n* **end-icon-name**\n* **icon-assistive-text**: *STRING* The alternative text for the icon specified by icon-name.\n* **icon-name**: *STRING* The Lightning Design System name of an icon to display at the beginning of the tab label.\nSpecify the name in the format 'utility:down' where 'utility' is the category, and\n'down' is the icon to be displayed. Only utility icons can be used.\n* **id**: *STRING* The optional ID is used during tabset's onselect event to determine which tab was clicked.\n* **label**: *AURA.COMPONENT[]* The text displayed in the tab header.\n* **onactive**: *AURA.ACTION* The action triggered when this tab becomes active.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **show-error-indicator**: *BOOLEAN* Specifies whether there's an error in the tab content.\nAn error icon is displayed to the right of the tab label.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Specifies text that displays in a tooltip over the tab content.\n* **value**\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "body",
              description: "The body of the tab.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "end-icon-alternative-text",
              description:
                "The alternative text for the icon specified by end-icon-name.",
            },
            {
              name: "end-icon-name",
              description:
                "The Lightning Design System name of an icon to display at the end of the tab label.\nSpecify the name in the format 'utility:check' where 'utility' is the category, and\n'check' is the icon to be displayed.",
            },
            {
              name: "icon-assistive-text",
              description:
                "The alternative text for the icon specified by icon-name.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of an icon to display at the beginning of the tab label.\nSpecify the name in the format 'utility:down' where 'utility' is the category, and\n'down' is the icon to be displayed. Only utility icons can be used.",
            },
            {
              name: "id",
              description:
                "The optional ID is used during tabset's onselect event to determine which tab was clicked.",
            },
            {
              name: "label",
              description: "The text displayed in the tab header.",
            },
            {
              name: "onactive",
              description: "The action triggered when this tab becomes active.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "show-error-indicator",
              description:
                "Specifies whether there's an error in the tab content.\nAn error icon is displayed to the right of the tab label.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Specifies text that displays in a tooltip over the tab content.",
            },
            {
              name: "value",
              description:
                "The optional string to identify which tab was clicked during the tab's active event.\nThis string is also used by active-tab-value in tabset to open a tab.",
            },
          ],
        },
        {
          name: "lightning-flow-support",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-flow-support)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-button-group",
          description:
            "Represents a group of buttons.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-group)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-message-service",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-message-service)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-button-stateful",
          description:
            "A button that toggles between states.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-stateful)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **icon-name-when-hover**: *STRING* The name of the icon to be used in the format 'utility:close' when the state is true and the button receives focus.\n* **icon-name-when-off**: *STRING* The name of the icon to be used in the format 'utility:add' when the state is false.\n* **icon-name-when-on**: *STRING* The name of the icon to be used in the format 'utility:check' when the state is true.\n* **label-when-hover**: *STRING* The text to be displayed inside the button when state is true and the button receives focus.\n* **label-when-off**: *STRING* The text to be displayed inside the button when state is false.\n* **label-when-on**: *STRING* The text to be displayed inside the button when state is true.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onclick**: *AURA.ACTION* The action triggered when the button is clicked.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **selected**\n* **state**: *BOOLEAN* The state of the button, which shows whether the button has been selected or not. The default state is false.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **variant**: *STRING* The variant changes the appearance of the button.\nAccepted variants include brand, destructive, inverse, neutral, success, and text.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "icon-name-when-hover",
              description:
                "The name of the icon to be used in the format 'utility:close' when the state is true and the button receives focus.",
            },
            {
              name: "icon-name-when-off",
              description:
                "The name of the icon to be used in the format 'utility:add' when the state is false.",
            },
            {
              name: "icon-name-when-on",
              description:
                "The name of the icon to be used in the format 'utility:check' when the state is true.",
            },
            {
              name: "label-when-hover",
              description:
                "The text to be displayed inside the button when state is true and the button receives focus.",
            },
            {
              name: "label-when-off",
              description:
                "The text to be displayed inside the button when state is false.",
            },
            {
              name: "label-when-on",
              description:
                "The text to be displayed inside the button when state is true.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onclick",
              description: "The action triggered when the button is clicked.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "selected",
              description: "If present, the button is in the selected state.",
            },
            {
              name: "state",
              description:
                "The state of the button, which shows whether the button has been selected or not. The default state is false.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the button.\nAccepted variants include brand, destructive, inverse, neutral, success, and text.",
            },
          ],
        },
        {
          name: "lightning-dynamic-icon",
          description:
            "Represents various animated icons with different states.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-dynamic-icon)\n### Attributes\n* **alternative-text**: *STRING* The alternative text used to describe the dynamic icon.\nThis text should describe what's happening.\nFor example, 'Graph is refreshing', not what the icon looks like, 'Graph'.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **onclick**: *AURA.ACTION* The action triggered when the icon is clicked.\n* **option**: *STRING* The option attribute changes the appearance of the dynamic icon.\nThe options available depend on the type.\neq: play (default) or stop\nscore: positive (default) or negative\nstrength: -3, -2, -1, 0 (default), 1, 2, 3\ntrend: neutral (default), up, or down\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**: *STRING* The Lightning Design System name of the dynamic icon.\nValid values are: ellie, eq, score, strength, trend, and waffle.\n",
          attributes: [
            {
              name: "alternative-text",
              description:
                "The alternative text used to describe the dynamic icon.\nThis text should describe what's happening.\nFor example, 'Graph is refreshing', not what the icon looks like, 'Graph'.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "onclick",
              description: "The action triggered when the icon is clicked.",
            },
            {
              name: "option",
              description:
                "The option attribute changes the appearance of the dynamic icon.\nThe options available depend on the type.\neq: play (default) or stop\nscore: positive (default) or negative\nstrength: -3, -2, -1, 0 (default), 1, 2, 3\ntrend: neutral (default), up, or down",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "The Lightning Design System name of the dynamic icon.\nValid values are: ellie, eq, score, strength, trend, and waffle.",
            },
          ],
        },
        {
          name: "lightning-tabset",
          description:
            "Represents a list of tabs.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-tabset)\n### Attributes\n* **active-tab-value**\n* **body**: *AURA.COMPONENTDEFREF[]* The body of the component. This could be one or more lightning:tab components.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **onselect**: *AURA.ACTION* The action that will run when the tab is clicked.\n* **selected-tab-id**: *STRING* Allows you to set a specific tab to open by default. If this attribute is not used, the first tab opens by default.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the tabset.\n* **variant**: *STRING* The variant changes the appearance of the tabset. Accepted variants are standard, scoped, and vertical.\n",
          attributes: [
            {
              name: "active-tab-value",
              description:
                "Sets a specific tab to open by default using a string that matches a tab's value string. If not used, the first tab opens by default.",
            },
            {
              name: "body",
              description:
                "The body of the component. This could be one or more lightning:tab components.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "onselect",
              description: "The action that will run when the tab is clicked.",
            },
            {
              name: "selected-tab-id",
              description:
                "Allows you to set a specific tab to open by default. If this attribute is not used, the first tab opens by default.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the tabset.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the tabset. Accepted variants are standard, scoped, and vertical.",
            },
          ],
        },
        {
          name: "lightning-breadcrumb",
          description:
            "An item in the hierarchy path of the page the user is on.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-breadcrumb)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **href**: *STRING* The URL of the page that the breadcrumb goes to.\n* **label**: *STRING* The text label for the breadcrumb.\n* **name**: *STRING* The name for the breadcrumb component. This value is optional and can be\nused to identify the breadcrumb in a callback.\n* **onclick**: *AURA.ACTION* The action triggered when the breadcrumb is clicked.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "href",
              description: "The URL of the page that the breadcrumb goes to.",
            },
            {
              name: "label",
              description: "The text label for the breadcrumb.",
            },
            {
              name: "name",
              description:
                "The name for the breadcrumb component. This value is optional and can be\nused to identify the breadcrumb in a callback.",
            },
            {
              name: "onclick",
              description:
                "The action triggered when the breadcrumb is clicked.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-breadcrumbs",
          description:
            "A hierarchy path of the page you're currently visiting within the website or app.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-breadcrumbs)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-relative-date-time",
          description:
            "Displays the relative time difference between the source date-time and the provided date-time.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-relative-date-time)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *OBJECT* The timestamp or JavaScript Date object to be formatted.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description:
                "The timestamp or JavaScript Date object to be formatted.",
            },
          ],
        },
        {
          name: "lightning-formatted-rich-text",
          description:
            "Displays rich text that's formatted with allowlisted tags and attributes.\nOther tags and attributes are removed and only their text content is displayed.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-rich-text)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disable-linkify**: *BOOLEAN* If present, the component does not create links in the rich text.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *STRING* Sets the rich text to display.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disable-linkify",
              description:
                "If present, the component does not create links in the rich text.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "Sets the rich text to display.",
            },
          ],
        },
        {
          name: "lightning-tree",
          description:
            "Displays a nested tree.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-tree)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **header**: *STRING* The text that's displayed as the tree heading.\n* **items**: *OBJECT* An array of key-value pairs that describe the tree. See the Documentation tab for more information.\n* **onselect**: *AURA.ACTION* The action triggered when a tree item is selected.\n* **selected-item**\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "header",
              description: "The text that's displayed as the tree heading.",
            },
            {
              name: "items",
              description:
                "An array of key-value pairs that describe the tree. See the Documentation tab for more information.",
            },
            {
              name: "onselect",
              description: "The action triggered when a tree item is selected.",
            },
            {
              name: "selected-item",
              description:
                "Selects and highlights the specified tree item. Tree item names are case-sensitive.\nIf the tree item is nested, selecting this item also expands the parent branches.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-file-upload",
          description:
            "A file uploader for uploading and attaching files to records.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-file-upload)\n### Attributes\n* **accept**: *LIST* Comma-separated list of file extensions that can be uploaded\nin the format .ext, such as .pdf, .jpg, or .png.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* Specifies whether this component should be displayed in a disabled state.\nDisabled components can't be clicked. The default is false.\n* **label**: *STRING* The text label for the file uploader.\n* **multiple**: *BOOLEAN* Specifies whether a user can upload more than one file simultaneously.\nThe default is false.\n* **name**: *STRING* Specifies the name of the input element.\n* **onuploadfinished**: *AURA.ACTION* The action triggered when files have finished uploading.\n* **record-id**: *STRING* The record Id of the record that the uploaded file is associated to.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "accept",
              description:
                "Comma-separated list of file extensions that can be uploaded\nin the format .ext, such as .pdf, .jpg, or .png.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "Specifies whether this component should be displayed in a disabled state.\nDisabled components can't be clicked. The default is false.",
            },
            {
              name: "label",
              description: "The text label for the file uploader.",
            },
            {
              name: "multiple",
              description:
                "Specifies whether a user can upload more than one file simultaneously.\nThe default is false.",
            },
            {
              name: "name",
              description: "Specifies the name of the input element.",
            },
            {
              name: "onuploadfinished",
              description:
                "The action triggered when files have finished uploading.",
            },
            {
              name: "record-id",
              description:
                "The record Id of the record that the uploaded file is associated to.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-formatted-time",
          description:
            "Displays a formatted time in user's locale format.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-time)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *STRING* Time value to format.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "Time value to format.",
            },
          ],
        },
        {
          name: "lightning-tree-grid",
          description:
            "Displays a hierarchical view of data in a table.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-tree-grid)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **columns**: *LIST* Array of the columns object that's used to define the data types.\nRequired properties include 'label', 'fieldName', and 'type'. The default type is 'text'.\nSee the Documentation tab for more information.\n* **data**: *OBJECT* The array of data to be displayed.\n* **expanded-rows**: *LIST* The array of unique row IDs for rows that are expanded.\n* **hide-checkbox-column**: *BOOLEAN* If present, the checkbox column for row selection is hidden.\n* **is-loading**: *BOOLEAN* If present, a spinner is displayed to indicate that more data is being loaded.\n* **key-field**: *STRING* Required for better performance. Associates each row with a unique ID.\n* **max-column-width**: *INTEGER* The maximum width for all columns. The default is 1000px.\n* **min-column-width**: *INTEGER* The minimum width for all columns. The default is 50px.\n* **onresize**: *AURA.ACTION* The action triggered when the table renders columns the first time and every time its resized an specific column.\n* **onrowaction**: *AURA.ACTION* The action triggered when an operation its clicked. By default its to closes the actions menu.\n* **onrowselection**: *AURA.ACTION* The action triggered when a row is selected.\n* **ontoggle**: *AURA.ACTION* The action triggered when a row is toggled (expanded or collapsed).\n* **ontoggleall**: *AURA.ACTION* The action triggered when all rows are toggled (expanded or collapsed).\n* **resize-column-disabled**: *BOOLEAN* If present, column resizing is disabled.\n* **row-number-offset**: *INTEGER* Determines where to start counting the row number. The default is 0.\n* **selected-rows**: *LIST* The array of unique row IDs that are selected.\n* **show-row-number-column**: *BOOLEAN* If present, the row number column are shown in the first column.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "columns",
              description:
                "Array of the columns object that's used to define the data types.\nRequired properties include 'label', 'fieldName', and 'type'. The default type is 'text'.\nSee the Documentation tab for more information.",
            },
            {
              name: "data",
              description: "The array of data to be displayed.",
            },
            {
              name: "expanded-rows",
              description:
                "The array of unique row IDs for rows that are expanded.",
            },
            {
              name: "hide-checkbox-column",
              description:
                "If present, the checkbox column for row selection is hidden.",
            },
            {
              name: "is-loading",
              description:
                "If present, a spinner is displayed to indicate that more data is being loaded.",
            },
            {
              name: "key-field",
              description:
                "Required for better performance. Associates each row with a unique ID.",
            },
            {
              name: "max-column-width",
              description:
                "The maximum width for all columns. The default is 1000px.",
            },
            {
              name: "min-column-width",
              description:
                "The minimum width for all columns. The default is 50px.",
            },
            {
              name: "onresize",
              description:
                "The action triggered when the table renders columns the first time and every time its resized an specific column.",
            },
            {
              name: "onrowaction",
              description:
                "The action triggered when an operation its clicked. By default its to closes the actions menu.",
            },
            {
              name: "onrowselection",
              description: "The action triggered when a row is selected.",
            },
            {
              name: "ontoggle",
              description:
                "The action triggered when a row is toggled (expanded or collapsed).",
            },
            {
              name: "ontoggleall",
              description:
                "The action triggered when all rows are toggled (expanded or collapsed).",
            },
            {
              name: "resize-column-disabled",
              description: "If present, column resizing is disabled.",
            },
            {
              name: "row-number-offset",
              description:
                "Determines where to start counting the row number. The default is 0.",
            },
            {
              name: "selected-rows",
              description: "The array of unique row IDs that are selected.",
            },
            {
              name: "show-row-number-column",
              description:
                "If present, the row number column are shown in the first column.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-platform-show-toast-event",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-platform-show-toast-event)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-input-location",
          description:
            "Represents a geolocation compound field that accepts a latitude and longitude value.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-location)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the geolocation fields are disabled and users cannot interact with them.\n* **field-level-help**: *STRING* Help text detailing the purpose and function of the input.\n* **label**: *STRING* The label of the geolocation compound field.\n* **latitude**: *STRING* The latitude value. Latitude values must be within -90 and 90.\n* **longitude**: *STRING* The longitude value. Longitude values must be within -180 and 180.\n* **onblur**: *AURA.ACTION* The action triggered when the input releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when the value changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the input receives focus.\n* **read-only**\n* **readonly**: *BOOLEAN* Specifies whether the compound field is read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, the geolocation fields must be filled out before the form is submitted.\nAn error message is displayed if a user interacts with the field\nand does not provide a value.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **validity**\n* **variant**: *STRING* The variant changes the appearance of a geolocation compound field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and geolocation fields.\nUse label-stacked to place the label above the geolocation fields.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the geolocation fields are disabled and users cannot interact with them.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the input.",
            },
            {
              name: "label",
              description: "The label of the geolocation compound field.",
            },
            {
              name: "latitude",
              description:
                "The latitude value. Latitude values must be within -90 and 90.",
            },
            {
              name: "longitude",
              description:
                "The longitude value. Longitude values must be within -180 and 180.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the input releases focus.",
            },
            {
              name: "onchange",
              description: "The action triggered when the value changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the input receives focus.",
            },
            {
              name: "read-only",
              description:
                "If present, the geolocations fields are read-only and cannot be edited.",
            },
            {
              name: "readonly",
              description:
                "Specifies whether the compound field is read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, the geolocation fields must be filled out before the form is submitted.\nAn error message is displayed if a user interacts with the field\nand does not provide a value.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of a geolocation compound field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and geolocation fields.\nUse label-stacked to place the label above the geolocation fields.",
            },
          ],
        },
        {
          name: "lightning-input-field",
          description:
            "Represents an editable input for a field on a Salesforce object.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **dirty**\n* **disabled**: *BOOLEAN* If present, the field is grayed out and users can't interact with it.\nDisabled fields don't receive focus and are skipped in tabbing navigation.\n* **field-name**: *STRING* The API name of the field to be displayed.\n* **onchange**: *AURA.ACTION* The action triggered when the input value changes.\n* **readonly**\n* **required**\n* **value**: *STRING* The field value, which overrides the existing value.\n* **variant**\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "dirty",
              description:
                "Reserved for internal use. If present, the field has been modified by the user but not saved or submitted.",
            },
            {
              name: "disabled",
              description:
                "If present, the field is grayed out and users can't interact with it.\nDisabled fields don't receive focus and are skipped in tabbing navigation.",
            },
            {
              name: "field-name",
              description: "The API name of the field to be displayed.",
            },
            {
              name: "onchange",
              description: "The action triggered when the input value changes.",
            },
            {
              name: "readonly",
              description:
                "Specifies whether an input field is read-only. This value defaults to false.\nNot supported for the following field types: rich text, picklist, multi-select picklist, and lookup.\nA read-only field is not disabled by default.",
            },
            {
              name: "required",
              description:
                "If present, the input field must be filled out before the form is submitted.",
            },
            {
              name: "value",
              description:
                "The field value, which overrides the existing value.",
            },
            {
              name: "variant",
              description:
                "The variant changes the label position of an input field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThe variant, if specified, determines the label position.\nOtherwise, the density setting of the parent form determines the label position.",
            },
          ],
        },
        {
          name: "lightning-formatted-address",
          description:
            "Displays a formatted address with a link to the given location on Google Maps.\nThe link is opened in a new tab.\nA static map can be displayed with the address for better context.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-address)\n### Attributes\n* **city**: *STRING* The city detail for the address.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **country**: *STRING* The country detail for the address.\n* **disabled**: *BOOLEAN* If present, the address is displayed as plain text and is not clickable.\n* **latitude**: *DECIMAL* The latitude of the location if known. Latitude values must be within -90 and 90.\n* **longitude**: *DECIMAL* The longitude of the location if known. Longitude values must be within -180 and 180.\n* **postal-code**: *STRING* The postal code detail for the address.\n* **province**: *STRING* The province detail for the address.\n* **show-static-map**\n* **street**: *STRING* The street detail for the address.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "city",
              description: "The city detail for the address.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "country",
              description: "The country detail for the address.",
            },
            {
              name: "disabled",
              description:
                "If present, the address is displayed as plain text and is not clickable.",
            },
            {
              name: "latitude",
              description:
                "The latitude of the location if known. Latitude values must be within -90 and 90.",
            },
            {
              name: "longitude",
              description:
                "The longitude of the location if known. Longitude values must be within -180 and 180.",
            },
            {
              name: "postal-code",
              description: "The postal code detail for the address.",
            },
            {
              name: "province",
              description: "The province detail for the address.",
            },
            {
              name: "show-static-map",
              description:
                "Displays a static map of the location using Google Maps. This value defaults to false.",
            },
            {
              name: "street",
              description: "The street detail for the address.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-combobox",
          description:
            'A widget that provides an input field that is readonly,\naccompanied by a dropdown list of selectable options.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-combobox)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **aria-described-by**\n* **aria-labelled-by**\n* **class**: *STRING* A CSS class for the outer element, in addition to the component\'s base classes.\n* **disabled**: *BOOLEAN* If present, the combobox is disabled and users cannot interact with it.\n* **dropdown-alignment**: *STRING* Specifies where the drop-down list is aligned with or anchored to\nthe selection field. By default the list is aligned with the\nselection field at the top left so the list opens down. Use bottom-left\nto make the selection field display at the bottom so the list opens\nabove it. Use auto to let the component determine where to open\nthe list based on space available.\n* **field-level-help**: *STRING* Help text detailing the purpose and function of the combobox.\n* **label**: *STRING* Text label for the combobox.\n* **message-when-value-missing**: *STRING* Error message to be displayed when the value is missing and input is required.\n* **name**: *STRING* Specifies the name of the combobox.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when a value attribute changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **options**: *OBJECT[]* A list of options that are available for selection. Each option has the following attributes: label and value.\n* **placeholder**: *STRING* Text that is displayed before an option is selected, to prompt the user\nto select an option. The default is "Select an Option".\n* **read-only**\n* **readonly**: *BOOLEAN* Specifies that an input field is read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, a value must be selected before the form can be submitted.\n* **spinner-active**: *BOOLEAN* If present, a spinner is displayed below the menu items to indicate loading activity.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **validity**: *OBJECT* Represents the validity states that an element can be in, with respect to constraint validation.\n* **value**: *OBJECT* Specifies the value of an input element.\n* **variant**: *STRING* The variant changes the appearance of the combobox.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and combobox.\nUse label-stacked to place the label above the combobox.\n',
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "aria-described-by",
              description:
                "Reserved for internal use. Use the standard aria-describedby instead. A space-separated list of element IDs that provide descriptive labels for the combobox.",
            },
            {
              name: "aria-labelled-by",
              description:
                "Reserved for internal use. Use the standard aria-labelledby instead. A space-separated list of element IDs that provide labels for the combobox.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the combobox is disabled and users cannot interact with it.",
            },
            {
              name: "dropdown-alignment",
              description:
                "Specifies where the drop-down list is aligned with or anchored to\nthe selection field. By default the list is aligned with the\nselection field at the top left so the list opens down. Use bottom-left\nto make the selection field display at the bottom so the list opens\nabove it. Use auto to let the component determine where to open\nthe list based on space available.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the combobox.",
            },
            {
              name: "label",
              description: "Text label for the combobox.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Error message to be displayed when the value is missing and input is required.",
            },
            {
              name: "name",
              description: "Specifies the name of the combobox.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when a value attribute changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "options",
              description:
                "A list of options that are available for selection. Each option has the following attributes: label and value.",
            },
            {
              name: "placeholder",
              description:
                'Text that is displayed before an option is selected, to prompt the user\nto select an option. The default is "Select an Option".',
            },
            {
              name: "read-only",
              description:
                "If present, the combobox is read-only.\nA read-only combobox is also disabled.",
            },
            {
              name: "readonly",
              description:
                "Specifies that an input field is read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, a value must be selected before the form can be submitted.",
            },
            {
              name: "spinner-active",
              description:
                "If present, a spinner is displayed below the menu items to indicate loading activity.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "value",
              description: "Specifies the value of an input element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the combobox.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and combobox.\nUse label-stacked to place the label above the combobox.",
            },
          ],
        },
        {
          name: "lightning-avatar",
          description:
            "A visual representation of an object.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-avatar)\n### Attributes\n* **alternative-text**: *STRING* The alternative text used to describe the avatar, which is displayed as\nhover text on the image.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **fallback-icon-name**: *STRING* The Lightning Design System name of the icon used as a fallback when the\nimage fails to load. The initials fallback relies on this for its\nbackground color. Names are written in the format 'standard:account'\nwhere 'standard' is the category, and 'account' is the specific icon to\nbe displayed. Only icons from the standard and custom categories are\nallowed.\n* **initials**: *STRING* If the record name contains two words, like first and last name, use the\nfirst capitalized letter of each. For records that only have a single\nword name, use the first two letters of that word using one capital and\none lower case letter.\n* **size**: *STRING* The size of the avatar. Valid values are x-small, small, medium, and large. This value defaults to medium.\n* **src**: *STRING* The URL for the image.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **variant**: *STRING* The variant changes the shape of the avatar. Valid values are empty,\ncircle, and square. This value defaults to square.\n",
          attributes: [
            {
              name: "alternative-text",
              description:
                "The alternative text used to describe the avatar, which is displayed as\nhover text on the image.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "fallback-icon-name",
              description:
                "The Lightning Design System name of the icon used as a fallback when the\nimage fails to load. The initials fallback relies on this for its\nbackground color. Names are written in the format 'standard:account'\nwhere 'standard' is the category, and 'account' is the specific icon to\nbe displayed. Only icons from the standard and custom categories are\nallowed.",
            },
            {
              name: "initials",
              description:
                "If the record name contains two words, like first and last name, use the\nfirst capitalized letter of each. For records that only have a single\nword name, use the first two letters of that word using one capital and\none lower case letter.",
            },
            {
              name: "size",
              description:
                "The size of the avatar. Valid values are x-small, small, medium, and large. This value defaults to medium.",
            },
            {
              name: "src",
              description: "The URL for the image.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the shape of the avatar. Valid values are empty,\ncircle, and square. This value defaults to square.",
            },
          ],
        },
        {
          name: "lightning-formatted-url",
          description:
            "Displays a URL as a hyperlink.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-url)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **label**: *STRING* The text to display in the link.\n* **onclick**: *AURA.ACTION* The action triggered when the URL is clicked.\n* **tab-index**\n* **target**: *STRING* Specifies where to open the link. Options include _blank, _parent, _self, and _top.\nThis value defaults to _self.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **tooltip**: *STRING* The text to display when the mouse hovers over the link.\nA link doesn't display a tooltip unless a text value is provided.\n* **value**: *STRING* The URL to format.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "label",
              description: "The text to display in the link.",
            },
            {
              name: "onclick",
              description: "The action triggered when the URL is clicked.",
            },
            {
              name: "tab-index",
              description:
                "Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.\nA value of 0 means that the element is focusable and\nparticipates in sequential keyboard navigation. A value of -1 means\nthat the element is focusable but does not participate in keyboard navigation.",
            },
            {
              name: "target",
              description:
                "Specifies where to open the link. Options include _blank, _parent, _self, and _top.\nThis value defaults to _self.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "tooltip",
              description:
                "The text to display when the mouse hovers over the link.\nA link doesn't display a tooltip unless a text value is provided.",
            },
            {
              name: "value",
              description: "The URL to format.",
            },
          ],
        },
        {
          name: "lightning-formatted-text",
          description:
            "Displays text, replaces newlines with line breaks, and linkifies if requested.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-text)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **linkify**: *BOOLEAN* If present, URLs and email addresses are displayed in anchor tags.\nThey are displayed in plain text by default.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *STRING* Sets the text to display.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "linkify",
              description:
                "If present, URLs and email addresses are displayed in anchor tags.\nThey are displayed in plain text by default.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "Sets the text to display.",
            },
          ],
        },
        {
          name: "lightning-vertical-navigation",
          description:
            "A vertical list of links that either take the user to another page or parts of the page the user is in.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation)\n### Attributes\n* **aria-label**: *STRING* The aria label attribute for the navigation component\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **compact**: *BOOLEAN* If present, spacing between navigation items is reduced.\n* **onbeforeselect**: *AURA.ACTION* Action fired before an item is selected. The event params include the `name` of the selected item. To prevent the onselect handler from running, call event.preventDefault() in the onbeforeselect handler.\n* **onselect**: *AURA.ACTION* Action fired when an item is selected. The event params include the `name` of the selected item.\n* **selected-item**: *STRING* Name of the navigation item to make active.\nAn active item is highlighted in blue.\n* **shaded**: *BOOLEAN* If present, the vertical navigation is displayed on top of a shaded background.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "aria-label",
              description:
                "The aria label attribute for the navigation component",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "compact",
              description:
                "If present, spacing between navigation items is reduced.",
            },
            {
              name: "onbeforeselect",
              description:
                "Action fired before an item is selected. The event params include the `name` of the selected item. To prevent the onselect handler from running, call event.preventDefault() in the onbeforeselect handler.",
            },
            {
              name: "onselect",
              description:
                "Action fired when an item is selected. The event params include the `name` of the selected item.",
            },
            {
              name: "selected-item",
              description:
                "Name of the navigation item to make active.\nAn active item is highlighted in blue.",
            },
            {
              name: "shaded",
              description:
                "If present, the vertical navigation is displayed on top of a shaded background.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-button-icon-stateful",
          description:
            "An icon-only button that retains state. This component requires API version 41.0 and later.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon-stateful)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **alternative-text**: *STRING* The alternative text used to describe the icon. This text should describe what happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. This value defaults to false.\n* **icon-name**: *STRING* The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. Note: Only utility icons can be used in this component.\n* **name**: *STRING* The name for the button element. This value is optional and can be used to identify the button in a callback.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onclick**: *AURA.ACTION* The action that will be run when the button is clicked.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **selected**: *BOOLEAN* Specifies whether button is in selected state or not\n* **size**: *STRING* The size of the buttonIcon. Options include xx-small, x-small, small, and medium. This value defaults to medium.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *STRING* The value for the button element. This value is optional and can be used when submitting a form.\n* **variant**: *STRING* The variant changes the appearance of buttonIcon. Accepted variants include border, border-filled, and border-inverse. This value defaults to border.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "alternative-text",
              description:
                "The alternative text used to describe the icon. This text should describe what happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. This value defaults to false.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. Note: Only utility icons can be used in this component.",
            },
            {
              name: "name",
              description:
                "The name for the button element. This value is optional and can be used to identify the button in a callback.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onclick",
              description:
                "The action that will be run when the button is clicked.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "selected",
              description:
                "Specifies whether button is in selected state or not",
            },
            {
              name: "size",
              description:
                "The size of the buttonIcon. Options include xx-small, x-small, small, and medium. This value defaults to medium.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description:
                "The value for the button element. This value is optional and can be used when submitting a form.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of buttonIcon. Accepted variants include border, border-filled, and border-inverse. This value defaults to border.",
            },
          ],
        },
        {
          name: "lightning-record-form",
          description:
            "Creates an editable form or display form for a record.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **columns**: *NUMBER* Specifies the number of columns for the form.\n* **density**\n* **fields**: *STRING[]* List of fields to be displayed. The fields display in the order you list them.\n* **layout-type**: *STRING* The type of layout to use to display the form fields. Possible values: Compact, Full.\nWhen creating a new record, only the full layout is supported.\n* **mode**: *STRING* Specifies the interaction and display style for the form.\nPossible values: view, edit, readonly.\nIf a record ID is not provided, the default mode is edit, which displays a form to create new records.\nIf a record ID is provided, the default mode is view, which displays field values with edit icons on updateable fields.\n* **object-api-name**: *STRING* The API name of the object.\n* **onerror**: *AURA.ACTION* The action triggered when there is an error on form submission.\n* **onload**: *AURA.ACTION* The action triggered when the form data is loaded.\n* **onsubmit**: *AURA.ACTION* The action triggered when the form is submitted.\n* **onsuccess**: *AURA.ACTION* The action triggered when the form is saved.\n* **record-id**: *STRING* The ID of the record to be displayed.\n* **record-type-id**: *STRING* The ID of the record type, which is required if you created\nmultiple record types but don't have a default.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "columns",
              description: "Specifies the number of columns for the form.",
            },
            {
              name: "density",
              description:
                "Sets the arrangement style of fields and labels in the form.\nAccepted values are compact, comfy, and auto (default).\nUse compact to display fields and their labels on the same line.\nUse comfy to display fields below their labels.\nUse auto to let the component dynamically set\nthe density according to the user's Display Density setting\nand the width of the form.",
            },
            {
              name: "fields",
              description:
                "List of fields to be displayed. The fields display in the order you list them.",
            },
            {
              name: "layout-type",
              description:
                "The type of layout to use to display the form fields. Possible values: Compact, Full.\nWhen creating a new record, only the full layout is supported.",
            },
            {
              name: "mode",
              description:
                "Specifies the interaction and display style for the form.\nPossible values: view, edit, readonly.\nIf a record ID is not provided, the default mode is edit, which displays a form to create new records.\nIf a record ID is provided, the default mode is view, which displays field values with edit icons on updateable fields.",
            },
            {
              name: "object-api-name",
              description: "The API name of the object.",
            },
            {
              name: "onerror",
              description:
                "The action triggered when there is an error on form submission.",
            },
            {
              name: "onload",
              description: "The action triggered when the form data is loaded.",
            },
            {
              name: "onsubmit",
              description: "The action triggered when the form is submitted.",
            },
            {
              name: "onsuccess",
              description: "The action triggered when the form is saved.",
            },
            {
              name: "record-id",
              description: "The ID of the record to be displayed.",
            },
            {
              name: "record-type-id",
              description:
                "The ID of the record type, which is required if you created\nmultiple record types but don't have a default.",
            },
          ],
        },
        {
          name: "lightning-ui-list-api",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-ui-list-api)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-button-menu",
          description:
            "Represents a dropdown menu with a list of actions or functions.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-menu)\n### Attributes\n* **access-key**\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **alternative-text**: *STRING* The assistive text for the button.\n* **body**: *AURA.COMPONENTDEFREF[]* The body of the component.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the menu can be opened by users.\n* **draft-alternative-text**: *STRING* Describes the reason for showing the draft indicator.\nThis is required when is-draft is true.\n* **icon-name**: *STRING* The name of the icon to be used in the format 'utility:down'.\nIf an icon other than 'utility:down' or 'utility:chevrondown' is used,\na utility:down icon is appended to the right of that icon.\nThis value defaults to utility:down.\n* **icon-size**: *STRING* The size of the icon.\nOptions include xx-small, x-small, medium, or large.\nThis value defaults to medium.\n* **is-draft**: *BOOLEAN* If present, the menu trigger shows a draft indicator.\n* **is-loading**: *BOOLEAN* If present, the menu is in a loading state and shows a spinner.\n* **label**: *STRING* Optional text to be shown on the button.\n* **loading-state-alternative-text**: *STRING* Message displayed while the menu is in the loading state.\n* **menu-alignment**: *STRING* Determines the alignment of the menu relative to the button.\nAvailable options are: auto, left, center, right, bottom-left, bottom-center, bottom-right.\nThe auto option aligns the dropdown menu based on available space.\nThis value defaults to left.\n* **name**: *STRING* The name for the button element. This value is optional and can be used to identify the button in a callback.\n* **nubbin**\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **onopen**: *AURA.ACTION* Action fired when the menu is opened.\n* **onselect**: *AURA.ACTION* Action fired when a menu item is selected. The 'detail.menuItem' property of the passed event is the selected menu item.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the button menu.\n* **tooltip**\n* **value**: *STRING* The value for the button element.\nThis value is optional and can be used when submitting a form.\n* **variant**: *STRING* The variant changes the look of the button.\nAccepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse.\nThis value defaults to border.\n* **visible**: *BOOLEAN* If true, the menu items are displayed. This value defaults to false.\n",
          attributes: [
            {
              name: "access-key",
              description: "The keyboard shortcut for the button menu.",
            },
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "alternative-text",
              description: "The assistive text for the button.",
            },
            {
              name: "body",
              description: "The body of the component.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description: "If present, the menu can be opened by users.",
            },
            {
              name: "draft-alternative-text",
              description:
                "Describes the reason for showing the draft indicator.\nThis is required when is-draft is true.",
            },
            {
              name: "icon-name",
              description:
                "The name of the icon to be used in the format 'utility:down'.\nIf an icon other than 'utility:down' or 'utility:chevrondown' is used,\na utility:down icon is appended to the right of that icon.\nThis value defaults to utility:down.",
            },
            {
              name: "icon-size",
              description:
                "The size of the icon.\nOptions include xx-small, x-small, medium, or large.\nThis value defaults to medium.",
            },
            {
              name: "is-draft",
              description:
                "If present, the menu trigger shows a draft indicator.",
            },
            {
              name: "is-loading",
              description:
                "If present, the menu is in a loading state and shows a spinner.",
            },
            {
              name: "label",
              description: "Optional text to be shown on the button.",
            },
            {
              name: "loading-state-alternative-text",
              description:
                "Message displayed while the menu is in the loading state.",
            },
            {
              name: "menu-alignment",
              description:
                "Determines the alignment of the menu relative to the button.\nAvailable options are: auto, left, center, right, bottom-left, bottom-center, bottom-right.\nThe auto option aligns the dropdown menu based on available space.\nThis value defaults to left.",
            },
            {
              name: "name",
              description:
                "The name for the button element. This value is optional and can be used to identify the button in a callback.",
            },
            {
              name: "nubbin",
              description:
                "If present, a nubbin is present on the menu.\nA nubbin is a stub that protrudes from the menu item towards the button menu.\nThe nubbin position is based on the menu-alignment.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "onopen",
              description: "Action fired when the menu is opened.",
            },
            {
              name: "onselect",
              description:
                "Action fired when a menu item is selected. The 'detail.menuItem' property of the passed event is the selected menu item.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the button menu.",
            },
            {
              name: "tooltip",
              description: "The tooltip for the button menu.",
            },
            {
              name: "value",
              description:
                "The value for the button element.\nThis value is optional and can be used when submitting a form.",
            },
            {
              name: "variant",
              description:
                "The variant changes the look of the button.\nAccepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse.\nThis value defaults to border.",
            },
            {
              name: "visible",
              description:
                "If true, the menu items are displayed. This value defaults to false.",
            },
          ],
        },
        {
          name: "lightning-map",
          description:
            "Displays a map with markers for one or more locations.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-map)\n### Attributes\n* **center**: *OBJECT* A location to use as the map's center.\nIf center is not specified, the map centers automatically.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **list-view**\n* **map-markers**: *OBJECT* One or more objects with the address or latitude and longitude to be displayed on the map.\nIf latitude and longitude are provided, the address is ignored.\n* **markers-title**: *STRING* Provides the heading title for the markers. Required if specifying multiple markers.\nThe title is displayed below the map as a header for the list of clickable addresses.\n* **selected-marker-value**\n* **show-footer**: *BOOLEAN* If present, the footer element is displayed below the map.\nThe footer shows an 'Open in Google Maps' link that opens an external window\nto display the selected marker location in Google Maps. Default value is false.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **zoom-level**: *INTEGER* The zoom levels as defined by Google Maps API.\nIf a zoom level is not specified, a default zoom level is applied to accommodate all markers on the map.\n",
          attributes: [
            {
              name: "center",
              description:
                "A location to use as the map's center.\nIf center is not specified, the map centers automatically.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "list-view",
              description:
                "Displays or hides the list of locations. Valid values are visible, hidden, or auto.\nThis value defaults to auto, which shows the list only when multiple markers are present.\nPassing in an invalid value hides the list view.",
            },
            {
              name: "map-markers",
              description:
                "One or more objects with the address or latitude and longitude to be displayed on the map.\nIf latitude and longitude are provided, the address is ignored.",
            },
            {
              name: "markers-title",
              description:
                "Provides the heading title for the markers. Required if specifying multiple markers.\nThe title is displayed below the map as a header for the list of clickable addresses.",
            },
            {
              name: "selected-marker-value",
              description:
                "Provides the value of the currently selected marker.\nReturns undefined if you don’t pass value to map-markers.",
            },
            {
              name: "show-footer",
              description:
                "If present, the footer element is displayed below the map.\nThe footer shows an 'Open in Google Maps' link that opens an external window\nto display the selected marker location in Google Maps. Default value is false.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "zoom-level",
              description:
                "The zoom levels as defined by Google Maps API.\nIf a zoom level is not specified, a default zoom level is applied to accommodate all markers on the map.",
            },
          ],
        },
        {
          name: "lightningsnapin-minimized",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-minimized)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-input-name",
          description:
            "Represents a name compound field.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-name)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the input name field is disabled and users cannot interact with it.\n* **field-level-help**: *STRING* Help text detailing the purpose and function of the input.\n* **fields-to-display**: *LIST* List of fields to be displayed on the component. This value defaults to\n['firstName', 'salutation', 'lastName']. Other field values include middleName,\ninformalName, suffix.\n* **first-name**: *STRING* Displays the First Name field.\n* **first-name-label**\n* **informal-name**: *STRING* Displays the Informal Name field.\n* **informal-name-label**\n* **label**: *STRING* The label of the input name field.\n* **last-name**: *STRING* Displays the Last Name field.\n* **last-name-label**\n* **middle-name**: *STRING* Displays the Middle Name field.\n* **middle-name-label**\n* **onblur**: *AURA.ACTION* The action triggered when the input releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when the value changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the input receives focus.\n* **options**: *LIST* Displays a list of salutation options, such as Dr. or Mrs., provided as label-value pairs.\n* **read-only**\n* **readonly**: *BOOLEAN* Specifies whether the compound field is read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, the input name field must be filled out before the form is submitted.\nA red asterisk is displayed on the Last Name field. An error\nmessage is displayed if a user interacts with the Last Name\nfield and does not provide a value.\n* **salutation**: *STRING* Displays the Salutation field as a dropdown menu. Use the options attribute to provide salutations in an array of label-value pairs.\n* **salutation-label**\n* **suffix**: *STRING* Displays the Suffix field.\n* **suffix-label**\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **validity**\n* **variant**: *STRING* The variant changes the appearance of a name compound field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and name fields.\nUse label-stacked to place the label above the name fields.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the input name field is disabled and users cannot interact with it.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the input.",
            },
            {
              name: "fields-to-display",
              description:
                "List of fields to be displayed on the component. This value defaults to\n['firstName', 'salutation', 'lastName']. Other field values include middleName,\ninformalName, suffix.",
            },
            {
              name: "first-name",
              description: "Displays the First Name field.",
            },
            {
              name: "first-name-label",
              description: "Reserved for internal use.",
            },
            {
              name: "informal-name",
              description: "Displays the Informal Name field.",
            },
            {
              name: "informal-name-label",
              description: "Reserved for internal use.",
            },
            {
              name: "label",
              description: "The label of the input name field.",
            },
            {
              name: "last-name",
              description: "Displays the Last Name field.",
            },
            {
              name: "last-name-label",
              description: "Reserved for internal use.",
            },
            {
              name: "middle-name",
              description: "Displays the Middle Name field.",
            },
            {
              name: "middle-name-label",
              description: "Reserved for internal use.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the input releases focus.",
            },
            {
              name: "onchange",
              description: "The action triggered when the value changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the input receives focus.",
            },
            {
              name: "options",
              description:
                "Displays a list of salutation options, such as Dr. or Mrs., provided as label-value pairs.",
            },
            {
              name: "read-only",
              description:
                "If present, the input name field is read-only and cannot be edited.",
            },
            {
              name: "readonly",
              description:
                "Specifies whether the compound field is read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, the input name field must be filled out before the form is submitted.\nA red asterisk is displayed on the Last Name field. An error\nmessage is displayed if a user interacts with the Last Name\nfield and does not provide a value.",
            },
            {
              name: "salutation",
              description:
                "Displays the Salutation field as a dropdown menu. Use the options attribute to provide salutations in an array of label-value pairs.",
            },
            {
              name: "salutation-label",
              description: "Reserved for internal use.",
            },
            {
              name: "suffix",
              description: "Displays the Suffix field.",
            },
            {
              name: "suffix-label",
              description: "Reserved for internal use.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of a name compound field.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and name fields.\nUse label-stacked to place the label above the name fields.",
            },
          ],
        },
        {
          name: "lightning-spinner",
          description:
            "Displays an animated spinner.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-spinner)\n### Attributes\n* **alternative-text**: *STRING* The alternative text used to describe the reason for the wait and need for a spinner.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **size**: *STRING* The size of the spinner. Accepted sizes are small, medium, and large. This value defaults to medium.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **variant**: *STRING* The variant changes the appearance of the spinner.\nAccepted variants include base, brand, and inverse. The default is base.\n",
          attributes: [
            {
              name: "alternative-text",
              description:
                "The alternative text used to describe the reason for the wait and need for a spinner.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "size",
              description:
                "The size of the spinner. Accepted sizes are small, medium, and large. This value defaults to medium.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the spinner.\nAccepted variants include base, brand, and inverse. The default is base.",
            },
          ],
        },
        {
          name: "lightning-platform-resource-loader",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-platform-resource-loader)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-icon",
          description:
            "Represents a visual element that provides context and enhances usability.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-icon)\n### Attributes\n* **alternative-text**: *STRING* The alternative text used to describe the icon.\nThis text should describe what happens when you click the button,\nfor example 'Upload File', not what the icon looks like, 'Paperclip'.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **icon-name**: *STRING* The Lightning Design System name of the icon.\nNames are written in the format 'utility:down' where 'utility' is the category,\nand 'down' is the specific icon to be displayed.\n* **size**: *STRING* The size of the icon. Options include xx-small, x-small, small, medium, or large.\nThe default is medium.\n* **src**: *STRING* A uri path to a custom svg sprite, including the name of the resouce,\nfor example: /assets/icons/standard-sprite/svg/test.svg#icon-heart\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **variant**: *STRING* The variant changes the appearance of a utility icon.\nAccepted variants include inverse, success, warning, and error.\nUse the inverse variant to implement a white fill in utility icons on dark backgrounds.\n",
          attributes: [
            {
              name: "alternative-text",
              description:
                "The alternative text used to describe the icon.\nThis text should describe what happens when you click the button,\nfor example 'Upload File', not what the icon looks like, 'Paperclip'.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon.\nNames are written in the format 'utility:down' where 'utility' is the category,\nand 'down' is the specific icon to be displayed.",
            },
            {
              name: "size",
              description:
                "The size of the icon. Options include xx-small, x-small, small, medium, or large.\nThe default is medium.",
            },
            {
              name: "src",
              description:
                "A uri path to a custom svg sprite, including the name of the resouce,\nfor example: /assets/icons/standard-sprite/svg/test.svg#icon-heart",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of a utility icon.\nAccepted variants include inverse, success, warning, and error.\nUse the inverse variant to implement a white fill in utility icons on dark backgrounds.",
            },
          ],
        },
        {
          name: "lightning-ui-record-api",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-ui-record-api)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-click-to-dial",
          description:
            "Renders a formatted phone number as click-to-dial enabled or disabled for Open CTI and Voice.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-click-to-dial)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **params**: *STRING* Comma-separated list of parameters to pass to the third-party phone system.\n* **record-id**: *STRING* The Salesforce record Id that's associated with the phone number.\nThis Id is passed by the component and does not get validated.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *STRING* The phone number to be dialed.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "params",
              description:
                "Comma-separated list of parameters to pass to the third-party phone system.",
            },
            {
              name: "record-id",
              description:
                "The Salesforce record Id that's associated with the phone number.\nThis Id is passed by the component and does not get validated.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "The phone number to be dialed.",
            },
          ],
        },
        {
          name: "lightning-vertical-navigation-item",
          description:
            "A text-only link within lightning-vertical-navigation-section or lightning-vertical-navigation-overflow.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **href**: *STRING* The URL of the page that the navigation item goes to.\n* **label**: *STRING* The text displayed for the navigation item.\n* **name**: *STRING* A unique identifier for the navigation item.\nThe name is used by the `select` event on lightning-vertical-navigation to identify which item is selected.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "href",
              description:
                "The URL of the page that the navigation item goes to.",
            },
            {
              name: "label",
              description: "The text displayed for the navigation item.",
            },
            {
              name: "name",
              description:
                "A unique identifier for the navigation item.\nThe name is used by the `select` event on lightning-vertical-navigation to identify which item is selected.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-formatted-number",
          description:
            "Displays formatted numbers for decimals, currency, and percentages.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-number)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **currency-code**: *STRING* Only used if format-style='currency', this attribute determines which currency is\ndisplayed. Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar.\n* **currency-display-as**: *STRING* Determines how currency is displayed. Possible values are symbol, code, and name. This value defaults to symbol.\n* **format-style**\n* **maximum-fraction-digits**: *INTEGER* The maximum number of fraction digits that are allowed.\n* **maximum-significant-digits**: *INTEGER* The maximum number of significant digits that are allowed. Possible values are from 1 to 21.\n* **minimum-fraction-digits**: *INTEGER* The minimum number of fraction digits that are required.\n* **minimum-integer-digits**: *INTEGER* The minimum number of integer digits that are required. Possible values are from 1 to 21.\n* **minimum-significant-digits**: *INTEGER* The minimum number of significant digits that are required. Possible values are from 1 to 21.\n* **style**: *STRING* The number formatting style to use. Possible values are decimal, currency, and percent. This value defaults to decimal.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **value**: *DECIMAL* The value to be formatted.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "currency-code",
              description:
                "Only used if format-style='currency', this attribute determines which currency is\ndisplayed. Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar.",
            },
            {
              name: "currency-display-as",
              description:
                "Determines how currency is displayed. Possible values are symbol, code, and name. This value defaults to symbol.",
            },
            {
              name: "format-style",
              description:
                "The number formatting style to use. Possible values are decimal, currency,\nand percent. This value defaults to decimal.",
            },
            {
              name: "maximum-fraction-digits",
              description:
                "The maximum number of fraction digits that are allowed.",
            },
            {
              name: "maximum-significant-digits",
              description:
                "The maximum number of significant digits that are allowed. Possible values are from 1 to 21.",
            },
            {
              name: "minimum-fraction-digits",
              description:
                "The minimum number of fraction digits that are required.",
            },
            {
              name: "minimum-integer-digits",
              description:
                "The minimum number of integer digits that are required. Possible values are from 1 to 21.",
            },
            {
              name: "minimum-significant-digits",
              description:
                "The minimum number of significant digits that are required. Possible values are from 1 to 21.",
            },
            {
              name: "style",
              description:
                "The number formatting style to use. Possible values are decimal, currency, and percent. This value defaults to decimal.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "value",
              description: "The value to be formatted.",
            },
          ],
        },
        {
          name: "lightning-datatable",
          description:
            "A table that displays rows and columns of data.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-datatable)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **columns**: *LIST* Array of the columns object that's used to define the data types.\nRequired properties include 'label', 'fieldName', and 'type'. The default type is 'text'.\nSee the Documentation tab for more information.\n* **data**: *OBJECT* The array of data to be displayed.\n* **default-sort-direction**: *STRING* Specifies the default sorting direction on an unsorted column.\nValid options include 'asc' and 'desc'.\nThe default is 'asc' for sorting in ascending order.\n* **draft-values**: *OBJECT* The current values per row that are provided during inline edit.\n* **enable-infinite-loading**: *BOOLEAN* If present, you can load a subset of data and then display more\nwhen users scroll to the end of the table.\nUse with the onloadmore event handler to retrieve more data.\n* **errors**: *OBJECT* Specifies an object containing information about cell level, row level, and table level errors.\nWhen it's set, error messages are displayed on the table accordingly.\n* **hide-checkbox-column**: *BOOLEAN* If present, the checkbox column for row selection is hidden.\n* **hide-table-header**\n* **is-loading**: *BOOLEAN* If present, a spinner is shown to indicate that more data is loading.\n* **key-field**: *STRING* Required for better performance.\nAssociates each row with a unique ID.\n* **load-more-offset**: *INTEGER* Determines when to trigger infinite loading based on\nhow many pixels the table's scroll position is from the bottom of the table.\nThe default is 20.\n* **max-column-width**: *INTEGER* The maximum width for all columns.\nThe default is 1000px.\n* **max-row-selection**: *INTEGER* The maximum number of rows that can be selected.\nCheckboxes are used for selection by default,\nand radio buttons are used when maxRowSelection is 1.\n* **min-column-width**: *INTEGER* The minimum width for all columns.\nThe default is 50px.\n* **oncancel**: *AURA.ACTION* The action triggered when clicking on the table footer bar's cancel button during inline edit. All edited cells are reverted to their original values.\n* **oncellchange**: *AURA.ACTION* The action triggered when a cell's value changes after an inline edit. Returns the draftValues object.\n* **onheaderaction**: *AURA.ACTION* The action triggered when a header action is clicked. By default, it also closes the header actions menu. Returns the action and columnDefinition objects.\n* **onloadmore**: *AURA.ACTION* The action triggered when infinite loading loads more data.\n* **onresize**: *AURA.ACTION* The action triggered when the table renders columns the first time and every time its resized an specific column. Returns columnWidths.\n* **onrowaction**: *AURA.ACTION* The action triggered when a row action is clicked. By default, it also closes the row actions menu. Returns the eventDetails object.\n* **onrowselection**: *AURA.ACTION* The action triggered when a row is selected. Returns the selectedRows object.\n* **onsave**: *AURA.ACTION* The action triggered when clicking on the table footer bar's save button during inline edit. Returns the draftValues object.\n* **onsort**: *AURA.ACTION* The action triggered when a column is sorted. Returns fieldName and sortDirection.\n* **resize-column-disabled**: *BOOLEAN* If present, column resizing is disabled.\n* **resize-step**: *INTEGER* The width to resize the column when a user presses left or right arrow.\nThe default is 10px.\n* **row-number-offset**: *INTEGER* Determines where to start counting the row number.\nThe default is 0.\n* **selected-rows**: *LIST* Enables programmatic row selection with a list of key-field values.\n* **show-row-number-column**: *BOOLEAN* If present, the row numbers are shown in the first column.\n* **sorted-by**: *STRING* The column fieldName that controls the sorting order.\nSort the data using the onsort event handler.\n* **sorted-direction**: *STRING* Specifies the sorting direction.\nSort the data using the onsort event handler.\nValid options include 'asc' and 'desc'.\n* **suppress-bottom-bar**\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **wrap-text-max-lines**\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "columns",
              description:
                "Array of the columns object that's used to define the data types.\nRequired properties include 'label', 'fieldName', and 'type'. The default type is 'text'.\nSee the Documentation tab for more information.",
            },
            {
              name: "data",
              description: "The array of data to be displayed.",
            },
            {
              name: "default-sort-direction",
              description:
                "Specifies the default sorting direction on an unsorted column.\nValid options include 'asc' and 'desc'.\nThe default is 'asc' for sorting in ascending order.",
            },
            {
              name: "draft-values",
              description:
                "The current values per row that are provided during inline edit.",
            },
            {
              name: "enable-infinite-loading",
              description:
                "If present, you can load a subset of data and then display more\nwhen users scroll to the end of the table.\nUse with the onloadmore event handler to retrieve more data.",
            },
            {
              name: "errors",
              description:
                "Specifies an object containing information about cell level, row level, and table level errors.\nWhen it's set, error messages are displayed on the table accordingly.",
            },
            {
              name: "hide-checkbox-column",
              description:
                "If present, the checkbox column for row selection is hidden.",
            },
            {
              name: "hide-table-header",
              description: "If present, the table header is hidden.",
            },
            {
              name: "is-loading",
              description:
                "If present, a spinner is shown to indicate that more data is loading.",
            },
            {
              name: "key-field",
              description:
                "Required for better performance.\nAssociates each row with a unique ID.",
            },
            {
              name: "load-more-offset",
              description:
                "Determines when to trigger infinite loading based on\nhow many pixels the table's scroll position is from the bottom of the table.\nThe default is 20.",
            },
            {
              name: "max-column-width",
              description:
                "The maximum width for all columns.\nThe default is 1000px.",
            },
            {
              name: "max-row-selection",
              description:
                "The maximum number of rows that can be selected.\nCheckboxes are used for selection by default,\nand radio buttons are used when maxRowSelection is 1.",
            },
            {
              name: "min-column-width",
              description:
                "The minimum width for all columns.\nThe default is 50px.",
            },
            {
              name: "oncancel",
              description:
                "The action triggered when clicking on the table footer bar's cancel button during inline edit. All edited cells are reverted to their original values.",
            },
            {
              name: "oncellchange",
              description:
                "The action triggered when a cell's value changes after an inline edit. Returns the draftValues object.",
            },
            {
              name: "onheaderaction",
              description:
                "The action triggered when a header action is clicked. By default, it also closes the header actions menu. Returns the action and columnDefinition objects.",
            },
            {
              name: "onloadmore",
              description:
                "The action triggered when infinite loading loads more data.",
            },
            {
              name: "onresize",
              description:
                "The action triggered when the table renders columns the first time and every time its resized an specific column. Returns columnWidths.",
            },
            {
              name: "onrowaction",
              description:
                "The action triggered when a row action is clicked. By default, it also closes the row actions menu. Returns the eventDetails object.",
            },
            {
              name: "onrowselection",
              description:
                "The action triggered when a row is selected. Returns the selectedRows object.",
            },
            {
              name: "onsave",
              description:
                "The action triggered when clicking on the table footer bar's save button during inline edit. Returns the draftValues object.",
            },
            {
              name: "onsort",
              description:
                "The action triggered when a column is sorted. Returns fieldName and sortDirection.",
            },
            {
              name: "resize-column-disabled",
              description: "If present, column resizing is disabled.",
            },
            {
              name: "resize-step",
              description:
                "The width to resize the column when a user presses left or right arrow.\nThe default is 10px.",
            },
            {
              name: "row-number-offset",
              description:
                "Determines where to start counting the row number.\nThe default is 0.",
            },
            {
              name: "selected-rows",
              description:
                "Enables programmatic row selection with a list of key-field values.",
            },
            {
              name: "show-row-number-column",
              description:
                "If present, the row numbers are shown in the first column.",
            },
            {
              name: "sorted-by",
              description:
                "The column fieldName that controls the sorting order.\nSort the data using the onsort event handler.",
            },
            {
              name: "sorted-direction",
              description:
                "Specifies the sorting direction.\nSort the data using the onsort event handler.\nValid options include 'asc' and 'desc'.",
            },
            {
              name: "suppress-bottom-bar",
              description:
                "If present, the footer that displays the Save and Cancel buttons is hidden during inline editing.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "wrap-text-max-lines",
              description:
                "This value specifies the number of lines after which the\ncontent will be cut off and hidden. It must be at least 1 or more.\nThe text in the last line is truncated and shown with an ellipsis.",
            },
          ],
        },
        {
          name: "lightning-button",
          description:
            "Represents a button element.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-button)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **aria-atomic**: *STRING* Indicates whether assistive technologies will present all, or only parts of, the changed region. Valid values are 'true' or 'false'.\n* **aria-controls**: *STRING* A space-separated list of element IDs that this button controls the contents or presence of.\n* **aria-described-by**: *STRING* A space-separated list of element IDs that provides descriptive labels for the button.\n* **aria-expanded**: *STRING* Indicates whether an element the button controls is expanded or collapsed. Valid values are 'true' or 'false'.\n* **aria-label**: *STRING* Label describing the button to assistive technologies.\n* **aria-live**: *STRING* Indicates that the button will be updated. Valid values are 'assertive', 'polite', or 'off'.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. This value defaults to false.\n* **icon-name**: *STRING* The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.\n* **icon-position**: *STRING* Describes the position of the icon with respect to body. Options include left and right. This value defaults to left.\n* **label**: *STRING* The text to be displayed inside the button.\n* **name**: *STRING* The name for the button element. This value is optional and can be used to identify the button in a callback.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onclick**: *AURA.ACTION* The action triggered when the button is clicked.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**: *STRING* Specifies the type of button. Valid values are button, reset, and submit. This value defaults to button.\n* **value**: *STRING* The value for the button element. This value is optional and can be used when submitting a form.\n* **variant**: *STRING* The variant changes the appearance of the button. Accepted variants include base, neutral, brand, destructive, inverse and success. This value defaults to neutral.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "aria-atomic",
              description:
                "Indicates whether assistive technologies will present all, or only parts of, the changed region. Valid values are 'true' or 'false'.",
            },
            {
              name: "aria-controls",
              description:
                "A space-separated list of element IDs that this button controls the contents or presence of.",
            },
            {
              name: "aria-described-by",
              description:
                "A space-separated list of element IDs that provides descriptive labels for the button.",
            },
            {
              name: "aria-expanded",
              description:
                "Indicates whether an element the button controls is expanded or collapsed. Valid values are 'true' or 'false'.",
            },
            {
              name: "aria-label",
              description:
                "Label describing the button to assistive technologies.",
            },
            {
              name: "aria-live",
              description:
                "Indicates that the button will be updated. Valid values are 'assertive', 'polite', or 'off'.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. This value defaults to false.",
            },
            {
              name: "icon-name",
              description:
                "The Lightning Design System name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.",
            },
            {
              name: "icon-position",
              description:
                "Describes the position of the icon with respect to body. Options include left and right. This value defaults to left.",
            },
            {
              name: "label",
              description: "The text to be displayed inside the button.",
            },
            {
              name: "name",
              description:
                "The name for the button element. This value is optional and can be used to identify the button in a callback.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onclick",
              description: "The action triggered when the button is clicked.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "Specifies the type of button. Valid values are button, reset, and submit. This value defaults to button.",
            },
            {
              name: "value",
              description:
                "The value for the button element. This value is optional and can be used when submitting a form.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the button. Accepted variants include base, neutral, brand, destructive, inverse and success. This value defaults to neutral.",
            },
          ],
        },
        {
          name: "lightning-emp-api",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-emp-api)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-carousel",
          description:
            "A collection of images that are displayed one at a time.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-carousel)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disable-auto-refresh**: *BOOLEAN* If present, the carousel stops looping\nafter the last item is displayed.\n* **disable-auto-scroll**: *BOOLEAN* If present, images do not automatically scroll and users must click the indicators to scroll.\n* **scroll-duration**: *INTEGER* The auto scroll duration. The default is 5 seconds, after that the next\nimage is displayed.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disable-auto-refresh",
              description:
                "If present, the carousel stops looping\nafter the last item is displayed.",
            },
            {
              name: "disable-auto-scroll",
              description:
                "If present, images do not automatically scroll and users must click the indicators to scroll.",
            },
            {
              name: "scroll-duration",
              description:
                "The auto scroll duration. The default is 5 seconds, after that the next\nimage is displayed.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-layout",
          description:
            "Represents a responsive grid system for arranging containers on a page.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout)\n### Attributes\n* **body**: *AURA.COMPONENT[]* Body of the layout component.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **horizontal-align**: *STRING* Determines how to spread the layout items horizontally.\nThe alignment options are center, space, spread, and end.\n* **multiple-rows**: *BOOLEAN* If present, layout items wrap to the following line when they exceed the layout width.\n* **pull-to-boundary**: *STRING* Pulls layout items to the layout boundaries and corresponds\nto the padding size on the layout item. Possible values are small, medium, or large.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **vertical-align**: *STRING* Determines how to align the layout items vertically in the container.\nThe alignment options are start, center, end, and stretch.\n",
          attributes: [
            {
              name: "body",
              description: "Body of the layout component.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "horizontal-align",
              description:
                "Determines how to spread the layout items horizontally.\nThe alignment options are center, space, spread, and end.",
            },
            {
              name: "multiple-rows",
              description:
                "If present, layout items wrap to the following line when they exceed the layout width.",
            },
            {
              name: "pull-to-boundary",
              description:
                "Pulls layout items to the layout boundaries and corresponds\nto the padding size on the layout item. Possible values are small, medium, or large.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "vertical-align",
              description:
                "Determines how to align the layout items vertically in the container.\nThe alignment options are start, center, end, and stretch.",
            },
          ],
        },
        {
          name: "lightning-record-view-form",
          description:
            "Represents a record view layout that displays one or more fields, provided by lightning-output-field.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-view-form)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **density**\n* **object-api-name**: *STRING* The API name of the object.\n* **record-id**: *STRING* The ID of the record to be displayed.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "density",
              description:
                "Sets the arrangement style of fields and labels in the form.\nAccepted values are compact, comfy, and auto (default).\nUse compact to display fields and their labels on the same line.\nUse comfy to display fields below their labels.\nUse auto to let the component dynamically set\nthe density according to the user's Display Density setting\nand the width of the form.",
            },
            {
              name: "object-api-name",
              description: "The API name of the object.",
            },
            {
              name: "record-id",
              description: "The ID of the record to be displayed.",
            },
          ],
        },
        {
          name: "lightning-dual-listbox",
          description:
            "A pair of listboxes that enables multiple options to be selected and reordered.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-dual-listbox)\n### Attributes\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **add-button-label**: *STRING* Label for add button.\n* **disable-reordering**: *BOOLEAN* If present, the Up and Down buttons used for reordering the selected list items are hidden.\n* **disabled**: *BOOLEAN* If present, the listbox is disabled and users cannot interact with it.\n* **down-button-label**: *STRING* Label for down button.\n* **field-level-help**: *STRING* Help text detailing the purpose and function of the dual listbox.\n* **label**: *STRING* Label for the dual listbox.\n* **max**: *INTEGER* Maximum number of options allowed in the selected options listbox.\n* **message-when-range-overflow**\n* **message-when-range-underflow**\n* **message-when-value-missing**\n* **min**: *INTEGER* Minimum number of options required in the selected options listbox.\n* **name**: *STRING* Specifies the name of an input element.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when a value attribute changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **options**: *OBJECT[]* A list of options that are available for selection. Each option has the following attributes: label and value.\n* **readonly**: *BOOLEAN* Specifies that an input field is read-only. This value defaults to false.\n* **remove-button-label**: *STRING* Label for remove button.\n* **required**: *BOOLEAN* If present, the user must add an item to the selected listbox before submitting the form.\n* **required-options**: *LIST* A list of required options that cannot be removed from selected options listbox. This list is populated with values from the options attribute.\n* **selected-label**: *STRING* Label for the selected options listbox.\n* **show-activity-indicator**: *BOOLEAN* If present, a spinner is displayed in the first listbox to indicate loading activity.\n* **size**: *INTEGER* Number of items that display in the listboxes before vertical scrollbars are displayed. Determines the vertical size of the listbox.\n* **source-label**: *STRING* Label for the source options listbox.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **up-button-label**: *STRING* Label for up button.\n* **validity**: *OBJECT* Represents the validity states that an element can be in, with respect to constraint validation.\n* **value**: *OBJECT* A list of default options that are included in the selected options listbox. This list is populated with values from the options attribute.\n* **values**: *LIST* A list of default options that are included in the selected options list box. This list is populated with values from the options attribute.\n* **variant**: *STRING* The variant changes the appearance of the dual listbox.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and dual listbox.\nUse label-stacked to place the label above the dual listbox.\n",
          attributes: [
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "add-button-label",
              description: "Label for add button.",
            },
            {
              name: "disable-reordering",
              description:
                "If present, the Up and Down buttons used for reordering the selected list items are hidden.",
            },
            {
              name: "disabled",
              description:
                "If present, the listbox is disabled and users cannot interact with it.",
            },
            {
              name: "down-button-label",
              description: "Label for down button.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the dual listbox.",
            },
            {
              name: "label",
              description: "Label for the dual listbox.",
            },
            {
              name: "max",
              description:
                "Maximum number of options allowed in the selected options listbox.",
            },
            {
              name: "message-when-range-overflow",
              description:
                "Error message to be displayed when a range overflow is detected.",
            },
            {
              name: "message-when-range-underflow",
              description:
                "Error message to be displayed when a range underflow is detected.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Error message to be displayed when the value is missing and input is required.",
            },
            {
              name: "min",
              description:
                "Minimum number of options required in the selected options listbox.",
            },
            {
              name: "name",
              description: "Specifies the name of an input element.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when a value attribute changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "options",
              description:
                "A list of options that are available for selection. Each option has the following attributes: label and value.",
            },
            {
              name: "readonly",
              description:
                "Specifies that an input field is read-only. This value defaults to false.",
            },
            {
              name: "remove-button-label",
              description: "Label for remove button.",
            },
            {
              name: "required",
              description:
                "If present, the user must add an item to the selected listbox before submitting the form.",
            },
            {
              name: "required-options",
              description:
                "A list of required options that cannot be removed from selected options listbox. This list is populated with values from the options attribute.",
            },
            {
              name: "selected-label",
              description: "Label for the selected options listbox.",
            },
            {
              name: "show-activity-indicator",
              description:
                "If present, a spinner is displayed in the first listbox to indicate loading activity.",
            },
            {
              name: "size",
              description:
                "Number of items that display in the listboxes before vertical scrollbars are displayed. Determines the vertical size of the listbox.",
            },
            {
              name: "source-label",
              description: "Label for the source options listbox.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "up-button-label",
              description: "Label for up button.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "value",
              description:
                "A list of default options that are included in the selected options listbox. This list is populated with values from the options attribute.",
            },
            {
              name: "values",
              description:
                "A list of default options that are included in the selected options list box. This list is populated with values from the options attribute.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the dual listbox.\nAccepted variants include standard, label-hidden, label-inline, and label-stacked.\nThis value defaults to standard.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and dual listbox.\nUse label-stacked to place the label above the dual listbox.",
            },
          ],
        },
        {
          name: "lightning-formatted-email",
          description:
            "Displays an email as a hyperlink with the mailto: URL scheme.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-email)\n### Attributes\n* **hide-icon**\n* **label**: *STRING* The text label for the email address.\n* **onclick**: *AURA.ACTION* The action triggered when the email is clicked.\n* **tab-index**\n* **value**: *STRING* The email address that's displayed if a label is not provided.\n",
          attributes: [
            {
              name: "hide-icon",
              description:
                "If present, the email icon is hidden and only the email address is displayed.",
            },
            {
              name: "label",
              description: "The text label for the email address.",
            },
            {
              name: "onclick",
              description: "The action triggered when the email is clicked.",
            },
            {
              name: "tab-index",
              description:
                "Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.\nA value of 0 means that the element is focusable and\nparticipates in sequential keyboard navigation. A value of -1 means\nthat the element is focusable but does not participate in keyboard navigation.",
            },
            {
              name: "value",
              description:
                "The email address that's displayed if a label is not provided.",
            },
          ],
        },
        {
          name: "lightning-navigation",
          description:
            "Generates URL for a given pageReference. This component requires API version 43.0 and later.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-page-reference-utils",
          description:
            "null\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-page-reference-utils)\n### Attributes\n",
          attributes: [],
        },
        {
          name: "lightning-tile",
          description:
            "A grouping of related information associated with a record.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-tile)\n### Attributes\n* **actions**\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **href**: *STRING* The URL of the page that the link goes to.\n* **label**: *STRING* The text label that displays in the tile as the heading and hover text.\n* **media**: *AURA.COMPONENT[]* The icon or figure that's displayed next to the textual information.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**\n",
          attributes: [
            {
              name: "actions",
              description:
                "A list of actions that's displayed in a dropdown menu.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "href",
              description: "The URL of the page that the link goes to.",
            },
            {
              name: "label",
              description:
                "The text label that displays in the tile as the heading and hover text.",
            },
            {
              name: "media",
              description:
                "The icon or figure that's displayed next to the textual information.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "The tile type. Valid values are 'standard' and 'media'.\nThe default is 'standard'.",
            },
          ],
        },
        {
          name: "lightning-progress-indicator",
          description:
            "Provides a visual indication on the progress of a particular process.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-indicator)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **current-step**: *STRING* Set current-step to match the value attribute of one of progress-step components.\nIf current-step is not provided, the value of the first progress-step component is used.\n* **has-error**: *BOOLEAN* If present, the current step is in error state and an error icon is displayed on the step indicator.\nOnly the base type can display errors.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**: *STRING* Changes the visual pattern of the indicator. Valid values are base and path.\nThe default is base.\n* **variant**: *STRING* Changes the appearance of the progress indicator for the base type only.\nValid values are base or shaded. The shaded variant adds a light gray border to the step indicators.\nThe default is base.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "current-step",
              description:
                "Set current-step to match the value attribute of one of progress-step components.\nIf current-step is not provided, the value of the first progress-step component is used.",
            },
            {
              name: "has-error",
              description:
                "If present, the current step is in error state and an error icon is displayed on the step indicator.\nOnly the base type can display errors.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "Changes the visual pattern of the indicator. Valid values are base and path.\nThe default is base.",
            },
            {
              name: "variant",
              description:
                "Changes the appearance of the progress indicator for the base type only.\nValid values are base or shaded. The shaded variant adds a light gray border to the step indicators.\nThe default is base.",
            },
          ],
        },
        {
          name: "lightning-input",
          description:
            "Represents interactive controls that accept user input depending on the type attribute.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-input)\n### Attributes\n* **accept**: *STRING* Specifies the types of files that the server accepts. Use this attribute with file input type only.\n* **access-key**\n* **accesskey**: *STRING* Specifies a shortcut key to activate or focus an element.\n* **aria-controls**: *STRING* A space-separated list of element IDs whose presence or content is controlled by the input.\n* **aria-described-by**: *STRING* A space-separated list of element IDs that provide descriptive labels for the input.\n* **aria-label**: *STRING* Describes the input to assistive technologies.\n* **aria-labelled-by**: *STRING* A space-separated list of element IDs that provide labels for the input.\n* **autocomplete**\n* **checked**: *BOOLEAN* If present, the checkbox is selected.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **date-aria-controls**: *STRING* A space-separated list of element IDs whose presence or content is controlled by the\ndate input when type='datetime'. On mobile devices, this is merged with aria-controls\nand time-aria-controls to describe the native date time input.\n* **date-aria-described-by**: *STRING* A space-separated list of element IDs that provide descriptive labels for the date input when\ntype='datetime'. On mobile devices, this is merged with aria-described-by and time-aria-described-by\nto describe the native date time input.\n* **date-aria-label**: *STRING* Describes the date input to assistive technologies when type='datetime'. On mobile devices,\nthis label is merged with aria-label and time-aria-label to describe the native date time input.\n* **date-aria-labelled-by**: *STRING* A space-separated list of element IDs that provide labels for the date input when type='datetime'.\nOn mobile devices, this is merged with aria-labelled-by and time-aria-labelled-by to describe\nthe native date time input.\n* **date-style**\n* **disabled**: *BOOLEAN* If present, the input field is disabled and users cannot interact with it.\n* **field-level-help**\n* **files**: *OBJECT* A FileList that contains selected files. Use this attribute with the file input type only.\n* **format-fraction-digits**\n* **formatter**: *STRING* String value with the formatter to be used for number input. Valid values include\ndecimal, percent, percent-fixed, and currency.\n* **is-loading**: *BOOLEAN* For the search type only. If present, a spinner is displayed to indicate that data is loading.\n* **label**: *STRING* Text label for the input.\n* **max**: *OBJECT* The maximum acceptable value for the input.  Use this attribute with number,\nrange, date, time, and datetime input types only. For number and range type, the max value is a\ndecimal number. For the date, time, and datetime types, the max value must use a valid string for the type.\n* **max-length**\n* **maxlength**: *INTEGER* The maximum number of characters allowed in the field.\n* **message-toggle-active**: *STRING* Text shown for the active state of a toggle. The default is \"Active\".\n* **message-toggle-inactive**: *STRING* Text shown for the inactive state of a toggle. The default is \"Inactive\".\n* **message-when-bad-input**: *STRING* Error message to be displayed when a bad input is detected.\n* **message-when-pattern-mismatch**: *STRING* Error message to be displayed when a pattern mismatch is detected.\n* **message-when-range-overflow**: *STRING* Error message to be displayed when a range overflow is detected.\n* **message-when-range-underflow**: *STRING* Error message to be displayed when a range underflow is detected.\n* **message-when-step-mismatch**: *STRING* Error message to be displayed when a step mismatch is detected.\n* **message-when-too-long**: *STRING* Error message to be displayed when the value is too long.\n* **message-when-too-short**: *STRING* Error message to be displayed when the value is too short.\n* **message-when-type-mismatch**: *STRING* Error message to be displayed when a type mismatch is detected.\n* **message-when-value-missing**: *STRING* Error message to be displayed when the value is missing.\n* **min**: *OBJECT* The minimum acceptable value for the input. Use this attribute with number,\nrange, date, time, and datetime input types only. For number and range types, the min value\nis a decimal number. For the date, time, and datetime types, the min value must use a valid string for the type.\n* **min-length**\n* **minlength**: *INTEGER* The minimum number of characters allowed in the field.\n* **multiple**: *BOOLEAN* Specifies that a user can enter more than one value. Use this attribute with file and email input types only.\n* **name**: *STRING* Specifies the name of an input element.\n* **onblur**: *AURA.ACTION* The action triggered when the element releases focus.\n* **onchange**: *AURA.ACTION* The action triggered when a value attribute changes.\n* **onfocus**: *AURA.ACTION* The action triggered when the element receives focus.\n* **pattern**: *STRING* Specifies the regular expression that the input's value is checked against.\nThis attribute is supported for email, password, search, tel, text, and url types.\n* **placeholder**: *STRING* Text that is displayed when the field is empty, to prompt the user for a valid entry. Use this attribute with date, email, number, password, search, tel, text, time, and url input types only.\n* **read-only**\n* **readonly**: *BOOLEAN* Specifies that an input field is read-only. This value defaults to false.\n* **required**: *BOOLEAN* If present, the input field must be filled out before the form is submitted.\n* **step**: *OBJECT* Granularity of the value, specified as a positive floating point number.\nUse this attribute with number and range input types only.\nUse 'any' when granularity is not a concern. This value defaults to 1.\n* **tabindex**: *INTEGER* Specifies the tab order of an element (when the tab button is used for navigating).\n* **time-aria-controls**: *STRING* A space-separated list of element IDs whose presence or content is controlled by the\ntime input when type='datetime'. On mobile devices, this is merged with aria-controls\nand date-aria-controls to describe the native date time input.\n* **time-aria-described-by**: *STRING* A space-separated list of element IDs that provide descriptive labels for the time input when\ntype='datetime'. On mobile devices, this is merged with aria-described-by and date-aria-described-by\nto describe the native date time input.\n* **time-aria-label**: *STRING* Describes the time input to assistive technologies when type=datetime. On mobile devices, this label is merged with ariaLabel and dateAriaLabel to describe the native date time input.\n* **time-aria-labelled-by**: *STRING* A space-separated list of element IDs that provide labels for the time input when type='datetime'.\nOn mobile devices, this is merged with aria-labelled-by and date-aria-labelled-by to describe\nthe native date time input.\n* **time-style**\n* **timezone**: *STRING* Specifies the time zone used when type='datetime' only. This value defaults to the user's Salesforce time zone setting.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**: *STRING* The type of the input. This value defaults to text.\n* **validity**: *OBJECT* Represents the validity states that an element can be in, with respect to constraint validation.\n* **value**: *OBJECT* Specifies the value of an input element.\n* **variant**: *STRING* The variant changes the appearance of an input field.\nAccepted variants include standard, label-inline, label-hidden, and label-stacked.\nThis value defaults to standard, which displays the label above the field.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and input field.\nUse label-stacked to place the label above the input field.\n",
          attributes: [
            {
              name: "accept",
              description:
                "Specifies the types of files that the server accepts. Use this attribute with file input type only.",
            },
            {
              name: "access-key",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "accesskey",
              description:
                "Specifies a shortcut key to activate or focus an element.",
            },
            {
              name: "aria-controls",
              description:
                "A space-separated list of element IDs whose presence or content is controlled by the input.",
            },
            {
              name: "aria-described-by",
              description:
                "A space-separated list of element IDs that provide descriptive labels for the input.",
            },
            {
              name: "aria-label",
              description: "Describes the input to assistive technologies.",
            },
            {
              name: "aria-labelled-by",
              description:
                "A space-separated list of element IDs that provide labels for the input.",
            },
            {
              name: "autocomplete",
              description:
                "Controls auto-filling of the field. Use this attribute with\nemail, search, tel, text, and url input types only. Set the attribute to pass\nthrough autocomplete values to be interpreted by the browser.",
            },
            {
              name: "checked",
              description: "If present, the checkbox is selected.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "date-aria-controls",
              description:
                "A space-separated list of element IDs whose presence or content is controlled by the\ndate input when type='datetime'. On mobile devices, this is merged with aria-controls\nand time-aria-controls to describe the native date time input.",
            },
            {
              name: "date-aria-described-by",
              description:
                "A space-separated list of element IDs that provide descriptive labels for the date input when\ntype='datetime'. On mobile devices, this is merged with aria-described-by and time-aria-described-by\nto describe the native date time input.",
            },
            {
              name: "date-aria-label",
              description:
                "Describes the date input to assistive technologies when type='datetime'. On mobile devices,\nthis label is merged with aria-label and time-aria-label to describe the native date time input.",
            },
            {
              name: "date-aria-labelled-by",
              description:
                "A space-separated list of element IDs that provide labels for the date input when type='datetime'.\nOn mobile devices, this is merged with aria-labelled-by and time-aria-labelled-by to describe\nthe native date time input.",
            },
            {
              name: "date-style",
              description:
                "The display style of the date when type='date' or type='datetime'. Valid values are\nshort, medium (default), and long. The format of each style is specific to the locale.\nOn mobile devices this attribute has no effect.",
            },
            {
              name: "disabled",
              description:
                "If present, the input field is disabled and users cannot interact with it.",
            },
            {
              name: "field-level-help",
              description:
                "Help text detailing the purpose and function of the input.\nThis attribute isn't supported for file, radio, toggle, and checkbox-button types.",
            },
            {
              name: "files",
              description:
                "A FileList that contains selected files. Use this attribute with the file input type only.",
            },
            {
              name: "format-fraction-digits",
              description: "Reserved for internal use.",
            },
            {
              name: "formatter",
              description:
                "String value with the formatter to be used for number input. Valid values include\ndecimal, percent, percent-fixed, and currency.",
            },
            {
              name: "is-loading",
              description:
                "For the search type only. If present, a spinner is displayed to indicate that data is loading.",
            },
            {
              name: "label",
              description: "Text label for the input.",
            },
            {
              name: "max",
              description:
                "The maximum acceptable value for the input.  Use this attribute with number,\nrange, date, time, and datetime input types only. For number and range type, the max value is a\ndecimal number. For the date, time, and datetime types, the max value must use a valid string for the type.",
            },
            {
              name: "max-length",
              description:
                "The maximum number of characters allowed in the field.\nUse this attribute with email, password, search, tel, text, and url input types only.",
            },
            {
              name: "maxlength",
              description:
                "The maximum number of characters allowed in the field.",
            },
            {
              name: "message-toggle-active",
              description:
                'Text shown for the active state of a toggle. The default is "Active".',
            },
            {
              name: "message-toggle-inactive",
              description:
                'Text shown for the inactive state of a toggle. The default is "Inactive".',
            },
            {
              name: "message-when-bad-input",
              description:
                "Error message to be displayed when a bad input is detected.",
            },
            {
              name: "message-when-pattern-mismatch",
              description:
                "Error message to be displayed when a pattern mismatch is detected.",
            },
            {
              name: "message-when-range-overflow",
              description:
                "Error message to be displayed when a range overflow is detected.",
            },
            {
              name: "message-when-range-underflow",
              description:
                "Error message to be displayed when a range underflow is detected.",
            },
            {
              name: "message-when-step-mismatch",
              description:
                "Error message to be displayed when a step mismatch is detected.",
            },
            {
              name: "message-when-too-long",
              description:
                "Error message to be displayed when the value is too long.",
            },
            {
              name: "message-when-too-short",
              description:
                "Error message to be displayed when the value is too short.",
            },
            {
              name: "message-when-type-mismatch",
              description:
                "Error message to be displayed when a type mismatch is detected.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Error message to be displayed when the value is missing.",
            },
            {
              name: "min",
              description:
                "The minimum acceptable value for the input. Use this attribute with number,\nrange, date, time, and datetime input types only. For number and range types, the min value\nis a decimal number. For the date, time, and datetime types, the min value must use a valid string for the type.",
            },
            {
              name: "min-length",
              description:
                "The minimum number of characters allowed in the field.\nUse this attribute with email, password, search, tel, text, and url input types only.",
            },
            {
              name: "minlength",
              description:
                "The minimum number of characters allowed in the field.",
            },
            {
              name: "multiple",
              description:
                "Specifies that a user can enter more than one value. Use this attribute with file and email input types only.",
            },
            {
              name: "name",
              description: "Specifies the name of an input element.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the element releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when a value attribute changes.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the element receives focus.",
            },
            {
              name: "pattern",
              description:
                "Specifies the regular expression that the input's value is checked against.\nThis attribute is supported for email, password, search, tel, text, and url types.",
            },
            {
              name: "placeholder",
              description:
                "Text that is displayed when the field is empty, to prompt the user for a valid entry. Use this attribute with date, email, number, password, search, tel, text, time, and url input types only.",
            },
            {
              name: "read-only",
              description:
                "If present, the input field is read-only and cannot be edited by users.",
            },
            {
              name: "readonly",
              description:
                "Specifies that an input field is read-only. This value defaults to false.",
            },
            {
              name: "required",
              description:
                "If present, the input field must be filled out before the form is submitted.",
            },
            {
              name: "step",
              description:
                "Granularity of the value, specified as a positive floating point number.\nUse this attribute with number and range input types only.\nUse 'any' when granularity is not a concern. This value defaults to 1.",
            },
            {
              name: "tabindex",
              description:
                "Specifies the tab order of an element (when the tab button is used for navigating).",
            },
            {
              name: "time-aria-controls",
              description:
                "A space-separated list of element IDs whose presence or content is controlled by the\ntime input when type='datetime'. On mobile devices, this is merged with aria-controls\nand date-aria-controls to describe the native date time input.",
            },
            {
              name: "time-aria-described-by",
              description:
                "A space-separated list of element IDs that provide descriptive labels for the time input when\ntype='datetime'. On mobile devices, this is merged with aria-described-by and date-aria-described-by\nto describe the native date time input.",
            },
            {
              name: "time-aria-label",
              description:
                "Describes the time input to assistive technologies when type=datetime. On mobile devices, this label is merged with ariaLabel and dateAriaLabel to describe the native date time input.",
            },
            {
              name: "time-aria-labelled-by",
              description:
                "A space-separated list of element IDs that provide labels for the time input when type='datetime'.\nOn mobile devices, this is merged with aria-labelled-by and date-aria-labelled-by to describe\nthe native date time input.",
            },
            {
              name: "time-style",
              description:
                "The display style of the time when type='time' or type='datetime'. Valid values are\nshort (default), medium, and long. Currently, medium and long styles look the same.\nOn mobile devices this attribute has no effect.",
            },
            {
              name: "timezone",
              description:
                "Specifies the time zone used when type='datetime' only. This value defaults to the user's Salesforce time zone setting.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "The type of the input. This value defaults to text.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states that an element can be in, with respect to constraint validation.",
            },
            {
              name: "value",
              description: "Specifies the value of an input element.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of an input field.\nAccepted variants include standard, label-inline, label-hidden, and label-stacked.\nThis value defaults to standard, which displays the label above the field.\nUse label-hidden to hide the label but make it available to assistive technology.\nUse label-inline to horizontally align the label and input field.\nUse label-stacked to place the label above the input field.",
            },
          ],
        },
        {
          name: "lightning-output-field",
          description:
            "Represents a read-only display of a label, help text, and value for a field on a Salesforce object.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **field-class**\n* **field-name**: *STRING* The API name of the field to be displayed.\n* **variant**: *STRING* Changes the appearance of the output. Accepted variants\ninclude standard and label-hidden. This value defaults to standard.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "field-class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "field-name",
              description: "The API name of the field to be displayed.",
            },
            {
              name: "variant",
              description:
                "Changes the appearance of the output. Accepted variants\ninclude standard and label-hidden. This value defaults to standard.",
            },
          ],
        },
        {
          name: "lightning-layout-item",
          description:
            "The basic element in a lightning-layout component.\nA layout item groups information together to define visual grids, spacing, and sections.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout-item)\n### Attributes\n* **alignment-bump**: *STRING* Specifies a direction to bump the alignment of adjacent layout items. Allowed values are left, top, right, bottom.\n* **body**: *AURA.COMPONENT[]* The body of the component. In markup, this is everything in the body of the tag.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **flexibility**: *OBJECT* Make the item fluid so that it absorbs any extra space in its\ncontainer or shrinks when there is less space. Allowed values are:\nauto (columns grow or shrink equally as space allows),\nshrink (columns shrink equally as space decreases),\nno-shrink (columns don't shrink as space reduces),\ngrow (columns grow equally as space increases),\nno-grow (columns don't grow as space increases),\nno-flex (columns don't grow or shrink as space changes).\nUse a comma-separated value for multiple options, such as 'auto, no-shrink'.\n* **large-device-size**: *INTEGER* If the viewport is divided into 12 parts, this attribute indicates\nthe relative space the container occupies on device-types larger than\ndesktop. It is expressed as an integer from 1 through 12.\n* **medium-device-size**: *INTEGER* If the viewport is divided into 12 parts, this attribute indicates\nthe relative space the container occupies on device-types larger than\ntablet. It is expressed as an integer from 1 through 12.\n* **padding**: *STRING* Sets padding to either the right and left sides of a container,\nor all sides of a container. Allowed values are horizontal-small,\nhorizontal-medium, horizontal-large, around-small, around-medium, around-large.\n* **size**: *INTEGER* If the viewport is divided into 12 parts, size indicates the\nrelative space the container occupies. Size is expressed as\nan integer from 1 through 12. This applies for all device-types.\n* **small-device-size**: *INTEGER* If the viewport is divided into 12 parts, this attribute indicates\nthe relative space the container occupies on device-types larger than\nmobile. It is expressed as an integer from 1 through 12.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "alignment-bump",
              description:
                "Specifies a direction to bump the alignment of adjacent layout items. Allowed values are left, top, right, bottom.",
            },
            {
              name: "body",
              description:
                "The body of the component. In markup, this is everything in the body of the tag.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "flexibility",
              description:
                "Make the item fluid so that it absorbs any extra space in its\ncontainer or shrinks when there is less space. Allowed values are:\nauto (columns grow or shrink equally as space allows),\nshrink (columns shrink equally as space decreases),\nno-shrink (columns don't shrink as space reduces),\ngrow (columns grow equally as space increases),\nno-grow (columns don't grow as space increases),\nno-flex (columns don't grow or shrink as space changes).\nUse a comma-separated value for multiple options, such as 'auto, no-shrink'.",
            },
            {
              name: "large-device-size",
              description:
                "If the viewport is divided into 12 parts, this attribute indicates\nthe relative space the container occupies on device-types larger than\ndesktop. It is expressed as an integer from 1 through 12.",
            },
            {
              name: "medium-device-size",
              description:
                "If the viewport is divided into 12 parts, this attribute indicates\nthe relative space the container occupies on device-types larger than\ntablet. It is expressed as an integer from 1 through 12.",
            },
            {
              name: "padding",
              description:
                "Sets padding to either the right and left sides of a container,\nor all sides of a container. Allowed values are horizontal-small,\nhorizontal-medium, horizontal-large, around-small, around-medium, around-large.",
            },
            {
              name: "size",
              description:
                "If the viewport is divided into 12 parts, size indicates the\nrelative space the container occupies. Size is expressed as\nan integer from 1 through 12. This applies for all device-types.",
            },
            {
              name: "small-device-size",
              description:
                "If the viewport is divided into 12 parts, this attribute indicates\nthe relative space the container occupies on device-types larger than\nmobile. It is expressed as an integer from 1 through 12.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-formatted-location",
          description:
            "Displays a geolocation in decimal degrees using the format [latitude, longitude].\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-location)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **latitude**: *DECIMAL* The latitude of the geolocation. Latitude values must be within -90 and 90.\n* **longitude**: *DECIMAL* The longitude of the geolocation. Longitude values must be within -180 and 180.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "latitude",
              description:
                "The latitude of the geolocation. Latitude values must be within -90 and 90.",
            },
            {
              name: "longitude",
              description:
                "The longitude of the geolocation. Longitude values must be within -180 and 180.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-accordion",
          description:
            "A collection of vertically stacked sections with multiple content areas.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion)\n### Attributes\n* **active-section-name**: *STRING* Expands the specified accordion sections. Section names are case-sensitive.\nTo support multiple expanded sections, include allow-multiple-sections-open in your markup.\nBy default, only the first section in the accordion is expanded.\n* **allow-multiple-sections-open**: *BOOLEAN* If present, the accordion allows multiple open sections.\nOtherwise, opening a section closes another that's currently open.\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **onsectiontoggle**: *AURA.ACTION* Action fired when the open sections change, it contains all open sections.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n",
          attributes: [
            {
              name: "active-section-name",
              description:
                "Expands the specified accordion sections. Section names are case-sensitive.\nTo support multiple expanded sections, include allow-multiple-sections-open in your markup.\nBy default, only the first section in the accordion is expanded.",
            },
            {
              name: "allow-multiple-sections-open",
              description:
                "If present, the accordion allows multiple open sections.\nOtherwise, opening a section closes another that's currently open.",
            },
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "onsectiontoggle",
              description:
                "Action fired when the open sections change, it contains all open sections.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
          ],
        },
        {
          name: "lightning-slider",
          description:
            "An input range slider for specifying a value between two specified numbers.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-slider)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **disabled**: *BOOLEAN* If present, the slider is disabled and users cannot interact with it.\n* **label**: *STRING* Text label to describe the slider. Provide your own label to describe the slider.\n* **max**: *INTEGER* The maximum value of the input range. The default is 100.\n* **message-when-bad-input**: *STRING* Error message to be displayed when a bad input is detected.\n* **message-when-pattern-mismatch**: *STRING* Error message to be displayed when a pattern mismatch is detected.\n* **message-when-range-overflow**: *STRING* Error message to be displayed when a range overflow is detected.\n* **message-when-range-underflow**: *STRING* Error message to be displayed when a range underflow is detected.\n* **message-when-step-mismatch**: *STRING* Error message to be displayed when a step mismatch is detected.\n* **message-when-too-long**: *STRING* Error message to be displayed when the value is too long.\n* **message-when-type-mismatch**: *STRING* Error message to be displayed when a type mismatch is detected.\n* **message-when-value-missing**: *STRING* Error message to be displayed when the value is missing.\n* **min**: *INTEGER* The minimum value of the input range. The default is 0.\n* **onblur**: *AURA.ACTION* The action triggered when the slider releases focus.\n* **onchange**: *STRING* The action triggered when the slider value changes. You must pass any newly selected value back to the slider component to bind the new value to the slider.\n* **onfocus**: *AURA.ACTION* The action triggered when the slider receives focus.\n* **size**: *STRING* The size of the slider.\nThe default is an empty string, which sets the slider to the width of the viewport. Accepted values are x-small, small, medium, and large.\n* **step**: *STRING* The step increment value of the input range.\nExample steps include 0.1, 1, or 10. The default is 1.\n* **title**: *STRING* Displays tooltip text when the mouse moves over the element.\n* **type**: *STRING* The type determines the orientation of the slider. Accepted values are vertical and horizontal. The default is horizontal.\n* **validity**\n* **value**: *INTEGER* The numerical value of the slider. The default is 0.\n* **variant**: *STRING* The variant changes the appearance of the slider.\nAccepted variants include standard and label-hidden.\nThe default is standard.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "disabled",
              description:
                "If present, the slider is disabled and users cannot interact with it.",
            },
            {
              name: "label",
              description:
                "Text label to describe the slider. Provide your own label to describe the slider.",
            },
            {
              name: "max",
              description:
                "The maximum value of the input range. The default is 100.",
            },
            {
              name: "message-when-bad-input",
              description:
                "Error message to be displayed when a bad input is detected.",
            },
            {
              name: "message-when-pattern-mismatch",
              description:
                "Error message to be displayed when a pattern mismatch is detected.",
            },
            {
              name: "message-when-range-overflow",
              description:
                "Error message to be displayed when a range overflow is detected.",
            },
            {
              name: "message-when-range-underflow",
              description:
                "Error message to be displayed when a range underflow is detected.",
            },
            {
              name: "message-when-step-mismatch",
              description:
                "Error message to be displayed when a step mismatch is detected.",
            },
            {
              name: "message-when-too-long",
              description:
                "Error message to be displayed when the value is too long.",
            },
            {
              name: "message-when-type-mismatch",
              description:
                "Error message to be displayed when a type mismatch is detected.",
            },
            {
              name: "message-when-value-missing",
              description:
                "Error message to be displayed when the value is missing.",
            },
            {
              name: "min",
              description:
                "The minimum value of the input range. The default is 0.",
            },
            {
              name: "onblur",
              description:
                "The action triggered when the slider releases focus.",
            },
            {
              name: "onchange",
              description:
                "The action triggered when the slider value changes. You must pass any newly selected value back to the slider component to bind the new value to the slider.",
            },
            {
              name: "onfocus",
              description:
                "The action triggered when the slider receives focus.",
            },
            {
              name: "size",
              description:
                "The size of the slider.\nThe default is an empty string, which sets the slider to the width of the viewport. Accepted values are x-small, small, medium, and large.",
            },
            {
              name: "step",
              description:
                "The step increment value of the input range.\nExample steps include 0.1, 1, or 10. The default is 1.",
            },
            {
              name: "title",
              description:
                "Displays tooltip text when the mouse moves over the element.",
            },
            {
              name: "type",
              description:
                "The type determines the orientation of the slider. Accepted values are vertical and horizontal. The default is horizontal.",
            },
            {
              name: "validity",
              description:
                "Represents the validity states of the slider input, with respect to constraint validation.",
            },
            {
              name: "value",
              description:
                "The numerical value of the slider. The default is 0.",
            },
            {
              name: "variant",
              description:
                "The variant changes the appearance of the slider.\nAccepted variants include standard and label-hidden.\nThe default is standard.",
            },
          ],
        },
        {
          name: "lightning-record-edit-form",
          description:
            "Represents a record edit layout that displays one or more fields, provided by lightning-input-field.\n[View in Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form)\n### Attributes\n* **class**: *STRING* A CSS class for the outer element, in addition to the component's base classes.\n* **density**\n* **field-names**\n* **form-class**\n* **layout-type**\n* **object-api-name**: *STRING* The API name of the object.\n* **onerror**: *AURA.ACTION* The action triggered when there is an error on form submission.\n* **onload**: *AURA.ACTION* The action triggered when the form data is loaded.\n* **onsubmit**: *AURA.ACTION* The action triggered when the form is submitted.\n* **onsuccess**: *AURA.ACTION* The action triggered when the form is saved.\n* **record-id**: *STRING* The ID of the record to be displayed.\n* **record-type-id**: *STRING* The ID of the record type, which is required if you created\nmultiple record types but don't have a default.\n",
          attributes: [
            {
              name: "class",
              description:
                "A CSS class for the outer element, in addition to the component's base classes.",
            },
            {
              name: "density",
              description:
                "Sets the arrangement style of fields and labels in the form.\nAccepted values are compact, comfy, and auto (default).\nUse compact to display fields and their labels on the same line.\nUse comfy to display fields below their labels.\nUse auto to let the component dynamically set\nthe density according to the user's Display Density setting\nand the width of the form.",
            },
            {
              name: "field-names",
              description:
                "Reserved for internal use. Names of the fields to include in the form.",
            },
            {
              name: "form-class",
              description: "A CSS class for the form element.",
            },
            {
              name: "layout-type",
              description:
                "The type of layout to use to display the form fields. Possible values: Compact, Full.",
            },
            {
              name: "object-api-name",
              description: "The API name of the object.",
            },
            {
              name: "onerror",
              description:
                "The action triggered when there is an error on form submission.",
            },
            {
              name: "onload",
              description: "The action triggered when the form data is loaded.",
            },
            {
              name: "onsubmit",
              description: "The action triggered when the form is submitted.",
            },
            {
              name: "onsuccess",
              description: "The action triggered when the form is saved.",
            },
            {
              name: "record-id",
              description: "The ID of the record to be displayed.",
            },
            {
              name: "record-type-id",
              description:
                "The ID of the record type, which is required if you created\nmultiple record types but don't have a default.",
            },
          ],
        },
      ],
      globalAttributes: [
        {
          name: "for:each",
          description:
            "Renders the element or template block multiple times based on the expression value.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "for:item",
          description: "Bind the current iteration item to an identifier.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "for:index",
          description: "Bind the current iteration index to an identifier.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "if:true",
          description:
            "Renders the element or template if the expression value is truthy. This directive is deprecated and no longer recommended. It may be removed in the future. Use lwc:if, lwc:elseif, and lwc:else instead.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "if:false",
          description:
            "Renders the element or template if the expression value is falsy. This directive is deprecated and no longer recommended. It may be removed in the future. Use lwc:if, lwc:elseif, and lwc:else instead.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "lwc:if",
          description:
            "Renders the element or template if the expression value is truthy.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "lwc:elseif",
          description:
            "Renders the element or template if the expression value is truthy.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "lwc:else",
          description:
            "Renders the element or template if none of the expressions values of the preceding lwc:if or lwc:elseif are truthy.",
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
        {
          name: "iterator:it",
          description: {
            kind: "markdown",
            value:
              "Bind the current iteration item to an identifier. Contains properties (`value`, `index`, `first`, `last`) that let you apply special behaviors to certain items.",
          },
          references: [
            {
              name: "Salesforce",
              url: "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_directives",
            },
          ],
        },
      ],
    },
  },
} satisfies languages.html.HTMLDataConfiguration;
