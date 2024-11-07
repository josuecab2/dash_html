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

function displayEnvironments(environments){
  const clusterList = document.getElementById('cluster-list');
  clusterList.innerHTML = '';

  environments.forEach(env => {
    const envItem = document.createElement('li');
    envItem.textContent = 'Environment: ${env}';
    envItem.addEventListener('click', function(){
      displayNamespaces(envItem);
    });
    clusterList.appendChild(envItem);
  });
}

function displayNamespaces(environment){
  const clusterList = document.getElementById('cluster-list');
  clusterList.innerHTML = '';

  const namespaces = ["Namespace 1", "Namespcae 2", "Namespace 3"];

  namespaces.forEach(ns => {
    const nsItem = document.createElement('li');
    nsItem.textContent = 'Namespace: ${ns} in $ {environment}';
    clusterList.appendChild(nsItem);
  });  
}
