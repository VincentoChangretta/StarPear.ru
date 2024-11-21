const mailto = "./mail.php";

export const fetchToMail = async (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(mailto, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      form.reset();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Ошибка:", error);
    return false;
  }
};

export const handleSubmit = async (
  e,
  form,
  setFetchModal,
  isCheckedPrivacy,
  sendError,
  setSendError
) => {
  const formData = fetchToMail(e, form);
  if (formData && isCheckedPrivacy) {
    sendError ? setSendError(false) : null
    setFetchModal(true);
    setTimeout(() => {
      setFetchModal(false);
    }, 4500);
  } else if (!isCheckedPrivacy) {
    setSendError(true);
    setTimeout(() => setSendError(false), 1500);
  }
};
