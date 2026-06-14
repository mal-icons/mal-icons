import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-party-popper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPartyPopper {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.8 11.3 2 22l10.7-3.79"}],["path",{"d":"M4 3h0.01"}],["path",{"d":"M22 8h0.01"}],["path",{"d":"M15 2h0.01"}],["path",{"d":"M22 20h0.01"}],["path",{"d":"m22 2-2.240.75a2.9 2.9 0 0 0-1.96 3.12c0.10.86-0.57 1.63-1.45 1.63h-0.38c-0.86 0-1.60.6-1.76 1.44L14 10"}],["path",{"d":"m22 13-0.82-0.33c-0.86-0.34-1.820.2-1.98 1.11c-0.110.7-0.72 1.22-1.43 1.22H17"}],["path",{"d":"m11 2 0.330.82c0.340.86-0.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{"d":"M11 13c1.93 1.93 2.83 4.17 2 5-0.830.83-3.07-0.07-5-2-1.93-1.93-2.83-4.17-2-5 0.83-0.83 3.070.07 5 2Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPartyPopper;
