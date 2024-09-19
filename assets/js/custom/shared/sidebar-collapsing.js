document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('kt_app_sidebar_toggle_v1');
  toggleButton.toggleState = false;
  const body = document.body;

  toggleButton.addEventListener('click', function () {
    const subTabsComponents = document.querySelectorAll('.sub-tab');

    subTabsComponents.forEach(subTabsComponent => {
      if (toggleButton.toggleState) {
        subTabsComponent.style.marginLeft = '0px'
      } else {
        subTabsComponent.style.marginLeft = '35px'
      }
    })

    if (body.classList.contains('app-sidebar-minimize')) {
      body.classList.remove('app-sidebar-minimize');
    } else {
      body.classList.add('app-sidebar-minimize');
    }
  });

  const segments = document.querySelectorAll('.segmented-unit, .segment-wrapper');
  let previousSegment;

  segments.forEach(function (segment) {
    segment.addEventListener('click', function () {
      segments.forEach(function (s) {
        s.classList.remove('segmented-unit');
        s.classList.add('segment-wrapper');
        const innerDiv = s.querySelector('.text-wrapper-23');
        if (innerDiv) {
          innerDiv.classList.remove('text-wrapper-23');
          innerDiv.classList.add('text-wrapper-24');
        }
      });
      if (this.classList.contains('segmented-unit')) {
        const innerDivClicked = this.querySelector('.text-wrapper-23');
        if (innerDivClicked) {
          innerDivClicked.classList.remove('text-wrapper-23');
          innerDivClicked.classList.add('text-wrapper-24');
        }
        return;
      }

      if (previousSegment) {
        previousSegment.classList.remove('segmented-unit');
        const innerDivPrevious = previousSegment.querySelector('.text-wrapper-23');
        if (innerDivPrevious) {
          innerDivPrevious.classList.remove('text-wrapper-23');
          innerDivPrevious.classList.add('text-wrapper-24');
        }
      }

      this.classList.add('segmented-unit');
      const innerDivClicked = this.querySelector('.text-wrapper-24');
      if (innerDivClicked) {
        innerDivClicked.classList.remove('text-wrapper-24');
        innerDivClicked.classList.add('text-wrapper-23');
      }
      previousSegment = this;
    });
  });

  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#kt_daterangepicker_4").html(`<img class="img" src="../assets/media/img/calendar-03-1.svg">
`+ start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
  }
  $("#kt_daterangepicker_4").daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      "Today": [moment(), moment()],
      "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "This Month": [moment().startOf("month"), moment().endOf("month")],
      "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
    },
    opens: 'left'
  }, cb);
  $('#kt_daterangepicker_4').on('show.daterangepicker', function (ev, picker) {
    picker.container.addClass(' mt-2');
  });
  cb(start, end);
});