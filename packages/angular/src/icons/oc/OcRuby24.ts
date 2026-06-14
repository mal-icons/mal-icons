import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-ruby-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRuby24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.87 3.26A0.750.75 0 0 1 6.44 3h11.31c0.22 0 0.430.10.580.27l5 6a0.750.75 0 0 1-0.030.99l-10.75 11.5a0.750.75 0 0 1-1.1 0l-10.75-11.5a0.750.75 0 0 1-0.02-1l5.19-6Zm0.91 1.24L2.26 9.73 12 20.15l9.75-10.43L17.4 4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRuby24;
