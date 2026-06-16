import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-woman-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWoman2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.94 8.31a2.08 2.08 0 0 0-2.48-1.24c-0.660.17-1.180.7-1.43 1.34l-2.48 6.22c-0.270.660.22 1.370.92 1.37h2.03v5c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-5h2.03c0.71 0 1.19-0.710.93-1.37l-2.52-6.32z"}],["circle",{"cx":"12","cy":"4","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWoman2;
