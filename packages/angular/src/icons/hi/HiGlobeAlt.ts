import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-globe-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiGlobeAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 21a9 9 0 0 0 8.72-6.75M12 21a9 9 0 0 1-8.72-6.75M12 21c2.49 0 4.5-4.03 4.5-9S14.49 3 12 3m0 18c-2.48 0-4.5-4.03-4.5-9S9.52 3 12 3m0 0a9 9 0 0 1 7.84 4.58M12 3a9 9 0 0 0-7.84 4.58m15.69 0A11.95 11.95 0 0 1 12 10.5c-3 0-5.74-1.1-7.84-2.92m15.69 0A8.96 8.96 0 0 1 21 12c0 0.78-0.1 1.53-0.28 2.25m0 0A17.92 17.92 0 0 1 12 16.5c-3.16 0-6.13-0.81-8.72-2.25m0 0A9.02 9.02 0 0 1 3 12c0-1.60.42-3.11 1.16-4.42"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiGlobeAlt;
