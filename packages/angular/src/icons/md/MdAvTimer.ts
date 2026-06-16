import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-av-timer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdAvTimer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 17c0 0.550.45 1 1 1s1-0.45 1-1-0.45-1-1-1-1 0.45-1 1zm0-14v4h2V5.08c3.390.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.680.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v0.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18h-1zm7 9c0-0.55-0.45-1-1-1s-1 0.45-1 1 0.45 1 1 1 1-0.45 1-1zM6 12c0 0.550.45 1 1 1s1-0.45 1-1-0.45-1-1-1-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdAvTimer;
