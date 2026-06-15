import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-light-bulb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLightBulb {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 0c-3.03 0-5.5 2.62-5.5 5.83 0 2.35 0.96 3.67 1.81 4.83 0.64 0.87 1.19 1.62 1.19 2.67v2.1c0 0.86 0.67 1.57 1.5 1.57h2c0.83 0 1.5-0.7 1.5-1.57v-2.13c0-1.04 0.52-1.73 1.17-2.61 0.82-1.09 1.83-2.45 1.83-4.86 0-3.22-2.47-5.83-5.5-5.83zM9.5 16h-2c-0.28 0-0.5-0.25-0.5-0.57v-1.63h3v1.63c0 0.31-0.22 0.57-0.5 0.57zM11.37 10.1c-0.59 0.79-1.19 1.59-1.34 2.7h-3.07c-0.15-1.1-0.75-1.93-1.34-2.73-0.8-1.09-1.62-2.21-1.62-4.24 0-2.66 2.02-4.83 4.5-4.83s4.5 2.17 4.5 4.83c0 2.09-0.83 3.19-1.63 4.27z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLightBulb;
