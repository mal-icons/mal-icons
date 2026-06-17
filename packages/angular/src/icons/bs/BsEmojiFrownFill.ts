import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-frown-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiFrownFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.33 6.55 8 6 8s-1-0.67-1-1.5S5.45 5 6 5s1 0.67 1 1.5m-2.71 5.93a0.50.5 0 0 1-0.18-0.68A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.9 2.250.50.5 0 0 1-0.870.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.03 1.750.50.5 0 0 1-0.680.18M10 8c-0.55 0-1-0.67-1-1.5S9.45 5 10 5s1 0.67 1 1.5S10.55 8 10 8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiFrownFill;
