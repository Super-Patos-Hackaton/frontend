pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run ESLint') {
            steps {
                sh 'npm run lint'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/eslint-report.html', allowEmptyArchive: true
        }
        success {
            echo 'Linting passed!'
        }
        failure {
            echo 'Linting failed!'
        }
    }
}
