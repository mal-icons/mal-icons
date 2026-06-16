import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-motion-photos-paused",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMotionPhotosPaused {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M372-363h60v-235h-60v235Zm156 0h60v-235h-60v235ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-42 8-81.5t25-77.5l45 45q-8 28-13 56.48-5 28.48-5 57.52 0 142.38 98.81 241.19Q337.63-140 480-140t241.19-98.81Q820-337.62 820-480t-98.9-241.19Q622.21-820 479.71-820q-28.71 0-57.23 4.76Q393.96-810.47 366-802l-46-46q38-14 76.5-23t79.5-9q83.36 0 156.68 31.5Q706-817 760.95-763q54.95 54 87 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80ZM212.88-699Q192-699 177.5-713.62q-14.5-14.62-14.5-35.5Q163-770 177.62-784.5q14.62-14.5 35.5-14.5Q234-799 248.5-784.38q14.5 14.62 14.5 35.5Q263-728 248.38-713.5q-14.62 14.5-35.5 14.5ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMotionPhotosPaused;
