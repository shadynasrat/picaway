const dialog = document.getElementById('resource-dialog');
const resources = {
  code: {title: 'Code preview', description: 'You can download the anonymous code preview here. Includes CPU runners, synthetic examples, and tests.', file: 'assets/code-review.zip'},
  dataset: {title: 'Dataset preview', description: 'You can download the anonymous dataset preview here. Includes the dataset overview and aggregate benchmark tables; the full images, masks, and trajectories are not included.', file: 'assets/dataset-preview.zip'}
};
for (const trigger of document.querySelectorAll('[data-resource]')) {
  trigger.addEventListener('click', () => {
    const resource = resources[trigger.dataset.resource];
    document.getElementById('resource-title').textContent = resource.title;
    document.getElementById('resource-description').textContent = resource.description;
    const link = document.getElementById('resource-download');
    link.href = resource.file;
    link.textContent = 'Download ' + resource.title.toLowerCase();
    dialog.showModal();
  });
}
dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
