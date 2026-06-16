import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-camera-outdoor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCameraOutdoor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M510-210q-14 0-24.5-10.5T475-245v-170q0-14 10.5-24.5T510-450h175q14 0 24.5 10.5T720-415v55l58-33q7.59-5 14.79-0.5Q800-389 800-380v100q0 8.61-7 13.3-7 4.7-15-0.3l-58-33v55q0 14-10.5 24.5T685-210H510Zm-350 30v-390q0-14.25 6.38-27T184-618l260-195q15.68-12 35.84-12Q500-825 516-813l260 195q11.25 8.25 17.63 21T800-570v90h-60v-90L480-765 220-570v390h550q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T770-120H220q-24.75 0-42.37-17.62T160-180Zm320-292Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCameraOutdoor;
