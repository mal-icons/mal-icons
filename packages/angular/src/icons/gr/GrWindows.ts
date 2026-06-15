import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-windows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrWindows {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M23.92,0 L10.96,1.89 L10.96,11.48 L23.92,11.38 L23.92,0 Z M0,3.4 L0.01,11.55 L9.78,11.5 L9.78,2.07 L0,3.4 Z M0.01,20.68 L9.78,22.03 L9.77,12.59 L0.01,12.52 L0.01,20.68 Z M10.96,22.17 L23.92,24 L23.93,12.67 L10.94,12.65 L10.96,22.17 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrWindows;
