const SIZE = 75;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type CircularIndicatorProps = {
  value: number;
  max: number;
};

const CircularIndicator = ({ value, max }: CircularIndicatorProps) => {
  const strokeDashoffset = CIRCUMFERENCE - (value / max) * CIRCUMFERENCE;
  const strokeColor =
    value > max
      ? 'stroke-red-500 dark:stroke-red-700'
      : 'stroke-gray-300 dark:stroke-gray-400';

  return (
    <div className='text-gray-500 dark:text-gray-300 relative'>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle
          className={strokeColor}
          fill='transparent'
          strokeWidth={STROKE_WIDTH}
          r={RADIUS}
          cx={SIZE / 2}
          cy={SIZE / 2}
        />
        {value !== 0 && value <= max && (
          <circle
            className='stroke-blue-500 dark:stroke-blue-700'
            fill='transparent'
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            r={RADIUS}
            cx={SIZE / 2}
            cy={SIZE / 2}
            transform={`rotate(90 ${SIZE / 2} ${SIZE / 2})`}
          />
        )}
      </svg>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-none'>
        {value}
        <span className='text-sm block'>
          {value !== 1 ? 'tokens' : 'token'}
        </span>
      </div>
    </div>
  );
};

export default CircularIndicator;
