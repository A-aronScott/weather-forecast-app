function UnitToggle({ unit, onUnitChange }) {
  return (
    <div className="unit-toggle">
      <button
        type="button"
        className={unit === 'C' ? 'unit-btn active' : 'unit-btn'}
        aria-pressed={unit === 'C'}
        onClick={() => onUnitChange('C')}
      >
        °C
      </button>
      <button
        type="button"
        className={unit === 'F' ? 'unit-btn active' : 'unit-btn'}
        aria-pressed={unit === 'F'}
        onClick={() => onUnitChange('F')}
      >
        °F
      </button>
    </div>
  );
}

export default UnitToggle;
