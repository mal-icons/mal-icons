import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-mobile-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMobileOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 5v8.61l2 2V3c0-1.1-0.9-2-2-2H7c-0.71 0-1.330.37-1.680.93L8.39 5H17zM1.49 3.76 5 7.27V21c0 1.10.9 2 2 2h10c1.02 0 1.85-0.77 1.98-1.75l1.72 1.72 1.41-1.41L2.9 2.35 1.49 3.76zM7 9.27 16.73 19H7V9.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMobileOff;
