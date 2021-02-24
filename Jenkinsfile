pipeline {
  agent any
  stages {

    stage("build") {
      steps {
          script {
            dockerImg = docker.build('ralphmujar/nodeapp')
          }
      }
    }

    stage("push") {
      steps {
        script {
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
              dockerImg.push() 
            }
        }
      }
    }

    stage("deployment") {
      steps {
        build job: 'deploy', propagate: true 
      }
    }

  }
}
