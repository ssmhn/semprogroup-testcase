import React, { useRef, useState } from 'react';
import { Button } from '../../ui/Button/Button';
import { Checkbox } from '../../ui/Checkbox/Checkbox';
import { Input } from '../../ui/Input/Input';
import { Textarea } from '../../ui/Textarea/Textarea';
import styles from './CoopForm.module.scss';

export const CoopForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [checked, setChecked] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
        
    }

    const onClick = () => {
        checked && console.log(formData);
    }

    const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

  return (
    <div className={styles.form_wrapper}>
        <h2 className={styles.form_wrapper_title}>Напишите нам, и мы предоставим всю необходимую информацию.</h2>
        <form className={styles.form}>
            <div className={styles.form_name}>
                <Input name={'name'} value={formData.name} onChange={onChange} placeholder={'Ваше имя'} />
            </div>
            <div className={styles.form_email}>
                <Input name={'email'} value={formData.email} onChange={onChange} placeholder={'Ваш e-mail'} />
            </div>
            <div className={styles.form_message}>
                <Textarea name={'message'} value={formData.message} onChange={onChange} placeholder={'Ваше сообщение'} rows={5} />
            </div>
            <div className={styles.form_submit}>
                <Checkbox checked={checked} onChange={checkboxChange} />
                <Button type={'button'} onClick={onClick}>
                    Отправить
                </Button>
            </div>
        </form>
    </div>
  )
}
