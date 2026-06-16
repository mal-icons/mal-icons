import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-add-location-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAddLocationAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q17 0 32.5 1.5T544-874v62q-15-4-31-6t-33-2q-109.42 0-184.71 75.11Q220-669.79 220-552q0 75 65 173.5T480-159q133-121 196.5-219.5T740-552q0-8-0.5-16t-1.5-16h61q1 8 1 16v16q0 100-79.5 217.5T480-80Zm0.09-410Q509-490 529.5-510.59q20.5-20.59 20.5-49.5Q550-589 529.41-609.5q-20.59-20.5-49.5-20.5Q451-630 430.5-609.41q-20.5 20.59-20.5 49.5Q410-531 430.59-510.5q20.59 20.5 49.5 20.5ZM480-560Zm252-84h60v-128h128v-60H792v-128h-60v128H604v60h128v128Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAddLocationAlt;
