import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-face-frown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiFaceFrown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M15.18 16.32A4.49 4.49 0 0 0 12.02 15a4.49 4.49 0 0 0-3.2 1.32M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 0.41-0.170.75-0.370.75S9 10.16 9 9.75 9.17 9 9.38 9s0.380.340.380.75Zm-0.37 0h0.01v0.02h-0.01V9.75Zm5.63 0c0 0.41-0.170.75-0.370.75s-0.37-0.34-0.37-0.750.17-0.750.38-0.750.380.340.380.75Zm-0.37 0h0.01v0.02h-0.01V9.75Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiFaceFrown;
