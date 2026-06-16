import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-house-siding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHouseSiding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 12h1.7c0.46 0 0.68-0.570.33-0.87L12.67 3.6c-0.38-0.34-0.96-0.34-1.34 0l-8.36 7.53c-0.340.3-0.130.870.330.87H5v7c0 0.550.45 1 1 1s1-0.45 1-1v-1h10v1c0 0.550.45 1 1 1s1-0.45 1-1v-7zM7.21 10h9.58l0.210.19V12H7v-1.81l0.21-0.19zm7.36-2H9.43L12 5.69 14.57 8zM7 16v-2h10v2H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHouseSiding;
