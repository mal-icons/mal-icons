import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-repeat-one",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRepeatOne {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7h10v1.79c0 0.450.540.670.850.35l2.79-2.79c0.2-0.20.2-0.51 0-0.71l-2.79-2.79a0.50.5 0 0 0-0.850.36V5H6c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1s1-0.45 1-1V7zm10 10H7v-1.79c0-0.45-0.54-0.67-0.85-0.35l-2.79 2.79c-0.20.2-0.20.51 0 0.71l2.79 2.79a0.50.5 0 0 0 0.85-0.36V19h11c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1s-1 0.45-1 1v3zm-4-2.75V9.81c0-0.45-0.36-0.81-0.81-0.81a0.740.74 0 0 0-0.360.09l-1.490.74a0.610.61 0 0 0-0.340.55c0 0.340.280.620.620.62h0.88v3.25c0 0.410.340.750.750.75s0.75-0.340.75-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRepeatOne;
