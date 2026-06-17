import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-boxing-ring",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBoxingRing {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M80 16H48l96 176c10.6 18.9 174.6 14.1 176 0zm377 184.9l-0.1 158H487l0.1-158zm-432.010.2v158l30-0.1V201.1zM73 217.5v18.1c125.7 12.5 240.5 12.5 366 0.1v-18c-125.8 12.5-240.1 12.5-366-0.2zm0 48.1v18.1c125.5 12.5 240.4 12.4 366 0v-18.1c-125.8 12.6-240.1 12.6-366 0zM439 313c-126.3 13.1-240.6 13.3-366 1.2v18.2c125.1 12 240.1 11.5 366-1.3zM25 377v110l462 0.10.1-110.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBoxingRing;
