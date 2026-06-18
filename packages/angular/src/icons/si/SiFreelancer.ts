import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-freelancer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFreelancer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.1 3.08l1.63 2.29L24 3.08M5.5 20.92l4.47-4.37-2.69-2.89m6.13-10.58L11.03 5.23l4.020.15M4.12 3.08l0.86 1.76 4.730.29m-3.06 7.07l3.5-6.52L0 5.13m7.06 7.49l3.3 3.55 3.64-3.57 1.13-6.65-4.44-0.23Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFreelancer;
