import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-rest-time-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRestTimeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 6V8C7.69 8 5 10.69 5 14C5 17.31 7.69 20 11 20C14.24 20 16.88 17.43 17 14.22L17 14H19C19 18.42 15.42 22 11 22C6.58 22 3 18.42 3 14C3 9.67 6.58 6 11 6ZM21 2V4L15.67 10H21V12H13V10L18.33 4H13V2H21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRestTimeLine;
