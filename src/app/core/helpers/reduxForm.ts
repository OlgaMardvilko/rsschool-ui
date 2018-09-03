type ReduxFormError<T> = { [P in keyof T]?: ReduxFormError<T[P]> };

export const scrollIntoError = (error: ReduxFormError<string>) => {
    function getInvalidField(obj: any, pref = ''): Array<string> {
        let invalidField: Array<string> = [];
        for (const key of Object.keys(obj)) {
            if (typeof obj[key] === 'object') {
                invalidField = invalidField.concat(getInvalidField(obj[key], `${pref}.${key}`));
            } else {
                invalidField.push(`${pref}.${key}`.slice(1));
            }
        }
        return invalidField;
    }

    getInvalidField(error)
        .map((name: string) => {
            return document.querySelector(`input[name="${name}"]`);
        })
        .some(el => {
            if (el instanceof HTMLElement) {
                el.focus();
                return true;
            }
            return false;
        });
};
