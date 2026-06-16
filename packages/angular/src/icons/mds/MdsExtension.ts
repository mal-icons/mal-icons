import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-extension",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsExtension {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.36 11H19V5h-6V3.64c0-1.31-0.94-2.5-2.24-2.63A2.5 2.5 0 0 0 8 3.5V5H2.01v5.8H3.4c1.31 0 2.50.88 2.75 2.160.33 1.72-0.98 3.24-2.65 3.24H2V22h5.8v-1.4c0-1.310.88-2.5 2.16-2.75 1.72-0.33 3.240.98 3.24 2.65V22H19v-6h1.5a2.5 2.5 0 0 0 2.49-2.76c-0.13-1.3-1.33-2.24-2.63-2.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsExtension;
