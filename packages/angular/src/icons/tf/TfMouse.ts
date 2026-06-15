import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-mouse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfMouse {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 0c-3.03 0-5.5 2.47-5.5 5.5v6c0 3.03 2.47 5.5 5.5 5.5s5.5-2.47 5.5-5.5v-6c0-3.03-2.47-5.5-5.5-5.5zM13 11.5c0 2.48-2.02 4.5-4.5 4.5s-4.5-2.02-4.5-4.5v-6c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v6zM8.5 3.5c-0.83 0-1.5 0.67-1.5 1.5v2c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-2c0-0.83-0.67-1.5-1.5-1.5zM9 7c0 0.28-0.22 0.5-0.5 0.5s-0.5-0.22-0.5-0.5v-2c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5v2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfMouse;
