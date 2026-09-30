"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaPhoneAlt,
  FaSpinner,
  FaUser,
} from "react-icons/fa";

interface AppointmentBookingProps {
  language: "en" | "om";
}

interface Department {
  department_id: number;
  department_name: string;
  department_type: string;
}

interface AppointmentForm {
  first_name: string;
  last_name: string;
  phone_number: string;
  age: string;
  gender: string;
  address: string;
  department_id: string;
  appointment_date: string;
  reason: string;
}

interface AppointmentResponse {
  appointment_id: number;
  patient_hash: string;
  department_id: number;
  department_name: string;
  appointment_date: string;
  status: string;
  source: string;
  reason: string | null;
  created_at: string;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_HMS_API_URL ||
  "http://localhost:8080/api/v1";

const INITIAL_FORM: AppointmentForm = {
  first_name: "",
  last_name: "",
  phone_number: "",
  age: "",
  gender: "",
  address: "",
  department_id: "",
  appointment_date: "",
  reason: "",
};

const TEXT = {
  en: {
    eyebrow: "Appointments",
    title: "Book an Appointment",
    subtitle:
      "Request an appointment with Glory Medium Clinic. Our reception team will review your request and contact you to confirm your appointment.",

    patientInformation: "Patient Information",
    appointmentInformation: "Appointment Details",

    firstName: "First name",
    firstNamePlaceholder: "Enter first name",

    lastName: "Last name",
    lastNamePlaceholder: "Enter last name",

    phone: "Phone number",
    phonePlaceholder: "e.g. 09XXXXXXXX",

    age: "Age",
    agePlaceholder: "Enter age",

    gender: "Gender",
    selectGender: "Select gender",
    male: "Male",
    female: "Female",
    other: "Other",

    address: "Address",
    addressPlaceholder: "City / area",

    department: "Department",
    selectDepartment: "Select a department",

    date: "Preferred date",
    time: "Preferred time",

    reason: "Reason for visit",
    reasonPlaceholder:
      "Briefly describe the reason for your appointment",

    optional: "Optional",
    required: "Required",

    submit: "Request Appointment",
    submitting: "Submitting request...",

    loadingDepartments:
      "Loading available departments...",

    noDepartments:
      "Online appointment booking is currently unavailable.",

    departmentError:
      "We couldn't load the available departments. Please try again.",

    retryDepartments: "Try again",

    generalError:
      "Something went wrong. Please try again.",

    successTitle:
      "Appointment Request Submitted",

    successMessage:
      "Your appointment request has been received. Our reception team will review it and contact you to confirm the appointment.",

    reference: "Appointment reference",
    departmentLabel: "Department",
    requestedDate: "Requested date",

    requestAnother:
      "Request another appointment",

    futureDate:
      "Please select a future date and time.",

    ageRequired:
      "Please provide your age.",

    invalidAge:
      "Age must be an integer between 0 and 150.",

    addressTooLong:
      "Address must not exceed 500 characters.",

    reasonTooLong:
      "Reason for visit must not exceed 1000 characters.",

    invalidPhone:
      "Please enter a valid phone number.",

    invalidName:
      "Names must contain at least 2 characters.",

    nameTooLong:
      "Names must not exceed 100 characters.",

    invalidDepartment:
      "Please select a valid department.",

    appointmentRequired:
      "Please select a preferred date and time.",

    bookingUnavailable:
      "Online appointment booking is currently unavailable for this department.",
  },

  om: {
    eyebrow: "Beellama",
    title: "Beellama Qabachuuf",
    subtitle:
      "Glory Medium Clinic keessatti beellama gaafadhu. Gareen keenya gaaffii kee ilaalee si qunnamuun beellama kee ni mirkaneessa.",

    patientInformation:
      "Odeeffannoo Dhukkubsataa",

    appointmentInformation:
      "Odeeffannoo Beellamaa",

    firstName: "Maqaa",
    firstNamePlaceholder:
      "Maqaa kee galchi",

    lastName: "Maqaa Abbaa ",
    lastNamePlaceholder:
      " maqaa Abbaa kee galchi",

    phone: "Lakkoofsa bilbilaa",
    phonePlaceholder:
      "Fakkeenya: 09XXXXXXXX",

    age: "Umurii",
    agePlaceholder:
      "Umurii kee galchi",

    gender: "Saala",
    selectGender: "Saala filadhu",
    male: "Dhiira",
    female: "Dhalaa",
    other: "Kan biraa",

    address: "Teessoo",
    addressPlaceholder:
      "Magaalaa / naannoo",

    department: "Kutaa",
    selectDepartment:
      "Kutaa filadhu",

    date: "Guyyaa",
    time: "Yeroo",

    reason: "Sababa ",
    reasonPlaceholder:
      "Sababa beellamaa gabaabinaan ibsi",

    optional: "Filannoo",
    required: "Dirqama",

    submit:
      "Gaaffii Beellamaa",

    submitting:
      "Gaaffii ergaa jira...",

    loadingDepartments:
      "Kutaa beellamaaf banaa jiru fe'aa jira...",

    noDepartments:
      "Yeroo ammaa beellama interneetii gaafachuun hin danda'amu.",

    departmentError:
      "Kutaa beellamaaf banaa jiru fe'uu hin dandeenye. Mee irra deebi'uun yaalii.",

    retryDepartments:
      "Irra deebi'i",

    generalError:
      "Rakkoon uumameera. Mee irra deebi'i.",

    successTitle:
      "Gaaffiin Beellamaa Ergameera",

    successMessage:
      "Gaaffiin beellamaa kee nu gaheera. Gareen keenya ilaalee si qunnamuun beellama kee ni mirkaneessa.",

    reference:
      "Lakkoofsa beellamaa",

    departmentLabel: "Kutaa",

    requestedDate:
      "Guyyaa gaafatame",

    requestAnother:
      "Beellama biraa gaafadhu",

    futureDate:
      "Mee guyyaa fi yeroo fuulduraa filadhu.",

    ageRequired:
      "umurii kee galchi.",

    invalidAge:
      "Umuriin 0 hanga 150 gidduu ta'uu qaba.",

    addressTooLong:
      "Teessoon qubee 500 caaluu hin qabu.",

    reasonTooLong:
      "Sababni daawwannaa qubee 1000 caaluu hin qabu.",

    invalidPhone:
      "Mee lakkoofsa bilbilaa sirrii galchi.",

    invalidName:
      "Maqaan yoo xiqqaate qubee 2 qabaachuu qaba.",

    nameTooLong:
      "Maqaan qubee 100 caaluu hin qabu.",

    invalidDepartment:
      "Mee kutaa sirrii filadhu.",

    appointmentRequired:
      "Mee guyyaa fi yeroo filadhu.",

    bookingUnavailable:
      "Kutaan kun yeroo ammaa beellama interneetii hin simatu.",
  },
} as const;

function getMinimumDateTime(): string {
  const now = new Date();

  const year = now.getFullYear();

  const month = String(
    now.getMonth() + 1,
  ).padStart(2, "0");

  const day = String(
    now.getDate(),
  ).padStart(2, "0");

  const hours = String(
    now.getHours(),
  ).padStart(2, "0");

  const minutes = String(
    now.getMinutes(),
  ).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatAppointmentDate(
  value: string,
  language: "en" | "om",
): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(
    language === "om"
      ? "om-ET"
      : "en-ET",
    {
      dateStyle: "medium",
      timeStyle: "short",
    },
  ).format(date);
}

function isValidPhoneNumber(
  value: string,
): boolean {
  const normalized = value
    .trim()
    .replace(/[()\-\s]/g, "");

  return /^\+?\d{7,15}$/.test(
    normalized,
  );
}

async function parseApiResponse(
  response: Response,
): Promise<Record<string, unknown>> {
  const contentType =
    response.headers.get(
      "content-type",
    ) || "";

  if (
    !contentType
      .toLowerCase()
      .includes("application/json")
  ) {
    return {};
  }

  try {
    const data = await response.json();

    if (
      data &&
      typeof data === "object" &&
      !Array.isArray(data)
    ) {
      return data as Record<
        string,
        unknown
      >;
    }

    return {};
  } catch {
    return {};
  }
}

export default function AppointmentBooking({
  language,
}: AppointmentBookingProps) {
  const t = TEXT[language];

  const [form, setForm] =
    useState<AppointmentForm>(
      INITIAL_FORM,
    );

  const [departments, setDepartments] =
    useState<Department[]>([]);

  const [
    loadingDepartments,
    setLoadingDepartments,
  ] = useState(true);

  const [
    departmentError,
    setDepartmentError,
  ] = useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState<AppointmentResponse | null>(
      null,
    );

  const [
    minimumDateTime,
    setMinimumDateTime,
  ] = useState(
    getMinimumDateTime(),
  );

  /*
   * Keep the minimum selectable appointment
   * time current while the page remains open.
   */
  useEffect(() => {
    const updateMinimumDateTime =
      () => {
        setMinimumDateTime(
          getMinimumDateTime(),
        );
      };

    updateMinimumDateTime();

    const interval =
      window.setInterval(
        updateMinimumDateTime,
        60_000,
      );

    return () => {
      window.clearInterval(
        interval,
      );
    };
  }, []);

  /*
   * Load departments that are explicitly
   * enabled for public website booking.
   */
  const loadDepartments =
    useCallback(
      async (
        signal?: AbortSignal,
      ) => {
        setLoadingDepartments(true);
        setDepartmentError("");

        try {
          const response =
            await fetch(
              `${API_BASE_URL}/public/departments`,
              {
                method: "GET",
                headers: {
                  Accept:
                    "application/json",
                },
                cache: "no-store",
                signal,
              },
            );

          const data =
            await parseApiResponse(
              response,
            );

          if (!response.ok) {
            throw new Error(
              typeof data.error ===
                "string"
                ? data.error
                : t.departmentError,
            );
          }

          const rawDepartments =
            Array.isArray(
              data.departments,
            )
              ? data.departments
              : [];

          const publicDepartments =
            rawDepartments.filter(
              (
                department,
              ): department is Department => {
                if (
                  !department ||
                  typeof department !==
                    "object"
                ) {
                  return false;
                }

                const item =
                  department as Partial<Department>;

                return (
                  typeof item.department_id ===
                    "number" &&
                  Number.isInteger(
                    item.department_id,
                  ) &&
                  item.department_id > 0 &&
                  typeof item.department_name ===
                    "string" &&
                  item.department_name.trim()
                    .length > 0
                );
              },
            );

          setDepartments(
            publicDepartments,
          );
        } catch (err) {
          if (
            err instanceof DOMException &&
            err.name === "AbortError"
          ) {
            return;
          }

          console.error(
            "Failed to load public departments:",
            err,
          );

          setDepartments([]);
          setDepartmentError(
            t.departmentError,
          );
        } finally {
          if (!signal?.aborted) {
            setLoadingDepartments(
              false,
            );
          }
        }
      },
      [t.departmentError],
    );

  useEffect(() => {
    const controller =
      new AbortController();

    void loadDepartments(
      controller.signal,
    );

    return () => {
      controller.abort();
    };
  }, [loadDepartments]);

  /*
   * Update one form field.
   */
  function updateField(
    field: keyof AppointmentForm,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  }

  /*
   * Client-side validation.
   */
  function validateForm(): string | null {
    const firstName =
      form.first_name.trim();

    const lastName =
      form.last_name.trim();

    const phone =
      form.phone_number.trim();

    const ageText =
      form.age.trim();

    const address =
      form.address.trim();

    const reason =
      form.reason.trim();

    if (!firstName) {
      return `${t.firstName} ${t.required.toLowerCase()}.`;
    }

    if (firstName.length < 2) {
      return t.invalidName;
    }

    if (firstName.length > 100) {
      return t.nameTooLong;
    }

    if (!lastName) {
      return `${t.lastName} ${t.required.toLowerCase()}.`;
    }

    if (lastName.length < 2) {
      return t.invalidName;
    }

    if (lastName.length > 100) {
      return t.nameTooLong;
    }

    if (!phone) {
      return `${t.phone} ${t.required.toLowerCase()}.`;
    }

    if (!isValidPhoneNumber(phone)) {
      return t.invalidPhone;
    }

    if (!ageText) {
      return t.ageRequired;
    }

    const age = Number(ageText);

    if (
      !Number.isInteger(age) ||
      age < 0 ||
      age > 150
    ) {
      return t.invalidAge;
    }

    if (!form.department_id) {
      return `${t.department} ${t.required.toLowerCase()}.`;
    }

    const departmentId = Number(
      form.department_id,
    );

    if (
      !Number.isInteger(
        departmentId,
      ) ||
      departmentId <= 0 ||
      !departments.some(
        (department) =>
          department.department_id ===
          departmentId,
      )
    ) {
      return t.invalidDepartment;
    }

    if (!form.appointment_date) {
      return t.appointmentRequired;
    }

    const selectedDate =
      new Date(
        form.appointment_date,
      );

    if (
      Number.isNaN(
        selectedDate.getTime(),
      ) ||
      selectedDate.getTime() <=
        Date.now()
    ) {
      return t.futureDate;
    }

    if (address.length > 500) {
      return t.addressTooLong;
    }

    if (reason.length > 1000) {
      return t.reasonTooLong;
    }

    return null;
  }

  /*
   * Submit public appointment request.
   */
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setError("");

    const validationError =
      validateForm();

    if (validationError) {
      setError(validationError);

      window.setTimeout(() => {
        document
          .getElementById(
            "appointment-form-error",
          )
          ?.focus();
      }, 0);

      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        first_name:
          form.first_name.trim(),

        last_name:
          form.last_name.trim(),

        phone_number:
          form.phone_number.trim(),

        age: Number(form.age),

        gender:
          form.gender || undefined,

        address:
          form.address.trim() ||
          undefined,

        department_id:
          Number(
            form.department_id,
          ),

        appointment_date:
          form.appointment_date,

        reason:
          form.reason.trim() ||
          undefined,
      };

      const response =
        await fetch(
          `${API_BASE_URL}/public/appointments`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
              Accept:
                "application/json",
            },
            body: JSON.stringify(
              payload,
            ),
          },
        );

      const data =
        await parseApiResponse(
          response,
        );

      if (!response.ok) {
        throw new Error(
          typeof data.error ===
            "string"
            ? data.error
            : typeof data.message ===
                "string"
              ? data.message
              : t.generalError,
        );
      }

      const appointment =
        data.appointment;

      if (
        !appointment ||
        typeof appointment !==
          "object"
      ) {
        throw new Error(
          t.generalError,
        );
      }

      const appointmentData =
        appointment as AppointmentResponse;

      setSuccess(
        appointmentData,
      );

      window.setTimeout(() => {
        document
          .getElementById(
            "appointment",
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    } catch (err) {
      console.error(
        "Failed to submit public appointment:",
        err,
      );

      setError(
        err instanceof Error
          ? err.message
          : t.generalError,
      );

      window.setTimeout(() => {
        document
          .getElementById(
            "appointment-form-error",
          )
          ?.focus();
      }, 0);
    } finally {
      setSubmitting(false);
    }
  }

  /*
   * Reset after a successful request.
   */
  function resetForm() {
    setForm({
      ...INITIAL_FORM,
    });

    setSuccess(null);
    setError("");

    window.setTimeout(() => {
      document
        .getElementById(
          "appointment",
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  /*
   * Retry loading departments.
   */
  function handleRetryDepartments() {
    void loadDepartments();
  }

  const departmentSelectDisabled =
    loadingDepartments ||
    departments.length === 0 ||
    submitting;

  /*
   * IMPORTANT:
   * Do not disable the submit button just because
   * the department list is empty. Validation handles
   * department selection.
   */
  const submitDisabled =
    submitting ||
    loadingDepartments;

  const characterCount =
    form.reason.length;

  return (
    <section
      id="appointment"
      className="border-t border-slate-100 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            {t.eyebrow}
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-4xl">
          {success ? (
            /* Success */
            <div
              role="status"
              aria-live="polite"
              className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-center shadow-sm sm:p-10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
                <FaCheckCircle
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-slate-900">
                {t.successTitle}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.successMessage}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
                {/* Reference */}
                <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.reference}
                  </p>

                  <p className="mt-1 text-lg font-extrabold text-slate-900">
                    #{success.appointment_id}
                  </p>
                </div>

                {/* Department */}
                <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.departmentLabel}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {success.department_name}
                  </p>
                </div>

                {/* Date */}
                <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.requestedDate}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {formatAppointmentDate(
                      success.appointment_date,
                      language,
                    )}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                {t.requestAnother}
              </button>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10"
            >
              {/* Error */}
              {error && (
                <div
                  id="appointment-form-error"
                  role="alert"
                  aria-live="assertive"
                  tabIndex={-1}
                  className="mb-8 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700 outline-none"
                >
                  {error}
                </div>
              )}

              {/* Patient Information */}
              <div>
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
                  >
                    <FaUser />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    {t.patientInformation}
                  </h3>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* First name */}
                  <div>
                    <label
                      htmlFor="appointment-first-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.firstName}
                    </label>

                    <input
                      id="appointment-first-name"
                      name="first_name"
                      value={
                        form.first_name
                      }
                      onChange={(event) =>
                        updateField(
                          "first_name",
                          event.target.value,
                        )
                      }
                      type="text"
                      autoComplete="given-name"
                      maxLength={100}
                      required
                      placeholder={
                        t.firstNamePlaceholder
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                    />
                  </div>

                  {/* Last name */}
                  <div>
                    <label
                      htmlFor="appointment-last-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.lastName}
                    </label>

                    <input
                      id="appointment-last-name"
                      name="last_name"
                      value={
                        form.last_name
                      }
                      onChange={(event) =>
                        updateField(
                          "last_name",
                          event.target.value,
                        )
                      }
                      type="text"
                      autoComplete="family-name"
                      maxLength={100}
                      required
                      placeholder={
                        t.lastNamePlaceholder
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="appointment-phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.phone}
                    </label>

                    <div className="relative">
                      <FaPhoneAlt
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                      />

                      <input
                        id="appointment-phone"
                        name="phone_number"
                        value={
                          form.phone_number
                        }
                        onChange={(event) =>
                          updateField(
                            "phone_number",
                            event.target.value,
                          )
                        }
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={20}
                        required
                        placeholder={
                          t.phonePlaceholder
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                      />
                    </div>
                  </div>

                  {/* Age */}
                  <div>
                    <label
                      htmlFor="appointment-age"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.age}
                    </label>

                    <input
                      id="appointment-age"
                      name="age"
                      value={form.age}
                      onChange={(event) =>
                        updateField(
                          "age",
                          event.target.value,
                        )
                      }
                      type="number"
                      min={0}
                      max={150}
                      step={1}
                      inputMode="numeric"
                      autoComplete="off"
                      required
                      placeholder={
                        t.agePlaceholder
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="appointment-gender"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.gender}
                    </label>

                    <select
                      id="appointment-gender"
                      name="gender"
                      value={form.gender}
                      onChange={(event) =>
                        updateField(
                          "gender",
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                    >
                      <option value="">
                        {t.selectGender}
                      </option>

                      <option value="male">
                        {t.male}
                      </option>

                      <option value="female">
                        {t.female}
                      </option>

                      <option value="other">
                        {t.other}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div className="mt-5">
                  <label
                    htmlFor="appointment-address"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    {t.address}

                    <span className="ml-2 normal-case font-medium tracking-normal text-slate-400">
                      ({t.optional})
                    </span>
                  </label>

                  <input
                    id="appointment-address"
                    name="address"
                    value={form.address}
                    onChange={(event) =>
                      updateField(
                        "address",
                        event.target.value,
                      )
                    }
                    type="text"
                    autoComplete="street-address"
                    maxLength={500}
                    placeholder={
                      t.addressPlaceholder
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                  />
                </div>
              </div>

              {/* Appointment Information */}
              <div className="mt-10 border-t border-slate-100 pt-10">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
                  >
                    <FaCalendarAlt />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    {
                      t.appointmentInformation
                    }
                  </h3>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Department */}
                  <div>
                    <label
                      htmlFor="appointment-department"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.department}
                    </label>

                    <select
                      id="appointment-department"
                      name="department_id"
                      value={
                        form.department_id
                      }
                      onChange={(event) =>
                        updateField(
                          "department_id",
                          event.target.value,
                        )
                      }
                      required
                      disabled={
                        departmentSelectDisabled
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="">
                        {loadingDepartments
                          ? t.loadingDepartments
                          : departments.length ===
                              0
                            ? t.noDepartments
                            : t.selectDepartment}
                      </option>

                      {departments.map(
                        (department) => (
                          <option
                            key={
                              department.department_id
                            }
                            value={
                              department.department_id
                            }
                          >
                            {
                              department.department_name
                            }
                          </option>
                        ),
                      )}
                    </select>

                    {departmentError && (
                      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-red-600">
                          {departmentError}
                        </p>

                        <button
                          type="button"
                          onClick={
                            handleRetryDepartments
                          }
                          disabled={
                            loadingDepartments
                          }
                          className="text-xs font-bold text-teal-700 hover:text-teal-800 focus:outline-none focus:underline disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {t.retryDepartments}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Appointment date/time */}
                  <div>
                    <label
                      htmlFor="appointment-date"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.date} & {t.time}
                    </label>

                    <div className="relative">
                      <FaClock
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                      />

                      <input
                        id="appointment-date"
                        name="appointment_date"
                        value={
                          form.appointment_date
                        }
                        onChange={(event) =>
                          updateField(
                            "appointment_date",
                            event.target.value,
                          )
                        }
                        type="datetime-local"
                        min={
                          minimumDateTime
                        }
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Reason */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="appointment-reason"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.reason}

                      <span className="ml-2 normal-case font-medium tracking-normal text-slate-400">
                        ({t.optional})
                      </span>
                    </label>

                    <span className="text-[11px] font-medium text-slate-400">
                      {characterCount}/1000
                    </span>
                  </div>

                  <textarea
                    id="appointment-reason"
                    name="reason"
                    value={form.reason}
                    onChange={(event) =>
                      updateField(
                        "reason",
                        event.target.value,
                      )
                    }
                    rows={4}
                    maxLength={1000}
                    placeholder={
                      t.reasonPlaceholder
                    }
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-relaxed text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={submitDisabled}
                  aria-disabled={
                    submitDisabled
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 py-4 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <FaSpinner
                        aria-hidden="true"
                        className="animate-spin"
                      />
                      {t.submitting}
                    </>
                  ) : (
                    t.submit
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}