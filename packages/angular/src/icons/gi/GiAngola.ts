import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-angola",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAngola {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M82.42 23.22L51.69 46.46l13.49 25.49 32.23-34.49zM211.4 74.2L66.68 82.44l42.72 84.76-16.48 15.7 32.18 84-42.68 63-26.23 133.4 45.01-14.2 28.4 18 141-2.3 106.4 24 59.3-17.2-41.3-50.3V317.1l63-0.7 2.3-66.7-55.5 1.5-18.8-126-71.9-10.5-12 34.5-56.3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAngola;
