import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-flat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFlat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.55 17.45v3.27C6.55 22.53 5.08 24 3.27 24S0 22.53 0 20.73c0-1.81 1.47-3.27 3.27-3.27Zm8.73-8.73V12c0 1.81-1.47 3.27-3.27 3.27H5.45c-1.81 0-3.27-1.47-3.27-3.27 0-1.81 1.47-3.27 3.27-3.27zM24 0v3.27c0 1.81-1.47 3.27-3.27 3.27H7.64c-1.81 0-3.27-1.47-3.27-3.27S5.83 0 7.64 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFlat;
