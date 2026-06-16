import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-event-repeat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEventRepeat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12V6c0-1.1-0.9-2-2-2h-1V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H8V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h7v-2H5V10h14v2h2zm-5.87 8c-0.55 0-0.910.56-0.68 1.06A4.99 4.99 0 0 0 19 24c2.76 0 5-2.24 5-5s-2.24-5-5-5c-1.36 0-2.60.55-3.5 1.43v-0.68c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.75V17c0 0.550.45 1 1 1h2.25c0.41 0 0.75-0.340.75-0.75s-0.34-0.75-0.75-0.75h-0.7c0.63-0.62 1.5-1 2.45-1 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.42 0-2.64-0.85-3.19-2.06a0.750.75 0 0 0-0.68-0.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEventRepeat;
