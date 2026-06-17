import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-shadows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsShadows {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 7a0.50.5 0 0 1 0-1h3.5q0.05 0 0.090.01A7 7 0 0 0 12.9 13H8a0.50.5 0 0 1 0-1h5.75q0.33-0.470.58-1H8a0.50.5 0 0 1 0-1h6.71a7 7 0 0 0 0.22-1H8a0.50.5 0 0 1 0-1h7q0-0.51-0.07-1H8a0.50.5 0 0 1 0-1h6.71a7 7 0 0 0-0.38-1H8a0.50.5 0 0 1 0-1h5.75a7 7 0 0 0-0.85-1H8a0.50.5 0 0 1 0-1h3.61A7 7 0 1 0 8 15"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsShadows;
