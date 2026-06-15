import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.46 3.08 1.41-0.51m14.1-5.13 1.41-0.51M5.11 17.79l1.15-0.96m11.49-9.64 1.15-0.96M7.5 19.8l0.75-1.3m7.5-12.990.75-1.3m-6.06 16.660.26-1.48m2.61-14.770.26-1.48m0 17.73-0.26-1.48M10.7 4.61l-0.26-1.48M16.5 19.79l-0.75-1.3M7.5 4.21 12 12m6.89 5.79-1.15-0.96M6.26 7.18l-1.15-0.96m15.35 8.86-1.41-0.51M4.95 9.44l-1.41-0.51M12 12l-3.75 6.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiCog;
