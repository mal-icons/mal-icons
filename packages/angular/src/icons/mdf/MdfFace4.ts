import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-face-4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfFace4 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2c-0.96 0-1.880.14-2.750.39A4.99 4.99 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.80.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-0.050.01-0.10.01-0.15 2.6-0.98 4.68-2.99 5.74-5.55a9.94 9.94 0 0 0 9.92 3.46c0.210.710.33 1.460.33 2.24 0 4.41-3.59 8-8 8z"}],["circle",{"cx":"9","cy":"13","r":"1.25"}],["circle",{"cx":"15","cy":"13","r":"1.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfFace4;
