import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-loom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLoom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 10.67h-7.02l6.08-3.51-1.33-2.31-6.08 3.51 3.51-6.08L16.840.94l-3.51 6.08V0h-2.67v7.02L7.160.94 4.84 2.28l3.51 6.08-6.08-3.51L0.94 7.16l6.08 3.51H0v2.67h7.02L0.94 16.84l1.34 2.31 6.08-3.51-3.51 6.08 2.31 1.34 3.51-6.08V24h2.67v-7.02l3.51 6.08 2.31-1.33-3.51-6.08 6.08 3.51 1.34-2.31-6.08-3.51h7.02v-2.67H24zm-12 4.97a3.65 3.65 0 1 1 0-7.29 3.65 3.65 0 0 1 0 7.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLoom;
