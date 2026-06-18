import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-playerdotme",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPlayerdotme {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.98 0a8.96 8.96 0 0 0-8.96 8.96v0.36C3.28 15.83 10.08 24 10.08 24V13.21c-1.64-0.75-2.76-2.37-2.76-4.25a4.66 4.66 0 1 1 6.15 4.42l-0.030.01v4.43c4.3-0.71 7.53-4.4 7.53-8.85A8.96 8.96 0 0 0 12.020h-0.040z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPlayerdotme;
