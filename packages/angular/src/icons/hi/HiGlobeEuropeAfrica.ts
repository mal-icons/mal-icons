import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-globe-europe-africa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiGlobeEuropeAfrica {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m20.89 13.39-1.13-1.13a2.25 2.25 0 0 1-0.42-0.58l-1.08-2.16a0.410.41 0 0 0-0.66-0.110.830.83 0 0 1-0.810.21l-1.27-0.36a0.890.89 0 0 0-0.74 1.6l0.590.39c0.590.40.67 1.230.17 1.73l-0.20.2c-0.210.21-0.330.5-0.330.8v0.41c0 0.41-0.110.81-0.32 1.16l-1.31 2.19a2.11 2.11 0 0 1-1.81 1.02 1.06 1.06 0 0 1-1.05-1.05v-1.17c0-0.92-0.56-1.75-1.41-2.09l-0.65-0.26a2.25 2.25 0 0 1-1.38-2.46l0.01-0.04a2.25 2.25 0 0 1 0.29-0.79l0.09-0.15a2.25 2.25 0 0 1 2.37-1.05l1.180.24a1.13 1.13 0 0 0 1.3-0.79l0.21-0.73a1.13 1.13 0 0 0-0.58-1.31l-0.66-0.33-0.090.09a2.25 2.25 0 0 1-1.590.66h-0.18c-0.25 0-0.490.1-0.660.27a0.930.93 0 0 1-1.46-1.14l1.41-2.35a2.25 2.25 0 0 0 0.29-0.76m11.93 9.87A9 9 0 0 0 8.97 3.53m11.93 9.87A9 9 0 1 1 8.97 3.53"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiGlobeEuropeAfrica;
