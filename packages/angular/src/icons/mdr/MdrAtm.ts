import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAtm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9.75c0 0.410.340.750.750.75h1.5v3.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75V10.5h1.5c0.41 0 0.75-0.340.75-0.75S13.66 9 13.25 9h-4.5c-0.41 0-0.750.34-0.750.75zM6 9H3c-0.55 0-1 0.45-1 1v4.25c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-0.75h2v0.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75V10c0-0.55-0.45-1-1-1zm-0.5 3h-2v-1.5h2V12zM21 9h-4.5c-0.55 0-1 0.45-1 1v4.25c0 0.410.340.750.750.75s0.75-0.340.75-0.75V10.5h1v2.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-2.76h1v3.76c0 0.410.340.750.750.75s0.75-0.340.75-0.75V10c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAtm;
