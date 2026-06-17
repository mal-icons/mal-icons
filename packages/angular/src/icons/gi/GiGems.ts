import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-gems",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiGems {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M303.2 19.34l-161.97 93.51 93.51 161.97 161.97-93.51-4.67-8.09-4.87-8.44-4.13-7.54-0.190.07-79.65-137.96zm-20.62 33.49l-50.27 90.14c-19.18-7.69-37.89-17.28-56.16-28.69l106.44-61.45zm19.91 2.66l63.24 109.53c-40.57 2.1-78.99-3.29-115.66-15.54l52.42-93.99zm-251.61 25.68L23.03 167.99l74.3 51.12 27.85-86.82-5.72-3.94-68.58-47.19zm10.12 29.65l32.3 22.22-44.23 14.99 11.94-37.21zm385.84 22.33l-46.14 17.42 9.06 16.56 20.17-7.61 2.99 43.46-39.94 15.08-0.88-12.75-18.02 10.4 1.98 28.71 76.46-28.86-5.67-82.4zm-270.55 3.05c31.9 18.62 65.32 32.12 100.27 39.96l-39.52 65.25L176.29 136.19zm-76.6 14.41l-12.47 38.86-33.73-23.21 46.2-15.66zm196.44 29.32c19.03 3.07 38.5 4.48 58.4 4.16l-93.67 54.08 35.27-58.24zM21.19 224.74l1.96 14.34 21.67 158.52 167.03 49.48-1.99-14.59-23.52-12.46L79.99 388.53l59.56-26.1 34.4-54.53 6.94 50.77 16.08-20.33-8.77-64.11-167.02-49.49zm22.44 26.14l121.5 36-38.31 60.73-66 28.92-17.18-125.65zm313.06 5.21l-88.91 23.82-1.92 2.4-89.27 111.59 197.37 102.96 118.66-187.66-135.93-53.12zm-13.6 22.99l31.3 55.32-86.09 22.67 2.51-63.98 52.28-14.01zm21.580.19l88.18 34.46-59.78 15.74-28.4-50.2zm-93.03 25.73l-2.23 57.04-54.98 14.48 57.21-71.52zm184.31 27.23l-73.54 116.31 13.94-100.61 59.61-15.7zm-79.18 20.86L362.76 454.11l-67.34-79.59 81.34-21.42zM275.4 379.79l67.53 79.82-124.32-64.86 56.79-14.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiGems;
