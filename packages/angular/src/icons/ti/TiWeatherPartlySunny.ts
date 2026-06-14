import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-weather-partly-sunny",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWeatherPartlySunny {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.5 3l-1 3-1-3c-0.18-0.550.11-1.150.67-1.330.55-0.18 1.150.11 1.330.670.080.230.070.46 0 0.67zM19.86 6.05l-2.83 1.42 1.42-2.83c0.26-0.520.89-0.73 1.41-0.470.520.260.730.890.47 1.42-0.110.21-0.270.37-0.470.47zM21.5 12l-3-1 3-1c0.55-0.18 1.150.11 1.330.670.180.55-0.11 1.15-0.67 1.33-0.220.08-0.460.07-0.67 0zM8.55 4.64l1.42 2.83-2.83-1.41c-0.52-0.26-0.73-0.89-0.47-1.410.26-0.520.9-0.73 1.41-0.470.210.110.370.270.470.47zM17.78 12.34c0.14-0.420.22-0.870.22-1.34 0-2.48-2.02-4.5-4.5-4.5-1.34 0-2.540.59-3.36 1.53l-0.14-0.03c-1.78 0-3.370.78-4.47 2.01-0.24-0.08-0.47-0.09-0.7-0.01-0.550.19-0.850.78-0.67 1.330.060.170.160.30.280.41-0.280.7-0.44 1.46-0.44 2.26l00.13c-1.720.45-3 2.01-3 3.87 0 2.21 1.8 4 4 4h11c2.76 0 5-2.24 5-5 0-2.13-1.34-3.94-3.22-4.66zm-4.28-3.84c1.38 0 2.5 1.12 2.5 2.5 0 0.37-0.10.71-0.24 1.02-0.350.02-0.720.07-1.120.19-0.52-1.35-1.6-2.41-2.97-2.90.46-0.49 1.1-0.8 1.82-0.8zm2.5 11.5h-11c-1.1 0-2-0.9-2-2s0.9-2 1.91-2.01l1.420.02-0.25-1.2c-0.05-0.26-0.08-0.54-0.08-0.81 0-2.21 1.8-4 4-4l0.07-0.01c1.90.06 3.5 1.41 3.85 3.27l0.040.19c0.120.440.520.710.950.71l0.29-0.02c0.31-0.090.57-0.130.81-0.13 1.65 0 3 1.35 3 3s-1.35 3-3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWeatherPartlySunny;
