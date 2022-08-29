export function validator(data, config) {
    const errors = {};

    function vailidate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.message;
                break;
            case "isEmail":
                {
                    const emailRegExp = /^\S+@\S+\.\S+$/g;
                    statusValidate = !emailRegExp.test(data);
                }
                break;
            case "isCapitalSymbol":
                {
                    const capitalSymbol = /[A-Z]+/g;
                    statusValidate = !capitalSymbol.test(data);
                }
                break;
            case "isContainDigit":
                {
                    const containDigit = /\d+/g;
                    statusValidate = !containDigit.test(data);
                }
                break;
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }
        }
        if (statusValidate) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = vailidate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
