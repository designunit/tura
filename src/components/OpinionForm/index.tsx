import s from './styles.module.css'
import cx from 'classnames'
import { useForm } from 'react-hook-form'
import React, { useCallback, forwardRef, useState, ReactElement } from 'react'
import { Button } from '../Button'
import QueryString from 'query-string'
import { Title } from '../Title'
import Image from 'next/image'

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

interface QuestionProps { head: ReactElement | string, required?: boolean }
const Question: React.FC<QuestionProps> = ({ head, children, required = true }) => (
    <div className={s.question}>
        <div className={s.questionHead}>
            {required && <Required />}
            {head}
        </div>
        {children}
    </div>
)

const Radios = forwardRef<HTMLFormElement | any, any>(({ data, name, register, errors, checkbox = false }, ref) => (
    <div className={s.radio}>
        {/* @ts-ignore */}
        {data.map((x, i) => (
            <label key={i}>
                <input name={name} type={checkbox ? 'checkbox' : 'radio'} value={x} ref={register({ required: 'Обязательное поле' })} />
                {x}
            </label>
        ))}
        {errors?.[name] && (
            <p className={cx(s.caption, s.error)}>
                {errors[name].message}
            </p>
        )}
    </div>
))

const Required = () => (
    <span style={{ color: 'var(--color-button)' }}>*</span>
)

// @ts-ignore
const Arrow = ({ className }) => (
    <svg className={cx(s.stepButtonRegular, s.arrow, className)} viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M21.6092 16.9793L6.21477 30.9051L6.09009 3.19255L21.6092 16.9793Z" fill='var(--color-fill)' />
        <line x1="21.3275" y1="17.3778" x2="6.32748" y2="30.3778" stroke='var(--color-border)' strokeWidth='.75' />
        <line x1="6.34117" y1="3.63447" x2="21.3412" y2="17.6345" stroke='var(--color-border)' strokeWidth='.75' />
    </svg>

)

const Form1 = (props: any) => {
    const { handleSubmit, register, errors } = useForm({
        defaultValues: props.defaultValues
    })

    return (
        <Form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.questionList}>
                <Question
                    head='Ваш пол'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionOne_gender'
                        data={['Ж', 'М']}
                    />
                </Question>
                <Question
                    head='Ваш возраст'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionOne_age'
                        data={[
                            '7-12',
                            '13-18',
                            '19-25',
                            '26-40',
                            '41-55',
                            '56-70',
                            'Старше 70',
                        ]}
                    />
                </Question>
                <Question
                    head='Укажите, пожалуйста, род вашей деятельности'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionOne_occupation'
                        data={[
                            'Сотрудник администрации города',
                            'Учащийся',
                            'Сотрудник предприятия',
                            'Сотрудник сферы обслуживания',
                            'Сотрудник бюджетного учреждения (школа, больница, библиотека)',
                            'Временно не работающий',
                            'Самозанятый/фрилансер',
                            'Представитель НКО',
                            'Предприниматель',
                            'Пенсионер',
                            'Домохозяйка',
                            'Менеджер/управленец',
                        ]}
                    />
                </Question>
                <Question
                    head='Расскажите, в каком районе/районах города вы живете и работаете'
                >
                    <Input
                        name='sectionOne_district'
                        ref={register({ required: 'Обязательное поле' })}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionOne_district'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionOne_district'].message}
                        </p>
                    )}
                </Question>
                <Button
                    theme='default'
                    size={'big'}
                    type={'submit'}
                    style={{
                        alignSelf: 'center'
                    }}
                >
                    {'ДАЛЕЕ >'}
                </Button>
            </div>
        </Form >
    )
}


const Form2 = (props: any) => {
    const { handleSubmit, register, errors } = useForm({
        defaultValues: props.defaultValues
    })

    return (
        <Form onSubmit={handleSubmit(props.onSubmit)}>
            <div style={{ marginBottom: '1rem' }}>
                <Image
                    src='/static/form.jpg'
                    width={1056}
                    height={509}
                />
            </div>
            <div className={s.questionList}>
                <Question
                    head='Как часто вы бываете на данном участке Набережной?'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionTwo_timing'
                        data={[
                            'Несколько раз в день',
                            'Каждый день',
                            'Несколько раз в неделю',
                            'Раз в неделю',
                            'Несколько раз в месяц',
                            'Раз в месяц',
                            'Не бываю',
                        ]}
                    />
                </Question>
                <Question
                    head='С какой целью вы посещаете данный участок Набережной?'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionTwo_purpose'
                        checkbox
                        data={[
                            'Прогуливаюсь',
                            'Прохожу транзитом',
                            'Живу рядом',
                            'Учусь/работаю рядом',
                            'Гуляю с собакой',
                            'Гуляю с ребенком',
                            'Ловлю рыбу',
                            'Наблюдаю за природными видами',
                            'Занимаюсь спортом (уточните пожалуйста в варианте "другое": пробежка/велосипед/скандинавская ходьба/лыжи/коньки)',
                            'Купаюсь/загораю',
                            'Кормлю уток/птиц',
                            'Гуляю с друзьями',
                            'Устаиваю пикник/жарю шашлык',
                            'Почти не бываю',
                        ]}
                    />
                </Question>
                <Question
                    head='С какими проблемами вы сталкивайтесь на территории?'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionTwo_propblem'
                        checkbox
                        data={[
                            'Проблемы благоустройства (освещение, состояние дорожек)',
                            'Не хватает озеленения и ландшафтных решений',
                            'Отсутствует ощущение безопасности на территории',
                            'Мусор и загрязнение',
                            'Качество воды в пруду',
                            'Неприспособленность набережной для маломобильных горожан',
                            'Отсутствие возможностей для досуга: спорт, игры, мероприятия, общение',
                            'Отсутствие мест отдыха у воды и водных активностей',
                            'Не хватает парковочных мест',
                            'Отсутствие пляжа',
                            'Узкая пешеходная дорожка: пешеходы, мамы с колясками, велосипедисты мешают друг другу',
                            'Наличие маргинальных активностей: выпивающие, бездомные',
                            'Шумно/ветрено, нет возможности укрыться от погоды',
                            'Ветхость тещиного моста',
                            'Не хватает отражения идентичности города, культуры, истории и т.д.',
                            'Нет общественных туалетов',
                            'Близость автомобильной дороги',
                            'Отсутствуют киоски с чаем/кофе/снэками',
                        ]}
                    />
                </Question>
                <Question
                    head='Что вам нравится в Набережной? Что необходимо сохранить при благоустройстве?'
                >
                    <Input
                        name='sectionTwo_like'
                        ref={register({ required: 'Обязательное поле' })}
                        required
                    // placeholder='Ваш район'
                    />
                </Question>
                <Question
                    head='Какие воспоминания у вас связаны с Верхнетуринским прудом и Набережной?'
                >
                    <Input
                        name='sectionTwo_memory'
                        ref={register({ required: 'Обязательное поле' })}
                        required
                    // placeholder='Ваш район'
                    />
                </Question>
                <Question
                    head='Продолжите "Будущая набережная..."'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionTwo_fututre'
                        checkbox
                        data={[
                            'Озелененная: разнообразные ландшафтные решения',
                            'Благоустроенная: состояние дорожек, покрытий, освещение',
                            'Связанная с прудом: отдых у воды, водный спорт, пляж и купание, мероприятия на воде',
                            'Олицетворяющая будущее города: современный дизайн и технологичность',
                            'Олицетворяющая исторический образ города',
                            'Тихая и уеденная: спокойный отдых и прогулки, природная атмосфера',
                            'Активная и шумная: программа мероприятий и праздников, множество функций для отдыха',
                        ]}
                    />
                </Question>
                <Question
                    head='Какую сферу вам бы хотелось видеть наиболее развитой здесь?'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionTwo_field'
                        checkbox
                        data={[
                            'Культура',
                            'Образование',
                            'Спорт',
                            'Рекреация (природа)',
                            'Детский отдых и развитие',
                            'Туризм',
                            'Услуги питания (киоски, кофейни) и торговли (ярмарки, сувениры)',
                            'Транспортную (развитый общественный транспорт, в т.ч. речной транспорт)',
                        ]}
                    />
                </Question>
                <Question
                    head='Как вы хотите проводить время на будущей Набережной?'
                >
                    <Input
                        name='sectionTwo_activity'
                        ref={register({ required: 'Обязательное поле' })}
                        required
                    // placeholder='Ваш район'
                    />
                </Question>
                <Question
                    head='Что ещё важного вы хотели бы сказать по поводу благоустройства территории? Или предложить:'
                >
                    <Input
                        name='sectionTwo_comment'
                        ref={register}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionTwo_comment'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionTwo_comment'].message}
                        </p>
                    )}
                </Question>
                <Button
                    theme={'default'}
                    size={'big'}
                    type={'submit'}
                    style={{
                        alignSelf: 'center'
                    }}
                >
                    {'ДАЛЕЕ >'}
                </Button>
            </div>
        </Form>
    )
}

const Form3 = (props: any) => {
    const { handleSubmit, register, errors } = useForm({
        defaultValues: props.defaultValues
    })

    return (
        <Form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.questionList}>
                <Question
                    head='Как вы проводите свободное время? (можно выбрать несколько вариантов ответа)'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionThree_activity'
                        checkbox
                        data={[
                            'Слушаю музыку дома',
                            'Смотрю ТВ дома',
                            'Сижу в интернете дома',
                            'Уезжаю на дачу/за город',
                            'Посещаю кафе',
                            'Гуляю во дворе',
                            'Хожу с ребенком на детские площадки',
                            'Выгуливаю домашнего питомца',
                            'Просто гуляю по городу',
                            'Катаюсь на велосипеде',
                            'Катаюсь на роликах, самокате, скейтборде',
                            'Занимаюсь спортом (уточните каким и где ниже в разделе "Другое")',
                            'Занимаюсь творчеством (уточните каким и где ниже в разделе "Другое")',
                            'Встречаюсь с друзьями, коллегами (уточните где ниже в разделе "Другое")',
                            'Хожу на мероприятия (уточните как часто, какие и куда в разделе "Другое")',
                        ]}
                    />
                </Question>
                <Question
                    head='Какие места вам нравятся в городе? Где вы чаще всего проводите время вне дома?'
                    required={false}
                >
                    <Input
                        name='sectionThree_place'
                        ref={register}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionThree_place'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionThree_place'].message}
                        </p>
                    )}
                </Question>
                <Question
                    head='Расскажите, чего сегодня лично вам не хватает в городе? (можно выбрать несколько вариантов ответа)'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionThree_miss'
                        checkbox
                        data={[
                            'Базового благоустройства городских пространств ( дорог, тротуаров, скамеек, урн, освещения и т.п.)',
                            'Современных благоустроенных общественных пространств (площадей, пешеходных улиц, скверов, парков и т.п.)',
                            'Природных зон (лесопарков, скверов и т.п.)',
                            'Мест развлечений (ресторанов, клубов, баров, развлекательных центров, кинотеатров и т.п.)',
                            'Культурного досуга (выставок, галерей, концертов и т.п.)',
                            'Образовательных объектов и площадок (лекториев, коворкингов, библиотек и т.п.)',
                            'Крупных событий и зрелищ (публичных мероприятий, городских праздников, соревнований и т.п.)',
                            'Торговых объектов и услуг (магазинов, торговых центров, ярмарок, салонов красоты и т.п.)',
                            'Спортивных площадок и объектов',
                            'Семейных зон и объектов (детских площадок, семейные кафе, и т.п.)',
                            'Возможности социального взаимодействия с другими жителями',
                        ]}
                    />
                </Question>
                <Question
                    head='Какие возможности для жителей  должны появиться, чтобы хотелось жить и развиваться в Верхней Туре?'
                    required={false}
                >
                    <Input
                        name='sectionThree_opportunity'
                        ref={register}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionThree_opportunity'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionThree_opportunity'].message}
                        </p>
                    )}
                </Question>
                <Question
                    head='Чем на ваш взгляд город Верхняя Тура уникален? В чем отличительные черты города?'
                    required={false}
                >
                    <Input
                        name='sectionThree_unique'
                        ref={register}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionThree_unique'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionThree_unique'].message}
                        </p>
                    )}
                </Question>
                <Question
                    head='Что может быть, на ваш взгляд, «идеей города» – главными идеями, передающими историю города и современную Верхнюю Туру?'
                    required={false}
                >
                    <Input
                        name='sectionThree_idea'
                        ref={register}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionThree_unique'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionThree_unique'].message}
                        </p>
                    )}
                </Question>
                <Button
                    theme={'default'}
                    size={'big'}
                    type={'submit'}
                    style={{
                        alignSelf: 'center'
                    }}
                >
                    {'ДАЛЕЕ >'}
                </Button>
            </div>
        </Form>
    )
}

const Form4 = (props: any) => {
    const { handleSubmit, register, errors } = useForm({
        defaultValues: props.defaultValues
    })

    return (
        <Form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.questionList}>
                <Question
                    head='Как вы готовы участвовать в проекте?'
                >
                    <Radios
                        register={register}
                        errors={errors}
                        name='sectionFour_involve'
                        data={[
                            'Участвовать в опросах, проектных семинарах о проекте',
                            'Вступить в общественный совет проекта',
                            'Предоставлять коммерческие услуги на набережной, открыть свой бизнес',
                            'Проводить мероприятия на набережной',
                            'Реализовывать собственные социальные проекты на набережной',
                            'Выходить на субботники, акции в поддержку проекта',
                            'Готов быть волонтером и делать несложную работу: опрашивать горожан, фотографировать',
                            'Готов распространять информацию среди знакомых и коллег для пользы дела',
                            'Готов стать членом команды и делать интеллектуальную работу: собирать информацию, организовы',
                            'Готов высаживать/ухаживать за растениями на обновленной Набережной',
                            'К сожалению, ничего не готов делать (нет свободного времени)',
                            'К сожалению, ничего не готов делать (не интересно, нет желания)',
                        ]}
                    />
                </Question>
                <Question
                    head='Если вы готовы дальше участвовать в проекте, укажите, пожалуйста, любые ваши контактные данные (телефон, адрес e-mail, ссылку на страницу «ВКонтакте», страницу в «Фейсбуке», страницу в «Инстаграм», «Телеграм» никнейм и т.п.) '
                >
                    <Input
                        name='sectionFour_contact'
                        ref={register}
                    // placeholder='Ваш район'
                    />
                    {errors?.['sectionFour_contact'] && (
                        <p className={cx(s.caption, s.error)}>
                            {errors['sectionFour_contact'].message}
                        </p>
                    )}
                </Question>
                <Button
                    theme={'primary'}
                    size={'big'}
                    type={'submit'}
                    style={{
                        alignSelf: 'center',
                        border: 'solid 2px black',
                        color: 'black',
                    }}
                >
                    {props.buttonText}
                </Button>
            </div>
        </Form>
    )
}

export const OpinionForm: React.FC = () => {
    const { handleSubmit, register, errors } = useForm()
    const [state, setState] = useState('ОТПРАВИТЬ')
    const stateStatus = {
        send: 'Отправляем…',
        error: 'Что-то пошло не так',
        ok: 'Готово!',
    }

    const onSubmit = useCallback(async data => {
        setState(stateStatus.send)
        const url = QueryString.stringifyUrl({
            url: 'https://script.google.com/macros/s/AKfycbyihfTZdfTieKoGuOMTsYrI39SCghw-jr0YHxaZqn3UrOOK7-Eub7GE/exec',
            query: data,
        }, {
            arrayFormat: 'comma'
        })

        await fetch(url, { method: 'GET', })
            .then(res => {
                if (res.status !== 200) {
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

    // MULTISTEP STUFF

    const [formData, setFormData] = useState({
        'sectionOne_gender': null,
        'sectionOne_age': null,
        'sectionOne_occupation': null,
        'sectionOne_district': null,

        'sectionTwo_timing': null,
        'sectionTwo_purpose': null,
        'sectionTwo_propblem': null,
        'sectionTwo_like': null,
        'sectionTwo_memory': null,
        'sectionTwo_fututre': null,
        'sectionTwo_field': null,
        'sectionTwo_activity': null,
        'sectionTwo_comment': null,

        'sectionThree_activity': null,
        'sectionThree_place': null,
        'sectionThree_miss': null,
        'sectionThree_opportunity': null,
        'sectionThree_unique': null,
        'sectionThree_idea': null,

        'sectionFour_involve': null,
        'sectionFour_contact': null,
    })
    const [formState, setFormState] = useState([false, false, false, false])
    const [step, setStep] = useState(0)

    const onSubmitStep = useCallback(value => {
        setFormData({ ...formData, ...value })

        const newState = formState
        newState[step] = true
        setFormState(newState)

        setStep(step + 1)
    }, [formData, step])

    const finalSubmit = useCallback(value => {
        const data = { ...formData, ...value }
        setFormData(data)

        const newState = formState
        newState[step] = true
        setFormState(newState)

        const invalidStep = formState.findIndex(x => !x)
        if (invalidStep !== -1) {
            setStep(invalidStep)
            return
        }

        // send data to table here
        onSubmit(data)

    }, [formData, formState, step])

    const activeFromComponent = () => {
        switch (step) {
            case 0:
                return (
                    <Form1
                        defaultValues={formData}
                        onSubmit={onSubmitStep}
                    />
                )
            case 1:
                return (
                    <Form2
                        defaultValues={formData}
                        onSubmit={onSubmitStep}
                    />
                )
            case 2:
                return (
                    <Form3
                        defaultValues={formData}
                        onSubmit={onSubmitStep}
                    />
                )
            case 3:
                return (
                    <Form4
                        defaultValues={formData}
                        onSubmit={finalSubmit}
                        buttonText={state}
                    />
                )

            default:
                null
                break
        }
    }

    const stepButtons = [
        'О вас',
        'О набережной',
        'О городе',
        'Дальнейшее участие',
    ]

    return (
        <>
            <div className={s.steps}>
                {formState.map((x, i) => (
                    <div key={i}
                        style={{
                            position: 'relative'
                        }}
                    >
                        <div className={cx(s.stepButton, x && s.stepButtonComplete, step == i && s.stepButtonNow)}>
                            <Button
                                theme='link'
                                key={i}
                                onClick={() => {
                                    setStep(i)
                                }}
                            >
                                <span className={s.stepButtonText}>
                                    {stepButtons[i]}
                                </span>
                            </Button>
                        </div>
                        <Arrow
                            className={cx(x && s.stepButtonComplete, step == i && s.stepButtonNow)}
                        />
                    </div>
                ))}
            </div>
            {activeFromComponent()}
            {/* <pre>
                {JSON.stringify(formData, null, 3)}
            </pre> */}
        </>
    )
}
