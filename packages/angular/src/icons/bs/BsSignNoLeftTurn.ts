import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sign-no-left-turn",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSignNoLeftTurn {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m3.42 5.29 5.99-5.99c0.360.270.60.710.6 1.2V11h1V8.5c0-0.76-0.34-1.45-0.88-1.91l3.18-3.18a7 7 0 0 1-9.87 9.87Zm-0.71-0.71a7 7 0 0 1 9.87-9.87L9.2 6.1A2.5 2.5 0 0 0 8.5 6H7V4.53a0.250.25 0 0 0-0.41-0.19L4.23 6.31a0.250.25 0 0 0 0 0.38l2.36 1.970.030.02zM8.29 7 7 8.29V7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSignNoLeftTurn;
