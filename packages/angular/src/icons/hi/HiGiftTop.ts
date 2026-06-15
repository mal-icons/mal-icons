import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-gift-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiGiftTop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 3.75v16.5M2.25 12h19.5M6.38 17.25a4.88 4.88 0 0 0 4.88-4.87V12m6.38 5.25a4.88 4.88 0 0 1-4.87-4.87V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.62-9.44c-1.41 1.41-4.24 1.06-4.24 1.06s-0.35-2.83 1.06-4.24a2.25 2.25 0 0 1 3.18 3.18ZM10.77 7.63c1.41 1.41 1.06 4.24 1.06 4.24S9 12.22 7.59 10.81a2.25 2.25 0 1 1 3.18-3.18Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiGiftTop;
