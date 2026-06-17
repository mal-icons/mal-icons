import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-drop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDrop {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M263.84 40.34C234.1 213.2 145.59 248.03 145.59 369.22c0 60.8 60.11 105.5 118.25 105.5 59.45 0 115.94-41.8 115.94-99.53 0-116.33-85.2-162.31-115.94-334.84zm-58.28 217.09c-27.96 75.53-5.11 154.57 54.25 179.38 15.19 6.35 31.72 7.71 47.91 6.28-116.13 49.79-185.84-79.82-102.16-185.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDrop;
