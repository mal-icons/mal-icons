import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-r-mobiledata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRMobiledata {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.8 7.20.65 1.52A0.920.92 0 0 1 7.61 10c-0.37 0-0.7-0.22-0.85-0.56l-0.89-2.11H4v1.75c0 0.51-0.410.92-0.920.92h-0.16C2.41 10 2 9.59 2 9.08V3c0-0.550.45-1 1-1h4c1.1 0 2 0.9 2 2v1.33c0 0.8-0.53 1.54-1.2 1.87zM7 4H4v1.33h3V4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRMobiledata;
