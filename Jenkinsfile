pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'miniProjet-Devops'
        REGISTRY_URL = 'docker.io/medaminehz'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                dir('carRentalBooking') {
                    script {
                        docker.build("${REGISTRY_URL}/car-rental-booking:${env.BUILD_ID}")
                    }
                }
                dir('flightBooking') {
                    script {
                        docker.build("${REGISTRY_URL}/flight-booking:${env.BUILD_ID}")
                    }
                }
                dir('gateway') {
                    script {
                        docker.build("${REGISTRY_URL}/gateway:${env.BUILD_ID}")
                    }
                }
            }
        }

        stage('Start Services') {
            steps {
                  dir('carRentalBooking') {
                    sh 'npm install --force'
                    sh 'node carRentalServer.js &'
                }
                dir('flightBooking') {
                    sh 'npm install --force'
                    sh 'node index.js &'
                }
                dir('gateway') {
                    sh 'npm install --force'
                    sh 'node index.js &'
                }
            }
        }

stage('Push to Docker Registry') {
    steps {
        dir('carRentalBooking') {
            script {
                docker.withRegistry('https://registry.hub.docker.com', 'dh_cred') {
                    docker.image("${REGISTRY_URL}/car-rental-booking:${env.BUILD_ID}").push()
                }
            }
        }
        dir('flightBooking') {
            script {
                docker.withRegistry('https://registry.hub.docker.com', 'dh_cred') {
                    docker.image("${REGISTRY_URL}/flight-booking:${env.BUILD_ID}").push()
                }
            }
        }
        dir('gateway') {
            script {
                docker.withRegistry('https://registry.hub.docker.com', 'dh_cred') {
                    docker.image("${REGISTRY_URL}/gateway:${env.BUILD_ID}").push()
                }
            }
        }
    }
}

        stage('Cleanup') {
            steps {
               dir('carRentalBooking') {
                    sh 'pkill -f node'
                }
                dir('flightBooking') {
                    sh 'pkill -f node'
                }
                dir('gateway') {
                    sh 'pkill -f node'
                }
            }
        }
    }
}
