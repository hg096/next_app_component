import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)
// MySwal.fire({
//   title: <p>Hello World</p>,
//   didOpen: () => {
//     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
//     MySwal.showLoading()
//   },
// }).then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>)
// })

export async function swalAlert(title = "", text = "", callbackFuncSuccess = null, btnText = "확인") {

  let swalAlert

  if (text == "" || text == null) {
    swalAlert = await Swal.mixin({
      customClass: {
        title: "swal-title1",
        confirmButton: "swal-alertButton",
        container: "container-out-wrap top-index",
        actions: "swal-actions1",
        popup: "swal-popup",
        htmlContainer: "swal-htmlContainer",
      },
    });
  } else {
    swalAlert = await Swal.mixin({
      customClass: {
        title: "swal-title2",
        confirmButton: "swal-alertButton",
        container: "container-out-wrap top-index",
        actions: "swal-actions1",
        popup: "swal-popup",
        htmlContainer: "swal-htmlContainer",
      },
    });
  }

  const swalAlert_ = await swalAlert.fire({
    title: title,
    html: text,
    showCloseButton: true,
    confirmButtonColor: "",
    confirmButtonText: btnText,
    returnFocus: false,
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (typeof callbackFuncSuccess === 'function') {
        await callbackFuncSuccess();
        return true;
      } else {
        return true;
      }
    }
  });

  return swalAlert_;
}


export async function swalConfirm(title = "", text = "", callbackFuncSuccess = null, callbackFuncFail = null, confirmButton = "확인", cancelButton = "취소") {
  let swalConfirm
  if (text == "" || text == null) {
    swalConfirm = Swal.mixin({
      customClass: {
        title: "swal-title1",
        confirmButton: "swal-confirmButton",
        cancelButton: "swal-cancelButton",
        container: "container-out-wrap top-index",
        actions: "swal-actions",
        popup: "swal-popup",
        htmlContainer: "swal-htmlContainer2",
      },
    });
  } else {
    swalConfirm = Swal.mixin({
      customClass: {
        title: "swal-title2",
        confirmButton: "swal-confirmButton",
        cancelButton: "swal-cancelButton",
        container: "container-out-wrap top-index",
        actions: "swal-actions",
        popup: "swal-popup",
        htmlContainer: "swal-htmlContainer2",
      },
    });
  }

  const swalConfirm_ = await swalConfirm.fire({
    title: title,
    html: text,
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: '',
    cancelButtonColor: '',
    confirmButtonText: confirmButton,
    cancelButtonText: cancelButton,
    reverseButtons: true
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (typeof callbackFuncSuccess === 'function') {
        await callbackFuncSuccess();
        return true;
      } else {
        return true;
      }
    } else {
      if (typeof callbackFuncFail === 'function') {
        await callbackFuncFail();
        return false;
      } else {
        return false;
      }
    }
  })

  return swalConfirm_;
}
