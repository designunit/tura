import s from './styles.module.css'
import cx from 'classnames'
import { useForm, OnSubmit } from 'react-hook-form'
import { useCallback, forwardRef, useState } from 'react'
import { Button } from '../Button'
import QueryString from 'query-string'

const Row: React.SFC = props => (
    <div className={s.row}>
        {props.children}
    </div>
)

const Space: React.SFC = props => (
    <i className={s.space}>
        {props.children}
    </i>
)

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input
        {...props}
        ref={ref}
        className={cx(s.field, props.className)}
    />
))

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
    <textarea
        {...props}
        ref={ref}
        className={cx(s.field, props.className)}
    />
))

type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => (
    <form
        {...props}
        ref={ref}
        className={cx(s.form, props.className)}
    />
))

export type OpitionFormData = {
    type: string
    email: string
    comment: string
}

export const OpinionForm: React.FC = () => {
    const { handleSubmit, register, errors } = useForm()
    const [state, setState] = useState('Отправить форму')
    const stateStatus = {
        send: 'Отправляем…',
        error: 'Что-то пошло не так',
        ok: 'Готово!',
    }

    const onSubmit = useCallback(async data => {
        setState(stateStatus.send)
        const url = QueryString.stringifyUrl({
            url: 'https://script.google.com/macros/s/AKfycbyihfTZdfTieKoGuOMTsYrI39SCghw-jr0YHxaZqn3UrOOK7-Eub7GE/exec',
            query: data
        })
        await fetch(url, { method: 'GET', })
            .then(res => {
                if (res.status !== 200 ) {
                    setState(stateStatus.error)
                    console.log(res)
                }
                return res.json()
            })
            .then(res => {
                res.result === 'error' && console.log(res)
                setState(res.result === 'success' ? stateStatus.ok : stateStatus.error)
            })
    }, [])
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            {/* <Row>
                <div className={s.radio}>
                    <label>
                        Не дзен
                        <input name="type" type="radio" value="problem" ref={register({ required: 'Required' })} />
                    </label>
                    <label>
                        Феншуй
                        <input name="type" type="radio" value="nice" ref={register({ required: 'Required' })} />
                    </label>
                    <label>
                        ХЗ вообще
                        <input name="type" type="radio" value="idea" ref={register({ required: 'Required' })} />
                    </label>
                </div>
                {errors.type && (
                    <p className={cx(s.caption, s.error)}>
                        {errors.type.message}
                    </p>
                )}
            </Row>

            <Row>
                <TextArea
                    name={'comment'}
                    rows={4}
                    placeholder='Расскажите свою историю...'
                    ref={register({
                        required: 'Required',
                    })}
                />
            </Row>

            <Row>
                <Input
                    name='email'
                    placeholder='Ваш email'
                    ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && (
                    <p className={cx(s.caption, s.error)}>
                        {errors.email.message}
                    </p>
                )}
            </Row> */}

            <Input
                style={{
                    marginTop: '5rem',
                }}
                required
                name='one'
                ref={register}
                placeholder='one'
            />
            <Input
                required
                name='two'
                ref={register}
                placeholder='two'
            />

            <Row>
                <Button
                    theme={'primary'}
                    size={'big'}
                    type={'submit'}
                    style={{
                        width: '100%'
                    }}
                >
                    {state}
                </Button>

                <p>
                    ЗАШЕЛ С ЭПЛА? ОТПРАВЬ ФОРМУ ПОТЕСТИТЬ! ! ! 
                </p>
                {/* <p className={s.caption}>
                    Нажимая кнопку, я соглашаюсь на обработку персональных данных
                </p> */}
            </Row>
        </Form>
    )
}
