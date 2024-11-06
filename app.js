//Event listener for "show clusters" button
document.getElementById('clusters-btn').addEventListener('click', function(){
  const clusterList = document.getElementById('cluster-list');
  clusterList.classList.toggle('hidden');

  const clusters = [
    {name: "cluster_name", environments: ["Env1", "Env2"]},
    {name: "cluster_name", environments: ["Env1", "Env2"]}
    {name: "cluster_name", environments: ["Env1", "Env2"]}
  ];

  clusterList.innerHTML = '';

  clusters.forEach(cluster => {
    const clusterItem = document.createElement('li');
    clusterItem.textContent = cluster.name;
    clusterItem.addEventListener('click', function(){
      displayEnvironments(cluster.environments);
    });
    clusterList.appendChild(clusterItem);
  });
});

function display
