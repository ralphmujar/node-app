pipeline {
  agent any
  stages {

    stage("build") {
      steps {
        script {
            dockerImage = docker.build("ralphmujar/nodeapp")
        }
      }
    }

    stage("push") {
      steps {
        script {
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub')
            dockerImage.push()
        }
      }
    }

  }
}
