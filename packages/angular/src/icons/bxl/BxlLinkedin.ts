import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-linkedin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlLinkedin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"4.98","cy":"5.01","r":"2.19"}],["path",{"d":"M9.24 8.86v12.14h3.77v-6c0-1.580.3-3.12 2.26-3.12 1.94 0 1.96 1.81 1.96 3.22v5.9H21v-6.66c0-3.27-0.7-5.78-4.53-5.78-1.83 0-3.06 1.01-3.57 1.96h-0.05v-1.66H9.24zm-6.14 0H6.87v12.14H3.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlLinkedin;
