import { Input } from 'shared/components/input';
import { useCallback } from 'react';
import { useAddRecipeStore, useSaveRecipeForm } from 'entities/recipe/store/addRecipeStore';

import styles from './AddRecipeForm.module.scss';
import { Select } from 'shared/components/select';
import { Label } from 'shared/components/label';
import { Button } from 'shared/components/button';

export const AddRecipeForm = () => {
  const isLoading = useAddRecipeStore((store) => store.isLoading);
  const fields = useAddRecipeStore((store) => store.fields);
  const errors = useAddRecipeStore((store) => store.errors);
  const setValue = useAddRecipeStore((store) => store.setValue);
  const saveRecipeForm = useSaveRecipeForm();

  const hasErrors = Boolean(errors && errors.length);

  const onChangeHandler = useCallback((e) => {
    setValue(e.target.name, e.target.value);
  }, []);

  const onChangeSelectHandler = useCallback((data) => {
    setValue(data.name, data.value.id);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    saveRecipeForm(fields);
  }, [fields]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.double}>
        <Label name="name" errors={errors} label="Name *">
          <Input
            name="name"
            value={fields.name.value}
            placeholder="Name"
            onChange={onChangeHandler}
          />
        </Label>
        <Label label="Origin" errors={errors} name="origin">
          <Select
            name="origin"
            value={fields.origin.value}
            options={fields.origin.options}
            placeholder="Country Origin"
            onChange={onChangeSelectHandler}
          />
        </Label>
      </div>
      <Label label="Description" name="description" errors={errors}>
        <Input
          name="description"
          value={fields.description.value}
          placeholder="Describe your recipe..."
          onChange={onChangeHandler}
          textarea={true}
        />
      </Label>
      <div className={styles.double}>
        <Label errors={errors} name="difficulty" label="Difficulty">
          <Select
            name="difficulty"
            value={fields.difficulty.value}
            options={fields.difficulty.options}
            onChange={onChangeSelectHandler}
          />
        </Label>
        <Label errors={errors} name="protein" label="Protein">
          <Input
            name="protein"
            value={fields.protein.value}
            label="Protein"
            onChange={onChangeHandler}
          />
        </Label>
      </div>
      <div className={styles.double}>
        <Label errors={errors} name="produce" label="Produce">
          <Input
            name="produce"
            value={fields.produce.value}
            onChange={onChangeHandler}
          />
        </Label>
        <Label errors={errors} name="spice" label="Spice">
          <Input
            name="spice"
            value={fields.spice.value}
            onChange={onChangeHandler}
          />
        </Label>
      </div>
      <div className={styles.double}>
        <Label errors={errors} name="cookingOil" label="Cooking Oil?">
          <Input
            name="cookingOil"
            value={fields.cookingOil.value}
            onChange={onChangeHandler}
          />
        </Label>
        <Label errors={errors} name="volume" label="Volume">
          <Input
            name="volume"
            value={fields.volume.value}
            onChange={onChangeHandler}
            suffix="grams"
          />
        </Label>
      </div>
      <div className={styles.double}>
        <Label errors={errors} name="serves" label="Serves">
          <Input
            name="serves"
            value={fields.serves.value}
            label="Serves"
            suffix="people"
            onChange={onChangeHandler}
          />
        </Label>

        <Label errors={errors} name="authenticity" label="Authenticity">
          <Select
            name="authenticity"
            value={fields.authenticity.value}
            options={fields.authenticity.options}
            placeholder="Authenticity"
            onChange={onChangeSelectHandler}
          />
        </Label>
      </div>
      <Label errors={errors} name="stock" label="Stock">
        <Input
          name="stock"
          value={fields.stock.value}
          onChange={onChangeHandler}
        />
      </Label>
      {hasErrors && <p className={styles.error}>* Please, fill of the fields.</p>}
      <Button
        type="submit"
        mode="primary"
        isLoading={isLoading}
        disabled={hasErrors || isLoading}>
        Add Recipe
      </Button>
    </form>
  );
};