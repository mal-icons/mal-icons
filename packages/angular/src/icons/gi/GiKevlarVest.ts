import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-kevlar-vest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKevlarVest {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M350.29 21.11l-36.92 85.78 39.83 17.14 36.93-85.78-39.83-17.14zm-188.360.34l-40.11 16.46 35.45 86.4 40.12-16.46-35.45-86.4zm30.9 6.35l-8.13 3.4 28.77 70.13 6.6 16.09-16.08 6.56-40.11 16.46-16.09 6.6-6.6-16.09-28.56-69.59-11.1 4.64a112.95 112.95 0 0 1-18.09 154.4v36.47h93.51v78.05H83.42v14.27h93.51v78.16H83.42v38.34c16.8 16.8 94.7 25.19 172.59 25.19 77.9 0 155.79-8.39 172.59-25.19v-38.34h-93.51V349.21h93.51V334.93h-93.54v-78.15h93.51v-36.46a112.95 112.95 0 0 1-18.09-154.4l-11.34-4.75-30 69.69-6.88 15.99-15.98-6.88-39.77-17.06-15.98-6.88 6.88-15.98 29.68-68.97-7.89-3.26a72.28 72.28 0 0 1-126.36 0zM66 274.18v43.36h93.54v-43.36H66zm286.46 0v43.36H446v-43.36h-93.54zM66 366.61v43.36h93.54v-43.36H66zm286.46 0v43.36H446v-43.36h-93.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKevlarVest;
