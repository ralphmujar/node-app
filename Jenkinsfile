pipeline {
  agent any
  stages {

    stage("build") {
      steps {
          script {
            dockerImg = docker.build("ralphmujar/nodeapp:${env.BUILD_NUMBER}")
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
        build job: 'deploy', parameters: [string(name: 'TAG', value: env.BUILD_NUMBER )]
      }
    }

  }
}
