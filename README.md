leaving here the initial azure-pipeline.yml because gonna change for CI/CD changes to migrate the pipeline to openshift 

Initial for azure: 

trigger:
- main

pool:
  name: local

steps:

- powershell: |
    Write-Host "Building container..."
    podman build -t demoapp:latest .
  displayName: Build Image

- powershell: |
    Write-Host "Container images:"
    podman images
  displayName: Verify Image

- powershell: |
    Write-Host "test run:"
    podman run -p 8080:80 demoapp:latest
  displayName: Run Image


NOwW FOR OCP CICD more components are needed :

WILL CONTINU TOMORROW - CHECK THE   word doc 
