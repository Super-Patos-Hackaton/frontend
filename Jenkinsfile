pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Super-Patos-Hackaton/frontend.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Run ESLint') {
            steps {
                sh 'npm run lint'
            }
        }
    }
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d frontend'
            }
        }
    }
}
