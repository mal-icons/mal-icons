import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-quote-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcQuote16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 2.5h10.5a0.750.75 0 0 1 0 1.5H1.75a0.750.75 0 0 1 0-1.5Zm4 5h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1 0-1.5Zm0 5h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1 0-1.5ZM2.5 7.75v6a0.750.75 0 0 1-1.5 0v-6a0.750.75 0 0 1 1.5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcQuote16;
