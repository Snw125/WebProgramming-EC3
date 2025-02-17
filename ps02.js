function toggle(source) {
    checkboxes = document.getElementsByName('box');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkall');
    const labelText = document.getElementById('label');

    checkbox.addEventListener('change', function() {
    labelText.textContent = this.checked ? 'Uncheck All' : 'Check All';
    });
});