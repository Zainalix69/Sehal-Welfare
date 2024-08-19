
$('#videoModal').on('shown.bs.modal', function () {
    $('.modal-backdrop').remove();
});



$(document).ready(function () {
    var video = document.getElementById('modalVideo');

    // Play the video when the modal is shown
    $('#videoModal').on('shown.bs.modal', function () {
        video.play();
    });

    // Pause and reset the video when the modal is hidden
    $('#videoModal').on('hide.bs.modal', function () {
        video.pause();
        video.currentTime = 0; // Reset video to start
    });
});