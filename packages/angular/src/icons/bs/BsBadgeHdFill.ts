import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-badge-hd-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBadgeHdFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.53 5.97h-0.84v4.06h0.84c1.12 0 1.62-0.67 1.62-2.02 0-1.35-0.51-2.04-1.62-2.04"}],["path",{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5.4 3V11H6.21V8.43H3.69V11H2.5V5h1.19v2.44h2.52V5h1.19zM8.5 11V5h2.19c1.82 0 2.69 1.09 2.69 2.98C13.37 9.89 12.5 11 10.69 11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBadgeHdFill;
