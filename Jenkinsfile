@Library('PipelineHelpers') _

pipeline {
    agent any

    environment {
        DOCKER_TAG = dockerHelpers.getSafeDockerTag()
        SAFE_BRANCH_NAME = dockerHelpers.getSafeBranchName()
        PIPELINE_NAME = pipelineHelpers.getPipelineName(currentBuild)
        DOCKER_IMAGE = "plugins/${env.PIPELINE_NAME}:${env.DOCKER_TAG}"
        TESTING_LOCATION = "/worker"
    }

    stages {
        stage('Build') {
            steps {
                checkout scm

                script {
                    sh "DOCKER_USER='plugins' DOCKER_REPO='${env.PIPELINE_NAME}' bash docker_build.sh"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    dockerHelpers.runInDockerImage(
                        env.DOCKER_IMAGE,
                        "cd /worker && yarn test",
                        []
                    )
                }
            }
        }

        stage('Push to Dockerhub') {
            steps {
                script {
                    dockerHelpers.pushImageToDefaultRegistry(env.DOCKER_IMAGE, [env.SAFE_BRANCH_NAME])
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    kubeHelpers.deployPlugin(env.DOCKER_IMAGE, env.SAFE_BRANCH_NAME)
                }
            }
        }
    }

    post {
        always {
            script {
                pipelineHelpers.notifySlack(currentBuild)
            }
        }
    }
}