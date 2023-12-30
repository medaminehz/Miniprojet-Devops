pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'miniProjet-Devops'
        REGISTRY_URL = 'docker.io/medaminehz'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    dir('carRentalBooking') {
                        docker.build("${REGISTRY_URL}/car-rental-booking:${env.BUILD_ID}")
                    }
                    dir('flightBooking') {
                        docker.build("${REGISTRY_URL}/flight-booking:${env.BUILD_ID}")
                    }
                    dir('gateway') {
                        docker.build("${REGISTRY_URL}/gateway:${env.BUILD_ID}")
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                
            }
        }

        stage('Start Services') {
            steps {
                dir('carRentalBooking') {
                    sh 'npm install --force'
                    sh 'nodemon carRentalServer.js &'
                }
                dir('flightBooking') {
                    sh 'npm install --force'
                    sh 'nodemon index.js &'
                }
                dir('gateway') {
                    sh 'npm install --force'
                    sh 'nodemon index.js &'
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dh_cred') {
                        dir('carRentalBooking') {
                            dockerImage.push("${REGISTRY_URL}/car-rental-booking:${env.BUILD_ID}")
                        }
                        dir('flightBooking') {
                            dockerImage.push("${REGISTRY_URL}/flight-booking:${env.BUILD_ID}")
                        }
                        dir('gateway') {
                            dockerImage.push("${REGISTRY_URL}/gateway:${env.BUILD_ID}")
                        }
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                dir('carRentalBooking') {
                    sh 'pkill -f nodemon'
                }
                dir('flightBooking') {
                    sh 'pkill -f nodemon'
                }
                dir('gateway') {
                    sh 'pkill -f nodemon'
                }
            }
        }
    }
}