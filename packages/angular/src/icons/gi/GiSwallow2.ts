import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-swallow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSwallow2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M139.56 22.16L68.16 385.53l98.06 105.31h161.94L425.97 385.53 353.75 22.16H139.56zm23.13 25.06c25.85 13.91 48.97 31.3 54.66 70.87l-72.03-18.62 17.37-52.25zm164.72 0l17.34 52.25-72 18.62c5.69-39.58 28.8-56.96 54.66-70.87zM159.63 151.5l12.34 72.5 33-72.5 22.66 64.22 23.31-64.22 20.16 65.59 20.78-65.59 32.72 71.66 10.72-71.66c0 0 54.78 100.04 54.78 154.16s-54.78 154.19-54.78 154.19l-12.19-73.62-31.25 73.62-19.06-58.72-21.87 58.72-27.72-58.56-18.25 58.56L170 379.44l-10.37 80.41s-54.78-100.07-54.78-154.19c0-54.11 54.78-154.16 54.78-154.16zm29.12 84.34l-11.37 28.13 47.22 10.03-35.84-38.16zm114.78 0L267.72 274l47.19-10.03-11.37-28.13zm-97.44 53.72c00-19.22 29.87-19.22 46.12 0 16.25 19.22 46.16 19.22 46.16l12.81-31.53 15.25 31.53 13.19-25.78 13.19 25.78 15.28-31.53 12.78 31.53s19.22-29.9 19.22-46.16c0-16.25-19.22-46.12-19.22-46.12l-12.78 31.53-15.97-31.53-12.5 28.25-13.19-28.25-15.25 31.53-12.81-31.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSwallow2;
