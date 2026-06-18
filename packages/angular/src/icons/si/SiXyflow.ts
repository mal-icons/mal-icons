import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-xyflow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiXyflow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 0a2 2 0 0 0-2 2v6.67a2 2 0 0 0 2 2h6.67a2 2 0 0 0 2-2V7.22a2 2 0 0 1-1.33 0v1.45a0.670.67 0 0 1-0.670.67H2a0.670.67 0 0 1-0.67-0.67V2c0-0.370.3-0.670.67-0.67h6.67c0.37 0 0.670.30.670.67v1.45a2 2 0 0 1 1.33 0V2a2 2 0 0 0-2-2zm11.33 2a2 2 0 0 1 2-2H22a2 2 0 0 1 2 2v6.67a2 2 0 0 1-2 2h-1.45a2 2 0 0 0 0-1.33H22a0.670.67 0 0 0 0.67-0.67V2A0.670.67 0 0 0 22 1.33h-6.67a0.670.67 0 0 0-0.670.67v1.45a2 2 0 0 0-1.33 0zm3.45 7.33h-1.45a0.670.67 0 0 1-0.67-0.67V7.22a2 2 0 0 1-1.33 0v1.45a2 2 0 0 0 2 2h1.45a2 2 0 0 1 0-1.33M0 15.33a2 2 0 0 1 2-2h6.67a2 2 0 0 1 2 2v1.45a2 2 0 0 0-1.33 0v-1.45a0.670.67 0 0 0-0.67-0.67H2a0.670.67 0 0 0-0.670.67V22c0 0.370.30.670.670.67h6.67A0.670.67 0 0 0 9.33 22v-1.45a2 2 0 0 0 1.33 0V22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm22-0.67h-1.45a2 2 0 0 0 0-1.33H22a2 2 0 0 1 2 2V22a2 2 0 0 1-2 2h-6.67a2 2 0 0 1-2-2v-1.45a2 2 0 0 0 1.33 0V22c0 0.370.30.670.670.67H22a0.670.67 0 0 0 0.67-0.67v-6.67a0.670.67 0 0 0-0.67-0.67m-7.33 2.11v-1.45c0-0.370.3-0.670.67-0.67h1.45a2 2 0 0 1 0-1.33h-1.45a2 2 0 0 0-2 2v1.45a2 2 0 0 1 1.33 0M20 14a1.33 1.33 0 1 1-1.67-1.29V11.29a1.33 1.33 0 1 1 0.67 0v1.42c0.570.15 1 0.67 1 1.29m-10 6c0.62 0 1.14-0.42 1.29-1h1.42a1.33 1.33 0 1 0 0-0.67H11.29A1.33 1.33 0 1 0 10 20m1.29-14.33a1.33 1.33 0 1 1 0-0.67h1.42a1.33 1.33 0 1 1 0 0.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiXyflow;
