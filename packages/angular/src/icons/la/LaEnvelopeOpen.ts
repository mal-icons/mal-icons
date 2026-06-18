import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-envelope-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaEnvelopeOpen {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 L 15.47 3.34 L 3.47 11.16 L 3 11.47 L 3 29 L 29 29 L 29 11.47 L 28.53 11.16 L 16.53 3.34 Z M 16 5.38 L 26.19 12 L 16 18.59 L 5.81 12 Z M 5 13.84 L 15.47 20.63 L 16 20.97 L 16.53 20.63 L 27 13.84 L 27 27 L 5 27 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaEnvelopeOpen;
