function openModelViewer(viewerId) {
    var viewer = document.getElementById(viewerId);
    viewer.dispatchEvent(new Event('click'));
  }
  