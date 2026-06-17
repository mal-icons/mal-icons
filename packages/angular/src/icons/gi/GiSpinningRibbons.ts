import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spinning-ribbons",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpinningRibbons {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M169.03 40.1C93.14 60.82 48.49 138.92 70.61 218.02c1.86-60.04 52.69-111.23 115.96-112.48l-17.54-65.44h0zm192.82 7.58l-181.95 315.15C84.5 330.02 29.23 229.35 51.38 135.12c-67.89 114.69-33.28 255.17 73.34 323.26l-0.080.14 3.93 2.27c1.440.88 2.89 1.76 4.36 2.62l0.05-0.08 7.85 4.53 181.53-314.41c98.52 30.92 156.16 133.49 133.62 229.38 69.6-117.59 31.48-262.31-81.55-328.29l-0.170.3-12.41-7.17zm72.65 256.68c-1.86 60.04-52.69 111.23-115.96 112.48l17.54 65.44c75.89-20.72 120.54-98.82 98.42-177.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpinningRibbons;
