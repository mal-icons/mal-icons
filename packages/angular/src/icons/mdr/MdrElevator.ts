import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-elevator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrElevator {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM8.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm2.5 7c0 0.55-0.45 1-1 1v3c0 0.55-0.45 1-1 1H8c-0.55 0-1-0.45-1-1v-3c-0.55 0-1-0.45-1-1v-1.5c0-1.10.9-2 2-2h1c1.1 0 2 0.9 2 2V13zm6.520.76-1.6 2.56c-0.20.31-0.650.31-0.85 0l-1.6-2.56c-0.2-0.330.04-0.760.43-0.76h3.2c0.39 0 0.630.430.420.76zM17.1 11h-3.2c-0.39 0-0.63-0.43-0.42-0.77l1.6-2.56c0.2-0.310.65-0.310.85 0l1.6 2.56c0.20.34-0.040.77-0.430.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrElevator;
