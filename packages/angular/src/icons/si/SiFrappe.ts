import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-frappe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFrappe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0H2.88zM8.4 6h8.02v2.11H8.4V6zm0 5.39h7.49v2.11h-4.93V18H8.4v-6.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFrappe;
