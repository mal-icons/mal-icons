import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-person-add-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPersonAddDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.48 11.95c0.170.020.340.050.520.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 0.180.030.350.050.52l3.43 3.43zm2.21 2.21 5.74 5.74c0.33-0.170.57-0.50.57-0.9v-1c0-2.14-3.56-3.5-6.31-3.84zM2.12 2.42A11 0 1 0 0.71 3.83L4 7.12V10H2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v1c0 0.550.45 1 1 1h8.88l3.29 3.29a11 0 1 0 1.41-1.41L2.12 2.42zM6 10v-0.88l0.880.88H6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPersonAddDisabled;
