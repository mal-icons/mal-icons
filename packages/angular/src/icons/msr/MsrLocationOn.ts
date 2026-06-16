import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-location-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocationOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.89Q589.42-820 480-820t-184.71 75.11Q220-669.79 220-552q0 75 65 173.5T480-159Zm-0.25 59q-10.75 0-21.25-3.5T440-115q-42-38-91-87.5T258-309q-42-57-70-119t-28-124q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 62-28 124t-70 119q-42 57-91 106.5T520-115q-8 8-18.75 11.5t-21.5 3.5Zm0.25-460Zm0.09 70Q509-490 529.5-510.59q20.5-20.59 20.5-49.5Q550-589 529.41-609.5q-20.59-20.5-49.5-20.5Q451-630 430.5-609.41q-20.5 20.59-20.5 49.5Q410-531 430.59-510.5q20.59 20.5 49.5 20.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocationOn;
