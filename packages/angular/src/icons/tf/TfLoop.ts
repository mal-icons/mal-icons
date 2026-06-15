import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-loop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLoop {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 9c0 2.21 1.71 4 3.81 4v1c-2.65 0-4.81-2.24-4.81-5s2.16-5 4.81-5h4.23l-1.65-1.65 0.71-0.71 2.85 2.85-2.85 2.85-0.71-0.71 1.65-1.65h-4.23c-2.1 0-3.81 1.79-3.81 4zM12.19 4v1c2.1 0 3.81 1.79 3.81 4s-1.71 4-3.81 4h-4.23l1.65-1.65-0.71-0.71-2.85 2.85 2.85 2.85 0.71-0.71-1.65-1.65h4.23c2.66 0 4.81-2.24 4.81-5s-2.16-5-4.81-5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLoop;
