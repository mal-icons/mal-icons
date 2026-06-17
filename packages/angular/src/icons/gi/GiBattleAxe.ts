import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-battle-axe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBattleAxe {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M240.09 19.59c-56.690.36-110.88 29.05-151.59 72.34-53.43 56.81-81.95 137.91-61.03 210.09 16.33-8.8 32.76-15.99 48.94-21.37-6.33-123.16 89.25-210.92 200.03-210.34 4.26-13.36 10.27-27.31 18.13-41.87-16.32-5.43-32.74-8.36-48.97-8.78-1.83-0.05-3.67-0.07-5.5-0.06zM271.28 88.97C173.72 90.72 91.37 166.07 94.91 275.28c10.99-2.73 21.79-4.58 32.28-5.44 14.59-1.19 28.69-0.46 41.78 2.44L278.31 162.94c-5.26-12.1-8.47-25.02-9.34-38.75-0.72-11.260.14-22.98 2.59-35.22-0.090-0.19 0-0.28 0zm60.85 60.72l-16.87 16.88L345.75 197l16.81-16.81-30.44-30.5zm-37.12 23L175.63 292.06l44.63 44.56 119.31-119.31L295 172.69zm189.88 46.09c-14.47 7.81-28.32 13.81-41.59 18.060.75 111.01-87.24 206.8-210.69 200.28-5.39 16.1-12.55 32.46-21.31 48.72 72.19 20.92 153.31-7.6 210.13-61.03 57.05-53.65 88.52-130.72 63.47-206.03zm-136 15.66L240.69 342.63c3.23 13.56 4.09 28.25 2.84 43.47-0.86 10.58-2.75 21.48-5.53 32.56 109.59 3.72 185.13-79.01 186.59-176.9-12.34 2.51-24.16 3.4-35.5 2.69-14.29-0.9-27.7-4.35-40.22-10zM169.5 312.31L20.09 461.72V494H48.75l151.19-151.19-30.44-30.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBattleAxe;
