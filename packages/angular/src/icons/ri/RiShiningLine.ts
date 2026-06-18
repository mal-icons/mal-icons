import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-shining-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShiningLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 11C6.52 11 11 6.52 11 1H13C13 6.52 17.48 11 23 11V13C17.48 13 13 17.48 13 23H11C11 17.48 6.52 13 1 13V11ZM5.8 12C8.57 13.21 10.79 15.43 12 18.2C13.21 15.43 15.43 13.21 18.2 12C15.43 10.79 13.21 8.57 12 5.8C10.79 8.57 8.57 10.79 5.8 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShiningLine;
