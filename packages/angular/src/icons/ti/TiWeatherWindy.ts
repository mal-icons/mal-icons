import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-weather-windy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWeatherWindy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 5c-0.55 0-1 0.45-1 1s0.45 1 1 1c0.55 0 1 0.45 1 1s-0.45 1-1 1h-11c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1h-6.4c-1.65 0-3 1.35-3 3s1.35 3 3 3c0.55 0 1-0.45 1-1s-0.45-1-1-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h6.4c1.65 0 3-1.35 3-3 0-0.35-0.07-0.69-0.18-1h2.19c1.65 0 3-1.35 3-3s-1.35-3-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWeatherWindy;
