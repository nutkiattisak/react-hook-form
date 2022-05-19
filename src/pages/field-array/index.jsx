import { useForm, Controller, useFieldArray } from 'react-hook-form'

const FieldArray = () => {
  const formOptions = {
    defaultValues: {
      test: [{ value: '', type: '' }],
    },
  }

  const { control, register } = useForm(formOptions)
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'test', // unique name for your Field Array
  })

  return (
    <>
      <div className="bg-[#06122c] h-screen flex justify-center">
        <div className="w-4/5 p-3">
          {fields.map((field, index) => (
            <>
              <div className="mb-3">
                <input key={field.id} {...register(`test.${index}.value`)} className="p-3 w-5/6" />
              </div>
            </>
          ))}
          <button
            className="p-3 bg-pink-500 rounded text-white"
            type="button"
            onClick={() => {
              append({ value: '', type: '' })
            }}
          >
            <i className="fas fa-plus"></i> เพิ่ม
          </button>
        </div>
      </div>
    </>
  )
}

export default FieldArray
