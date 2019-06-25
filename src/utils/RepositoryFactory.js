import ResourceRepository from "./resourceRepository";
import TaskRepository from './taskRepository';

const repositories = {
    resources: ResourceRepository,
    tasks: TaskRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};