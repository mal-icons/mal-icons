import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-check-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCheckCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.52 8.99C4.39 8.99 4.27 8.94 4.17 8.85L1.15 5.86C0.95 5.67 0.95 5.35 1.15 5.15C1.34 4.95 1.66 4.95 1.86 5.15L4.53 7.79L10.15 2.15C10.35 1.95 10.66 1.95 10.86 2.15C11.06 2.34 11.06 2.66 10.86 2.86L4.89 8.85C4.79 8.95 4.66 9 4.54 9L4.52 8.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCheckCompact;
