pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    ./gradlew build
                    ls -lah
                '''
            }
        }
    }
}
