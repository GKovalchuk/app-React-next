import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './Close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '../../helpers/api';
import axios from 'axios';
import { useState } from 'react';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			setError(`${e}`);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className,)}{...props}>
				<Input
					{...register('name', { required: { value: true, message: 'заполните имя' } })}
					error={errors.name}
					placeholder='Имя'
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.name ? true : false}
				/>
				<Input
					{...register('title', { required: { value: true, message: 'заполните заголовок' } })}
					error={errors.title}
					placeholder='Заголовок отзыва'
					className={styles.title}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.title ? true : false}
				/>
				<div className={styles.rating}>
					<span>
						Оценка:
					</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'поставьте оценку' } }}
						render={({ field }) => (
							<Rating
								error={errors.rating}
								rating={field.value}
								ref={field.ref}
								isEditable
								setRating={field.onChange}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<TextArea
					{...register('description', { required: { value: true, message: 'заполните текст отзыва' } })}
					error={errors.description}
					placeholder='Текст отзыва'
					className={styles.description}
					tabIndex={isOpened ? 0 : -1}
					aria-label='текст отзыва'
					aria-invalid={errors.description ? true : false}
				/>
				<div className={styles.submit}>
					<Button
						appearance='primary'
						onClick={() => clearErrors()}
						tabIndex={isOpened ? 0 : -1}>
						Отправить
					</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && <div className={cn(styles.success, styles.panel)} role='alert'>
				<div className={styles.successTitle}>
					Ваш отзыв отправлен
				</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
				<button
					onClick={() => { setIsSuccess(false); }}
					className={styles.closeIcon}
					aria-label='закрыть оповещение'
				>
					<CloseIcon />
				</button>
			</div>}
			{error && <div className={cn(styles.error, styles.panel)} role='alert'>
				<div className={styles.successTitle}>
					Что-то пошло не так, попробуйте обновить страницу.
				</div>
				<button
					onClick={() => { setError(undefined); }}
					className={styles.closeIcon}
					aria-label='закрыть оповещение'
				>
					<CloseIcon />
				</button>
			</div>}
		</form>
	);
};