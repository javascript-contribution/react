import React from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  registerProjectName,
  registerProjectType,
  registerTextarea,
  registerDateFrom,
  registerDateTo,
  registerClientName,
  registerCollaborator,
  registerEngagementDirector,
  registerProjectLevel,
  registerFixedLever,
  registerCustomizedLever,
  registerBudget,
  registerChargeCode,
} from "../../../Redux/Features/FormSlice";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 100,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const currencies = [
  {
    value: "Dollar",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const projectTypes = [
  {
    value: "Loss of pay",
    label: "LOP",
  },
  {
    value: "erection",
    label: "Erection",
  },
  {
    value: "Commissioning",
    label: "Commissioning",
  },
];

const Redux_Toolkit_Form = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = React.useState("Dollar");
  const [project, setProject] = React.useState("Loss of pay");

  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const {
    projectName,
    projectType,
    textarea,
    dateFrom,
    dateTo,
    clientName,
    collaborator,
    projectLevel,
    engagementDirector,
    description,
    fixedLever,
    customizedLever,
    budget,
    chargeCode,
  } = useSelector((state: any) => state.project);
  const dispatch = useDispatch();

  const updateStore = (data: any) => {
    dispatch(registerProjectName(data.projectName));
    dispatch(registerProjectType(data.projectType));
    dispatch(registerTextarea(data.textarea));
    dispatch(registerDateFrom(new Date(data.dateFrom)));
    dispatch(registerDateTo(data.dateTo));
    dispatch(registerClientName(data.clientName));
    dispatch(registerCollaborator(data.collaborator));
    dispatch(registerEngagementDirector(data.engagementDirector));
    dispatch(registerProjectLevel(data.projectLevel));
    dispatch(registerFixedLever(data.fixedLever));
    dispatch(registerCustomizedLever(data.customizedLever));
    dispatch(registerBudget(data.budget));
    dispatch(registerChargeCode(data.chargeCode));
    console.log(data);
  };

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleChangeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    control,
  } = useForm({
    defaultValues: {
      projectName: projectName,
      projectType: projectType,
      textarea: textarea,
      dateFrom: dateFrom,
      dateTo: dateTo,
      clientName: clientName,
      collaborator: collaborator,
      projectLevel: projectLevel,
      engagementDirector: engagementDirector,
      description: description,
      fixedLever: fixedLever,
      customizedLever: customizedLever,
      budget: budget,
      chargeCode: chargeCode,
    },
  });

  const onSubmit = (data: any) => {
    localStorage.setItem("projectInfo", JSON.stringify(data));
    updateStore(data);
    handleOpen();
  };

  const errorLength = Object.keys(errors).length;
  const [disabledByDefaultValue, setDisabledByDefaultValue] =
    React.useState(false);

  const hookValue = getValues();
  if (hookValue.projectName === undefined || null) {
    setDisabledByDefaultValue(!disabledByDefaultValue);
  }
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      handleClickSnack();
    }
  }, [
    hookValue.chargeCode,
    hookValue.projectName,
    hookValue.projectType,
    hookValue.clientName,
    hookValue.collaborator,
    hookValue.textarea,
    hookValue.dateFrom,
    hookValue.dateTo,
    errors,
  ]);

  // console.log("errors",errors,"errorLength", errorLength,"isValid", isValid,"hookValue", hookValue);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseCancel = () => {
    setOpen(false);
    navigate("/");
  };

  const handleCloseConfirm = () => {
    setOpen(false);
    navigate("/redux_form_toolkit-data");
    handleSubmit(onSubmit);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 1310,
          position: "relative",
          minHeight: 50,
          padding: 5,
          margin: 3,
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          Add Project Info
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography> Basic Details</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    {...register("projectName", {
                      required: true,
                      minLength: 3,
                      maxLength: 150,
                    })}
                    id="outlined-required"
                    label="Project Name"
                  />
                  {/* <span>
                    {errors.projectName?.type === "required" &&
                      "Project name is required"}{" "}
                  </span> */}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("projectType", {
                      required: true,
                    })}
                    id="outlined-select-currency"
                    select
                    label="Project type"
                    value={project}
                    helperText="Please select project type"
                  >
                    {projectTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  {/* {errors.projectType &&
                    errors.projectType.type === "required" && (
                      <span>This is required</span>
                    )}
                  {errors.projectType &&
                    errors.projectType.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 100 chars only.
                      </span>
                    )} */}
                  {isDirty && <p>This field is dirty</p>}
                </Grid>
                <Grid item xs={12} className={"grid"}>
                  <TextareaAutosize
                    {...register("textarea", {
                      required: true,
                      minLength: 10,
                      maxLength: 100,
                    })}
                    className={"textarea"}
                    aria-label="maximum height"
                    minRows={7}
                    // name={"textarea"}
                    placeholder="Give brief in max 100 chars and min 10 chars"
                    style={{ width: 440 }}
                  />
                  {/* {errors.textarea && errors.textarea.type === "required" && (
                    <span>This is required</span>
                  )} */}
                  {/* {errors.textarea && errors.textarea.type === "maxLength" && (
                    <span>
                      Max length exceeded. Kindly enter 100 chars only.
                    </span>
                  )}
                  {errors.textarea && errors.textarea.type === "minLength" && (
                    <span>Min length 10 chars required.</span>
                  )} */}
                  {isDirty && <p>This field is dirty</p>}
                </Grid>

                <Grid item xs={3} className={"grid"}>
                  <label>Start date</label>
                  <DatePicker
                    {...register("dateFrom", {
                      required: true,
                    })}
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    filterDate={(date: Date) =>
                      // date.getDate()! <= new Date().getDate() &&
                      date.getDay() !== 0 &&
                      date.getDay() !== 6 &&
                      date.getFullYear()! <= new Date().getFullYear() &&
                      date.getMonth()! <= new Date().getMonth()
                    }
                    isClearable
                    maxDate={new Date()}
                    ariaLabelledBy="Pick start date"
                    showYearDropdown
                    closeOnScroll={true}
                    className={"date"}
                  />
                  {/* <span>
                    {errors.dateFrom?.type === "required" &&
                      "Start date is required"}{" "}
                  </span> */}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <label>End date</label>
                  <DatePicker
                    {...register("dateTo", {
                      required: true,
                    })}
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    filterDate={(date: Date) =>
                      // date.getDate() !>= new Date().getDate() &&
                      date.getDay() !== 0 &&
                      date.getDay() !== 6 &&
                      date.getFullYear()! >= new Date().getFullYear() &&
                      date.getMonth()! >= new Date().getMonth()
                    }
                    isClearable
                    minDate={new Date()}
                    ariaLabelledBy="Pick end date"
                    showYearDropdown
                    closeOnScroll={true}
                    className={"date"}
                  />
                  {/* <span>
                    {errors.dateTo?.type === "required" &&
                      "End date is required"}{" "}
                  </span> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography> People</Typography>
            </Grid>
            <Grid item xs={10}>
              <Grid container alignItems="center">
                <Grid item xs={3} className={"grid"}>
                  {/* <Controller
        control={control}
        // id="outlined-required"
                    label="Client Name"
                    name='clientName'
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      /> */}

                  <TextField
                    {...register("clientName", {
                      required: true,
                      minLength: 3,
                      maxLength: 25,
                    })}
                    required
                    id="outlined-required"
                    label="Client Name"
                  />
                  {/* {errors.clientName &&
                    errors.clientName.type === "required" && (
                      <span>This is required</span>
                    )}
                  {errors.clientName &&
                    errors.clientName.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.clientName &&
                    errors.clientName.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )} */}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("collaborator", {
                      required: true,
                      minLength: 3,
                      maxLength: 25,
                    })}
                    id="outlined-required-collaborators"
                    label="Collaborators"
                    name="collaborator"
                  />
                  {/* {errors.collaborator &&
                    errors.collaborator.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.collaborator &&
                    errors.collaborator.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.collaborator &&
                    errors.collaborator.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )} */}
                </Grid>
                <Grid item xs={3} className={"grid"}>
                  <TextField
                    {...register("engagementDirector", {
                      required: true,
                      minLength: 3,
                      maxLength: 15,
                    })}
                    required
                    id="outlined-required"
                    label="Engagement Director"
                    name="engagementDirector"
                  />
                  {/* {errors.engagementDirector &&
                    errors.engagementDirector.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.engagementDirector &&
                    errors.engagementDirector.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.engagementDirector &&
                    errors.engagementDirector.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )} */}
                </Grid>
                <Grid item xs={9} className={"grid"}>
                  <TextField
                    {...register("projectLevel", {
                      required: true,
                      maxLength: 15,
                      minLength: 3,
                    })}
                    id="outlined-required"
                    label="Project Level"
                  />
                  {/* {errors.projectLevel &&
                    errors.projectLevel.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.projectLevel &&
                    errors.projectLevel.type === "maxLength" && (
                      <span>
                        Max length exceeded. Kindly enter 25 chars only.
                      </span>
                    )}
                  {errors.projectLevel &&
                    errors.projectLevel.type === "minLength" && (
                      <span>Min length 3 chars required.</span>
                    )} */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider />

          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography> Access</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>Access Level</Typography>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Choose anyone
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  {...register("fixedLever")}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Work with fixed levers"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Work with customizable levers"
                  />
                </RadioGroup>
              </FormControl>

              <Paper elevation={3}>
                <Grid container>
                  <Grid item xs={12} className={"grid"}>
                    <Typography>Estimate PK FEE: Free for now</Typography>
                  </Grid>
                  <Grid item xs={3} className={"grid"}>
                    <TextField
                      {...register("budget")}
                      id="outlined-select-currency"
                      select
                      label="Budget"
                      value={currency}
                      onChange={handleChangeCurrency}
                      helperText="Please select project type"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={9} className={"grid"}>
                    <TextField
                      {...register("chargeCode", {
                        required: true,
                        maxLength: 15,
                      })}
                      required
                      id="outlined-required"
                      label="Charge Code"
                      type="number"
                    />
                    {/* {errors.chargeCode &&
                      errors.chargeCode.type === "required" && (
                        <span>This field is required</span>
                      )}
                    {errors.chargeCode &&
                      errors.chargeCode.type === "maxLength" && (
                        <span>
                          Max length exceeded. Kindly enter 25 chars only.
                        </span>
                      )}
                    {errors.chargeCode &&
                      errors.chargeCode.type === "minLength" && (
                        <span>Min length 3 chars required.</span>
                      )} */}
                  </Grid>
                </Grid>
              </Paper>
              <small>
                Note: If you are unsure about the selected levers, you can go
                back and edit the lever selection
              </small>

              <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleCloseSnack}
              >
                <Alert
                  onClose={handleCloseSnack}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {Object.keys(errors).map((elem, index) => (
                    <>
                      {" "}
                      {" Kindly enter the following field values"}
                      <small key={index + elem}>
                        {" "}
                        {index + 1} : {elem}
                      </small>{" "}
                    </>
                  ))}
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>

          <Divider />

          <Box
            sx={{
              bgcolor: "background.paper",
              width: 1310,
              position: "relative",
              maxHeight: 10,
              padding: 5,
              margin: 3,
            }}
          >
            <Stack spacing={7} direction="row">
              <Button variant={"outlined"} onClick={handleCloseCancel}>
                Cancel
              </Button>

              <Button
                variant={"contained"}
                // onClick={handleOpen}
                onClick={handleSubmit(onSubmit)}
                disabled={
                  errorLength > 0 || disabledByDefaultValue === true
                    ? true
                    : false
                }
                // disabled={ !isValid }
                // disabled={disabled}
              >
                Create Project
              </Button>

              <Modal
                aria-labelledby="transition-modal-cancel"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 1000,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-create"
                      variant="h6"
                      component="h2"
                    >
                      Create project
                    </Typography>

                    <>
                      <Typography variant="h3">
                        {"totalCount"} Sectors selected{" "}
                      </Typography>
                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant="h6">Agriculture :</Typography>
                        </Grid>
                        <Grid item xs={8}></Grid>

                        <Grid item xs={4}>
                          <Typography variant="h6">Industry :</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="h2">New Feature</Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        These are the UUID selected for creating new project.
                        You are going to create new project with all data
                        provided.
                      </Typography>
                    </>

                    <Button
                      variant={"contained"}
                      onClick={handleCloseConfirm}
                      type="submit"
                    >
                      Confirm
                    </Button>
                  </Box>
                </Fade>
              </Modal>
            </Stack>
          </Box>

          {/* <Button type="submit" onClick={handleSubmit(onSubmit)}>
            done
          </Button> */}
        </form>
      </Box>
    </>
  );
};

export default Redux_Toolkit_Form;
