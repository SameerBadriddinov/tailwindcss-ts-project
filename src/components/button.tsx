import { FC } from 'react';

interface Props {
	styles?: string;
}

const Button: FC<Props> = ({ styles }): JSX.Element => {
	return (
		<div
			className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient 
      rounded-[10px] outline-none cursor-pointer transition-transform 
      duration-300 hover:translate-y-[-3px] ${styles as string}`}
		>
			Button
		</div>
	);
};

export default Button;
