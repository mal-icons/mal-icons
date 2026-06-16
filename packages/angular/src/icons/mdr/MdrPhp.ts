import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-php",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPhp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 10.5h-2v1h2v-1zm13.5 0h-2v1h2v-1zm-7 2h-2v1.75c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75v-4.5c0-0.410.34-0.750.75-0.75s0.750.340.750.75V11h2V9.75c0-0.410.34-0.750.75-0.75s0.750.340.750.75v4.5c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V12.5zm5 1.75c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V10c0-0.550.45-1 1-1H20c0.83 0 1.50.68 1.5 1.5v1c0 0.82-0.67 1.5-1.5 1.5h-2v1.25zM3 10c0-0.550.45-1 1-1h2.5c0.83 0 1.50.68 1.5 1.5v1c0 0.82-0.67 1.5-1.5 1.5h-2v1.25c0 0.41-0.340.75-0.750.75S3 14.66 3 14.25V10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPhp;
