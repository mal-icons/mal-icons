import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlHeart {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M287.98 114.16c31.38 0 88.09 15.01 180.09 105.62l45.62 44.91 44.93-45.63c63.87-64.9 131.84-105.2 177.38-105.2 61.41 0 109.81 21.01 157.01 68.1 44.46 44.37 68.99 103.36 68.99 166.110.03 62.78-24.45 121.82-69.41 166.67-3.66 3.71-196.99 212.3-358.96 387.1-7.63 7.25-16.35 8.32-20.99 8.32-4.58 0-13.2-1.02-20.8-8.1-39.47-43.9-325.55-362-358.81-395.23C88.5 462.42 64 403.38 64 340.61c0.02-62.75 24.51-121.73 69.04-166.14 43.3-43.26 93.98-60.3 154.94-60.3zm0-64c-76.53 0-144 22.9-200.18 79.01-117.07 116.77-117.07 306.13 0 422.96 33.42 33.44 357.86 394.34 357.86 394.34 18.48 18.5 42.75 27.68 66.96 27.68 24.23 0 48.4-9.18 66.91-27.68 0 0 354.88-383.02 358.66-386.85 117.04-116.88 117.04-306.24 0-423.01-58.11-58-123.02-86.78-202.21-86.78-75.65 0-160 60.32-223.01 124.32C447.98 110.16 366.24 50.16 287.98 50.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlHeart;
