pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn -B -DskipTests clean package'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn verify'
            }
        }
        stage('Build docker image') {
            steps {
                sh 'docker build --build-arg project=spring-example2-1.0-SNAPSHOT -t spring-example2 .'
                sh 'echo y | docker image prune'
            }
        }
        stage('Publish docker image') {
            steps {
                sh 'docker image tag spring-example2 davide92/spring-example2:latest'
                sh 'docker push davide92/spring-example2:latest'
            }
        }
    }
}