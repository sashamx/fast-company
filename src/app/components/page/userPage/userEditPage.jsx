import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";

const UserEditPage = () => {
    const history = useHistory();
    const { userId } = useParams();
    const [user, setUser] = useState();
    const [errors, setErrors] = useState({});
    const [professions, setProfession] = useState([]);
    const [qualities, setQualities] = useState([]);

    useEffect(() => {
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
    }, []);

    const getProfessionById = (id) => {
        if (professions) {
            for (const prof of professions) {
                if (prof.value === id) {
                    return { _id: prof.value, name: prof.label };
                }
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    useEffect(() => {
        api.users.getById(userId).then((data) => {
            console.log("data", data);
            const newUser = {
                ...data,
                qualities: data.qualities.map((qualitie) => ({
                    ...qualitie,
                    label: qualitie.name
                })),
                profession: data.profession._id
            };
            setUser(newUser);
        });
    }, []);

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorGonfig = {
        name: {
            isRequired: {
                message: "Поле Имя не может быть пустым"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен не коректно"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [user]);

    const validate = () => {
        const errors = validator(user, validatorGonfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = user;
        const updatedUser = {
            ...user,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        };
        api.users.update(userId, updatedUser).then((data) => {
            console.log("data", data);
            history.push(`/users/${userId}`);
        });
    };

    if (user) {
        return (
            <form onSubmit={handleSubmit}>
                <TextField
                    label={"Имя"}
                    name={"name"}
                    value={user.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label={"Электронная почта"}
                    name={"email"}
                    value={user.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <SelectField
                    label="Выберите профессию"
                    onChange={handleChange}
                    defaultOption="Choose..."
                    options={professions}
                    error={errors.profession}
                    value={user.profession}
                    name="profession"
                />
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "famale" },
                        { name: "Other", value: "other" }
                    ]}
                    value={user.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Выберите свой пол"
                />

                <MultiSelectField
                    options={qualities}
                    onChange={handleChange}
                    name="qualities"
                    label="Выберите свои качества"
                    defaultValue={user.qualities}
                />

                <button
                    className="btn btn-primary w-100 mx-auto"
                    disabled={!isValid}
                >
                    Изменить
                </button>
            </form>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

export default UserEditPage;
