import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-erpnext",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiErpnext {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0Zm5.04 5.76h8.25v2.15H7.92Zm0 5.03h7.85v2.15h-5.23v2.95h5.7v2.15H7.92Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiErpnext;
