import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-repeat-one-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRepeatOneOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 1H3c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm-2 17c0 0.55-0.45 1-1 1H7v1.79a0.50.5 0 0 1-0.850.36l-2.79-2.79c-0.2-0.2-0.2-0.51 0-0.71l2.79-2.79c0.31-0.320.85-0.10.850.35V17h10v-3c0-0.550.45-1 1-1s1 0.45 1 1v4zm-8.25-7.5c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75h1.5c0.41 0 0.750.340.750.75v4.5c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V10.5h-0.75zm9.89-4.15-2.79 2.79c-0.310.32-0.850.1-0.85-0.35V7H7v3c0 0.55-0.45 1-1 1s-1-0.45-1-1V6c0-0.550.45-1 1-1h11V3.21a0.50.5 0 0 1 0.85-0.36l2.79 2.79c0.20.20.20.51 0 0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRepeatOneOn;
