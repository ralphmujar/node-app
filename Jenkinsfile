pipeline {
  agent any
  stages {

    stage("build") {
      steps {
          sh('docker build -t ralphmujar/nodeapp .')
      }
    }

    stage("push") {
      steps {
        script {
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub')
            sh('docker push ralphmujar/nodeapp')
        }
      }
    }

  }
}
