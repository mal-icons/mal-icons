import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-afterburn",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAfterburn {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M18.31 17.78v62.1L170.22 231.75 43 211.63s64.88 30.42 116.34 54.44l-47.37 23.25L279.69 355c-3.58-3.09-7.13-6.35-10.59-9.81-39.54-39.54-54.89-88.3-34.28-108.91 20.61-20.6 69.36-5.26 108.91 34.28 3.36 3.36 6.53 6.75 9.53 10.22l-64.94-167.81L265 162.19c-24.09-51.62-55.03-117.53-55.03-117.53l19.47 122.88L79.66 17.78H18.31zm425.31 243.35l-43.41 46.94-23.59 5.88-33.59-18.34-50.06 50.09 18.31 33.56-5.87 23.56-46.03 42.56 80.09 14.03 28.72 28.72 13.19-13.22-51.5-51.53L469 471.63l-48.66-140.25 52.28 52.28 13.22-13.22-27.97-27.97-14.25-81.34zM392.06 357.5c69.03 70.21 33.08 106.35-37.22 37.22l37.22-37.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAfterburn;
