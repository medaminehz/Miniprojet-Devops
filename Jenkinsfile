pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'miniProjet-Devops'
        REGISTRY_URL = 'docker.io/medaminehz'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                sh "docker build -t ${REGISTRY_URL}/car-rental-booking:${env.BUILD_ID} ./carRentalBooking"
                sh "docker build -t ${REGISTRY_URL}/flight-booking:${env.BUILD_ID} ./flightBooking"
                sh "docker build -t ${REGISTRY_URL}/hotels-booking:${env.BUILD_ID} ./hotelsBooking"
                sh "docker build -t ${REGISTRY_URL}/gateway:${env.BUILD_ID} ./gateway"
            }
        }

        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dh_cred', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "docker login -u $USERNAME -p $PASSWORD https://index.docker.io/v1/"

                    sh "docker push ${REGISTRY_URL}/car-rental-booking:${env.BUILD_ID}"
                    sh "docker push ${REGISTRY_URL}/flight-booking:${env.BUILD_ID}"
                    sh "docker push ${REGISTRY_URL}/hotels-booking:${env.BUILD_ID}"
                    sh "docker push ${REGISTRY_URL}/gateway:${env.BUILD_ID}"
                }
            }
        }

        stage('Cleanup') {
            steps {
                dir('carRentalBooking') {
                    sh 'sudo pkill -f node'
                }
                dir('flightBooking') {
                    sh 'sudo pkill -f node'
                }
                dir('hotelsBooking') {
                    sh 'sudo pkill -f node'
                }
                dir('gateway') {
                    sh 'sudo pkill -f node'
                }
            }
        }
    }
}
