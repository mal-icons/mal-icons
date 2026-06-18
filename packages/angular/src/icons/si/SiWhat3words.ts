import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-what3words",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWhat3words {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0zm13.52 6.75a0.750.75 0 0 1 0.70.99l-3 9a0.750.75 0 0 1-0.710.510.750.75 0 0 1-0.71-0.99l3-9a0.750.75 0 0 1 0.73-0.51zm-4.50a0.750.75 0 0 1 0.70.99l-3 9A0.750.75 0 0 1 6 17.25a0.750.75 0 0 1-0.71-0.99l3-9a0.750.75 0 0 1 0.73-0.51zm9 0a0.750.75 0 0 1 0.70.99l-3 9a0.750.75 0 0 1-0.710.510.750.75 0 0 1-0.71-0.99l3-9a0.750.75 0 0 1 0.73-0.51z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWhat3words;
