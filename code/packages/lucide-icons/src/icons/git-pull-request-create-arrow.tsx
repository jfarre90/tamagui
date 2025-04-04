import { memo } from 'react'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Circle as _Circle, Path } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <_Circle cx="5" cy="6" r="3" stroke={color} />
      <Path d="M5 9v12" stroke={color} />
      <Path d="m15 9-3-3 3-3" stroke={color} />
      <Path d="M12 6h5a2 2 0 0 1 2 2v3" stroke={color} />
      <Path d="M19 15v6" stroke={color} />
      <Path d="M22 18h-6" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'GitPullRequestCreateArrow'

export const GitPullRequestCreateArrow: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
