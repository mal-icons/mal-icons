import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flask-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlaskFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 2V4H15V7.24C15 8.4 15.25 9.54 15.74 10.6L20.02 19.87C20.36 20.62 20.04 21.51 19.28 21.86C19.09 21.95 18.87 22 18.66 22H5.34C4.52 22 3.84 21.33 3.84 20.5C3.84 20.28 3.89 20.07 3.98 19.87L8.26 10.6C8.75 9.54 9 8.4 9 7.24V4H8V2H16ZM13 4H11V8H13V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlaskFill;
