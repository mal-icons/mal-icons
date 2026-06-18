import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-abbott",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAbbott {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.81 2.4H0v3.2h19.77V5.6a1.03 1.03 0 0 1 1.03 1.03v10.74l00.01a1.03 1.03 0 0 1-1.03 1.02H4.23c-0.57 0-1.03-0.46-1.03-1.03v-4.34c0-0.570.46-1.03 1.03-1.03H17.6V8.8H3.19A3.19 3.19 0 0 0 0 11.99v6.42A3.19 3.19 0 0 0 3.19 21.6h17.62A3.19 3.19 0 0 0 24 18.41V5.59A3.19 3.19 0 0 0 20.81 2.4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAbbott;
