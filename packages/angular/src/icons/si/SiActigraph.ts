import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-actigraph",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiActigraph {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.19 0 0.86 24h4.15L12 4.98h0.03L18.96 24h4.18L14.190.92C13.970.37 13.44 0 12.85 0ZM12 13.71a2.47 2.47 0 0 0-2.47 2.47A2.47 2.47 0 0 0 12 18.66a2.47 2.47 0 0 0 2.47-2.47 2.47 2.47 0 0 0-2.47-2.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiActigraph;
