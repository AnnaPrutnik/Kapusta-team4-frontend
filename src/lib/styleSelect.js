export const customStyles = {
  control: (provided, state) => ({
    display: 'flex',
    height: '44px',
    backgroundColor: 'transparent',
    border: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#C7CCDC',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#C7CCDC',
  }),
  indicatorSeparator: provided => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused && '#f5f6fb',
    color: state.isFocused ? '#52555F' : '#C7CCDC',
  }),
  menuList: (provided, state) => ({
    ...provided,
    overflow: 'visible',
    maxHeight: 'auto',
  }),
  indicatorsContainer: (provided, state) => {
    const styles = state.selectProps.menuIsOpen
    return {
      ...provided,
      transform: styles && 'rotate(180deg)',
    }
  },
}
