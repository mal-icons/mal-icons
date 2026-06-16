import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-group-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfGroupOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 8c0-1.42-0.5-2.73-1.33-3.760.42-0.140.86-0.24 1.33-0.24 2.21 0 4 1.79 4 4s-1.79 4-4 4h-0.18l-0.77-0.77c0.6-0.940.95-2.050.95-3.23zm7.83 12H23v-3c0-2.18-3.58-3.47-6.34-3.87 1.10.75 1.95 1.71 2.23 2.94L22.83 20zM7.24 4.41a4 4 0 0 1 5.35 5.35L7.24 4.41zM9.17 12H9c-2.21 0-4-1.79-4-4v-0.17L0.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41L17 19.83V20H1v-3c0-2.66 5.33-4 8-4 0.37 0 0.80.03 1.250.08L9.17 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfGroupOff;
