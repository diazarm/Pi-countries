import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../redux/actions";
import validationForm from "../../helpers/Validations/ValidationForm";
import stylesForm from "./Form.module.css";


const Form = () => {
    
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });
    const [errors, setErrors] = useState({});
 
    const dispatch = useDispatch();

    const { countriesCopy } = useSelector((state) => state);
    
    useEffect(() => {
        if (!countriesCopy.length) dispatch(getCountries())
    }, [countriesCopy.length, dispatch])

    const isFormEmpty = useMemo(() => {
        for (const key in form) {
          if (form[key] !== "" && form[key].length !== 0) {
            return false;
          }
        }
        return true;
    }, [form]);
    
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        setErrors(validationForm({
            ...form,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCountries = (event) => {
        const selectedCountry = event.target.value;
        const updatedCountries = event.target.checked
            ? [...form.countries, selectedCountry]
            : form.countries.filter((country) => country !== selectedCountry);
        setForm({
            ...form,
            countries: updatedCountries,
        });
        setErrors(validationForm({ ...form, countries: updatedCountries }));
    };
    
    const handleSubmit = () => {
        dispatch(postActivity(form));
        alert("Your activity has been added");
    };
    
    return (
        <div className={stylesForm.div}>

            <div className={stylesForm.divForm}>
            <form onSubmit={handleSubmit} className={stylesForm.form}>
                <div className={stylesForm.divAct}>
                    <label htmlFor="name" className={stylesForm.labelAct}>New Activity</label>
                    <input type="text" name="name" className={stylesForm.inputAct} placeholder="Type activity's name or short description..." value={form.name} onChange={handleChange}/>
                    {errors.name && <span className={stylesForm.spans}>{errors.name}</span>}
                </div>
                <div className={stylesForm.divDif}>
                    <label htmlFor="difficulty" className={stylesForm.labelDif}>Difficulty (min: 1 - max: 5)</label>
                    <input type="text" name="difficulty" className={stylesForm.inputDif} placeholder="..." value={form.difficulty} onChange={handleChange}/>
                    {errors.difficulty && <span className={stylesForm.spans}>{errors.difficulty}</span>}
                </div>
                <div className={stylesForm.divDur}>
                    <label htmlFor="duration" className={stylesForm.labelDur}>Duration (hours)</label>
                    <input type="text" name="duration" className={stylesForm.inputDur} placeholder="..." value={form.duration} onChange={handleChange}/>
                    {errors.duration && <span className={stylesForm.spans}>{errors.duration}</span>}
                </div>
                <div className={stylesForm.divSeas}>
                    <label htmlFor="season" className={stylesForm.labelSeas}>Recommended season for the activity</label>
                    <label className={stylesForm.labelsSeas}><input id="Summer" type="radio" name="season" value="Summer" onChange={handleChange} className={stylesForm.inputSeas}/> Summer </label>
                    <label className={stylesForm.labelsSeas}><input id="Autumn" type="radio" name="season" value="Autumn" onChange={handleChange} className={stylesForm.inputSeas}/> Autumn </label>
                    <label className={stylesForm.labelsSeas}><input id="Winter" type="radio" name="season" value="Winter" onChange={handleChange} className={stylesForm.inputSeas}/> Winter </label>
                    <label className={stylesForm.labelsSeas}><input id="Spring" type="radio" name="season" value="Spring" onChange={handleChange} className={stylesForm.inputSeas}/> Spring </label>
                    {errors.season && <span className={stylesForm.spans}>{errors.season}</span>}
                </div>
                <button className={stylesForm.btnSubmit} type="submit" disabled={isFormEmpty || Object.keys(errors).length}>Add activity</button>
                <div className={stylesForm.divCountries}>
                    <label htmlFor="countries" className={stylesForm.labelCountries}>Countries associated with the activity</label>
                    <div className={stylesForm.divCounts}>
                        {countriesCopy.slice().sort((a, b) => a.name.localeCompare(b.name)).map((event) => (
                            <div key={event.id}>
                                <input id={event.id} value={event.name} name={event.name} type="checkbox" onChange={handleCountries} className={stylesForm.inputImg}/>
                                <img src={event.flag} alt={event.flag} className={stylesForm.imgCountries}/>
                                <label htmlFor={event.id} className={stylesForm.labelsCounts}> {event.name}</label>    
                            </div>
                        ))}
                    </div>
                    {errors.countries && <span className={stylesForm.spans}>{errors.countries}</span>}
                </div>
                <button className={stylesForm.btnSubmit} type="submit" disabled={isFormEmpty || Object.keys(errors).length}>Add activity</button>
            </form>
            </div>
         
        </div>
    );
};

export default Form;

