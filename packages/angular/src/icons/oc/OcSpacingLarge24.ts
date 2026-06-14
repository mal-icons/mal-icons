import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-spacing-large-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSpacingLarge24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.25 3H3.75a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5Zm-4 8h-8.5a0.750.75 0 0 0 0 1.5h8.5a0.750.75 0 0 0 0-1.5Zm4 8H3.75a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSpacingLarge24;
