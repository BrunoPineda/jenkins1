pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verificar entorno') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'node -v || true'
                sh 'npm -v || true'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Iniciar prueba') {
            steps {
                sh 'echo "Build OK"'
            }
        }
    }
}