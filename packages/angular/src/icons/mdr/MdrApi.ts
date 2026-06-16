import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-api",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrApi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 13c-0.560.56-1.450.56-2 0.01V13c-0.55-0.55-0.55-1.44 0-1.99V11c0.55-0.55 1.44-0.55 1.99 0H13c0.550.550.55 1.45 0 2zm-1-7 2.12 2.12 2.5-2.5-3.2-3.2c-0.78-0.78-2.05-0.78-2.83 0l-3.2 3.2 2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5-3.2 3.2c-0.780.78-0.78 2.05 0 2.83l3.2 3.2 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5 3.2-3.2c0.78-0.780.78-2.05 0-2.83l-3.2-3.2-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5 3.2 3.2c0.780.78 2.050.78 2.83 0l3.2-3.2-2.5-2.5L12 18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrApi;
