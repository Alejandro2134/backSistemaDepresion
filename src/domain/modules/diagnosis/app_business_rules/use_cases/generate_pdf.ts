import {
    DiagnosisDOM,
    IDiagnosisFDOM,
} from '@diagnosis/enterprise_business/entities/diagnosis_dom';
import { pdf } from '@fnd/external_interfaces/pdf';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    diagnosisRepo: IOperations<DiagnosisDOM, IDiagnosisFDOM>;
};

const build = ({ diagnosisRepo }: Dependencies) => {
    const execute = async (filter: IDiagnosisFDOM) => {
        const diagnosis = await diagnosisRepo.getAll(filter);

        const document = pdf.createPdfKitDocument({
            defaultStyle: {
                font: 'Helvetica',
            },
            content: [
                {
                    table: {
                        body: buildTableBody(diagnosis),
                    },
                },
            ],
        });

        return document;
    };

    const buildTableBody = (diagnosis: DiagnosisDOM[]) => {
        const body: string[][] = [];

        body.push([
            'Cedula',
            'Nombre del Paciente',
            'Observaciones',
            'Fecha de Creación',
            'Resultado',
        ]);

        for (const diagnostic of diagnosis) {
            const row = [
                diagnostic.cedula,
                diagnostic.nombre,
                diagnostic.observaciones,
                diagnostic.fechaCreacion || '',
                diagnostic.resultado,
            ];

            body.push(row);
        }

        return body;
    };

    return execute;
};

export { build };
