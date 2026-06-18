import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-clyp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiClyp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17.96a1.14 1.14 0 1-1.14-1.14V7.23a1.14 1.14 0 12.28 0v9.59c0 0.63-0.51 1.13-1.14 1.13m7.44 2.44a1.14 1.14 0 1-1.14-1.14V4.8a1.14 1.14 0 12.28 0v14.47c0 0.63-0.51 1.14-1.14 1.14M15.72 24a1.14 1.14 0 1-1.14-1.14V1.14a1.14 1.14 0 12.28 0v21.73c0 0.63-0.51 1.14-1.14 1.14m-7.44-3.16a1.14 1.14 0 1-1.14-1.14V4.3a1.14 1.14 0 12.28 0v15.41c0 0.63-0.51 1.14-1.14 1.14m-3.72-4.99a1.14 1.14 0 1-1.14-1.13V9.29a1.14 1.14 0 12.28 0v5.43c0 0.63-0.51 1.14-1.14 1.14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiClyp;
