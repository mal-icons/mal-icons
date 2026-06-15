import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlPin {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1014.85 379.66L646.69 9.65c-7.94-7.97-19.38-11.22-30.32-8.5-10.91 2.66-19.6 10.85-22.94 21.57-22.16 71.31-24.72 135.84-7.79 194.69-1.55 1.07-3.04 2.24-4.42 3.62L410.12 392.1c-55.2-25.6-114.54-39.46-173.7-39.46-37.6 0-74.46 5.57-109.57 16.47-10.69 3.34-18.88 12-21.57 22.85a32.01 32.01 0 0 0 8.37 30.29l218.98 220.38-306.16 311.04-26.62 70.13 64.37-24.88 313.36-311.04 221.82 223.26c6.07 6.13 14.29 9.44 22.69 9.44 2.53 0 5.09-0.32 7.63-0.91a32.06 32.06 0 0 0 22.94-21.6c28.98-93.23 20.48-193.34-20.34-283.12l174.7-174.74c0.62-0.62 1.06-1.33 1.63-2 26.37 7.54 53.7 11.57 82.05 11.57 35.22 0 72.56-5.05 110.98-17.01a32.01 32.01 0 0 0 21.57-22.85 32.07 32.07 0 0 0-8.4-30.26zM603.15 824.15L200.37 418.74c103.38-12.06 214.85 29.6 295.57 110.32 80.32 80.3 119.5 191.3 107.22 295.09zm-2.93-267.6c-16.83-25.73-36.47-50.18-59.02-72.75-22.46-22.46-47.01-42.26-72.96-59.33L612.37 280.37c14.7 25.57 33.66 50 57.01 73.33 23.86 23.84 49.09 43.14 75.6 58.06zM714.63 308.45c-61.54-61.54-85.25-130.13-72.69-212.88l286.91 288.4c-82.66 11.86-151.6-12.89-214.22-75.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlPin;
