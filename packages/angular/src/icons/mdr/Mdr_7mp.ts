import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-7mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdr_7mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 14h1.5v1.5H15z"}],["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-6.5 14.75c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V14h-1v2.25c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V14h-1v3.75c0 0.41-0.340.75-0.750.75S6 18.16 6 17.75V13.5c0-0.550.45-1 1-1h4.5c0.55 0 1 0.45 1 1v4.25zm-0.12-6.25c-0.56 0-0.97-0.54-0.8-1.08L12.62 7h-1.87c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75h2.75c0.67 0 1.150.650.96 1.29l-1.28 4.12c-0.110.35-0.430.59-0.80.59zM18 16c0 0.55-0.45 1-1 1h-2v0.75c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V13.5c0-0.550.45-1 1-1H17c0.55 0 1 0.45 1 1V16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdr_7mp;
