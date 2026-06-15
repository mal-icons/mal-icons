import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-refresh-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscRefreshCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 12H5.99L6 12L6 12Z"}],["path",{"d":"M11 0C11.28 0 11.5 0.22 11.5 0.5V3.5C11.5 3.78 11.28 4 11 4H8C7.72 4 7.5 3.78 7.5 3.5C7.5 3.22 7.72 3 8 3H10.01C9.07 1.75 7.6 0.99 6 0.99C3.24 0.99 1 3.23 1 5.99C1 8.75 3.24 10.99 6 10.99C8.61 10.99 10.75 9.04 10.98 6.45C11 6.17 11.25 5.98 11.52 6C11.8 6.02 12 6.27 11.97 6.54C11.69 9.65 9.12 12 6 12C2.69 12 0 9.31 0 6C0 2.69 2.69 0 6 0C7.76 0 9.38 0.75 10.5 2.03V0.5C10.5 0.22 10.72 0 11 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscRefreshCompact;
