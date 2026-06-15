import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlArrowRight {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M271.65 1023.19c-8.68 0-17.57-3.43-24.24-10.1-13.33-13.33-13.33-35.14 0-48.47L703.67 508.16 254.08 58.57c-13.33-13.33-13.33-35.15 0-48.47 13.33-13.33 35.14-13.33 48.47 0L776.38 483.93c13.33 13.33 13.33 35.14 0 48.47l-480.49 480.69c-6.66 6.67-15.55 10.1-24.24 10.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlArrowRight;
