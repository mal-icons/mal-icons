import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-add-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAddLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 7c0-0.55-0.44-1-1-1-0.55 0-1 0.44-1 1v2H9c-0.55 0-1 0.44-1 1 0 0.550.44 1 1 1h2v2c0 0.550.44 1 1 1 0.55 0 1-0.44 1-1v-2h2c0.55 0 1-0.44 1-1 0-0.55-0.44-1-1-1h-2V7zm-1-5c4.2 0 8 3.22 8 8.2 0 3.18-2.45 6.92-7.34 11.23-0.380.33-0.950.33-1.33 0C6.45 17.12 4 13.38 4 10.2 4 5.22 7.8 2 12 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAddLocation;
