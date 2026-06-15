import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-cloud-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfCloudDown {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 6.75c0 2.34-1.91 4.25-4.25 4.25h-2.76v-1h2.76c1.79 0 3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25c-0.53 0-1.06 0.14-1.56 0.42l-0.35 0.2-0.26-0.31c-0.72-0.83-1.75-1.31-2.82-1.31-1.66 0-3.1 1.08-3.58 2.69l-0.13 0.42-0.43-0.07c-0.12-0.02-0.24-0.04-0.36-0.04-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25h3.7v1h-3.7c-1.79 0-3.25-1.46-3.25-3.25 0-1.83 1.51-3.33 3.35-3.25 0.71-1.81 2.43-3 4.4-3 1.23 0 2.42 0.49 3.31 1.37 0.55-0.24 1.11-0.37 1.69-0.37 2.34 0 4.25 1.91 4.25 4.25zM9 13.73v-7.73h-1v7.73l-1.65-1.65-0.71 0.71 2.85 2.85 2.85-2.85-0.71-0.71-1.65 1.65z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfCloudDown;
