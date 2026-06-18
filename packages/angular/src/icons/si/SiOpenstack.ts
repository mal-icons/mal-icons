import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-openstack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpenstack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.58 9.29h5.42v5.42h-5.42zM0 9.29h5.42v5.42H0zm18.58 7.83a1.21 1.21 0 0 1-1.21 1.21H6.62a1.21 1.21 0 0 1-1.2-1.21v-0.86H0v5.25a2.24 2.24 0 0 0 2.23 2.23h19.53A2.24 2.24 0 0 0 24 21.51V16.26h-5.42zM21.760.26H2.23a2.24 2.24 0 0 0-2.23 2.23V7.74h5.42v-0.86a1.21 1.21 0 0 1 1.21-1.21h10.75a1.21 1.21 0 0 1 1.21 1.21v0.86H24V2.49A2.24 2.24 0 0 0 21.760.26Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpenstack;
