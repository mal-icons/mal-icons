import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-trail-length-medium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTrailLengthMedium {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M275-280v-60h223q-21-21-36-49.5T442.04-450H200v-60h242q5-29 19.5-59.5T498-620H280v-60h360q83 0 141.5 58.5T840-480q0 83-58.5 141.5T640-280H275Zm364.77-60Q698-340 739-380.76q41-40.76 41-99Q780-538 739.24-579q-40.76-41-99-41Q582-620 541-579.23q-41 40.76-41 99Q500-422 540.77-381q40.76 41 99 41ZM120-280v-60h125v60H120Zm520-200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTrailLengthMedium;
