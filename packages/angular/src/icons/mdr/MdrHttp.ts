import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-http",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHttp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.5 11h-2V9.75c0-0.41-0.34-0.75-0.75-0.75S1 9.34 1 9.75v4.5c0 0.410.340.750.750.75s0.75-0.340.75-0.75V12.5h2v1.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-4.5C6 9.34 5.66 9 5.25 9s-0.750.34-0.750.75V11zm3.25-0.5h0.75v3.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75V10.5h0.75c0.41 0 0.75-0.340.75-0.75S11.16 9 10.75 9h-3c-0.41 0-0.750.34-0.750.75s0.340.750.750.75zm5.5 0H14v3.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75V10.5h0.75c0.41 0 0.75-0.340.75-0.75S16.66 9 16.25 9h-3c-0.41 0-0.750.34-0.750.75s0.340.750.750.75zM21.5 9H19c-0.55 0-1 0.45-1 1v4.25c0 0.410.340.750.750.75s0.75-0.340.75-0.75V13h2c0.83 0 1.5-0.68 1.5-1.5v-1c0-0.82-0.67-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHttp;
