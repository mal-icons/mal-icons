import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-reduce-capacity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfReduceCapacity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 4c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-0.67 0-1.310.1-1.920.280.580.550.92 1.320.92 2.15V10h5v-0.57c0-0.81-0.48-1.53-1.22-1.85zM6 6c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-0.99 0-1.930.21-2.780.58A2.01 2.01 0 0 0 2 9.43V10h5v-0.57c0-0.830.34-1.60.92-2.15zM10 4c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm6 6H8v-0.57c0-0.810.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm6 6h-8v-0.57c0-0.810.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm6 6H3v-0.57c0-0.810.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfReduceCapacity;
