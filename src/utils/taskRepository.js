import Repository from "./Repository";

export default{
    getTaskFormPresets() {
        return Repository.get(`/readAddTaskOptions.php`);
        
    }
};