pipeline{
    agent any

    tools {nodejs "Node-17.0.1"}

    stages{
        stage("build"){
            steps{
                echo 'building application'
                sh 'yarn install'
            }
        }
        stage("test"){
            steps{
                echo 'testing application'
                sh 'yarn test'
            }
        }
        stage("deploy"){
            steps{
                echo 'building application'
            }
        }
    }
}