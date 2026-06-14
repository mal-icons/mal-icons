import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-quote-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcQuote24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6.25a0.750.75 0 0 1 0.75-0.75h13.5a0.750.75 0 0 1 0 1.5H3.75A0.750.75 0 0 1 3 6.25Zm5 6.06a0.750.75 0 0 1 0.75-0.75h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1-0.75-0.75Zm0 5.94a0.750.75 0 0 1 0.75-0.75h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1-0.75-0.75ZM3.75 11a0.750.75 0 0 1 0.750.75v7a0.750.75 0 0 1-1.5 0v-7a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcQuote24;
