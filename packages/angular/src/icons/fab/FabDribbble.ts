import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-dribbble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabDribbble {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256 8C119.25 8 8 119.25 8 256s111.25 248 248 248 248-111.25 248-248S392.75 8 256 8zm163.97 114.37c29.5 36.05 47.37 81.96 47.84 131.96-6.98-1.48-77.02-15.68-147.5-6.82-5.75-14.04-11.18-26.39-18.62-41.61 78.32-31.98 113.82-77.48 118.28-83.52zM396.42 97.87c-3.81 5.43-35.7 48.29-111.02 76.52-34.71-63.78-73.18-116.17-79.04-124.01 67.18-16.19 137.97 1.27 190.06 47.49zm-230.48-33.25c5.59 7.66 43.44 60.12 78.54 122.51-99.09 26.31-186.36 25.93-195.83 25.81C62.38 147.21 106.68 92.57 165.94 64.62zM44.17 256.32c0-2.170.04-4.320.11-6.47 9.270.19 111.92 1.51 217.71-30.15 6.06 11.87 11.86 23.92 17.17 35.95-76.6 21.58-146.19 83.53-180.53 142.31C64.79 360.41 44.17 310.73 44.17 256.32zm81.81 167.11c22.13-45.23 82.18-103.62 167.58-132.76 29.74 77.28 42.04 142.05 45.19 160.64-68.11 29.01-150.01 21.05-212.77-27.88zm248.38 8.49c-2.17-12.89-13.45-74.9-41.15-151.03 66.38-10.63 124.7 6.77 131.95 9.06-9.44 58.94-43.27 109.84-90.79 141.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabDribbble;
