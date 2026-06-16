import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-kebab-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKebabDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.75 13v1h0.75a2.5 2.5 0 0 1 0 5h-0.75v3.25c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V19H5.5a2.5 2.5 0 0 1 0-5h0.75v-1H4c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h2.25V7H5.5a2.5 2.5 0 0 1 0-5h0.75v-0.25c0-0.410.34-0.750.75-0.75s0.750.340.750.75V2h0.75a2.5 2.5 0 0 1 0 5h-0.75v1H10c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1H7.75zm10 0v1h0.75a2.5 2.5 0 0 1 0 5h-0.75v3.25c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V19h-0.75a2.5 2.5 0 0 1 0-5h0.75v-1H14c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h2.25V7h-0.75a2.5 2.5 0 0 1 0-5h0.75v-0.25c0-0.410.34-0.750.75-0.75s0.750.340.750.75V2h0.75a2.5 2.5 0 0 1 0 5h-0.75v1H20c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1h-2.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKebabDining;
