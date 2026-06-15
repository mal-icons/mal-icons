import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-mouse-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfMouseAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 0c-3.03 0-5.5 2.47-5.5 5.5v6c0 3.03 2.47 5.5 5.5 5.5s5.5-2.47 5.5-5.5v-6c0-3.03-2.47-5.5-5.5-5.5zM13 5.5v0.5h-4v-4.95c2.24 0.25 4 2.14 4 4.45zM8 1.05v4.95h-4v-0.5c0-2.31 1.76-4.2 4-4.45zM8.5 16c-2.48 0-4.5-2.02-4.5-4.5v-4.5h9v4.5c0 2.48-2.02 4.5-4.5 4.5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfMouseAlt;
