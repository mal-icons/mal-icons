import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-dashboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDashboard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M510-600v-210q0-12.75 8.63-21.37T540-840h270q12.75 0 21.38 8.63T840-810v210q0 12.75-8.62 21.38T810-570H540q-12.75 0-21.37-8.62T510-600ZM120-480v-330q0-12.75 8.63-21.37T150-840h270q12.75 0 21.38 8.63T450-810v330q0 12.75-8.62 21.38T420-450H150q-12.75 0-21.37-8.62T120-480Zm390 330v-330q0-12.75 8.63-21.37T540-510h270q12.75 0 21.38 8.63T840-480v330q0 12.75-8.62 21.38T810-120H540q-12.75 0-21.37-8.62T510-150Zm-390 0v-210q0-12.75 8.63-21.37T150-390h270q12.75 0 21.38 8.63T450-360v210q0 12.75-8.62 21.38T420-120H150q-12.75 0-21.37-8.62T120-150Zm60-360h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDashboard;
