import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-emoji-objects",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEmojiObjects {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3c-0.42 0-0.850.04-1.280.11-2.810.5-5.08 2.75-5.6 5.55-0.48 2.610.48 5.01 2.22 6.560.430.380.660.910.66 1.47V21h2.28a1.98 1.98 0 0 0 3.44 0H16v-4.31c0-0.550.22-1.090.64-1.46A6.96 6.96 0 0 0 19 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l0.71-0.71L12 10.5l1.62-1.620.710.71-1.83 1.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEmojiObjects;
