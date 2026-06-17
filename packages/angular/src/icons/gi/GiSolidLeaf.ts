import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-solid-leaf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSolidLeaf {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M461.6 17.7C271.15 128.45-109.41-4.19 66.28 350.89c3.07 5.77 6.62 11.16 10.53 16.29-29.89 33.1-51.12 70.8-57.12 114.55 5.26 3.38 14.59 7.46 26.88 9.92 13.06 2.61 29.48 3.52 47.92 1.71-11.48-36.04-7.77-70.23 5.84-101.04 5.5 6.54 10.28 10.23 14.78 13.01C581.5 693.82 499.6 120.79 461.6 17.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSolidLeaf;
