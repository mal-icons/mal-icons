import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-lens",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLens {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.26 3.5H3.5v4.26l3.75 4.72ZM3.5 8.96v7.13h5.67ZM19.55 3.5H10.02L8.87 8.64Zm-0.9 17H20.5v-8.4l-4.32-2.1Zm-5.79-12.95 7.65 3.72v-7.4ZM3.5 16.83V20.5h6.88l2.88-3.67zm7.83 3.68h6.55l-1.51-6.43zM0 0h24v24H0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLens;
