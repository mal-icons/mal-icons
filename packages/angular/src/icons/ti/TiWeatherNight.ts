import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-weather-night",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWeatherNight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 20c-0.86 0-1.71-0.15-2.52-0.45l-1.32-0.480.89-1.09c1.27-1.56 1.95-3.45 1.95-5.48s-0.67-3.92-1.95-5.48l-0.89-1.09 1.32-0.48c0.81-0.3 1.66-0.45 2.52-0.45 4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5zm-0.51-2.02c0.170.020.340.020.510.02 3.03 0 5.5-2.47 5.5-5.5s-2.47-5.5-5.5-5.5c-0.17 0-0.340.01-0.510.020.99 1.65 1.51 3.51 1.51 5.48s-0.52 3.83-1.51 5.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWeatherNight;
