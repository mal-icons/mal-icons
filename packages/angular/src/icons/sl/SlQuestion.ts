import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-question",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlQuestion {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512 0C229.23 0 0 229.23 0 512c0 282.78 229.23 512 512 512 282.78 0 512.02-229.22 512.02-512C1024.02 229.23 794.79 0 512 0zm0 961.01c-247.02 0-448-201.98-448-449.01 0-247.02 200.98-448 448-448s448.02 200.98 448.02 448S759.03 961.01 512 961.01zm-47.06-160.53h80.51v-81.25h-80.51zm46.11-576.94c-46.88 0-85.5 12.64-115.84 37.89-30.34 25.26-45.09 75.86-44.34 117.78l1.18 2.34h73.44c0-25.01 8.34-60.94 25.01-73.84 16.66-12.88 36.85-19.33 60.56-19.33 27.33 0 48.34 7.42 63.07 22.27 14.72 14.85 22.06 36.08 22.06 63.66 0 23.18-5.44 42.98-16.37 59.38-10.96 16.4-29.33 39.84-55.09 70.32-26.58 23.97-42.99 43.23-49.23 57.81-6.26 14.59-9.5 40.77-9.74 78.51h76.96c0-23.68 1.5-41.14 4.5-52.34 2.98-11.18 11.5-23.82 25.57-37.89 30.22-29.15 54.5-57.66 72.88-85.55 18.34-27.86 27.52-58.59 27.52-92.19 0-46.88-14.18-83.41-42.58-109.57-28.42-26.18-68.27-39.25-119.57-39.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlQuestion;
