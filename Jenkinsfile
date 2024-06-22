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
        success {
            script {
                def commitHash = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                githubNotify context: 'jenkins/lint', status: 'SUCCESS', description: 'Linting passed!', sha: commitHash
            }
        }
        failure {
            script {
                def commitHash = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                githubNotify context: 'jenkins/lint', status: 'FAILURE', description: 'Linting failed!', sha: commitHash
            }
        }
    }
}
