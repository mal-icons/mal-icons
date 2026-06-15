import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-thought",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfThought {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 10.12c3.03 0 5.5-2.27 5.5-5.06s-2.47-5.06-5.5-5.06c-1.91 0-3.69 0.94-4.68 2.43-0.7-0.4-1.5-0.61-2.32-0.61-2.48 0-4.5 1.86-4.5 4.15 0 2.29 2.02 4.15 4.5 4.15 0.19 0 0.38-0.01 0.57-0.04 0.65 0.59 1.52 0.92 2.43 0.92 1 0 1.93-0.39 2.59-1.07 0.49 0.13 0.95 0.19 1.41 0.19zM9.74 8.79l-0.21 0.27c-0.47 0.59-1.23 0.95-2.03 0.95-0.72 0-1.41-0.29-1.89-0.8l-0.18-0.19-0.26 0.05c-0.21 0.04-0.43 0.06-0.66 0.06-1.93 0-3.5-1.41-3.5-3.14 0-1.73 1.57-3.15 3.5-3.15 0.79 0 1.55 0.25 2.19 0.71l0.47 0.34 0.27-0.52c0.74-1.43 2.34-2.36 4.07-2.36 2.48 0 4.5 1.82 4.5 4.06 0 2.24-2.02 4.06-4.5 4.06-0.45 0-0.92-0.07-1.43-0.23l-0.33-0.1zM11.5 10.5c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zM11.5 13.5c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM15.25 14c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25 1.25-0.56 1.25-1.25-0.56-1.25-1.25-1.25zM15 15.25c0-0.14 0.11-0.25 0.25-0.25s0.25 0.11 0.25 0.25c0 0.28-0.5 0.28-0.5 0z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfThought;
