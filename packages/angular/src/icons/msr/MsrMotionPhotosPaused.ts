import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-motion-photos-paused",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMotionPhotosPaused {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M402.18-363q12.83 0 21.33-8.62T432-393v-175q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T372-568v175q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63Zm156 0q12.83 0 21.33-8.62T588-393v-175q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T528-568v175q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-34 5.5-67.01Q91-580.02 102-612q4-11 15-14.5t21 2.8q10.71 6.3 15.36 18.5Q158-593 155-581q-6 25-10.5 50.15T140-480q0 142.38 98.81 241.19Q337.63-140 480-140t241.19-98.81Q820-337.62 820-480t-98.81-241.19Q622.38-820 480-820q-27.57 0-54.57 4-27 4-53.43 12-12 4-24-1t-17-16q-5-11 1-22t17-15q31-10 63-16t64-6q83 0 156.5 31.5T760.95-763q54.95 54 87 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80ZM212.88-699Q192-699 177.5-713.62q-14.5-14.62-14.5-35.5Q163-770 177.62-784.5q14.62-14.5 35.5-14.5Q234-799 248.5-784.38q14.5 14.62 14.5 35.5Q263-728 248.38-713.5q-14.62 14.5-35.5 14.5ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMotionPhotosPaused;
