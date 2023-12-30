pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'miniProjet-Devops'
        REGISTRY_URL = 'docker.io/medaminehz' 
    }
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${REGISTRY_URL}/${DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test' 
            }
        }
        stage('Push to Docker Registry') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dh_cred') {
                        dockerImage.push("${REGISTRY_URL}/${DOCKER_IMAGE}:${env.BUILD_ID}")
                    }
                }
            }
        }
        stage('Cleanup') {
            steps {
                sh 'npm test stop' 
            }
        }
    }
  
}
