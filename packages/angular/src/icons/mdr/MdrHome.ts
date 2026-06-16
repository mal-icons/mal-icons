import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 19v-5h4v5c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-7h1.7c0.46 0 0.68-0.570.33-0.87L12.67 3.6c-0.38-0.34-0.96-0.34-1.34 0l-8.36 7.53c-0.340.3-0.130.870.330.87H5v7c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHome;
