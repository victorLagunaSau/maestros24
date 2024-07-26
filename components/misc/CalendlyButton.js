import {InlineWidget} from "react-calendly";

const CalendlyButton = ({fileTitle, fileName, txtUrl}) => {
	return (
		<div>
			<button
				onClick={() => document.getElementById('my_modal_1').showModal()}
				className="btn btn-outline btn btn-successpy-2 px-5 sm:px-8 bg-white-100 border-blue-800 text-blue-800 bg-white-800 hover:bg-blue-200 hover:border-blue-800 hover:text-blue-800 transition-all hover:shadow-blue-200"
			>
				<img src="/assets/Icon/calendario.png" alt="Icono" className="mr-2"/>
				{fileName}
			</button>
			<dialog id="my_modal_1" className="modal">
				<div className="modal-box ">
					<p>
						Agenda aquí para:
					</p>
					<h3 className="font-bold text-lg">{fileTitle}</h3>

					<InlineWidget url={txtUrl}/>
					<div className="modal-action ">
						<form method="dialog">
							<button
								className="btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-blue-800 text-blue-800 bg-white-800 hover:bg-blue-200 hover:border-blue-800 hover:text-blue-800 transition-all hover:shadow-blue-200"
							>
								Cerrar
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};
export default CalendlyButton;