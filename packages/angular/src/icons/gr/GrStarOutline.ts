import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-star-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrStarOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M12.61 16.81 12 16.34l-0.610.46L5.76 21.1l2.38-6.350.26-0.7-0.6-0.45L3 10h6.72l0.23-0.68L12 3.16l2.05 6.150.230.68H21l-4.8 3.6-0.60.450.260.7 2.38 6.35-5.64-4.3Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrStarOutline;
