import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mineral-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMineralHeart {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M182.34 19.91L28.78 173.47 255.63 487.5 481.94 174 328.38 20.47l-72.75 72.75-73.28-73.31zm-0.94 27.75L188 54.28l67.63 67.63L323.25 54.28l6.63-6.62 6.59 6.63L452.56 170.38l5.63 5.63-4.66 6.44-190.31 263.78-7.59 10.5-7.56-10.5L57.72 182.44 53.06 176l5.62-5.62L174.78 54.28l6.63-6.62zm0 26.44L77.53 177.97l178.1 246.81L433.72 177.97 329.87 74.09l-61 60.97 66 66 6.59 6.59-6.59 6.63-78.25 78.25-6.62 6.63-6.59-6.62-78.25-78.25 13.19-13.22L250 272.72l65.06-65.03-59.41-59.41-0.030.03-6.59-6.59-67.62-67.63zm1.41 24.78l109.03 109.03-13.22 13.22-109.03-109.03 13.22-13.22zm147.97 0l81.44 81.41L399 193.5l-81.41-81.41 13.19-13.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMineralHeart;
