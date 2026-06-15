import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-shield",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfShield {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 1.02c0 1.65-1.35 3-3 3s-3-1.35-3-3h-1c0 1.65-1.35 3-3 3s-3-1.35-3-3h-1v6.85c0 5.41 7 8 7.3 8.11l0.17 0.06 0.17-0.06c0.3-0.1 7.37-2.59 7.37-8.14v-6.82h-1zM2 7.86v-4.2c0.73 0.83 1.81 1.36 3 1.36 1.2 0 2.27-0.53 3-1.37v11.11c-1.66-0.75-6-3.07-6-6.9zM15 7.84c0 3.9-4.29 6.16-6 6.91v-11.1c0.73 0.84 1.8 1.37 3 1.37 1.19 0 2.27-0.52 3-1.36v4.18z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfShield;
