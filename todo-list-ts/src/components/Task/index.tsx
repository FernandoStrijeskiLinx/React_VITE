import { Trash } from "react-feather";
import styles from "./styles.module.css";
import { IComponentTaskProps } from "./types";

export function Task({ task, handleToggleTask, handleRemoveTask } : IComponentTaskProps) {
  return (
    <div className={styles.container}>
      <input
        readOnly
        checked={task.isCompleted}
        type="checkbox"
        className={styles.input}
        onClick={() => {
          handleToggleTask(task);
        }}
      />
      <label className={task.isCompleted ? styles.completed : ''}>task.title</label>
      <div className={styles.buttonsWrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleRemoveTask(task.id);
          }}
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
