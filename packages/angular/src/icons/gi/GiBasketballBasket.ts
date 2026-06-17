import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-basketball-basket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBasketballBasket {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 23C140.57 23 73.01 90.16 24.28 171.37L23 173.51V309.85l142.27 63.23C175.35 408.09 183 436.35 183 480h18c0-2.38-0.03-4.7-0.07-7h22.3l0.41 7.48 17.97-0.97-0.35-6.52h29.14l-0.37 6.5 17.97 1.010.42-7.5h22.64c-0.04 2.3-0.07 4.62-0.07 7h18c0-43.26 7.51-72.3 17.45-106.8L489 309.85V173.51l-1.28-2.14C438.99 90.16 371.43 23 256 23zm0 18c107.61 0 167.91 59.79 215 137.56V298.15l-118.03 52.46c1.95-6.84 3.95-14.02 5.96-21.61H384v-34h-23V167H151v128h-23v34h25.02c1.97 7.6 3.91 14.75 5.81 21.52L41 298.15V178.56C88.09 100.79 148.39 41 256 41zm-87 144h174v110H169V185zm2.61 144h43.86l1.62 30h-37.11c-2.71-9.4-5.53-19.27-8.36-30zm61.89 0h44.98l-1.68 30h-41.68l-1.62-30zm63.01 0h43.8c-2.88 10.63-5.75 20.51-8.51 30h-36.98l1.68-30zm-111.38 48h32.93l1.62 30h-26.76c-2.27-10.02-4.92-19.86-7.79-30zm50.95 0h39.7l-1.68 30h-36.4l-1.62-30zm57.73 0h32.83c-2.83 10.07-5.44 19.92-7.68 30h-26.82l1.68-30zm-97.31 48h24.14l1.62 30h-22.14c-0.76-10.67-2-20.55-3.62-30zm42.17 0h34.42l-1.68 30h-31.12l-1.62-30zm52.45 0h24.31c-1.59 9.48-2.81 19.37-3.56 30h-22.43l1.69-30z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBasketballBasket;
