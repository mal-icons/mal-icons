import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jira",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJira {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.57 11.51H0a5.22 5.22 0 0 0 5.23 5.22h2.13v2.06A5.22 5.22 0 0 0 12.58 24V12.52a1 1 0 0 0-1-1zm5.72-5.76H5.74a5.22 5.22 0 0 0 5.22 5.21h2.13v2.06a5.22 5.22 0 0 0 5.22 5.21V6.76a1 1 0 0 0-1-1zM23.01 0H11.46a5.22 5.22 0 0 0 5.22 5.22h2.13v2.06A5.22 5.22 0 0 0 24 12.48V1A1 1 0 0 0 23.01 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJira;
