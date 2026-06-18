import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-premid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPremid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.46 4.08c0.85 0 1.540.69 1.54 1.54v12.77c0 0.85-0.69 1.54-1.54 1.54H1.54c-0.85 0-1.54-0.69-1.54-1.54V5.62c0-0.850.69-1.54 1.54-1.54ZM3.44 8.49c-0.4 0-0.720.32-0.720.72v5.67a0.730.73 0 0 0 1.080.63l5.04-2.84a0.730.73 0 0 0 0-1.26L3.8 8.58a0.70.7 0 0 0-0.35-0.09m17.16 5.37h-7.7a0.680.68 0 1 0 0 1.36h7.7a0.680.68 0 1 0 0-1.36m0-2.45h-7.7a0.680.68 0 1 0 0 1.36h7.7a0.680.68 0 1 0 0-1.36m-3.17-2.44h-4.53a0.680.68 0 1 0 0 1.36h4.53a0.680.68 0 1 0 0-1.36"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPremid;
