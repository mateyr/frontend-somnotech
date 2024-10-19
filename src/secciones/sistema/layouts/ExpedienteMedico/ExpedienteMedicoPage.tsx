import Autocomplete from "@mui/material/Autocomplete";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import ApiManager from "src/ApiManager/ApiManager";

// const options = [
//   { label: "The Godfather", id: 1 },
//   { label: "Pulp Fiction", id: 2 },
// ];

const ExpedienteMedicoPage = () => {
  const [pacientes, setPacientes] = useState<any>([]);
  const [mostrarPaciente, setMostrarPaciente] = useState(false);

  const getPacientes = async () => {
    try {
      const data: any = await ApiManager.getPaciente(1);

      const pacientesOptions = data.pacientes.map((paciente: any) => ({
        label: paciente.correo,
        id: paciente.id,
      }));

      setPacientes(pacientesOptions);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getPacientes();
  }, []);

  return (
    <>
      <Autocomplete
        fullWidth={true}
        disablePortal
        options={pacientes}
        renderInput={(params) => <TextField {...params} label="Pacientes" />}
        onChange={() => setMostrarPaciente(true)}
      />
      {mostrarPaciente && <Card>Hola Mundo</Card>}
    </>
  );
};

export default ExpedienteMedicoPage;
