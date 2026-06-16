import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-5mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdr_5mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 14h1.5v1.5H15z"}],["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-8 6c-0.55 0-1-0.45-1-1V6.5c0-0.550.45-1 1-1h2.75c0.41 0 0.750.340.750.75s-0.340.75-0.750.75H11.5v1h2c0.55 0 1 0.45 1 1v1.5c0 0.55-0.45 1-1 1h-2.75c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75H13V9h-2zm1.5 8.75a0.750.75 0 1 1-1.5 0V14h-1v2.25a0.750.75 0 1 1-1.5 0V14h-1v3.75a0.750.75 0 1 1-1.5 0V13.5c0-0.550.45-1 1-1h4.5c0.55 0 1 0.45 1 1v4.25zM18 16c0 0.55-0.45 1-1 1h-2v0.75c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V13.5c0-0.550.45-1 1-1H17c0.55 0 1 0.45 1 1V16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdr_5mp;
